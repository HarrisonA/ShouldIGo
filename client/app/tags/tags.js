angular.module('myApp.tags', [])

.controller('TagsController', ['$scope', 'TagFactory', function ($scope, TagFactory) {
  $scope.userInput = 'warriors';

  $scope.data = [];

  $scope.formatDate = function (timestamp) {
    var date = new Date(timestamp * 1000);
    var hours = date.getHours();            // Hours part from the timestamp
    var minutes = '0' + date.getMinutes();  // Minutes part from the timestamp
    var seconds = '0' + date.getSeconds();  // Seconds part from the timestamp

    if (minutes.length === 3) {             // remove extra leading zero
      minutes = minutes.toString();  minutes = minutes.substring(1);
    }

    var formattedTime;

    if (hours >= 13) {
      hours -= 12;

      // formattedTime = /*date +":" + */ hours +":"+ minutes + "pm"  ;
      formattedTime = hours + ':' + minutes + 'pm';
    } else {
      formattedTime = hours + ':' + minutes + 'am';
    }

    return formattedTime;
  };

  $scope.currentTag = '';

  $scope.getPics = function (tagFromUser) {
    $scope.currentTag = tagFromUser;
    $scope.data = [];  //clear prev pics from page
    console.log('getPics called with: ', tagFromUser);
    TagFactory.getPics(tagFromUser).then(function (dataFromFactory) {
      // dataFromFactory is an object with a data property that is the array of pic objects
      for (var i = 0; i < dataFromFactory.data.length; i++) {
        // push each pic object into the  $scope.data array
        $scope.data.push(dataFromFactory.data[i]);

        //console.log(dataFromFactory.data[i]);
      }

      // note all tags for each object are .tag[0]  (.tag[1], etc)
      // console.log($scope.data);
    });

    $scope.saveASingleTag({ text:tagFromUser });
  };

  $scope.getTags = function () {
    TagFactory.getTags().then(function (arrayOfTagObjs) {
      $scope.tagsReturned = arrayOfTagObjs;
      console.log('\n\nTags returned to the controller: ', arrayOfTagObjs);
    });
  };

  $scope.saveASingleTag = function (TagNameObj) {
    TagFactory.saveASingleTag(TagNameObj);
  };

  $scope.getPics($scope.userInput);

}, ]);
