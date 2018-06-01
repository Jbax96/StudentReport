mainApp.controller("studentController", function($scope){
    $scope.student = {
        firstName: "Jordan",
        lastName: "Baxter",
        fees: 250,

        subjects:[
            {name: 'Ethical Hacking', mark:75},
            {name: 'Operating Systems', mark:70},
            {name: 'Enterprise Web Systems', mark:65},
            {name: 'Language and Compilers', mark:65}
        ],
         fullName: function(){
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
         }
    };
});