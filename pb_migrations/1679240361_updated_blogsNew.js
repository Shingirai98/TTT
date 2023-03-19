migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // remove
  collection.schema.removeField("szlr9quu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zklvs9xj",
    "name": "content",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szlr9quu",
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

  // remove
  collection.schema.removeField("zklvs9xj")

  return dao.saveCollection(collection)
})
