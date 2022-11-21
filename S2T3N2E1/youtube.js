db.createCollection('canal', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'canal',
      required: ['nom', 'descripcio', 'data_creacio', 'creador_id'],
      properties: {
        nom: {
          bsonType: 'string'
        },
        descripcio: {
          bsonType: 'string'
        },
        data_creacio: {
          bsonType: 'date'
        },
        creador_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.canal.createIndex({
  "_id": 1
})
db.createCollection('comentaris', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'comentaris',
      required: ['texte', 'data_creacio', 'usuari', 'video'],
      properties: {
        texte: {
          bsonType: 'string'
        },
        data_creacio: {
          bsonType: 'date'
        },
        usuari: {
          bsonType: 'objectId'
        },
        video: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.comentaris.createIndex({
  "_id": 1
})
db.createCollection('suscripcio', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'suscripcio',
      required: ['usuari', 'canal'],
      properties: {
        usuari: {
          bsonType: 'objectId'
        },
        canal: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.suscripcio.createIndex({
  "_id": 1
})
db.createCollection('video', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'video',
      required: ['titol', 'descripcio', 'grandaria', 'nom_arxiu', 'durada', 'thumbnail', 'reproduccions', 'likes', 'deslikes', 'estats ', 'data_publicacio ', 'usuari'],
      properties: {
        titol: {
          bsonType: 'string'
        },
        descripcio: {
          bsonType: 'string'
        },
        grandaria: {
          bsonType: 'double'
        },
        nom_arxiu: {
          bsonType: 'string'
        },
        durada: {
          bsonType: 'string'
        },
        thumbnail: {
          bsonType: 'string'
        },
        reproduccions: {
          bsonType: 'double'
        },
        likes: {
          bsonType: 'double'
        },
        deslikes: {
          bsonType: 'double'
        },
        estats: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['public ', 'ocult ', 'privat '],
            properties: {
              public: {
                bsonType: 'bool'
              },
              ocult: {
                bsonType: 'bool'
              },
              privat: {
                bsonType: 'bool'
              }
            }
          }
        },
        data_publicacio: {
          bsonType: 'date'
        },
        usuari: {
          bsonType: 'objectId'
        },
        etiquetes: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              etiqueta_id: {
                bsonType: 'objectId'
              },
              nom: {
                bsonType: 'objectId'
              },
              nom_usuari: {
                bsonType: 'string'
              },
              video_id: {
                bsonType: 'objectId'
              }
            }
          }
        }
      }
    }
  }
});
db.video.createIndex({
  "_id": 1
})
db.createCollection('valoracions', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'valoracions',
      required: ['like', 'deslike', 'data_creacio', 'video', 'usuari', 'comentaris'],
      properties: {
        like: {
          bsonType: 'double'
        },
        deslike: {
          bsonType: 'double'
        },
        data_creacio: {
          bsonType: 'date'
        },
        video: {
          bsonType: 'objectId'
        },
        usuari: {
          bsonType: 'objectId'
        },
        comentaris: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.valoracions.createIndex({
  "_id": 1
})
db.createCollection('usuari', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'usuari',
      required: ['mail ', 'password ', 'nom_usuari ', 'data_naixement ', 'sexe ', 'pais ', 'codi_postal '],
      properties: {
        mail: {
          bsonType: 'string'
        },
        password: {
          bsonType: 'string'
        },
        nom_usuari: {
          bsonType: 'string'
        },
        data_naixement: {
          bsonType: 'date'
        },
        sexe: {
          bsonType: 'string'
        },
        pais: {
          bsonType: 'string'
        },
        codi_postal: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.usuari.createIndex({
  "_id": 1
})
db.createCollection('playlist', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'playlist',
      required: ['usuari', 'video'],
      properties: {
        usuari: {
          bsonType: 'objectId'
        },
        video: {
          bsonType: 'array',
          items: {
            bsonType: 'objectId'
          }
        },
        nom: {
          bsonType: 'string'
        },
        data_creacio: {
          bsonType: 'date'
        },
        estat: {
          bsonType: 'array',
          items: {
            title: 'object',
            properties: {
              publica: {
                bsonType: 'bool'
              },
              privada: {
                bsonType: 'bool'
              }
            }
          }
        }
      }
    }
  }
});
