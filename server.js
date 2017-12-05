var express     = require('express')
var bodyParser  = require('body-parser')
var request     = require('request')

const mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost:27017/gymnastics', {useMongoClient: true})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(express.static(__dirname))
app.use(express.static(__dirname + '/public'))

var gymnasticsSchema = new mongoose.Schema({

	name: {type: String},			
	description: {type: String},	
	value: {type: String},				
	valuePoints: {type: Number},												
	group:{type: String},			
	groupDescription: {type: String},		 	
	groupPoints: {type: Number},										
	totalPoints: {type: Number},															
	pic: {type: String},
	reference: {type: String},
	connection: {type: Boolean},
	double: {type: Boolean}	
})

var GymnasticsModel = mongoose.model('gymnastics', gymnasticsSchema)

app.get('/', function(request, response){
	response.sendFile(__dirname + '/gymnastics.html')
})




app.post('/select', function(req, res){
	console.log('body? ', req.body)

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


//retrieving fresh data t
app.get('/select', function(req, res){
	GymnasticsModel.find({}, function(err, docs){   ///study syntax changes. TodoModel is how we access database
		if (err) {
			console.log(err)
			res.send('GET Selections: oops, something went wrong.')
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

app.listen(8080, function(){
	console.log('the app is running on post 8080')
})