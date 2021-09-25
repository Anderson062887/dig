// import axios from "axios";
const url = `http://localhost:3030/api/`;

// const load = JSON.stringify({email:"aaaa@mail.com",password:"andy"})
// const config = {
//     method:"POST",
//     credentials: 'omit',
//     headers:{ 
    
//         'Content-Type':'application/json'
//     },
   
// }

const CreateUser = async(user)=>{
    return fetch(`${url}auth/signup`,{
    
        method:"POST",
        credentials: "omit",
                headers: {
                    'Content-Type': 'application/json',
                   
          },
    
        body:JSON.stringify(user),
    })
    .then(d => d.json())
    .catch(e => console.log(e))


}


const signin = async(user)=>{
return fetch(`${url}auth/signin`,{
    
    method:"POST",
    credentials: "omit",
            headers: {
                'Content-Type': 'application/json',
               
      },

    body:JSON.stringify(user),
})
.then(d => d.json())
.catch(e => console.log(e))
}

// {
        
//     method:"GET",
//     credentials: "omit",
//             headers: {
//                 'Content-Type': 'application/json',
//                ' x-auth-token':token,
               
//       },

//     // body:JSON.stringify(user),
// }

const allTask = async({token})=>{
    

        return fetch(`${url}tasks`,{
            method:"GET",
            credentials: 'omit',
            headers:{
                'Content-Type': 'application/json',
                'x-auth-token':`${token}`,
            }
        })
        .then(d => d.json())
        .catch(e => console.log(e))
        
}


const getMyProfile = async({token})=>{

    return fetch(`${url}users/profile/me`,{
        method:"GET",
        credentials: 'omit',
        headers:{
            'Content-Type': 'application/json',
            'x-auth-token':`${token}`,
        }
    })
    .then(d => d.json())
    .catch(e => console.log(e))
    }
    export {signin,getMyProfile,allTask,CreateUser}
