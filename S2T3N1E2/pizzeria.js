db.createCollection('pizzes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'pizzes',
      required: ['nom', 'descripcio', 'imatge', 'preu', 'categoria '],
      properties: {
        nom: {
          bsonType: 'string'
        },
        descripcio: {
          bsonType: 'string'
        },
        imatge: {
          bsonType: 'string'
        },
        preu: {
          bsonType: 'double'
        },
        categoria: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['categoria_a ', 'categoria_b '],
            properties: {
              categoria_a: {
                bsonType: 'string'
              },
              categoria_b: {
                bsonType: 'string'
              }
            }
          }
        }
      }
    }
  }
});
db.pizzes.createIndex({
  "_id": 1
})
db.createCollection('tenda', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'tenda',
      required: ['nom', 'adreça', 'telefon'],
      properties: {
        nom: {
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
        }
      }
    }
  }
});
db.tenda.createIndex({
  "_id": 1
})
db.createCollection('client', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'client',
      required: ['nom', 'cognom1', 'cognom2', 'adreça', 'telefon'],
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
        }
      }
    }
  }
});
db.client.createIndex({
  "_id": 1
})
db.createCollection('treballador', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'treballador',
      required: ['nom ', 'cognom1 ', 'cognom2 ', 'NIF ', 'telefon ', 'lloc_treball ', 'tenda_id'],
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
        NIF: {
          bsonType: 'string'
        },
        telefon: {
          bsonType: 'string'
        },
        lloc_treball: {
          bsonType: 'array',
          items: {
            title: 'object',
            required: ['repartidor ', 'comanda_id ', 'data_comanda ', 'cuiner '],
            properties: {
              repartidor: {
                bsonType: 'bool'
              },
              comanda_id: {
                bsonType: 'objectId'
              },
              data_comanda: {
                bsonType: 'date'
              },
              cuiner: {
                bsonType: 'bool'
              }
            }
          }
        },
        tenda_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.treballador.createIndex({
  "_id": 1
})
db.createCollection('comanda', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'comanda',
      required: ['data_venda', 'tipus_comanda (domicili o tenda)', 'preu_total ', 'client_id', 'tenda_id'],
      properties: {
        data_venda: {
          bsonType: 'date'
        },
        tipus_comanda(domicili o tenda): {
          bsonType: 'object',
          title: 'object',
          required: ['domicili', 'tenda '],
          properties: {
            domicili: {
              bsonType: 'bool'
            },
            tenda: {
              bsonType: 'bool'
            }
          }
        },
        preu_total: {
          bsonType: 'double'
        },
        client_id: {
          bsonType: 'objectId'
        },
        tenda_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.comanda.createIndex({
  "_id": 1
})
db.createCollection('hamburgueses', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'hamburgueses',
      required: ['nom', 'descripcio', 'imatge', 'preu'],
      properties: {
        nom: {
          bsonType: 'string'
        },
        descripcio: {
          bsonType: 'string'
        },
        imatge: {
          bsonType: 'string'
        },
        preu: {
          bsonType: 'double'
        }
      }
    }
  }
});
db.hamburgueses.createIndex({
  "_id": 1
})
db.createCollection('begudes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'begudes',
      required: ['nom', 'descripcio', 'imatge', 'preu'],
      properties: {
        nom: {
          bsonType: 'string'
        },
        descripcio: {
          bsonType: 'string'
        },
        imatge: {
          bsonType: 'string'
        },
        preu: {
          bsonType: 'double'
        }
      }
    }
  }
});
db.begudes.createIndex({
  "_id": 1
})
db.createCollection('productes_comanda', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'productes_comanda',
      required: ['pizzes_id', 'hamburgueses_id', 'begudes_id', 'comanda_id'],
      properties: {
        pizzes_id: {
          bsonType: 'objectId'
        },
        hamburgueses_id: {
          bsonType: 'objectId'
        },
        begudes_id: {
          bsonType: 'objectId'
        },
        comanda_id: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.productes_comanda.createIndex({
  "_id": 1
})