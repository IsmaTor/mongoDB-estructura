
db.createCollection( 'canal', {validator: {$jsonSchema: {bsonType: 'object',title:'canal',required: [         'nom',          'descripcio',          'data_creacio'],properties: {nom: {bsonType: 'string'},descripcio: {bsonType: 'string'},data_creacio: {bsonType: 'date'}}         }      }});  
 db.canal.createIndex(
{
  "_id": 1
})

