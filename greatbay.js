var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "saugatuck244!",
    database: "auction_db"
});

// INQUIRE
function startApp() {
    inquirer.prompt([{
        type: "input",
        message: "Would you like to [BID] on an item or [POST] an item?",
        name: "userChoice"
    }]).then(function (res) {
        if (res.userChoice === "BID") {
            selectAll()
        } else if (res.userChoice === "POST") {
            postItem()
        } else {
            console.log("That's not a choice");
        }
    })
}

function postItem() {
    inquirer.prompt([{
        type: "input",
        message: "What's the name of the item?",
        name: "itemName"
    }, {
        type: "input",
        message: "What category would you place this item under?",
        name: "itemCat"
    }, {
        type: "number",
        message: "What is the opening bid on this item?",
        name: "itemOBid"
    }]).then(function (res) {
        createItem(res.itemName, res.itemCat, res.ItemOBid)
    })
}
// DB CONNECTION 


function selectAll() {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query('SELECT * FROM items', function (err, res) {
            if (err) throw err;

            console.log(res);
        })

        connection.end();
    });

}

function createItem(name, cat, bid) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        console.log("Inserting a new Item...\n");


        connection.query(
            "INSERT INTO items SET ?", {
                item_name: name,
                category: cat,
                opening_bid: bid
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
                // Call updateProduct AFTER the INSERT completes

            }
        );

        connection.end();
    });

}
startApp()