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


// async controller for getting an inventory item
// =============================================================================
exports.getInventoryItem = async function(req, res, next){

  // try/catch retrieve and return inventory item
  try{
    var inventoryItem = await InventoryItemService.getInventoryItem(req.params.id)
    return res.status(200).json({status: 200, data: inventoryItem, message: "Successfully Retrieved Inventory Item"})
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
    image: null//req.body.image ? new Buffer(req.body.image) : null
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


// async controller for uploading an inventory item image
// =============================================================================
exports.uploadInventoryItemImage = async function(req, res, next){

  // store image
  try{

    if (!req.body || !req.body.value || !req.body.filetype || !req.body.filename){
      return res.status(400).send("No image was uploaded")
    }

    // get id, file name, file type, and the image data string
    var id = req.params.id
    var filename = req.body.filename
    var filetype = req.body.filetype
    var encodedImageDataString = req.body.value

    // validate file type (if not png or jpeg, return error)
    if (!(filetype === "image/png" || filetype === "image/jpeg")){
      return res.status(400).send("Invalid image extension, must be png or jpeg.")
    }


    // decode image and store it
    var image = {data: new Buffer(encodedImageDataString, 'base64'), contentType: filetype}

    var storedImage = await InventoryItemService.uploadInventoryItemImage(id, image)
    return res.status(200).json({status: 200, data: {}, message: "Successfully Uploaded Image"})
  }catch (e){
    console.log("While uploading image: " + e)
    return res.status(400).json({status: 400, message: "Image Upload Failed"})
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

  var id = req.body._id
  console.log(req.body)


  // convert image data from string to buffer
  var image = req.body.image ?
    {data: new Buffer(req.body.image[0]), contentType: "image/png"}
    : null;

  // store information from request
  var inventoryItem = {
    id,
    title: req.body.title ? req.body.title : null ,
    description: req.body.description ? req.body.description : null,
    keywords: req.body.keywords ? req.body.keywords : null,
    image: image
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
