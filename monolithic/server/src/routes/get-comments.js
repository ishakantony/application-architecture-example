const express = require('express')

const router = express.Router()

const { COMMENTS } = require('../data/comments')
const { TICKETS } = require('../data/tickets')

router.get('/api/tickets/:id/comments', (req, res) => {
  console.log('[REQUEST] Client request comments for ticket ' + req.params.id)
  const ticket = TICKETS[req.params.id]

  if (!ticket) {
    res.sendStatus(404)
    return
  }

  const comments = COMMENTS.filter((c) => c.ticketId === ticket.id)

  console.log(
    `[RESPONSE] Got ${comments.length} comments for ticket (${ticket.id})`
  )

  res.send({
    comments,
  })
})

exports.getCommentsRoute = router
