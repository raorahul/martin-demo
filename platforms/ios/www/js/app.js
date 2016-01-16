
var app = angular.module('myApp', ['onsen', 'ui.router']);

app.controller('mainController', ['$scope', function($scope) {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var icons = [
  'social-octocat',
  'android-happy',
  'ios-flask',
  'ios-speedometer',
  'erlenmeyer-flask',
  'male',
  'female',
  'aperture',
  'nuclear',
  'ios-paw'
  ];

  function prepareItems() {
    var finArr =[];
    var item;
    for (var i = 0; i < 100; ++i) {
      item = {
        icon: icons[getRandomInt(0, 10)],
        title: 'Message #' + (i + 1),
        label: getRandomInt(1, 5) + 'h ago',
        desc: 'Bacon ipsum dolor amet andouille frankfurter tenderloin, pastrami...'
      };

      finArr.push(item);
    }

    return finArr;
  }

  $scope.items = prepareItems();

  $scope.searchText = null;
}]);
