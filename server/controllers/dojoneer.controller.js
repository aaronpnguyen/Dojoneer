model.js
const CONTROLLER_NAME = require('../models/CONTROLLER_NAME');


// GET ALL
// **********************************************************
model.exports.findAll--NAME = (req, res) => {
	NAME.find()
		.then(allNAMES => {
			res.json({results: allNAMES})
		})
		.catch(err => {
			res.json(err);
		})
}


//  CREATE
// **********************************************************
model.exports.createNew--NAME = (req, res) => {
	NAME.create(req.body)
		.then(newlyCreatedNAME => {
			res.json({results: newlyCreatedNAME})
		})
		.catch(err => {
			res.json(err);
		})
}


//  FIND ONE
// **********************************************************
model.exports.findOne--NAME = (req, res) => {
	NAME.findOne({_id: req.params._id})
		.then(NAME => {
			res.json({results: NAME})
		})
		.catch(err => {
			res.json(err);
		})
}


//  UPDATE ONE
// **********************************************************
model.exports.updateOne--NAME = (req, res) => {
	NAME.findOneAndUpdate(
		{_id: req.params._id},
		req.body,
		{ new: true, runValidators: true }
	)
		.then(updatedNAME => {
			res.json({results: updatedNAME})
		})
		.catch(err => {
			res.json(err);
		})
}

//  DELETE
// **********************************************************
model.exports.delete--NAME = (req, res) => {
	NAME.deleteOne({_id: req.params._id})
		.then(NAME => {
			res.json({results: NAME})
		})
		.catch(err => {
			res.json(err);
		})
}

