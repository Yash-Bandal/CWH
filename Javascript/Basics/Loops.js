console.log("I am inside console ...");


//==================================== FOR LOOP ====================================

//1 Normal for loop
let Array = [2,4,,8,10]; //also see how undefined dtype woks

for(let i = 0;i<Array.length;i++){
    console.log(i ,":" ,Array[i]);
}


//2 Object
let obj = {
    name: "Yash",
    age: 20,
    city: "Pune"
}

// type forin ...emmet
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log( key ,":" ,element);
    }
}


//range forloop
for(const key in obj){
    console.log(key ,":" ,obj[key]);
}


3 character
for(const c : "YashBandal") //wrong..here no :
{
    console.log(c);
}


//emmet forof
for(const c of "YashBandal") //here use of
{
    console.log(c);
}

object = {a: 1, b: 2, c: 3};
for (const element in object) {
    console.log(element);
}

/*
for - numbers, arrays
forin  - objects
forof - strings chars
*/

//==================================== WHILE LOOP ====================================
let i = 0; //initialization
while(i<10){ //condition
    console.log(i);
    i++; //increment
}


//==================================== DO WHILE LOOP ====================================less use
//emmet dowhile
//to run at least one
let i = 10; //initialization
do{
    console.log(i);  //printed atleast once
    i=i+2; //increment
}
while(i<5); //condition..even if wrong..above executed once
