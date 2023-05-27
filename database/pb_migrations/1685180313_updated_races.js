migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
