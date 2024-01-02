class Person {
    constructor(firstName = "D", lastName = "Arunpandian",
        age = 27,
        qualification = "MERN Stack Developer",
        city = "Tirupur",
        contact = "arunpandianda123@gmail.com",
        country = "India") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.qualification = qualification;
        this.city = city;
        this.contact = contact;
        this.country = country;
    }
    getFullname() {
        const fullName = this.firstName + " " + this.lastName;
        return fullName;
    }
}
const person1 = new Person();
const person2 = new Person("Jamesh", "vasanth", 22, "M.Sc", "chennai", "+91 986532585", "India");
console.log(person1.getFullname());
console.log(person1);
console.log(person2.getFullname());
console.log(person2);

/*OUTPUT:

D Arunpandian
Person {
  firstName: 'D',
  lastName: 'Arunpandian',
  age: 27,
  qualification: 'MERN Stack Developer',
  city: 'Tirupur',
  contact: 'arunpandianda123@gmail.com',
  country: 'India'
}
Jamesh vasanth
Person {
  firstName: 'Jamesh',
  lastName: 'vasanth',
  age: 22,
  qualification: 'M.Sc',
  city: 'chennai',
  contact: '+91 986532585',
  country: 'India'
}
*/