// Write your solution in this file!
let driver={}

function updateDriverWithKeyAndValue(driver,key,value){
return object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key]=value
  return driver
}

function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver.key
  return driver
}

function deleteFromDriverByKey(driver,key){
  let newO = { ...obj }
}


