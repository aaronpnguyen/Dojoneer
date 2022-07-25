const DojoneerController = require('../controllers/dojoneer.controller');

module.exports = app => {
	app.get('/api/NAMES', DojoneerController.findAllNAMES);
	app.post('/api/NAMES', DojoneerController.createNewNAME);
	app.get('/api/NAMES/:_id', DojoneerController.findOneNAME);
	app.put('/api/NAMES/:_id', DojoneerController.updateOneNAME);
	app.delete('/api/NAMES/:_id', DojoneerController.deleteNAME);
}