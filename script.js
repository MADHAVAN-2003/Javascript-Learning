//call(),apply(),bind()
let studentOne  = {
    firstname : "Madhavan",
    lastname : "S.V"
}
let studentTwo  = {
    firstname : "Aravinth",
    lastname : "N"
}
function printFullName(age,rollNo){
    console.log(`Fullname : ${this.firstname} ${this.lastname}\nAge : ${age}\nRoll No : ${rollNo}`);
}
//Call and apply are function borrow methods . The diffrence between then is apply takes an array as an arguments
printFullName.call(studentOne , 20 , 23)
printFullName.apply(studentTwo,[ 20 , 1])

//bind - it binds the data of the objects and takes the copy . returns a method when we calls them
let studentFullName = printFullName.bind(studentOne,20,23)
studentFullName() 

// class = (ES6 feature) provides a more structured and cleaner way to 
//               work with objects compared to traditional constructor functions
//               ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax = 0.05){
        return this.price + (this.price * salesTax);
    }
}


const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Coat", 100.00);

product2.displayProduct();

const total = product2.calculateTotal();
console.log(`Total price (with tax): $${total.toFixed(2)}`);

//Setters: 
class Employee{
    set name(name){
      this.empName = name
    }
     specialPrint(){
       console.log(this.empName)
     }
   }
   
let employee = new Employee
employee.name = 'Madhavan'
employee.specialPrint()

//getters
class Employee{
    name = 'madhavan'
    get getName(){
       return this.name
    }
     specialPrint(){
       console.log(this.name)
     }
   }
   
let employee = new Employee
console.log(employee.getName); 

/*Static : If we use static keyword , we dont neeed to create instance for the class . 
         static variable can accesed inside normal decalration but normal variable cannot access inside static.*/
class Student{
    static name = 'Madhavan'
    static age = 20
    static get details(){
      return(Student.name) 
    }
  }
  
  console.log(Student.details)