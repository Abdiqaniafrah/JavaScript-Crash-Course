// oobjects is a collection of properties 

// This is an object (empty)
var person = {
    // key & value method. firstName is key and `Abdiqani` is value
    firstName: "Abdiqani",
    surname: "Afrah",
    age: 25,
    isMale: true,
    balace: 1500.30,
    dob: new Date(1997, 2, 2).toJSON ,
    // nested object
    address: {
        city: "London",
        postcode: "N17"
    }
}
console.log(person.balace)
// accessing the properties of the nested object 
console.log(person.address.postcode)
// gives you a list of all values for this object in the form of an arrray 
console.log(Object.values(person))
// gives you a list of all keys for this object in the form of an arrray 
console.log(Object.keys(person))
console.log(JSON.stringify(person))
