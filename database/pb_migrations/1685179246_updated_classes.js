migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  collection.listRule = null

  return dao.saveCollection(collection)
})
