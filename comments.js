// create web server
const express = require('express');
const app = express();
app.listen(3000);

// create comments array
let comments = [
    {username: 'Alice', body: 'I love cats!'},
    {username: 'Bob', body: 'I love dogs!'},
    {username: 'Charlie', body: 'I love parrots!'}
];

// create GET route for /comments
app.get('/comments', (req, res) => {
    res.send(comments);
});

// create POST route for /comments
app.post('/comments', (req, res) => {
    let username = req.query.username;
    let body = req.query.body;
    comments.push({username: username, body: body});
    res.send('Comment added');
});

// create DELETE route for /comments
app.delete('/comments', (req, res) => {
    let username = req.query.username;
    comments = comments.filter(comment => {
        return comment.username !== username;
    });
    res.send('Comment deleted');
});

// create PUT route for /comments
app.put('/comments', (req, res) => {
    let username = req.query.username;
    let body = req.query.body;
    comments.forEach(comment => {
        if (comment.username === username) {
            comment.body = body;
        }
    });
    res.send('Comment updated');
});

// test the routes
// GET
// http://localhost:3000/comments
// POST
// http://localhost:3000/comments?username=David&body=I love rabbits!
// DELETE
// http://localhost:3000/comments?username=Bob
// PUT
// http://localhost:3000/comments?username=David&body=I love dogs!