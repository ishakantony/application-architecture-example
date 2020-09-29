const express = require('express')

const router = express.Router()

const { TICKETS } = require('../data/tickets')
const { COMMENTS } = require('../data/comments')

router.get('/api/tickets-with-comments', async (req, res) => {
  console.log('[REQUEST] Client request tickets with comments')
  const ticketsWithComments = TICKETS

  for (const ticketId in ticketsWithComments) {
    ticketsWithComments[ticketId].comments = COMMENTS.filter(
      (c) => c.ticketId === ticketId
    )
    console.log(
      `[RESPONSE] Got ${ticketsWithComments[ticketId].comments.length} comments for ticket (${ticketId})`
    )
  }

  console.log(
    `[RESPONSE] Got ${Object.keys(ticketsWithComments).length} tickets`
  )

  res.send({
    tickets: ticketsWithComments,
  })
})

exports.getTicketsWithCommentsRoute = router
