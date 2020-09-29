const express = require('express')
const axios = require('axios')

const router = express.Router()

router.get('/api/tickets-with-comments', async (req, res) => {
  console.log('[REQUEST] Client request tickets with comments')
  let ticketsWithComments

  try {
    console.log('[INTEGRATION] Trying to get tickets from [tickets-service]')
    const ticketResponse = await axios.get(
      `${process.env.TICKETS_SERVICE_HOST}/api/tickets`
    )

    ticketsWithComments = ticketResponse.data.tickets
    console.log(
      `Got ${
        Object.keys(ticketsWithComments).length
      } tickets from [tickets-service]`
    )
  } catch (err) {
    console.error(err)
    ticketsWithComments = {}
  }

  for (const ticketId in ticketsWithComments) {
    try {
      console.log(
        `[INTEGRATION] Trying to get comments for ticket (${ticketId}) from [comments-service]`
      )
      const response = await axios.get(
        `${process.env.COMMENTS_SERVICE_HOST}/api/tickets/${ticketId}/comments`
      )
      ticketsWithComments[ticketId].comments = response.data.comments

      console.log(
        `Got ${ticketsWithComments[ticketId].comments.length} comments from [comments-service] for ticket (${ticketId})`
      )
    } catch (err) {
      console.error(err)
      ticketsWithComments[ticketId].comments = []
    }
  }

  console.log(
    `[RESPONSE] Return ${
      Object.keys(ticketsWithComments).length
    } tickets with comments`
  )

  res.send({
    tickets: ticketsWithComments,
  })
})

exports.getTicketsWithCommentsRoute = router
