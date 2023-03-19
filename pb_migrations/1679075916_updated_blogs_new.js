migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  collection.name = "blogsNew"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6dneaga67q5hjhq")

  collection.name = "blogs_new"

  return dao.saveCollection(collection)
})
