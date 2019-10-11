function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  //console.log(collection[0].hasOwnProperty("last"));

  //How to get key in a key/value array
  console.log(Object.keys(source));
  //How to get value in a key/value array
  console.log(source[Object.keys(source)[0]]);
  //add the array if and only if all values of source is in collection[i]
  //console.log("test1: " + collection[0].last);
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
