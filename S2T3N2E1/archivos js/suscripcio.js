
db.createCollection( 'suscripcio', {validator: {$jsonSchema: {bsonType: 'object',title:'suscripcio',required: [         'usuari',          'canal'],properties: {usuari: {bsonType: 'objectId'},canal: {bsonType: 'objectId'}}         }      }});  
 db.suscripcio.createIndex(
{
  "_id": 1
})

