migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0tekpssm",
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
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  // remove
  collection.schema.removeField("0tekpssm")

  return dao.saveCollection(collection)
})
