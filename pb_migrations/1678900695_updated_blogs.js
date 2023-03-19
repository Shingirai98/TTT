migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f8gxtugl",
    "name": "category",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6ey3lhvbkzdycql")

  // update
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

  return dao.saveCollection(collection)
})
