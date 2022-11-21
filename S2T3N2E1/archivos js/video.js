
db.createCollection( 'video', {validator: {$jsonSchema: {bsonType: 'object',title:'video',required: [         'titol',          'descripcio',          'grandaria',          'nom_arxiu',          'durada',          'thumbnail',          'reproduccions',          'likes',          'deslikes',          'estats ',          'data_publicacio ',          'usuari'],properties: {titol: {bsonType: 'string'},descripcio: {bsonType: 'string'},grandaria: {bsonType: 'double'},nom_arxiu: {bsonType: 'string'},durada: {bsonType: 'string'},thumbnail: {bsonType: 'string'},reproduccions: {bsonType: 'double'},likes: {bsonType: 'double'},deslikes: {bsonType: 'double'},estats : {bsonType: 'array',items: {
title:'object',required: [         'public ',          'ocult ',          'privat '],properties: {public : {bsonType: 'bool'},ocult : {bsonType: 'bool'},privat : {bsonType: 'bool'}}}},data_publicacio : {bsonType: 'date'},usuari: {bsonType: 'objectId'},etiquetes: {bsonType: 'array',items: {
title:'object',properties: {etiqueta_id: {bsonType: 'objectId'},nom: {bsonType: 'objectId'},nom_usuari: {bsonType: 'string'},video_id: {bsonType: 'objectId'}}}}}         }      }});  
 db.video.createIndex(
{
  "_id": 1
})

