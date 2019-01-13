
const _ = require('underscore');

const myObj = new require('../objects/myObject.js');

const fetchTheObject = async () => {
    console.log("MyObj: ", myObj.login );
    return myObj.login().then( (auth) => {   
        // return myObj.doSomething()
        return true;
   })
}

const localFunc  = (data) => {
    console.log("localFunc: ", data )
   return myOjbect.login().then( auth => {   
      return myObject.doSomething().then( data =>{
        
         return data
      })
   }) 
}

module.exports = function(req, res){
//   console.log("Door: ", req.body ); 
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
   if(!_.isUndefined(data)){
      doSomethingr(data).then(usomeResponse =>{
         res.send(someResponse);
     })
      .catch(err=>{
         console.log(err.message)
         res.send("oops");
      })
   }
}
   // console.log('QUERY',req.query)

}
