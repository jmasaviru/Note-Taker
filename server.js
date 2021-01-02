// Dependencies
const express = require("express");

// Express configuration
const app = express();

// Define the Port
const PORT = process.env.PORT || 5000;

// Set up Express for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public")); 

// Routes for API & HTML
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


// Set up the Listener
app.listen(PORT, () => console.log("App listening on PORT: ${PORT}"));
