//classes
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment} from './classes/payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

// const invOne =new Invoice('sam','gameexp',400);

// const invTwo =new Invoice('gia','household',450);
// console.log(invOne,invTwo);


//list template instance
const ul = document.querySelector('ul')!;
const li = new ListTemplate(ul)


//inputs
const type= document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//form
const form = document.querySelector('.new-item-form') as HTMLFormElement;



form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();


    //tuples
    let values:[string,string,number];
    values=[tofrom.value,details.value,amount.valueAsNumber];


    let doc:HasFormatter;
    if(type.value==='invoice'){
        doc=new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    li.render(doc,type.value,'end');
   // console.log(doc);
})


//Generics
// const addUID =<T>(obj:T)=>{
//     let uid = Math.floor(Math.random()*1000);
//     return{...obj,uid};
// }

// let docOne = addUID({name:'karam',age:40});
// console.log(docOne);


const addUID =<T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*1000);
    return{...obj,uid};
}
// now all object should have name property

let docOne = addUID({name:'karam',age:40});
//console.log(docOne);



interface Resource<T>{
    uid:number;
    resourceName:string;
    data: T;
}

const docThree:Resource<object>={
    uid:4,
    resourceName:'dolan',
    data:{},
}

const docFour:Resource<string[]>={
    uid:5,
    resourceName:'dolan',
    data:['Gaurav'],
}

enum Vehicle{FORD,KIA,HONDA};

//console.log(Vehicle.FORD);