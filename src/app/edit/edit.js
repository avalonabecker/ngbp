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
  });

  $scope.user = {
    name: 'awesome user'
  };

    //resumeCRUDService.fetchResume('abraham_becker');

  });
