const express = require('express')
const { randomBytes } = require('crypto')

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

  res.send(commentObj)
})

exports.addCommentRoute = router
