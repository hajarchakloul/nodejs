// Imports the Express framework for creating web applications.
const express = require("express");
//  Imports the body-parser middleware for parsing incoming request bodies (usually JSON).
const bodyparser = require("body-parser");
// Imports the jsonfile module for reading and writing JSON files.
const jsonfile = require("jsonfile");
// Imports a file named db.json (likely containing your initial data).
const db = require("./db/db.json");
// Creates an Express application instance.
const app = express();
// Defines the port on which the server will listen for requests
const port = process.env. PORT || 3000;

//APIs will be here ...

// app.listen(port, ...): Starts the Express server and listens on the specified port.
// The callback function logs a message to the console indicating the server is running on the chosen port.
app.listen(port, () => {
console. log( `${port} is running ... `);
});
app.use(bodyparser.urlencoded({extended:true})); 
//replace your directory / folder name with process. cwd()

app.use("/public", express.static(process.cwd() + "/public"));
// // API1  afficher index
app.get("/", (req, res) => {
    res.sendFile(process.cwd() + "/views/index.html");
    });
// // API2 git all posts
    app.get("/posts", (req, res) => {
        res.json(db);});
        
// // API3 get post by id
        app.get("/posts/:id", (req, res) => {
            let id = req.params.id;
            let post = db.find((post) => post.id == id);
            if (!post) {
            res. json({ Message: "Not Found Any Post Related to Your ID" });
            } else {
            res. json(post);
            }
            });
// // API4 get post by id

app.get("/posts-author/:author", (req, res) => {
    let author = req.params.author;
    let posts = db.find((post) => post.author == author);
    if (!posts) {
    res. json({ Message: `No Posts Found Against This Author ${author} `});
    } else {
    res. json(posts);
    }
    });
// // Api5 show blog post form description(create)
            app.get("/postform", (req, res) => {
                res. sendFile("views/postform.html", { root:__dirname});});

// // API 6 update form
app.get("/updateform", (req, res) => {
    res. sendFile("views/updateform.html", { root :__dirname });
    
    });

// // API9
app. post("/updatepost", (req, res) => {
    let id = req.body.id;
    let post = db.find((post) => post.id == id);
    if (!post) {
    res.status(404) . json({ message: "Not Found Any Post Related to Your ID" });
    } else {
    post.title = req.body.title;
    post.content = req.body.content;
    post.category = req.body.category;
    post.tags = req.body.tags.split(",");
    jsonfile.writeFile("./db/db.json", db, (err) => {
    if (err) {
    console.error(err);
    res.status(500). json({ message: "Error writing to database" });
    } else {
    res. json({
    message:` Post updated successfully! Your Post Id is ${id}` ,
    });
    }
});
    }
});
// // API10
app.get("/deletepost/:id", (req, res) => {
    let id = req.params.id;
    let post = db.find((post) => post.id == id);
    if (!post) {
    res.status(404) . json({ message: "Not Found Any Post Related to Your ID" });
    } else {
    let index = db.indexOf(post);
    db.splice(index, 1);
    jsonfile.writeFile("./db/db. json", db, (err) => {
    if (err) {
    console.error(err);
    res.status(500). json({ message: "Error writing to database" });
    } else {
    res. json({
    message: `Post deleted successfully! Your Post Id was ${id}`,
    });
    }
    });
    }
});

