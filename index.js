var http = require("http")

//create server object
http.createServer(function (req,res) {
    res.write("Hello Web!")
    res.end()
})
.listen(8080)