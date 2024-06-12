// // // localStorage.setItem("hi","hello world")
// // // console.log(localStorage.getItem("hi"))

// // // // task2

// // // localStorage.setItem("ok","1234")
// // // console.log(localStorage.getItem("ok"))
// // // // task3
// // // localStorage.setItem("ik",true)
// // // console.log(localStorage.getItem("ik"))
// // // // task4

// // // // localStorage.clear()

// // // // task5
// // // // localStorage.removeItem("ok")
// // // // task6

// // // alert(localStorage.getItem("ik"))
// // // // task7
// // // const arrayy = [1, 2, 3];
// // // const rt = localStorage.getItem('Arrayy');
// // // console.log(rt);

// // // // task8
// // // const ob = {name: "John", age: 30}
// // // const obb= localStorage.getItem("ob")
// // // console.log(obb)
// // // // task9
// // // localStorage.setItem("dd",true)
// // // localStorage.setItem("tt","hello")
// // // localStorage.getItem("tt")
// // // localStorage.getItem("dd")
// // // // task10
// // // localStorage.getItem("dd",flase)
   



// // // function ok( done){
// // // console.log(done)
// // // }
// // // function kk(h,d,callme){
// // //  let a = h+ d 
// // // callme(a)
// // // }
// // // kk(1,6,)




// // // setTimeout(function (){                                         
// // //     document.getElementById("demo").innerHTML = "ssss";
// // // }, 3000);

// // // let g =  [ 1,2,3,4,5]

// // // function aa(s){ 
// // //     g.filter(s>g)
// // // }

// // // console.log(aa(3))

 
// // let x = [ 5,8,10,11,13,20]
// // let gg=  x.map(function(f){
// //     return Math.pow(f,2)
// // })
// // console.log(gg)


// // // task2 
// // let yy= x.filter(function(h){
// //     return h>10
// // })
// // console.log(yy)


// // let ar= ["hesham","mothana", "ala"]
// //  let arr= ar.forEach(function(ll){
// //    console.log(ll.toUpperCase()) 
// //  });




// // const aer = [
// //     { id: 1, name: 'hesham' },
// //     { id: 2, name: 'dasdad' },
// //     { id: 3, name: 'lojn' }
// //   ];
  
// //   const nar = aer.map(ss => ss.name);
  
// //   console.log(nar); 

// //   let r = [1,2,3,4,5]
// //   let sum = 0;
// //   r.forEach(function(ddd){
// //       sum=sum+ddd
// //   })
// //   console.log(sum)
   
// //   const pp = ["cool"," mrmrmr","addiddasss"]
// //     let uu = pp.map(function(fff){
// //       return fff.split("").reverse().join()
// //   })
// //   console.log(uu)

// //  let ii = [1,2,3,4,5,6,7,8,9]
// //  let yty= ii.map(function(sdd){ 
// //     return sdd.toString()
// //  })
// //   console.log(yty)
   

// //   let opa= [1,2,3,3,4,4,5]
// // let ytyy= opa.filter(function(sf,sff){
// //     return opa.indexOf(sf)===sff
// // })

// // console.log(ytyy)


// let yuu= [{car:"bmw"}, 
// {namee:"hesham"},]
//     let oppp = yuu.forEach(function(dss){
//         console.log(dss)
//     })


//     let io=["k","dasd","iansd"]
// let asd= io.map(function(kk,oi){
//     return kk+oi
// })
// console.log(asd)

//  let padd= [ 1,2,3,4,5,6,7,8,9,10]
//   let pm= padd.filter(function(fg){
// return fg%2==0

//   })
//   console.log(pm)

//   let koko2= [ 1,2,3,4,5,6,7,8,9,10]
//   let koko = koko2.forEach(function(koko_smoll){
//     const koko_res = Math.pow(koko_smoll,2);
//     console.log(koko_res);
//   });
 

// let x =  function col(dd,as){
// return dd(function(){
//     return 2+2
//     }) + 2
// }  
// console.log(x,3)

  function smai(ppp){
    return ppp+2;
}


 function ujj(call,k){ 
    return function(b){
        let x= b 
        for(let i =0 ; i<k;i++){
            x = call(x)
        }
        return x       
    }
}
let iii= ujj(okok,5 )
console.log(iii(2))

