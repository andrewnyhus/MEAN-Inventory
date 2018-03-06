var express = require('express')
var router = express.Router()
var inventoryItem = require('./api/inventoryItem.route')

// use routes
router.use('/inventoryItem', inventoryItem)

// export router
module.exports = router;
