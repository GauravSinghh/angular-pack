// enum Size{Small,Medium=5,Large}
// let mySize:Size = Size.Large;
// console.log(mySize);

// function calculateTax(amount:number) :number{
// return 0;
// }


// type Emp={
//     readonly id:number,
//     name:string
//     retire:(date:Date)=>void

//   }

// let emp:{
// }={ 
//     id:2,
//     name:'uh',
//     retire:(date:Date)=>{
//         console.log(date);
    
//     }
// };

// function calculateWeight(weight: number|string):number{
//     if(typeof weight==='number'){
//         return weight*2;
//     }else{
//         return parseInt(weight)*3;
//     }
// }

// console.log(calculateWeight(10));
// console.log(calculateWeight('40kg'))

// intersection

// type Draggable={
//     Drag:()=> void
// }

// type Resizeable={
//     Resize :() => void
// }

// type widget= Draggable & Resizeable;

// let textbook:widget={
//     Drag() {
        
//     },
//     Resize() {
        
//     },
// }


// literals
// type Quantity=50|100;
// let num :Quantity=100;

  