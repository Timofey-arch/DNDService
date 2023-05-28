migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zv0mf3qu",
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
  const collection = dao.findCollectionByNameOrId("wnd5fraktyre9rk")

  // remove
  collection.schema.removeField("zv0mf3qu")

  return dao.saveCollection(collection)
})
