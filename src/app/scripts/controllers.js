(function() {
  'use strict';

  angular
    .module('iq')
    .controller('navbarCtrl', function() {

    })
    .controller('homeCtrl', function() {

    })
    .controller('testCtrl', ['$scope', '$rootScope', '$state', 'questions', function($scope, $rootScope, $state, questions) {
      $scope.questions = questions
      $scope.question = questions[0]
      $scope.questionIndex = 0
      $scope.answerQuestion = function(ai) {
        var card = $('#test .card')
        card.addClass('inactive')
        setTimeout(function() {
          card.removeClass('inactive')
        }, 350)
        var question = $scope.questions[$scope.questionIndex]
        $rootScope.results.push($scope.question.answer === ai)
        $scope.questionIndex++;
        if ($scope.questionIndex + 1 == $scope.questions.length) $state.go('results')
        $scope.question = $scope.questions[$scope.questionIndex]
      }
    }])
    .controller('resultsCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
      if (!$rootScope.results.length) $state.go('home')
      $('#mc-embedded-subscribe-form').ajaxChimp({
        callback: function(){
          $('#mc_embed_signup').fadeOut()
          setTimeout(function() {
            $('.brain-fill').addClass('active')
          }, 200)
          var results = $rootScope.results,
            score = 0
          for (var i = 0; i < results.length; i++) {
            if (results[i]) score++
          }
          var score = $scope.score = (parseInt((score / results.length) * 100) + 30);
          $scope.$apply()
          // if (score < 95) $scope.desc = 'below'
          // else if (score > 94 && score < 106) $scope.desc = 'around'
          // else if (score > 105 && score < 120) $scope.desc = 'higher than'
          // else if (score > 120) $scope.desc = 'much higher than'
        }
      })
    }])

})();
