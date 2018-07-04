const gym = require('./../models');

const bodyParser = require('body-parser');

const gymController = {};

gymController.postMembership = (req, res, next) => {
    let {ssn, firstName, lastName, dob, memberid, sex, address, city, state, membershipType, zipcode, status, description} = req.body;
    console.log(memberid);
    let sql = `INSERT INTO members(
        ssn, memberid, firstName, lastName, dob, sex, address, city, state, 
        zipCode, membershipType, description) values
     ('${ssn}',
      '${memberid}',
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
        if (err) {
            console.log(err.code)
            res.locals.result = 'error';
        }
        else {  
            res.locals.result = "data is inserted successfully";
        }
        next();
    })

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
        console.log(result)
        res.locals.member = result;
        next();
    })
}

gymController.updateMembership1 = (req, res, next) => {
    
    let {ssn, firstName, lastName, dob, memberid, sex, address, city, state, membershipType, zipcode, description} = req.body;
    console.log('this is new memberID', memberid);

    let sql1 = `update members set 
    firstName='${firstName}', 
    lastName='${lastName}',
    ssn='${ssn}',
    dob='${dob}',
    sex='${sex}', 
    address='${address}',
    city='${city}',
    state='${state}',
    zipCode='${zipcode}',
    membershipType='${membershipType}',
    description = '${description}'
    where memberid='${memberid}'`;

    gym.query(sql1)
       .then(result1 => {
        res.locals.updatedMember = result1;  
        next();   
       })    
}

module.exports = gymController;











// let sql2 = `update members set memberid='${memberid}' where memberid='${text}'`;

//     gym.query(sql1)
//     .then(result1 => {
//         return gym.query(sql2)        
//     }).then(result2 => {
//         res.locals.updatedMember = result2;
//         console.log(result2.affectedRows);
//         next();
//     }) 