//controller to get github profile data
myApp.controller('GithubProfileController', function ($http, GithubAPI){
    console.log('in GithubProfileController');
    vm = this;
    vm.profile =[];
    vm.getProfile = function(){
      GithubAPI.githubProfile().then(function(data){
      console.log("profile data returned", data);
      vm.profile = data;
    });
  };//end of getProfile
  vm.getProfile();
});//end of controller
