const { execSync,exec} = require("child_process");
const path = require("path");
const fs = require("fs");
const createSpinner = require("nanospinner");


// function install(str) {
//     return new Promise((resolve , reject)=>{
//         exec(str).on("close" , (code)=>{
//             if(code ===0){
//                 resolve();
//             }
//             reject()
//         })
//     })
// }

if(process.argv.length < 3){
    console.log("enter a name please");
    process.exit(1);
}