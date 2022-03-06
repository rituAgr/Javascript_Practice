let arr = [{id: 32, name: 'Name1', age: 88},
  {id: 33, name: 'Name2', age: 88},
  {id: 32, name: 'Name3', age: 88},
  {id: 1, name: 'Sam', age: 88},
  {id: 33, name: 'Name2', age: 88},
  {id: 2, name: 'Tom', age: 88}]

// Removing dups via reduce & map func
console.log("Removing dups via reduce & map func")
let uniques_via_reduce = arr.reduce((mp1, obj) =>
    mp1.set(obj.id, obj), new Map())
console.log([...uniques_via_reduce.values()])

// Removing dups via reduce with {} & map func
//If it is multiline, then return needs to be specified
console.log("Removing dups via reduce with {} & map func")
let uniques_via_reduce2 = arr.reduce((mp1, obj) =>
{
  console.log(obj);
  return mp1.set(obj.id, obj)
}, new Map())
console.log([...uniques_via_reduce2.values()])


// Removing dups via forEach & map func
console.log(" Removing dups via forEach & map func")
let mp2 = new Map()
arr.forEach( obj => mp2.set(obj.id, obj))
let uniques_via_forEach = [...mp2.values()]
console.log(uniques_via_forEach)
