const gym = require('./../models');

const bodyParser = require('body-parser');

const gymController = {};

gymController.postMembership = (req, res, next) => {
    let {firstName, lastName, dob, memberid, sex, address, city, state, membershipType, zipcode, status, description} = req.body;
    console.log(memberid);
    let sql = `INSERT INTO members(
        memberid, firstName, lastName, dob, sex, address, city, state, 
        zipCode, membershipType, status, description) values
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
      '${status}',
      '${description}')`;
    
    gym.query(sql, (err, result) => {
        console.log(sql)
        console.log("record is inserted");        
    })
    next();
}

module.exports = gymController;