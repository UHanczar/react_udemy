import express from 'express';

// creating our app
// calling express library
const app = express();

// telling, which folder we wanna run
app.use(express.static('public'));

// starting the server using port and callback function
app.listen(3000, () => console.log('Express server is up on port 3000'));
