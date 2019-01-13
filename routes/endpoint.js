
const _ = require('underscore');

const myObj = new require('../objects/myObject.js');

const fetchTheObject = async () => {
    console.log("MyObj: ", myObj.login );
    return myObj.login().then( (auth) => {   
        return myObj.doSomething()
   })
}

const localFunc  = (data) => {
    console.log("localFunc: ", data )
   return myOjbect.login().then( auth => {   
      return myObject.doSomething().then( data =>{
         console.log("do something function: ", data );
         //return data
      })
   }) 
}

module.exports = function(req, res){
   console.log("Query: ", req.query ); 
if(_.isEmpty(req.query)){
    fetchTheObject()
   .then(getObjectResponse =>{
       console.log("WE've fetched our object: ", getObjectResponse );
      res.send(getObjectResponse);
  })
   .catch(err=>{
      console.log(err.message)
      res.send("oops");
   })
}else{
   const { data } = req.query
   console.log("Query 1: ", req.query );
   if(!_.isUndefined(req.query)){
      myObj.doSomethingElse(data).then(someResponse =>{
         console.log("Something Else:  ", someResponse )
         res.send(someResponse);
     })
      .catch(err=>{
         console.log(err.message)
         res.send("double oops");
      })
   }
}
   // console.log('QUERY',req.query)

}
