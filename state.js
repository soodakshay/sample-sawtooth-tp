var { _hash } = require("./lib");
var { TP_NAMESPACE } = require("./constants");

class SimpelStoreState {
 constructor(context) {
   this.context = context;
   this.timeout = 500;
   this.stateEntries = {};
 }

 setValue(value) {
   var address = makeAddress(value);
   var stateEntriesSend = {}
   stateEntriesSend[address] = Buffer.from("Hello! " + value);
   return  this.context.setState(stateEntriesSend, this.timeout).then(function(result) {
     console.log("Success", result)
   }).catch(function(error) {
     console.error("Error", error)
   })
 }

const makeAddress = (x, label) => TP_NAMESPACE + _hash(x)

module.exports = SimpelStoreState;
