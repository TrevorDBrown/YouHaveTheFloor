/*
    YouHaveTheFloor (YHTF)
    (c)2020 Trevor D. Brown. All rights reserved.

    renderer.ts - renders HTML based on provided data and components.
*/

import YHTF_Components = require('./components');
import cheerio = require('cheerio');

export function renderHTML(): string{    
    var baseHTML: string = "<!DOCTYPE html><html><head><title>Testing</title></head><body><h1>Testing!</h1></body></html>";
    return baseHTML;
}