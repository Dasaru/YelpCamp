var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&s=adf3225f314db1ac216ea22b6e58e925&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&s=fd9cfb9d759bbc42162ae8952b967903&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1452473767141-7c6086eacf42?ixlib=rb-0.3.5&s=fa02cefc180b843e14076de3ae830062&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&s=adf3225f314db1ac216ea22b6e58e925&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&s=fd9cfb9d759bbc42162ae8952b967903&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1452473767141-7c6086eacf42?ixlib=rb-0.3.5&s=fa02cefc180b843e14076de3ae830062&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&s=adf3225f314db1ac216ea22b6e58e925&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&s=fd9cfb9d759bbc42162ae8952b967903&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1452473767141-7c6086eacf42?ixlib=rb-0.3.5&s=fa02cefc180b843e14076de3ae830062&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-0.3.5&s=adf3225f314db1ac216ea22b6e58e925&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Granite Hill", image: "https://images.unsplash.com/photo-1475564481606-0f9f5d97c047?ixlib=rb-0.3.5&s=fd9cfb9d759bbc42162ae8952b967903&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"},
    {name: "Mountain Goat's Rest", image: "https://images.unsplash.com/photo-1452473767141-7c6086eacf42?ixlib=rb-0.3.5&s=fa02cefc180b843e14076de3ae830062&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"}
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get date from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});