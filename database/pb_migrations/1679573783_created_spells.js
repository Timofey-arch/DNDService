migrate((db) => {
  const collection = new Collection({
    "id": "apbu7s8mn0khk6l",
    "created": "2023-03-23 12:16:23.953Z",
    "updated": "2023-03-23 12:16:23.953Z",
    "name": "spells",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "thwafu4r",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "x6x3suj1",
        "name": "level",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "bhinezga",
        "name": "duration",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "kiqxauyf",
        "name": "overlayTime",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ah3a1j5t",
        "name": "distance",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "oflcyibi",
        "name": "components",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("apbu7s8mn0khk6l");

  return dao.deleteCollection(collection);
})
