const faker = require('faker');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

class User {
    constructor() {
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetName(),
            city : faker.address.city(),
            state : faker.address.state(),
            zip : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}
let newUser = new User();
let newCompany = new Company();
let both = {
    user : (new User()),
    company : (new Company())
}

app.get("/api/users/new", (req, res) => {
    res.send(newUser)
})
app.get("/api/companies/new", (req, res) => {
    res.send(newCompany)
})
app.get("/api/user/company", (req,res) => {
    res.send(both)
})
const server = app.listen(8000, () => 
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
)