"use strict";
(function() {
    angular.module("exampleApp")
        .directive("unorderedList", function() {
            return function (scope, element, attrs) {

                var dataValue = attrs["propertyName"];
                var data = scope.$eval(dataValue);
                
                //var data = scope.vm.products;
                var propertyExpression = attrs["listProperty"];
                

                if (angular.isArray(data)) {
                    var listElem = angular.element("<ul>");
                    for (var i = 0; i < data.length; i++) {
                        (function() {
                            var itemElement = angular.element("<li>");
                            listElem.append(itemElement);

                            var index = i;
                            var watcherFn = function (watchScope) {
                                return watchScope.$eval(propertyExpression, data[index]);
                            }

                            scope.$watch(watcherFn, function (newValue, oldValue) {
                                itemElement.text(newValue);
                            });
                        }());
                        
                        //listElem.append(angular.element("<li>").text(scope.$eval(propertyExpression, data[i])));
                    }
                    element.append(listElem);
                }

            };
        });
}());