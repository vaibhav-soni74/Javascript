let Data = "Some Data";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
     console.log("Data =", Data)
    }
}

class Admin extends User{
    constructor(name, email){
        super(name,email);
        this.name = name;
        this.email = email;
    }
    editData(){
        Data = "New Data";
        console.log("Data =", Data)
    }
}
let user1 = new User("John","john05@gmail.com")
let user2 = new User("Doe","Doe70@gmail.com")

let admin = new Admin("Dean","Dean70@gmail.com")