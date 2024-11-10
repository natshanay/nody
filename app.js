const express = require('express');
const app = express();
const port = 2000;
const dbconnection = require("./db/dbConfig");

app.use(express.static('apple'));
async function start() {

    try {
        const result = await dbconnection.execute("select 'test' ");
        console.log(result)
        app.listen(port);
        console.log('database connection established')
        console.log(`list @ port ${port}`)
    } catch (error) {
        console.log(error.message)
    }
}
start();
// Middleware to parse JSON 

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

// Require the user routes
const userRoutes = require("./routes/userRoute");
app.use('/api/users', userRoutes);
