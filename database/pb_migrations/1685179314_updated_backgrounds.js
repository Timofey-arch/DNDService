migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  collection.listRule = null

  return dao.saveCollection(collection)
})
