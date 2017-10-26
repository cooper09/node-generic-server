var _ = require('underscore');
var read = require("node-read");

//cooper s - lets ad the REQUEST module to the proceedings
var request = require('request');

module.exports = function(req, res){

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')

console.log("we'll fake a body for now, but this is where the serious stuff goes...")

read('https://www.statista.com/topics/2498/programmatic-advertising/', function(err, article, res) {

    console.log("article: ", article.dom );

});//end read   

var body = [
    {
      id: 'Article One',
      title: 'Adtech Conquers the World',
      author: 'Tony Thielmann',
      image: 'img/articleOne.jpg',
      headline: 'The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.',
      url:"http://mpointinc.com/",
      shortUrl:"http://mpointinc.com/", 
      article:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis"
    },
    {
      id: 'Article Two',
      title: 'Machine Learning and You',
      author: 'Mr. Spock',
      image: 'img/articleTwo.jpg',
      headline: 'Where no man has gone before..',
      url:"http://adage.com/article/digitalnext/ad-tech-worst-thing-happened-advertising/301992/",
      shortUrl:"http://adage.com/",
      article:"at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil i"
    },
    {
      id: 'Article Three',
      title: 'More Media Optimization Madness: ad:tech New York',
      author: 'AdExchanger',
      image: 'img/articleThree.jpg',
      headline: 'ad:tech New York at the Javits Convention Center, NYC, Wednesday-Friday, November 4-6',
      url:"https://adexchanger.com/ad-exchange-news/more-media-optimization-madness-adtech-new-york/",
      shortUrl:"http://adexchanger.com/",
      article: "othica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
    }
  ];

 var JSONObj = {
    "data" : body
    
 }

 res.json(body);


}//end module