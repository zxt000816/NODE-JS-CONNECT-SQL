const sql = require('mssql');
const { generateRandomObject, parseData } = require('./utils.js');

const config = {
    user: 'sa',
    password: 'zyf0706@.',
    server: "localhost",
    database: 'yifan_test',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options: {
      encrypt: true,
      trustServerCertificate: true,
    }
}

async function InsertOneMsSQL(data) {
    await sql.connect(config);
    console.log("connected");

    const result = await sql.query`INSERT INTO ForwardTransaction.Contract (buyName, buyBirth, buyAddress, buyPhone, buySubPhone, sellerName, \
        sellerBirth, sellerAddress, sellerPhone, sellerSubPhone, item, kind, areaFlat, formalDay, totalPrice, firstYn, \
        firstPrice, firstEndCount, secondYn, secondPrice, secondEndCount, thirdYn, thirdPrice, thirdEndCount, etc, returnDate) \
        VALUES (${data.buyName}, ${data.buyBirth}, ${data.buyAddress}, ${data.buyPhone}, ${data.buySubPhone}, \
        ${data.sellerName}, ${data.sellerBirth}, ${data.sellerAddress}, ${data.sellerPhone}, ${data.sellerSubPhone}, \
        ${data.item}, ${data.kind}, ${data.areaFlat}, ${data.formalDay}, ${data.totalPrice}, ${data.firstYn}, ${data.firstPrice}, \
        ${data.firstEndCount}, ${data.secondYn}, ${data.secondPrice}, ${data.secondEndCount}, ${data.thirdYn}, ${data.thirdPrice}, \
        ${data.thirdEndCount}, ${data.etc}, ${data.returnDate})`;

    console.dir(result);
    console.log("inserted");

    sql.close();
}

async function SearchOneMsSQL(id) {
    await sql.connect(config);
    console.log("connected");

    const result = await sql.query`SELECT * FROM ForwardTransaction.Contract WHERE Id = ${id}`;

    console.log(result);
    console.log("searched");

    sql.close();
}

async function SearchAllMsSQL() {
    await sql.connect(config);
    console.log("connected");

    const result = await sql.query`SELECT * FROM ForwardTransaction.Contract`;
    
    console.log(result);
    console.log("searched");

    sql.close();
}

async function DeleteOneMsSQL(id) {
    await sql.connect(config);
    console.log("connected");

    await sql.query`DELETE FROM ForwardTransaction.Contract WHERE id = ${id}`;

    console.log("deleted");

    sql.close();
}

async function DeleteAllMsSQL(reset=true) {
    await sql.connect(config);
    console.log("connected");

    if (reset) {
        await sql.query`TRUNCATE TABLE ForwardTransaction.Contract`;
        console.log("reseted");
    } else {
        await sql.query`DELETE FROM ForwardTransaction.Contract`;
        console.log("deleted all data");
    }
    
    sql.close();
}

async function main() {
    let data = generateRandomObject();

    await DeleteAllMsSQL();

    await InsertOneMsSQL(data);

    await SearchAllMsSQL();

    await SearchOneMsSQL(1);
}

main();