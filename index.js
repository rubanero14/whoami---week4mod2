const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

const port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req,res){
	res.json({message:"Request head parser"})
})

router.get('/whoami', function(req,res){
	const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	const language = req.headers["accept-language"];
	const browser = req.headers["user-agent"];
	res.json({ipaddress:ip, language:language, software:browser})
})

app.use('/',router)
app.listen(port);

console.log("Listening at port "+port
	)