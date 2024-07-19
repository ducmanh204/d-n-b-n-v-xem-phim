var app = angular.module("Home", ["ngRoute"]);
  
      app.config(function($routeProvider) {
          $routeProvider
              .when("/home", {
                  templateUrl: "view/trangchu.html",
              })
              .when("/lichchieu",{
                templateUrl:"view/lichchieu.html"
              })
              .otherwise({
                  redirectTo: "/home"
              });
      });