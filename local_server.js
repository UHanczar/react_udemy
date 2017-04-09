import express from 'express';

// environtment variable for heroku

const PORT = process.env.PORT || 3000;

// creating our app
// calling express library
const app = express();

// telling, which folder we wanna run
app.use(express.static('public'));

// starting the server using port and callback function
app.listen(PORT, () => console.log(`Express server is up on port 3000`));
