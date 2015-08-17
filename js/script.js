$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
    $(".navbar-collapse").collapse('hide');
});

$(".navbar-brand").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(".navbar-collapse").collapse('hide');
});



var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'/pages/home.html',
    })
    
    .when('/login',{
        templateUrl:'/pages/login.html',
        controller:'loginController'
        
    })
    
    .when('/help',{
        templateUrl:'/pages/help.html',
        controller:'mainController'
        
    })
    
    .when('/catalogue',{
        templateUrl:'/pages/catalogue.html',
        controller:'mainController'
    })
    
    .when('/Faq',{
        templateUrl:'/pages/Faq',
        controller:'catalogueController'
        
    })
    
    .when('/about',{
        templateUrl:'/pages/about.html',
        controller:'mainController'
    })
});
    
 myApp.controller('mainController',function(){
     
 })   