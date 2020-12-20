/*
    YouHaveTheFloor (YHTF)
    (c)2020 Trevor D. Brown. All rights reserved.

    client.ts - the server for the client interface.
*/

import express = require('express');
import path = require('path');

import YHTF_UIRenderModule = require('./../ui/renderer');
import YHTF_DBModule = require('./../db/db');

const app: express.Application = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Static Routes
// "Shared" resources
app.use('/shared/bootstrap/', express.static(path.join(__dirname, './../../../node_modules/bootstrap/dist/')));
app.use('/shared/jquery/', express.static(path.join(__dirname, './../../../node_modules/jquery/dist/')));
app.use('/shared/fontawesome/css/', express.static(path.join(__dirname, './../../../node_modules/@fortawesome/fontawesome-free/css/')));
app.use('/shared/fontawesome/webfonts/', express.static(path.join(__dirname, './../../../node_modules/@fortawesome/fontawesome-free/webfonts/')));

// Client Interfaces specific static routes
app.use('/css/', express.static(path.join(__dirname, './../../ui/client/css/')));
app.use('/js/', express.static(path.join(__dirname, './../../ui/client/js/')));
app.use('/images/', express.static(path.join(__dirname, './../../private/assets/user-profile/')));

// Endpoints
// / - the Base URL for the site. Making a GET request to this endpoint results in the homepage of the site being sent.
app.get('/', (req, res) => {
    res.status(200).send(YHTF_UIRenderModule.renderHTML());
});

// / - the Login endpoint.
app.get('/login', (req, res) => {
    res.status(200).sendFile("login.html");
});

app.get('/rooms/:roomPublicID', (req, res) => {
    // Verify room exists
    // Verify credentials
    // Send room data as HTML file.
    res.status(200).sendFile(path.join(__dirname, "./../../ui/client/room-template.html"));
});


app.listen(3000, () => {
    console.log("YHTF Client Interface Server is running on port 3000.");
});