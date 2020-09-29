const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const {
  getTicketsWithCommentsRoute,
} = require('./routes/get-tickets-with-comments')

const { TICKETS } = require('./data/tickets')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(getTicketsWithCommentsRoute)

const handleEvent = (type, data) => {
  if (type === 'ADD_TICKET') {
    console.log(`[EVENT] Received event (${type}), adding new ticket`)
    TICKETS[data.id] = data
    TICKETS[data.id].comments = []
  } else if (type === 'ADD_COMMENT') {
    console.log(`[EVENT] Received event (${type})`)
    console.log(`Searching comments for ticket (${data.ticketId})...`)
    const comments = TICKETS[data.ticketId].comments
    console.log(
      `${comments.length} comments found for ticket (${data.ticketId})`
    )
    console.log(`Adding new comment for ticket (${data.ticketId})`)
    comments.push(data)
    TICKETS[data.ticketId].comments = comments
  } else {
    console.log(
      `[EVENT] Received event (${type}), i don't care about this event, ignoring...`
    )
  }
}

app.post('/events', (req, res) => {
  const { type, data } = req.body

  handleEvent(type, data)

  res.sendStatus(200)
})

app.all('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4002, async () => {
  console.log('Tickets With Comments server listening on port 4002')

  const response = await axios.get(`${process.env.EVENT_BUS_HOST}/events`)

  for (const event of response.data.events) {
    handleEvent(event.type, event.data)
  }
})
