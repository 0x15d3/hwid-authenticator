const https = require('https');
const fs = require('fs');
const { get } = require('http');

function getData() {
https.get("https://raw.githubusercontent.com/0x15d3/uuid-hwid/main/hwidr", (res) => {
    res.on("data", (data) => {
        console.log(data.toString());
        return data;
    });
  })

}
const uuid = require("machine-uuid-sync")();
console.log(uuid);
getData();
const filePath =('./databases/data.json');
const fileData = fs.readFileSync(filePath, 'utf8');


console.log();
const data= getData.toString();
const user = Object.values(data).includes(uuid)
if (user) {
  console.log("Giris Basarili...");
}else{ 
    console.log("Giris Yapilamadi...");
}
