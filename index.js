// Write your solution in this file!
let obj={foo:"bar"}

function updateDriverWithKeyAndValue(driver,key,value){
return object.assign({},driver,{[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver.key=value
}