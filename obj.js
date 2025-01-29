let mark=76;
let grade=(mark>=90)? "A" :(mark>=70)? "B" :(mark>=40)? "C": "F";
console.log(grade);


let array=[2,3,4,5,6]
let arrcopy=[...array,8,9]
console.log(array)
console.log(arrcopy)


let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9,0]
let arrCopy=[...arr1,...arr2]
console.log(arrCopy);



let user={name:"kavya",age:"20"}
let add={ciyt:"TPT",Country:"India"}
let datacopy={...user,...add}
console.log(datacopy);