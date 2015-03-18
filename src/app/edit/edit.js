angular.module( 'resumeWrangler.edit', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'edit', {
    url: '/edit',
    views: {
      "main": {
        controller: 'EditCtrl',
        templateUrl: 'edit/edit.tpl.html'
      }
    },
    data:{ pageTitle: 'Edit Resume' }
  });
})

.controller( 'EditCtrl', function EditCtrl( $scope, resumeCRUDService ) {
  // This is simple a demo for UI Boostrap.
  $scope.dropdownDemoItems = [
    "The first choice!",
    "And another choice for you.",
    "but wait! A third!"
  ];

  resumeCRUDService.fetchResume('abraham_becker').then(function(resp){
    $scope.resume = resp.data.Resume.StructuredXMLResume;

    //Position History
    //if the first position is the global employee description, only show the rest
    var orgOneName = $scope.resume.EmploymentHistory.EmployerOrg.PositionHistory[0].OrgName.OrganizationName;
    if (orgOneName === 'General Skills Description'){
      $scope.positionHistory = $scope.resume.EmploymentHistory.EmployerOrg.PositionHistory.from(1);
    } else {
      $scope.positionHistory = $scope.resume.EmploymentHistory.EmployerOrg.PositionHistory;
    }

  });

  $scope.user = {
    name: 'awesome user'
  };

  $scope.text = function($scope){
    $scope.text = 'this is text';
  }
    //resumeCRUDService.fetchResume('abraham_becker');

  });
