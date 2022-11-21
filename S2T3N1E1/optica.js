db.createCollection('treballador', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'treballador',
      required: ['nom '],
      properties: {
        nom: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.treballador.createIndex({
  "_id": 1
})
db.createCollection('clients', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'clients',
      required: ['nom', 'cognom1', 'cognom2', 'adreça', 'telefon', 'data_registre', 'recomana'],
      properties: {
        nom: {
          bsonType: 'string'
        },
        cognom1: {
          bsonType: 'string'
        },
        cognom2: {
          bsonType: 'string'
        },
        adreça: {
          bsonType: 'object',
          title: 'object',
          required: ['carrer', 'numero', 'pis', 'puerta', 'codi_postal', 'provincia '],
          properties: {
            carrer: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'string'
            },
            pis: {
              bsonType: 'double'
            },
            puerta: {
              bsonType: 'double'
            },
            codi_postal: {
              bsonType: 'string'
            },
            provincia: {
              bsonType: 'object',
              title: 'object',
              required: ['localitat ', 'nom '],
              properties: {
                localitat: {
                  bsonType: 'object',
                  title: 'object',
                  required: ['nom '],
                  properties: {
                    nom: {
                      bsonType: 'string'
                    }
                  }
                },
                nom: {
                  bsonType: 'string'
                }
              }
            }
          }
        },
        telefon: {
          bsonType: 'double'
        },
        data_registre: {
          bsonType: 'date'
        },
        recomana: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.clients.createIndex({
  "_id": 1
})
db.createCollection('ulleres', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'ulleres',
      required: ['marca', 'graduacio ', 'montura ', 'preu ', 'venedor_id ', 'cliente_id ', 'proveidor_id'],
      properties: {
        marca: {
          bsonType: 'string'
        },
        graduacio: {
          bsonType: 'object',
          title: 'object',
          required: ['graduacio_esq ', 'graduacio_dre '],
          properties: {
            graduacio_esq: {
              bsonType: 'double'
            },
            graduacio_dre: {
              bsonType: 'double'
            }
          }
        },
        montura: {
          bsonType: 'object',
          title: 'object',
          required: ['tipo ', 'color'],
          properties: {
            tipo: {
              bsonType: 'string'
            },
            color: {
              bsonType: 'object',
              title: 'object',
              required: ['montura ', 'vidre_esq ', 'vidre_dre '],
              properties: {
                montura: {
                  bsonType: 'string'
                },
                vidre_esq: {
                  bsonType: 'string'
                },
                vidre_dre: {
                  bsonType: 'string'
                }
              }
            }
          }
        },
        preu: {
          bsonType: 'double'
        },
        venedor_id: {
          bsonType: 'objectId'
        },
        cliente_id: {
          bsonType: 'objectId'
        },
        proveidor_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.ulleres.createIndex({
  "_id": 1
})
db.createCollection('proveidor', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'proveidor',
      required: ['nom', 'adreça', 'telefon', 'nif '],
      properties: {
        nom: {
          bsonType: 'string'
        },
        adreça: {
          bsonType: 'object',
          title: 'object',
          required: ['carrer', 'numero', 'pis', 'puerta', 'codi_postal', 'provincia ', 'pais '],
          properties: {
            carrer: {
              bsonType: 'string'
            },
            numero: {
              bsonType: 'string'
            },
            pis: {
              bsonType: 'double'
            },
            puerta: {
              bsonType: 'double'
            },
            codi_postal: {
              bsonType: 'string'
            },
            provincia: {
              bsonType: 'object',
              title: 'object',
              required: ['localitat ', 'nom '],
              properties: {
                localitat: {
                  bsonType: 'object',
                  title: 'object',
                  required: ['nom '],
                  properties: {
                    nom: {
                      bsonType: 'string'
                    }
                  }
                },
                nom: {
                  bsonType: 'string'
                }
              }
            },
            pais: {
              bsonType: 'string'
            }
          }
        },
        telefon: {
          bsonType: 'object',
          title: 'object',
          required: ['telefon ', 'FAX '],
          properties: {
            telefon: {
              bsonType: 'double'
            },
            FAX: {
              bsonType: 'double'
            }
          }
        },
        nif: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.proveidor.createIndex({
  "_id": 1
})