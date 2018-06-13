let mysql = require("promise-mysql");

let gym = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'password1',
    database: 'gymManagement'
});

gym.getConnection(err => {
    if (err) throw err;
    console.log("Connected");
    let sql = `CREATE TABLE IF NOT EXISTS members(
        memberID varchar(30) primary key, firstName varchar(50),
        lastname varchar(50),
        dob date, sex char(1), address varchar(100))
        `
    gym.query(sql)
    .then((result) => {
        console.log("Table is created")
    })
})

module.exports = gym;

