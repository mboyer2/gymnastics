var express     = require('express')
var bodyParser  = require('body-parser')
var request     = require('request')
var popper		= require('popper.js')
var sessions 	= require("client-sessions")

const mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost:27017/gymnastics', {useMongoClient: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static(__dirname))
app.use(express.static(__dirname + '/public'))

app.use(sessions({
  cookieName: 'session', // cookie name dictates the key name added to the request object 
  secret: 'Zolpidem', // should be a large unguessable string 
  duration: 72 * 60 * 60 * 1000, // how long the session will stay valid in ms 
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds 
}))

app.use(function(req, res, next) {
	console.log('req.session:', req.session)
  if (req.session.seenyou) {
    res.setHeader('X-Seen-You', 'true');
    next();
  } else {
    // setting a property will automatically cause a Set-Cookie response 
    // to be sent 
    req.session.seenyou = true;
    req.session.id = new mongoose.Types.ObjectId;
    res.setHeader('X-Seen-You', 'false');
    next();
  }
})

var gymnasticsSchema = new mongoose.Schema({
	complete: {type: Boolean},
	name: {type: String},			
	description: {type: String},	
	value: {type: String},				
	valuePoints: {type: Number},												
	group:{type: String},			
	groupDescription: {type: String},
	groupIStyle: {type: String},		 	
	groupPoints: {type: Number},										
	totalPoints: {type: Number},															
	pic: {type: String},
	reference: {type: String},
	connection: {type: Boolean},
	bigConnection: {type: Boolean},
	connectionCheck: {type: Boolean},
	bigConnectionCheck: {type: Boolean},
	double: {type: Boolean},
	subtotalPoints: {type: Number},
	groupIV: {type: Boolean},
	totalBonus: {type: Number},
	bonusPoints: {type: Array},
	skillNumberPoints: {type: Number},
	selections: {type: Array},
	totalPoints: {type: Array},
	startValue: {type: Number},
	floor: {type: Object},
	userId: {type:String},
})

var routineSchema = new mongoose.Schema({
	userId: {type:String},
	routine: {type:Array},
})

var GymnasticsModel = mongoose.model('gymnastics', gymnasticsSchema)
var RoutineModel = mongoose.model('routine', routineSchema)

app.get('/', function(request, response){
	response.sendFile(__dirname + '/gymnastics.html')
})




app.post('/select', function(req, res){
	console.log('body? ', req.body)
	req.body.skill['userId'] = req.session.id
	var newGymnasticsSelection = new GymnasticsModel(req.body.skill)
	console.log(newGymnasticsSelection)
	newGymnasticsSelection.save(function(err, createdSelection){

		if (err){
			console.log(err)
			res.send('POST Selection: oops, something went wrong.')
		}
		else {
			res.send(createdSelection)
			// console.log(createdTodo)
		}
	})
})

app.post('/routine', function(req, res){
	console.log('routine body? ', req.body)
	req.body['userId'] = req.session.id
	var newRoutineSelection = new RoutineModel(req.body)
	console.log(newRoutineSelection)
	newRoutineSelection.save(function(err, createdRoutine){

		if (err){
			console.log(err)
			res.send('POST Selection: oops, something went wrong.')
		}
		else {
			res.send(createdRoutine)
			// console.log(createdTodo)
		}
	})
})


//retrieving fresh data t
app.get('/select', function(req, res){
	GymnasticsModel.find({userId : req.session.id}, function(err, docs){   ///study syntax changes. TodoModel is how we access database
		if (err) {
			console.log(err)
			res.send('GET Selections: oops, something went wrong.')
		}
		else {
			res.send(docs)
		}
	}) 
})

app.get('/routine', function(req, res){
	RoutineModel.find({userId : req.session.id}, function(err, docs){   ///study syntax changes. TodoModel is how we access database
		if (err) {
			console.log(err)
			res.send('GET Routine: oops, something went wrong.')
		}
		else {
			res.send(docs)
		}
	}) 
})

app.post('/deleteSelection', function(req, res){
	console.log('delete selection', req.body.id)

	GymnasticsModel.findByIdAndRemove({_id: req.body.id}, function(err, deletedSelection){

		if (err){
			console.log('err', err)
			res.send('POST DELETE SELECTION: oops, something went wrong.')
		}
		else {
			res.send(deletedSelection)
			console.log('success', deletedSelection)
		}
	})
})

app.post('/deleteAll', function(req, res){
	console.log('delete all')

	GymnasticsModel.remove({userId : req.session.id}, function(err, deleted){

		if (err){
			console.log('err', err)
			res.send('POST DELETE SELECTION: oops, something went wrong.')
		}
		else {
			res.send(deleted)
			console.log('success', deleted)
		}
	})
})

app.listen(80, function(){
	console.log('the app is running on post 8080')
})