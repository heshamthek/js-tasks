/*var cash=1000
var liabilities = 500
console.log(  "cash flow ratio:",cash/ liabilities )

var revenues= 1000
var expenses= 500

console.log(  "net income:",revenues - expenses )



var liabilities = 1000
var equity =500
console.log(  "Total assets:",liabilities + equity )

var profit= 1000
var sales = 500
console.log( "net income:", profit * sales)

console.log( " average:" ,(7+9+2)/3)



console.log( 150-(150 * 0.30) )
  let age=18
if (true){
    age>18
}
if (true){
   age<30
}



console.log(typeof(100))
console.log( typeof(73.9))
console.log( typeof(NaN))
console.log( typeof("Water"))
console.log( typeof(false))
console.log( typeof(9 != 11))
console.log( "4" + "8")
console.log( "4" - "8")
console.log( "name" + 3)
console.log( "name" - 3)
console.log( 1 + "hello")
console.log( "hello" + 1)
console.log( 1 + true)
console.log( "hello" + true)
console.log( typeof (Infinity) )
console.log( 1 == '1')
console.log( 1 === '1')

let str = "WELCOME TO ORANGE";
let result = str.substr(8,2);
let ssss = str.substr(10,7);
let a = "jordan"
let u = str.substr(0,9);
let o = "orange" 
console.log(`${str}`);
console.log(`Hello from ${ssss}`);
console.log(17);
console.log(`${u} ${o}`);
console.log(`${str} ${a} `);
//window.alert("Welcome");


let q = 1_00;
let w = 2_00.5;
let e = 1e2;
let d= 2.4;
console.log(Math.round(Math.min( q,w,e,d)) )
console.log( Math.pow(q, Math.floor(d)))
console.log(Math.round(d))
console.log(Math.floor(d))
console.log(Math.trunc(d))
console.log(Math.round(Math.min(d)) )
console.log(Math.round(w/Math.ceil(d) ))
console.log(w/Math.ceil(d))
*/

/*
let q= "hesham";
let w = true;
let r = 20;
let hesham= ["ok" , "gg"];
let cars = {carname:"bmw" , type:"suv"};

var iiii= "cool";
var s= false;
var d1 = 10;
var k1 = [ "coolapsdkopmas"];
var g1= { firstname:"pasniud" , age:"80"};

const a= "najem";
const s1= false;
const d = 16;
const k = [ "ppppp" , "pomodas"];
const g= { firstname:"hesham" , age:"99"};

var z= "cool";
var x= false;
var c = 10;
var v = [ "coolapsdkopmas"];
var b= {webname:"google" , type:"se"};

let ee= "hesham";
let qq = true;
let rr = 20;
let tt= ["ok" , "gg"];
let yy = {carname:"volvo" , type:"sedan"};

const mm= "najem";
const jj= false;
const uu = 16;
const oo = [ "asdghh" , "pomodas"];
const pp= { firstname:"najem" , age:"81"};

const sss= "google"
const ddd= false
const fff = 1651
const ggg = [ "asfqwe" , "gdfxcv"]
const ttt= { firstname:"sami" , age:"156"}

let zzz= "hesham";
let xxx = true;
let rcc = 898;
let vvvv= ["warerrrr" , "3oooo"];
let bbbb = {firstname:"sami" , age:"156"};
*/

function varScoping() {
    var y1 = 1;

    if (true) {
      var y1 = 4;
      console.log(y1); 
    } 
    console.log(y1);
  }
 varScoping()
  
  function letScoping() {
    let x1 = 5;
  
    if (true) {
      let x1 = 3;   
      console.log(x1); 
    }
    console.log(x1); 
  }
  letScoping()
 //task7 1 Arithmetic Operations
  let a2= 10
  let d2=5
  console.log( a2+d2)
  console.log(a2-d2)
  console.log(a2*d2)
  console.log(a2/d2)
  console.log(a2%d2)

//⦁	Comparison Operations
  console.log(a2>d2)
  console.log(a2<d2)
  console.log(a2==d2)
  console.log(a2!=d2)
  console.log(a2>=d2)
  console.log(a2<=d2)
//⦁	Logical Operations
  console.log(a2+= 5)
  console.log(a2 -= 5)
  console.log(a2 *= 2)
 


//⦁	Assignment Operations
let a3 =true
let d3 = false
  console.log(a2&&d2)
  console.log(a2||d2)
  console.log(!a3)
  console.log(!d3)


//task8

  //window.alert()
  //document.write("good")
  // done












 
  
 