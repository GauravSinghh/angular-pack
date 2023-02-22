//classes
import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/payment.js';
// const invOne =new Invoice('sam','gameexp',400);
// const invTwo =new Invoice('gia','household',450);
// console.log(invOne,invTwo);
//list template instance
const ul = document.querySelector('ul');
const li = new ListTemplate(ul);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//form
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //tuples
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    li.render(doc, type.value, 'end');
    // console.log(doc);
});
//Generics
// const addUID =<T>(obj:T)=>{
//     let uid = Math.floor(Math.random()*1000);
//     return{...obj,uid};
// }
// let docOne = addUID({name:'karam',age:40});
// console.log(docOne);
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
// now all object should have name property
let docOne = addUID({ name: 'karam', age: 40 });
const docThree = {
    uid: 4,
    resourceName: 'dolan',
    data: {},
};
const docFour = {
    uid: 5,
    resourceName: 'dolan',
    data: ['Gaurav'],
};
var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["FORD"] = 0] = "FORD";
    Vehicle[Vehicle["KIA"] = 1] = "KIA";
    Vehicle[Vehicle["HONDA"] = 2] = "HONDA";
})(Vehicle || (Vehicle = {}));
;
//console.log(Vehicle.FORD);
