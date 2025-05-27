const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { nextTick } = require('process');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 10000)

app.use((req, res, next) => {
  const userId = req.headers['user-id'];

  // If no user-id header, you can choose to block or allow. Here we allow.
  if (!userId) {
    return next();
  }

  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] += 1;
  } else {
    numberOfRequestsForUser[userId] = 1;
  }

  console.log('Current count for', userId, numberOfRequestsForUser[userId]);

  if (numberOfRequestsForUser[userId] > 5) {
    // Block the request with 404 if limit exceeded
    return res.status(404).send('Rate limit exceeded');
  }

  // Allow request to proceed
  next();
});

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  const userId = req.headers['user-id'];
  let requestCount = 0;
  if (userId && numberOfRequestsForUser[userId]) {
    requestCount = numberOfRequestsForUser[userId];
  }
  res.status(200).json({ requestCount });
});

app.listen(3000);
module.exports = app;