const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan')
const app = express();
const db = require('./config/keys').mongoURI;
const Items = require('./routes/api/items');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('tiny'))
mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => {
		console.log('DB connected');
	})
	.catch((err) => console.log('error' + err));

app.use('/api/items', Items);

//serve static assets if in production

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on ${port}`));
