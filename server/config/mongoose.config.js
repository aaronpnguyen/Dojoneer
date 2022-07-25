const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://rootroot:rootroot@julycluster.bmp3n2i.mongodb.net/dojoneer_db?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("***** Established a connection to the database"))
	.catch(err => console.log("***** Something went wrong when connecting to the database", err));