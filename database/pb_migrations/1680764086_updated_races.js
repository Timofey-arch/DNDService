migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ugbed1bw",
    "name": "statsAdd",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  // remove
  collection.schema.removeField("ugbed1bw")

  return dao.saveCollection(collection)
})
