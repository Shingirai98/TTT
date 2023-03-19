migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4hgzbrtx",
    "name": "blog_cat",
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
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
