migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wppktrc407242zo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ej0pr8v7",
    "name": "type",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wppktrc407242zo")

  // remove
  collection.schema.removeField("ej0pr8v7")

  return dao.saveCollection(collection)
})
