const mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/openhotel'; //connection string to the database

mongoose.connect(dburl); //connecting to the daatabase string from mongoose;

mongoose.connection.on('connected', () => { //when connection is successful
    console.log('Mongoose connected to ' + dburl)
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected')
});

mongoose.connection.on('error', (err) => {
   console.log('Mongoose connection error: '+err) 
});

//MONGOOSE CONNECTION EVENTS


//WHEN CLOSED ON LINUX AND OSX
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination(SIGINT)');
        process.exit(0);
    });
});

//WHEN CLOSED ON HEROKU AND OTHER HOSTING PLATFORMS
process.on('SIGTERM', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination(SIGTERM)');
        process.exit(0);
    });
});

//WHEN CLOSED ON ANY OTHER PLATFORM OR PROCESS FROM THE ONES ABOVE
process.once('SIGUSR2', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination(SIGTERM)');
        process.kill(process.pid, 'SIGUSR2');
    });
});