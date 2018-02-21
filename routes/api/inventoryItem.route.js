var express = require('express')
var router = express.Router()
var InventoryItemController = require('../../controllers/inventoryItem.controller')


// Map API to Controller Functions

router.get('/', InventoryItemController.getInventoryItems)
router.get('/:id', InventoryItemController.getInventoryItem)
router.post('/', InventoryItemController.createInventoryItem)
router.put('/', InventoryItemController.updateInventoryItem)
router.delete('/:id', InventoryItemController.deleteInventoryItem)

// export router
module.exports = router;
