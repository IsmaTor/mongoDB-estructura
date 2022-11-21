
db.createCollection( 'usuari', {validator: {$jsonSchema: {bsonType: 'object',title:'usuari',required: [         'mail ',          'password ',          'nom_usuari ',          'data_naixement ',          'sexe ',          'pais ',          'codi_postal '],properties: {mail : {bsonType: 'string'},password : {bsonType: 'string'},nom_usuari : {bsonType: 'string'},data_naixement : {bsonType: 'date'},sexe : {bsonType: 'string'},pais : {bsonType: 'string'},codi_postal : {bsonType: 'string'},playlist: {bsonType: 'array',items: {
title:'object',properties: {playlist_id: {bsonType: 'objectId'},nom: {bsonType: 'string'},data_creacio: {bsonType: 'date'},estat: {bsonType: 'array',items: {
title:'object',properties: {publica: {bsonType: 'bool'},privada: {bsonType: 'bool'}}}}}}}}         }      }});  
 db.usuari.createIndex(
{
  "_id": 1
})

