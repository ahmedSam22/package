#!/usr/bin/env node

const { execSync, exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { createSpinner } = require("nanospinner");

function install(str) {
  return new Promise((resolve, reject) => {
    exec(str).on("close", (code) => {
      if (code === 0) {
        resolve();
      }
      reject();
    });
  });
}

if (process.argv.length < 3) {
  console.log("enter a name please");
  process.exit(1);
}

const projectName = process.argv[2];
currentPath = process.cwd();
const currPath = "./angproject";
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
  process.exit(1);
}
async function main() {
  try {
    const spinner = createSpinner("Downloadingggggggggg files ... \n").start();
    // process.chdir(projectName);
    await install(`git clone ${repo}`).then(_=>{
        
    const spinner2 = createSpinner("set Project Name ... \n").start();

    fs.rename(currPath, projectName, function (err) {
      if (err) {
        spinner2.success({ text: "failed" });
      } else {
        spinner2.success({ text: "file downloaded" });
      }
    });
    });
    // process.chdir("./angproject/server");


    spinner.success({ text: "file downloaded" });
  } catch (error) {
    console.log(error);
  }
}

main();
