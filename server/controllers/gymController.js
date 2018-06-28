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

gymController.updateMembership1 = (req, res, next) => {
    
    let {firstName, text, lastName, dob, memberid, sex, address, city, state, membershipType, zipcode, status, description} = req.body;
    console.log('this is old memberID', text);
    console.log('this is new memberID', memberid);

    let sql1 = `update members set 
    firstName='${firstName}', 
    lastName='${lastName}'
    where memberid='${text}'`;

    let sql2 = `update members set memberid='${memberid}' where memberid='${text}'`;

    gym.query(sql1)
    .then(result1 => {
        return gym.query(sql2)        
    }).then(result2 => {
        console.log(result2);
    }) 
}

module.exports = gymController;