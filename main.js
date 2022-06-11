#!/usr/bin/env node

const { execSync, exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const {createSpinner} = require("nanospinner");


function install(str) {
    return new Promise((resolve, reject) => {
        exec(str).on("close", (code) => {
            if (code === 0) {
                resolve();
            }
            reject()
        })
    })
}

if (process.argv.length < 3) {
    console.log("enter a name please");
    process.exit(1);
}

const projectName = process.argv[2];
currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const repo = "https://github.com/ahmedSam22/angproject.git";

try {
    fs.mkdirSync(projectPath);
} catch (err) {
    if (err.code === "EEXIST") {
        console.log(`this file ${projectName} mawgoud`);
    } else {
        console.log(error);
    }
    process.exit(1)
} 
async function main() {

    try{
    const spinner = createSpinner("Downloading files ... \n").start();
    process.chdir(projectName);
    await install(`git clone ${repo}`);
    spinner.success({ text: 'server downloaded' });
    process.chdir("./angproject/server");

    // const spinner2 = createSpinner("installing dep ..\n").start();
    // await install("npm i");
    // spinner2.success({ text: "done" });
    // process.chdir("../client");
    // const spinner3 = createSpinner("install client ..\n").start();

    // await install("npm i");

    spinner3.success({ text: "donee" })
    process.chdir("../");
    await install("code .");

    } catch (error) {
    console.log(error);
}}

main();