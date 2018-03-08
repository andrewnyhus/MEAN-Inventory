// get inventory item model
var InventoryItem = require('../models/inventoryItem.model')

// saving this into variable
_this = this


// asynchronous function to get inventory items
// =============================================================================
exports.getInventoryItems = async function(query, page, limit){

  // setup options for mongoose paginate
  var options = {
    page,
    limit
  }


  // try/catch for paginate promise
  try {

    var inventoryItems = await InventoryItem.paginate(query, options)
    return inventoryItems

  } catch (e) {
    throw Error('Error Paginating Inventory Items')
  }
}
// =============================================================================


// asynchronous function to get an inventory item
// =============================================================================
exports.getInventoryItem = async function(id){

  // try/catch delete inventory item
  try{
    var item = await InventoryItem.findById({_id: id})
    return item
  }catch(e){
    throw Error('Error Retrieving Inventory Item')
  }

}
// =============================================================================


// asynchronous function to create an inventory item
// =============================================================================
exports.createInventoryItem = async function(inventoryItem){

  // create mongoose object
  var newInventoryItem = new InventoryItem({
    date: new Date(),
    title: inventoryItem.title,
    description: inventoryItem.description,
    keywords: inventoryItem.keywords,
    image: inventoryItem.image
  })


  // try/catch for saving inventory item
  try{
    var savedInventoryItem = await newInventoryItem.save()
    return savedInventoryItem
  }catch(e){
    throw Error('Error Creating Inventory Item')
  }

}
// =============================================================================


// asynchronous function for uploading an inventory item
// =============================================================================
exports.uploadInventoryItemImage = async function(inventoryItemId, image){
  try{
    var item = await InventoryItem.findById({_id: inventoryItemId})
    item.image = image
    var savedItem = item.save()
    return savedItem

  }catch(e){
    throw Error('Error uploading image e: '+ e)
  }
}
// =============================================================================


// asynchronous function for deleting an inventory item
// =============================================================================
exports.deleteInventoryItemImage = async function(inventoryItemId, image){
}
// =============================================================================


// asynchronous function for replacing an inventory item
// =============================================================================
exports.replaceInventoryItemImage = async function(inventoryItemId, image){
}
// =============================================================================


// asynchronous function to update an inventory item
// =============================================================================
exports.updateInventoryItem = async function(inventoryItem){
  var id = inventoryItem.id

  // try/catch retrieving inventory item to update
  try{
    var oldInventoryItem = await InventoryItem.findById(id)
  }catch(e){
    throw console.error('Error Retrieving Inventory Item')
  }

  // return false if no object
  if(!oldInventoryItem){
    return false
  }

  console.log(oldInventoryItem)

  // update object
  oldInventoryItem.title = inventoryItem.title
  oldInventoryItem.description = inventoryItem.description
  oldInventoryItem.keywords = inventoryItem.keywords
  oldInventoryItem.image = inventoryItem.image

  console.log(oldInventoryItem)

  // try/catch save the changes to inventory item
  try{
    var savedInventoryItem = await oldInventoryItem.save()
    return savedInventoryItem
  }catch(e){
    throw Error('Error Saving Changes to Inventory Item')
  }

}
// =============================================================================


// asynchronous function to delete an inventory item
// =============================================================================
exports.deleteInventoryItem = async function(id){

  // try/catch delete inventory item
  try{
    var deleted = await InventoryItem.remove({_id: id})

    if(deleted.result.n == 0){ // if 0 docs were deleted, throw error
      throw Error('Could Not Delete Inventory Item')
    }

    return deleted
  }catch(e){
    throw Error('Error Deleting Inventory Item')
  }

}
// =============================================================================
