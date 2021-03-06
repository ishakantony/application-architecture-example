const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()

const events = []

app.use(bodyParser.json())

app.get('/events', (req, res) => {
  console.log(`Sent ${events.length} events to newly created service`)

  res.send({
    events,
  })
})

app.post('/events', (req, res) => {
  const event = req.body

  events.push(event)

  axios.post(`${process.env.TICKETS_SERVICE_HOST}/events`, event)
  axios.post(`${process.env.COMMENTS_SERVICE_HOST}/events`, event)
  axios.post(`${process.env.TICKETS_WITH_COMMENTS_SERVICE_HOST}/events`, event)

  console.log(`Event #${events.length + 1} (${event.type}) dispatched`)

  res.sendStatus(200)
})

app.all('*', (req, res) => {
  res.sendStatus(404)
})

app.listen(4003, () => {
  console.log('Event bus server listening on port 4003')
})
