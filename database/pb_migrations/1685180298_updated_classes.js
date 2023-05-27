migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
