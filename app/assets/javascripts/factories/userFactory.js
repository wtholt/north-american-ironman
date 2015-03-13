calendarApp.factory('userData', ['$http', '$routeParams', function($http, $routeParams){
  userData = {
    data: {
      users: [
      ]
    }
  }

  userData.loadUsers = function(){
    $http.get('/users.json').success(function(usersFromServer){
      _.each(usersFromServer, function(user){
        userData.pushUser(user)
      })
    })
  }

  userData.pushUser = function(group) {
    userData.data.users.push(user);
  }

  userData.addUser = function(user) {
    $http.post('/users.json', user).success(function(usersFromServer){
      userData.pushUser(usersFromServer);
    })
  }

  return userData;
}])