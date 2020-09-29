const express = require('express')
const { randomBytes } = require('crypto')
const axios = require('axios')

const router = express.Router()

const { COMMENTS } = require('../data/comments')

router.post('/api/tickets/:id/comments', (req, res) => {
  console.log(
    '[REQUEST] Client wants to add a comment for ticket ' + req.params.id
  )
  const { comment } = req.body
  const id = randomBytes(4).toString('hex')

  const commentObj = {
    id,
    comment,
    ticketId: req.params.id,
  }

  COMMENTS.push(commentObj)

  console.log(`[RESPONSE] Comment added (${id}) for ticket (${req.params.id})`)

  console.log(`[EVENT] Sent event (ADD_COMMENT) to event bus`)
  axios.post(`${process.env.EVENT_BUS_HOST}/events`, {
    type: 'ADD_COMMENT',
    data: commentObj,
  })

  res.send(commentObj)
})

exports.addCommentRoute = router
