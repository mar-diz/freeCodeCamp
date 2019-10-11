function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  //console.log(collection[0].hasOwnProperty("last"));
  //console.log(Object.keys(source));
  //console.log("test1: " + collection[0].last);
  //console.log(source[Object.keys(source)]);

  for(var i=0;i<collection.length;i++){
    //this means that the collection at array index i has the property of 'source'
    if(collection[i].hasOwnProperty(Object.keys(source))){
      if(collection[i][Object.keys(source)] == source[Object.keys(source)]){
        arr.push(collection[i]);
      }
    }
  }  
  //console.log("test: " + arr.length);
  // Only change code above this line
  return arr;
}


console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));