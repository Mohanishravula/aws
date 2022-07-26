const signupModal = require("../modals/signup-modal");
const bcrpyt = require("bcryptjs");

const checkExistingUser = async (username)=>{
    let existingUser = false;
    await signupModal.find({username: username}).then((userData) => {
        if(userData.length){
            existingUser = true;
        }
    });
    return existingUser;
}

const generatePasswordHash = async (password)=>{
    const salt=10;
    let hash =""
    return new Promise((resolve , reject)=>{
        bcrpyt.genSalt(salt).then((hashSalt)=>{
            bcrpyt.hash(password, hashSalt).then((passwordHash)=>{
                resolve(passwordHash);
            })
    
        })

    })
    
    
}

module.exports ={checkExistingUser, generatePasswordHash};
