/*
    YouHaveTheFloor (YHTF)
    (c)2020 Trevor D. Brown. All rights reserved.

    admin.ts - the server for the administrative interface.
*/

import express = require('express');
import YHTF_UIRenderer = require('./../ui/renderer');

const app: express.Application = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}));

// / - the Base URL for the site. Making a GET request to this endpoint results in the homepage of the site being sent.
app.get('/', (req, res) => {
    res.status(200).send(YHTF_UIRenderer.renderHTML());
});


app.listen(3001, () => {
    console.log("YHTF Administrative Interface Server is running on port 3001.");
});