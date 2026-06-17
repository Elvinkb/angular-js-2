var app =angular.module('myapp', []);
app.controller("myctrl", function($scope) {
    $scope.studentname = "";
    $scope.count = 0;
    $scope.isloggedin = true;
    $scope.students = [
        "Rahul",
        "Aisha",
        "Anjali",
        "Shahid Khan",
        "Gokul"
    ];
    });
app.directive("collegeinfo", 
    function() {
return{
    restrict: "E",
    template: "<h3>College information</h3>"

}});




