
db.createCollection( 'comentaris', {validator: {$jsonSchema: {bsonType: 'object',title:'comentaris',required: [         'texte',          'data_creacio',          'usuari',          'video'],properties: {texte: {bsonType: 'string'},data_creacio: {bsonType: 'date'},usuari: {bsonType: 'objectId'},video: {bsonType: 'objectId'}}         }      }});  
 db.comentaris.createIndex(
{
  "_id": 1
})

