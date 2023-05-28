migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kgtu7jxo",
    "name": "field",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qvbhsui4euvisad")

  // remove
  collection.schema.removeField("kgtu7jxo")

  return dao.saveCollection(collection)
})
