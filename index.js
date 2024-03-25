const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use( express.json());
app.use( cors() );

const con = mysql.createConnection({
	host:"sql6.freesqldatabase.com",
	user:"sql6694194",
	password:"hWqIq9Y1ga",
	database:"sql6694194"
});

app.post("/save", (req,res) => {
	let data = [req.body.name, req.body.feedback];
	console.log(data);
	let sql = "insert into student1 values(?, ?)";
	con.query(sql, data,(err,result) => {
		if(err)		res.send(err);
		else			res.send(result);
	});
});

app.listen(9000, () => {console.log("ready"); });