const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const BaumController = require('./controller/baum.controller');

const app = express();
const port = process.env.PORT || 3010;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



app.get('/api/posts', (req, res) => {
    BaumController.getPosts().then(data => {
        if(data.error){
            res.status(500).json(data);
        }else{
            res.json(data);
        }
    });
});

app.post('/api/post', (req, res) => {
    BaumController.createPost(req.body).then(data => {
        if(data.error){
            res.status(500).json(data);
        }else{
            res.json(data);
        }
    })
})

app.delete('/api/post', (req, res) => {
    console.log(req.body);
    BaumController.deletePost(req.body.id).then(data => {
        if (data.error) {
            res.status(500).json(data);
        } else {
            res.json(data)
        }
    })
})

app.get('/api/creators', (req, res) => {
    BaumController.getCreators().then(data => {
        if(data.error){
            res.status(500).json(data);
        }else{
            res.json(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})