$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
    $(".navbar-collapse").collapse('hide');
});

$(".navbar-brand").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(".navbar-collapse").collapse('hide');
});

//Login Page Javascript

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});









//Angular code
var myApp = angular.module('myApp',['ngRoute']);


myApp.controller('catalogueCtrl',['$scope',function($scope){
    
}]);


myApp.config(function($routeProvider){
    
    $routeProvider
    
    .when('/',{
        templateUrl:'/pages/home.html',
    })
    
    .when('/login',{
        templateUrl:'/pages/login.html',
        controller:'mainController'
        
    })
    
    .when('/register',{
        templateUrl:'/pages/register.html',
        controller:'mainController'
    
    })
    
    .when('/help',{
        templateUrl:'/pages/help.html',
        controller:'mainController'
        
    })
    
    .when('/catalogue',{
        templateUrl:'/pages/catalogue.html',
        controller:'catalogueCtrl'
    })
    
    .when('/Faq',{
        templateUrl:'/pages/Faq',
        controller:'catalogueController'
        
    })
    
    .when('/about',{
        templateUrl:'/pages/about.html',
        controller:'mainController'
    })
    
    .when('/contact',{
        templateUrl:'/pages/contact.html',
        controller:'mainController'
    })
});
    
 myApp.controller('mainController',function(){
     
 })   