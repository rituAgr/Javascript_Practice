let arr = [{id: 32, name: 'Ritu', age: 88},
  {id: 33, name: 'Ritu2', age: 88},
  {id: 32, name: 'sam', age: 88},
  {id: 1, name: 'sam', age: 88},
  {id: 2, name: 'Ritu4', age: 88}]

console.log(arr)

let map = arr.map((value, index, arr)=>{arr[index]=value});
// let entries = Object.entries(arr);