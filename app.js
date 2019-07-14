var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(request, response) {
	response.render("index");
});

app.listen(3000, function(err) {
	try {
		if(err) throw "Server starting error";
		console.log("Server starting");
	}catch(ServerError) {
		console.log(ServerError.toString());
	}
});