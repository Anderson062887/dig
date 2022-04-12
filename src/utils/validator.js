class PasswordStrategy{
    validate(pass,confpass){
        console.log(confpass)
        // if(pass.length !== confpass.length){
        //     return false;
        // }
        // if ((pass !== "" &&  pass.length > 4 ) && (pass === confpass ) ) {

        //     return true;
        // }
        // return false;
    }
}


class NameStrategy{


    validate(name){
        if (name !== "" &&  name.length > 1 ) {

            return true;
        }
        return false;
    }
}

class EmailStrategy{


    // validate(email){
    //         return email.includes("@");   
    // }
    validate(email) {
        console.log("reg")
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

class Validator{
    constructor(str){
     this.strategy = str || null;
    }
    setStrategy(str){
    this.strategy = str;
    return this;
    }
     validate(input){
         return this.strategy.validate(input);
     }

}

export {Validator,NameStrategy,EmailStrategy,PasswordStrategy}