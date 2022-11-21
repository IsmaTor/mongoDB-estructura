
db.createCollection( 'valoracions', {validator: {$jsonSchema: {bsonType: 'object',title:'valoracions',required: [         'like',          'deslike',          'data_creacio',          'video',          'usuari',          'comentaris'],properties: {like: {bsonType: 'double'},deslike: {bsonType: 'double'},data_creacio: {bsonType: 'date'},video: {bsonType: 'objectId'},usuari: {bsonType: 'objectId'},comentaris: {bsonType: 'objectId'}}         }      }});  
 db.valoracions.createIndex(
{
  "_id": 1
})

