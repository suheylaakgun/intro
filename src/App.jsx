 import React from 'react'
// import Todos from './pages/Todos'
// import Users from './pages/Users'

// export default function App() {
//   return (
//     <div>
//       <Todos/>
//       <Users/>
//     </div>
//   )
// }

export class Customer
{
    constructor(id,customerNumber)
    {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"12345");
//prototyping  
customer.name = "Süheyla Akgün"
console.log(customer.name);
Customer.bisey = "bişey";
console.log(Customer.bisey);
console.log(customer.customerNumber);

class IndividualCustomer extends Customer
{
    constructor(firstName, id,customerNumber)
    {
        super(id, customerNumber);
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer
{
    constructor(companyName, id,customerNumber)
    {
      super(id, customerNumber)
      this.companyName = companyName;
    }
}