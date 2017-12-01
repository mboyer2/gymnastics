var express     = require('express')
var bodyParser  = require('body-parser')
var request     = require('request')

const mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost:27017/travel-project', {useMongoClient: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static('./public'))

var gymnasticsSchema = new mongoose.Schema({

	name: {type: String},			//'Handstand to L-sit',
	description: {type: String},	//'From handstand lower to L-sit or stradle L-sit',
	value: {type: },				//this.floor.group1.A,
	valuePoints: {type: },			//this.floor.group1.A.AValue,									
	group:{type: String},			//'Group I',
	groupDescription: {type: },		//this.floor.group1.description, 	
	groupPoints: {type: },			//this.floor.group1.group1points,								
	totalPoints: {type: Number},	//0,															
	pic: {type: },
	reference: {type: },
	connection: {type: Boolean},	//true
})

var gymnasticsModel = mongoose.model('gymnastics', gymnasticsSchema)