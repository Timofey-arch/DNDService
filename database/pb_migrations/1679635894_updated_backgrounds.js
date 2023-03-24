migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6nfbunc",
    "name": "skills",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g6nfbunc",
    "name": "skills",
    "type": "json",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
