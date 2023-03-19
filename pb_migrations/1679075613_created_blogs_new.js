migrate((db) => {
  const collection = new Collection({
    "id": "6dneaga67q5hjhq",
    "created": "2023-03-17 17:53:33.456Z",
    "updated": "2023-03-17 17:53:33.456Z",
    "name": "blogs_new",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "whg1hdgj",
        "name": "title",
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
        "id": "j2c5t4zs",
        "name": "summary",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lgygqfbi",
        "name": "content",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "4hgzbrtx",
        "name": "blog_cat",
        "type": "relation",
        "required": true,
        "unique": true,
        "options": {
          "collectionId": "tmir08w4bhr0329",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
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
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq");

  return dao.deleteCollection(collection);
})
