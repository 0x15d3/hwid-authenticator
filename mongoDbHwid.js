const MongoClient = require('mongodb').MongoClient

  const url = 'mongodb+srv://kullaniciadi/username:sifre/password@projeadi/projectname.gxvnsve.mongodb.net/test';

  function checkHWID(hwid) {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) console.log(err)
  
      // collectionu al / get the collection using 'line 3' mongodb login thing
      const collection = client.db('database adi/database name').collection('collection adi/collection name')
  
      // collectiondaki hwidleri sorgula / check if hwid exists
      collection.findOne({ hwid }, (err, result) => {
        if (err) console.log(err)
  
        // eger hwid varsa.../ if hwid exists...
        if (result) {
          console.log('Giriş Sağlandı...')
        } else {
          console.log('Giriş Başarısız Lütfen Ürünü Satın Alın...')
        }
  
        client.close()
      })
    })
  }
  const uuid = require("machine-uuid-sync")();

  console.log("Sahiplik Kontrol Ediliyor....")
  checkHWID(uuid)
