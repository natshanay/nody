const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome");
});

// Require the user routes
const userRoutes = require("./routes/userRoute");
app.use('/api/users', userRoutes);

app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log(`Listening on port ${port}`);
});