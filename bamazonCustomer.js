

const inquirer = require("inquirer");
const mysql = require("mysql")
require('console.table');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "XenaBear1!",
    database: "bamazonDB"
  });

 connection.connect(function(err){
     if (err){
         console.log(err);
     }else{
         Table()
     }
 })

function Table(){
    connection.query('SELECT * FROM product', function(err,res){
        if(err){
            console.log(err);   
        }else{
            console.table(res);
            inquirer.prompt([
                {
                    type:'list',
                    name:'interestedToBuy',
                    message:'Where do I direct you to complete your order?',
                    choice: ['yes', 'no']
                }
            ]).then(function(choice){
                if(choice.interestedToBuy == 'yes'){
                    itemSelection(res);
                }else {
                    console.log("Buzz off if you do not want to buy");
                    process.exit(0);
                }
            })
        }
        if (err) throw err;
        buyerPrompt();
    }
    )}


    function buyerPrompt(){
            inquirer
            .prompt([
              {
                type: "input",
                messge: "What is the ID of the product you would like to buy?",
                name:"productID"
              },
              {
                type: "input",
                message: "How many would you like?",
                name: "quantity",
                default: true    
              },
              {
                type: "confirm",
                message: "Are you sure about this selection and amount?",
                name: "confirm",
                default: true    
              }
            ]);
        }
//check database to see if they product is available

// const cost = ""; //relate this to the DB
// bamazonDBResponse();
// function bamazonDBResponse(){
// if (quantity < 0){
//     console.log("insufficnet quantity");
// }else{
//     console.log("Total cost " + cost);
// }
// }

//   connection.connect(function(err) {
   
//   });

// function buyerPrompt(){
//     inquirer
//     .prompt([
//       {
//         type: "input",
//         messge: "What is the ID of the product you would like to buy?",
//         name:"productID"
//       },
//       {
//         type: "input",
//         message: "How many would you like?",
//         name: "quantity",
//         default: true    
//       },
//       {
//         type: "confirm",
//         message: "Are you sure about this selection and amount?",
//         name: "confirm",
//         default: true    
//       }
//     ]).then(function(inquirerResponse){
        // if(inquirerResponse.productID){
        //     function(err,data){ 
        //         if (err) {
        //         return console.log('Error occurred: ' + err);
        //         }
        //     console.log("==========selected ID:============");
        //     console.log(data); 
        //     console.log("================================");
        // }
        // }
    // })
// }