import { parse } from 'url';
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q);

/*The query property returns an object with all the querystring parameters as properties:*/
// var qdata = q.query;
// console.log(qdata.month);