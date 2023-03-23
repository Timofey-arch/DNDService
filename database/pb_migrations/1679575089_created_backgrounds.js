migrate((db) => {
  const collection = new Collection({
    "id": "9pk30vk63b0lbh2",
    "created": "2023-03-23 12:38:09.934Z",
    "updated": "2023-03-23 12:38:09.934Z",
    "name": "backgrounds",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qfmpshjb",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "g6nfbunc",
        "name": "skills",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hcodahpz",
        "name": "tools",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jk3laimf",
        "name": "equipment",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "7q9p2vff",
        "name": "ability",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4a9nkiaw",
        "name": "characterTraits",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "yreq2jrn",
        "name": "ideals",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "4bdf4mfx",
        "name": "affections",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "y6pe8zub",
        "name": "weaknesses",
        "type": "json",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ogqlfw5n",
        "name": "varieties",
        "type": "json",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("9pk30vk63b0lbh2");

  return dao.deleteCollection(collection);
})
