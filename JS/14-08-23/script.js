console.clear()
// class Building{
//   #noOfTowers;
//   #noOfParkings;
//   #pricePerSqFt;
//   constructor(not, nop, p){
//     this.#noOfTowers = not;
//     this.#noOfParkings = nop;
//     this.#pricePerSqFt = p;
//   }
  
//   getNoOfTower(){
//     console.log(this.#noOfTowers)
//   }
  
//   setNoOfTowers(num){
//     this.#noOfTowers = num
//   }
// }

// let sohiniApt =  new Building(5, 10, 3000)

// // console.log(sohiniApt.#noOfTowers)

// // sohiniApt.increasePrice()

// // console.log(sohiniApt.#pricePerSqFt)

// // sohiniApt.#pricePerSqFt = 5000

// // console.log(sohiniApt.#pricePerSqFt)

// sohiniApt.getNoOfTower()
// sohiniApt.setNoOfTowers(30)
// sohiniApt.getNoOfTower()

class Employee{
  name;
  age;
  gender;
  email;
  mobile;
  salary;
  constructor(name, age, gender, email = 'employee@emp.com', mobile = '7777777777', salary = '10000'){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
    this.mobile = mobile;
    this.salary = salary;
  }
}

class Manager extends Employee{
  teamCount;
  bonus;
  location;
  constructor(name, age, gender, email, mobile, salary, teamCount, bonus, location){
    super(name, age, gender, email, mobile, salary)
    this.teamCount = teamCount
    this.bonus = bonus
    this.location = location
  }
}

class Cleaner extends Employee{
  workingHrs;
  esi;
  noOfHolidays;
  constructor(wh, esi, noh){
    super('Sumit', 35, 'Male')
    this.workingHrs = wh
    this.esi = esi
    this.noOfHolidays = noh
  }
}

let manager = new Manager('Nirmal', 26, 'Male', 'nirmal@gmail.com', '7845514785', 100000, 10, 10000, 'Kolkata')

console.log(manager)

let cleaner = new Cleaner(10, 200000, 3)
console.log(cleaner)