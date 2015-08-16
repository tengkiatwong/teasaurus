$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});

$(".navbar-brand").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    
});

var myApp = angular.module('mvmt',['ngRoute']);

myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'/pages/home.html',
        controller:'mainController'
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
        templateUrl:'/pages/catalogue',
        controller:'catalogueController'
    })
    
    .when('/Faq',{
        templateUrl:'/pages/Faq',
        controller:'catalogueController'
        
    })
    
    .when('/about',{
        templateUrl:'/pages/about'
    })
});
    
    