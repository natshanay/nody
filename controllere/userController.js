

const dbconnection = require('../db/dbConfig'); // Adjust the path as necessary

async function register(req, res) {
    const { username, firstname, email, password } = req.body;

    // Check for missing fields
    if (!username || !email || !firstname || !password) {
        return res.status(400).json({ msg: "Please provide all required information" });
    }

    // Basic email validation
    
    try {
        // Hash the password before storing it
        
        // Insert user into the database
        await dbconnection.query(
            "INSERT INTO users (username, firstname, email, password) VALUES ( ?, ?, ?, ?)",
            [username, firstname, email, password]
        );

        return res.status(201).json({ msg: "User created" });
    } catch (error) {
        console.error("Registration error:", error); // Log the entire error
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ msg: "Username or email already exists" });
        }
        res.status(500).json({ msg: "Something went wrong, try again later" });
    }
}
async function login(req,res){
    res.send("login user");
}

async function check(req,res){
    res.send("check user");
}


module.exports = {register, login, check};  