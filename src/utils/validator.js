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


    validate(email){
            return email.includes("@");   
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