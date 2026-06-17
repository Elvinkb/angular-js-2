var app =angular.module('myapp', []);
app.controller("myctrl", function($scope,collegeservice) {
    $scope.collegename = collegeservice.college;
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
    $scope.fee= 1000;
    $scope.today= new Date();
    $scope.search = "";
    });
app.directive("collegeinfo", 
    function() {
return{
    restrict: "E",
    template: "<h3>College information</h3>"

}

});
app.service(
    "collegeservice",
    function() {
        this.college = "Fisat";
    }
);
