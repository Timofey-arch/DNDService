migrate((db) => {
  const collection = new Collection({
    "id": "wppktrc407242zo",
    "created": "2023-03-23 11:46:24.059Z",
    "updated": "2023-03-23 11:46:24.059Z",
    "name": "weapons",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "z3wn9jiy",
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
        "id": "cu0jxflk",
        "name": "cost",
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
        "id": "dfh83guk",
        "name": "damage",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "kxj3ep11",
        "name": "weigth",
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
        "id": "8wqeelr5",
        "name": "attributes",
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
  const collection = dao.findCollectionByNameOrId("wppktrc407242zo");

  return dao.deleteCollection(collection);
})
