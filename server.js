import express from 'express';

// creating our app
// calling express library
const app = express();

// environtment variable for heroku
const port = process.env.PORT || 3000;

// using express middleware for redirectiong openweathermap traffic from https to http
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

// telling, which folder we wanna run
app.use(express.static('public'));

// starting the server using port and callback function
app.listen(port, () => console.log(`Express server is up on port ${port}`));
