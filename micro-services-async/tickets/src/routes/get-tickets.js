const express = require('express')

const router = express.Router()

const { TICKETS } = require('../data/tickets')

router.get('/api/tickets', (req, res) => {
  console.log('[REQUEST] Client request tickets')
  console.log(`[RESPONSE] Return ${Object.keys(TICKETS).length} tickets`)

  res.send({
    tickets: TICKETS,
  })
})

exports.getTicketsRoute = router
