migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
