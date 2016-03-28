(function () {

  var smiliesRating = angular.module('angular-smilies-rating', []);

  smiliesRating.directive('smiliesRating', function () {
    return {
      template: '<div class="cc-selector-2"><input id="sad" type="radio" name="mood" ng-model="_help.mood" value="sad" /> <label class="drinkcard-cc sad" for="sad"></label><input id="neutral" type="radio" name="mood" ng-model="_help.mood" value="neutral" /> <label class="drinkcard-cc neutral" for="neutral"></label><input id="normal" type="radio" name="mood" ng-model="_help.mood" value="normal" /> <label class="drinkcard-cc normal" for="normal"></label><input id="happy" type="radio" name="mood" ng-model="_help.mood" value="happy" /> <label class="drinkcard-cc happy" for="happy"></label></div>'
    }
  });

})();