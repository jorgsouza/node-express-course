const express = require("express");
const app = express();

/*Now that our server is listening for requests being made on localhost:8000 
let's return some mock JSON data. Add the following to your server.js file:*/

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    succes: true,
    message: "succesfully got users. Nice!",
    users: mockUserData,
  });
});

app.listen(8000, function () {
  console.log("server is listening");
});
