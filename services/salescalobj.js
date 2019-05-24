
let services  = require('../services/calculation');

//making function
exports.salescalobjfunction = (req_body) => {
  //calculating the sales tax 
  let xx= services.calculationfunction(req_body);
  return(xx);
}