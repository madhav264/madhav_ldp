////   1.two fun arg 
function second(p,q){
    return p*q

}

function first(a,b,c){

    var res=a(b,c)
    return res 
}
var res=first(second,2,3)

console.log("two functions are given:"+res)



//////// 2. first name and sec name
 hello=(a,b)=>{
    console.log(a[0]+b[0])
}
hello("Roger","Binny")
//////////////

var printname=(name)=>{console.log(name)}
printname("hello")

var printbill(name,bill)=>{
    console.log(`${name} pay the ${bill} Rs`)
}

const person = {
    name: “Noam Chomsky”,
    age: 92
}
var{name,age}=person
console.log(name,age)//////////////////  "Noan chomsky" 92
///////////////
