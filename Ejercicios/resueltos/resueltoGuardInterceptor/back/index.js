const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

// DECLARE JWT-secret
const JWT_Secret = 'your_secret_key';


var testUser = { username: 'test', password: '1234' };

app.post('/api/authenticate', (req, res) => {

    if (req.body) {
        var user = req.body;
        console.log(user);

        if (testUser.username === req.body.username && testUser.password === req.body.password) {
            var token = jwt.sign(user, JWT_Secret);
            res.status(200).send({
                signed_user: user,
                token: token
            });
        } else {
            res.status(403).send({
                errorMessage: 'Auth required!'
            });
        }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide username and password'
        });
    }

});

app.get("/api/test", function(req, res) {
    let authHeader = (req.headers.authorization || '');
    if (authHeader.startsWith("Bearer ")) {
        token = authHeader.substring(7, authHeader.length);
    } else {
        return res.send({ message: 'No Auth' });
    }
    console.log("Test desde el backend, llega en el header " + JSON.stringify(authHeader));

    if (token) {
        jwt.verify(token, JWT_Secret, function(err) {
            if (err) {
                return res.json({ message: 'Invalid Token' });
            } else {
                console.log("Validado el token y todo ok");
            }
        });
    } else {
        return res.send({ message: 'No token' });
    }

    res.json("test");
});


app.listen(5000, () => console.log('Server started on port 5000'));