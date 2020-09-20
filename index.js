const inquirer = require("inquirer");
let Database = require("./async-db");
let cTable = require("console.table");

const db = new Database({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "ems"
  });
  
