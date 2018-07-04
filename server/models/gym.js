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

    let sql = `CREATE TABLE IF NOT EXISTS members(
        ssn varchar(50) not null primary key,
        memberid varchar(50),
        firstName varchar(50) not null,        
        lastName varchar(50) not null,
        dob date not null, 
        sex char(1) not null, 
        address varchar(100) not null, 
        city varchar(50) not null, 
        state varchar(20) not null, 
        zipCode int not null,
        membershipType varchar(20) not null, 
        description varchar(100), 
        constraint ssn_unique unique (ssn))
        
        `
    gym.query(sql)
    .then((result) => {
        console.log("Table is created")
    })
})

module.exports = gym;

