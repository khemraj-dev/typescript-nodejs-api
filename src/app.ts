import * as express from "express";
import * as bodyParser from "body-parser";

import * as book from "./controllers/bookController";
// Our Express APP config
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get('/', book.allBooks)
app.get('/:id', book.getBook)
app.post('/', book.addBook)
app.put('/:id', book.updateBook)
app.delete('/:id', book.deleteBook)

const server = app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"))
});