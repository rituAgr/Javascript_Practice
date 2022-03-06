let studentJson = {
    "name": "Ritu Agrawal",
    "semester": 8,
    "completedCourses": ["Theory of computation", "Data Structure", "Machine Learning"],
    "gpa": 3.8
}
console.log("studentJson Object : ")
console.log(studentJson)

let arr = Object.entries(studentJson);
console.log("studentJson array : ")
console.log(arr)

let mp = new Map()
arr.forEach(obj => {
    return mp.set(obj[0] , obj)
})

console.log(mp)
let noDups = Object.fromEntries([...mp.values()])
console.log("studentJson array values : ")
console.log(noDups)
