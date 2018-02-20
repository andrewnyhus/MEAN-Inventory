var InventoryItemService = require('../services/inventoryItem.service')

// save this
_this = this


// async controller for getting inventory items
// =============================================================================
exports.getInventoryItems = async function(req, res, next){

  // get query parameters if they exist
  var page = req.query.page ? req.query.page : 1
  var limit = req.query.limit ? req.query.limit : 10

  // try/catch retrieve and return inventory items
  try{
    var inventoryItems = await InventoryItemService.getInventoryItems({}, page, limit)
    return res.status(200).json({status: 200, data: inventoryItems, message: "Successfully Retrieved Inventory Items"})
  }catch(e){
    return res.status(400).json({status: 400, message: e.message})
  }

}
// =============================================================================


// async controller for create inventory item
// =============================================================================
exports.createInventoryItem = async function(req, res, next){

  // store information from the submitted form
  var inventoryItem = {
    title: req.body.title ? req.body.title : null,
    description: req.body.description ? req.body.description : null,
    keywords: req.body.keywords ? req.body.keywords : null,
    image: req.body.image ? req.body.image : null
  }

  // try/catch create and return inventory item
  try{
    var createdInventoryItem = await InventoryItemService.createInventoryItem(inventoryItem)
    return res.status(201).json({status: 201, data: createdInventoryItem, message: "Successfully Created Inventory Item"})
  }catch (e){
    return res.status(400).json({status: 400, message: "Inventory Item Failed"})
  }

}
// =============================================================================


// async controller for update inventory item
// =============================================================================
exports.updateInventoryItem = async function(req, res, next){

  // check for id
  if(!req.body._id){
    return res.status(400).json({status: 400, message: "No id present"})
  }

  var id = req.body._id;
  console.log(req.body)

  // store information from request
  var inventoryItem = {
    id,
    title: req.body.title ? req.body.title : null ,
    description: req.body.description ? req.body.description : null,
    keywords: req.body.keywords ? req.body.keywords : null,
    image: req.body.image ? req.body.image : null
  }

  // try/catch updating inventory item
  try{
    var updatedInventoryItem = await InventoryItemService.updateInventoryItem(inventoryItem)
    return res.status(200).json({status: 200, data: updatedInventoryItem, message: "Successfully Updated Inventory Item"})
  }catch (e){
    return res.status(400).json({status: 400, message: e.message})
  }

}
// =============================================================================


// async controller for delete inventory item
// =============================================================================
exports.deleteInventoryItem = async function(req, res, next){

  // store id
  var id = req.params.id

  // try/catch deleting inventory item
  try{
    var deleted = await InventoryItemService.deleteInventoryItem(id)
    return res.status(204).json({status: 204, message: "Successfully Deleted Inventory Item"})
  }catch (e){
    return res.status(400).json({status: 400, message: e.message})
  }

}
// =============================================================================
