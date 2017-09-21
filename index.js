'use strict';

const AWS = require('aws-sdk');
const sqs = new AWS.SQS();

exports.handler = (event, context, callback) => {
  console.log("request: " + JSON.stringify(event));

  var params = {
    MessageBody: JSON.stringify(event), /* required */
    QueueUrl: process.env.SQS_URL, /* required */
  };
  sqs.sendMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
  var response = {
    statusCode: 200,
    body: {}
  };
  callback(null, response);
};
