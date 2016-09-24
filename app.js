var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    expressSanitizer = require("express-sanitizer");
    
//requiring the only route
var indexRoute = require("./routes/index"); //--

    
// APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public")); // TELLS EXPRESS TO LOOK FOR FILES IN THE 'PUBLIC' DIRECTORY --
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer()); // SANITIZES REQUEST BODIES ON ALL ROUTES


//using the only route
app.use("", indexRoute); //--



// LISTEN FOR REQUESTS
app.listen(process.env.PORT, process.env.IP, function(){
  console.log("SERVER IS RUNNING!");
});
 