migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // remove
  collection.schema.removeField("yp86jggl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8gxtugl",
    "name": "category_id",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "tmir08w4bhr0329",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i25bvrph",
    "name": "content",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdevyru6",
    "name": "summary",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yp86jggl",
    "name": "category_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("f8gxtugl")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i25bvrph",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wdevyru6",
    "name": "summary",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
