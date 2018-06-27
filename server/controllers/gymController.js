const gym = require('./../models');

const bodyParser = require('body-parser');

const gymController = {};

gymController.postMembership = (req, res, next) => {
    let {firstName, lastName, dob, memberid, sex, address, city, state, membershipType, zipcode, status, description} = req.body;
    console.log(memberid);
    let sql = `INSERT INTO members(
        memberid, firstName, lastName, dob, sex, address, city, state, 
        zipCode, membershipType, description) values
     ('${memberid}',
      '${firstName}', 
      '${lastName}', 
      '${dob}',
      '${sex}',
      '${address}', 
      '${city}', 
      '${state}',
      '${zipcode}', 
      '${membershipType}', 
      '${description}')`;
    
    gym.query(sql, (err, result) => {
        console.log(sql)
        console.log("record is inserted");        
    })
    next();
}

gymController.searchMembership = (req, res, next) => {
    let {firstName, lastName} = req.body;
    let sql = `select * from members where firstName like '${firstName}%' AND lastName like '${lastName}%'`;
    gym.query(sql, (err, result, fields) => {
        res.locals.resultArray = result;
      // console.log(res.locals.resultArray)
        next();
    })
}

gymController.displayMembership = (req, res, next) => {
    
    let {memberid} = req.body;
    //console.log(memberid)
    let sql = `select * from members where memberid = '${memberid}'`;
    gym.query(sql, (err, result) => {
        console.log(result);
        res.locals.member = result;
        next();
    })
}

module.exports = gymController;