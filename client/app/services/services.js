angular.module('myApp.services', [])

.factory('TagFactory', ['$http', function($http){


  // var getPics = function (tagName){
  //   var url = 'https://api.instagram.com/v1/tags/'+tagName+'/media/recent?access_token=626002909.1677ed0.27d491a7a96044eb816a0f8bc3d87993';
  //   //console.log("the url:", url);

  //   return $http.get(url)
  //           .then(function (response) {
  //             return response.data; 
  //             }).catch(function(err){ console.log("Instagram get API failed!", err)}); 
  // };
  
  // TO fix the CORS origins, issue, the request must be made from the server side
  var getPics = function (tagName){
    return $http.post("/instagram", {tagName:tagName})
            .then(function (response) {
              console.log("Response from IG post request: ", response);
              return response.data;
              }).catch(function(err){ console.log("API postTag failed!", err)});
  };


  var getTags = function(){
    // console.log("get tags called once.")
    return $http.get("/data")
            .then(function (response) {
              // console.log("response from getTags request: ", response.data)
              return response.data; 
              }).catch(function(err){ console.log("API getTags failed!", err)}); 
  };

  var saveASingleTag = function(TagNameObj){
    return $http.post("/data", TagNameObj)
            .then(function (response) {
              console.log("Response from Tag post requesst: ", response);
              }).catch(function(err){ console.log("API postTag failed!", err)});

  };

  return {
    getPics: getPics,
    getTags: getTags,
    saveASingleTag: saveASingleTag
  }

}]);