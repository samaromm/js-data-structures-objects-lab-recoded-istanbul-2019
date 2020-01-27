// Write your solution in this file!
let driver={}

function updateDriverWithKeyAndValue(driver,key,value){
  let newDriv={...driver}
  newDriv.key=value
  return newDriv
}

function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver.key=value
}