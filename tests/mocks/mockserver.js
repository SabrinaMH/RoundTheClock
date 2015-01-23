var express = require('express');
var app = express();
 
var customers = {"Customer":[{"Name":"EnergiMidt","Projects":{"Project":{"Name":"Mit EnergiMidt v3","Tasks":{"Task":{"Name":"Udvikling"}}}}},{"Name":"Mjølner"}]};
 
app.get('/customer', function(req, res) {
    res.json(200, customers);
});
 
app.listen(process.env.PORT || 9001);
