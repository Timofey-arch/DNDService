migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  collection.listRule = null

  return dao.saveCollection(collection)
})
