const express = require('express');
const path = require('path');

module.exports = function(controller) {


    controller.publicFolder('/', path.join(__dirname,'..','public'));

    console.log('Chat with me: http://localhost:' + (process.env.PORT || 3000));
}