migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "czgsf67a",
    "name": "description",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  // remove
  collection.schema.removeField("czgsf67a")

  return dao.saveCollection(collection)
})
