angular.module('myApp', [
  'myApp.services',
  'myApp.tags',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    // Your code here
    .when('/tags',{
      templateUrl: 'app/tags/tags.html',
      controller: 'TagsController'
    })
    .otherwise({ 
      templateUrl: 'app/tags/tags.html',
      controller: 'TagsController'
    })

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    //$httpProvider.interceptors.push('AttachTokens');
})




// added $http


// ***********************************
// testing IG API
// $("img").one("load", function() {
// 					  // do stuff
// 					}).each(function() {
// 					  if(this.complete) $(this).load();
// 					});	

// // Unix time converter function
// var unixTimeConvert = function (timestamp){
// 	var date = new Date(timestamp*1000);
// 	// Hours part from the timestamp
// 	var hours = date.getHours();
// 	// Minutes part from the timestamp
// 	var minutes = "0" + date.getMinutes();
// 	// Seconds part from the timestamp
// 	var seconds = "0" + date.getSeconds();

// 	// Will display time in 10:30:23 format
// 	// var formattedTime = date + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// 	//console.log("typedate is:", typeof date);
// 	if (hours>=13){
// 		hours-=12;
// 		var formattedTime = date +"\n" + hours +":"+ minutes + "pm"  ;
// 	} else {
// 		var formattedTime = date +"\n" + hours +":"+ minutes + "am"  ;
// 	}
// 	return formattedTime;
// }

//
//for (i=0; i<3; i++){

// 
// Loop through an array of tags
// var tags = ["baybridgetraffic", "liegeoakland", "madoak", "eraoakland"  ]
var tags = ["southbeach","venicebeach", "liegeoakland", "madoak", "eraoakland"  ]


// $(document).ready(function(){

// 	//for (i=0; i<tags.length; i++){
// //		getPics(tags[i]);
// 	//}

// })








/*
ajaxRunner("districtOakland");
ajaxRunner("liegeoakland");
ajaxRunner("madoak")
ajaxRunner("eraoakland")
*/
// ajaxRunner();
//}
// END of testing IG API
// ***********************************



/*


Oakland: 
The district
Liege
Mad Oak
Era
Plank
Parliament
Somar
Easy Lounge
Kingman;s Lucky Lounge


Vegas:
Hakkasan
The Bank
Tao
Chataeu
1 Oak
Omni
Tryst
XS
Surrender
Drais
Sayers
Hyde
Marquee
Light
Rehab

LA:
Playhouse
Sayers
DBA
Xen
Lure
Greystone
Hooray Henry's 
V Lounge
Cosmo

*/




