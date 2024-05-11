class Person {

    constructor(name,age,occupation,Email,Address) {
    
    this.name = name;    
    this.age = age;    
    this.occupation = occupation;
    this.Email=Email;
    this.Address=Address;
    }
    
    }
    
    const person = new Person("Diwakar p", 32, "IT Executive","N.diwakar92@gmail.com","4 2 Main Road, Ellaiamman nagarr,korattur,chennai-76");
    
    console.log("Name:", person.name);    
    console.log("Age:", person.age);    
    console.log("Occupation:", person.occupation);
    console.log("Email:", person.Email);
    console.log("Address:", person.Address);