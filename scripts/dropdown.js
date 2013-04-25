var ngdd;

ngdd = angular.module('ng-dropdowns', []);

ngdd.directive('dropdownSelect', function() {
  return {
    restrict: 'EA',
    scope: {
      selected: '=',
      dropdownSelect: '='
    },
    transclude: false,
    replace: true,
    controller: function($scope, $element, $attrs) {
      $scope.active = false;
      $scope.toggleActive = function() {
        return $scope.active = !$scope.active;
      };
      $scope.select = function(text) {
        return $scope.selected = text;
      };
    },
    template: "            <div ng-click='toggleActive()' ng-class='{active:active}' class='wrap-dd-select'>                <span class='selected'>{{selected}}</span>                <ul class='dropdown'>                    <li ng-repeat='item in dropdownSelect'                         ng-class='{divider:item.divider}'                        ng-switch on='item.divider'>                        <span ng-switch-when='true'></span>                        <a ng-switch-default ng-click='select(item.text)' ng-href='{{item.href}}'>                            <span ng-class='item.iconCls'></span>                            {{item.text}}                        </a>                    </li>                </ul>            </div>            "
  };
}).directive('dropdownMenu', function() {
  return {
    restrict: 'EA',
    scope: {
      selected: '=',
      dropdownSelect: '='
    },
    transclude: false,
    replace: true,
    controller: function($scope, $element, $attrs) {},
    template: ""
  };
});