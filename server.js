const express = require("express");
const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    ejs.renderFile(path.join(__dirname, "views", "partials", "header.ejs"), (err, header) => {
        if (err) return res.status(500).send("Error loading header");
        ejs.renderFile(path.join(__dirname, "views", "partials", "footer.ejs"), (err, footer) => {
            if (err) return res.status(500).send("Error loading footer");
            res.locals.header = header;
            res.locals.footer = footer;
            next();
        });
    });
});

app.get("/", (req, res) => {
    fs.readFile(path.join(__dirname, "views", "index.html"), "utf-8", (err, content) => {
        if (err) return res.status(500).send("Error loading home page");
        res.send(res.locals.header + content + res.locals.footer);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});