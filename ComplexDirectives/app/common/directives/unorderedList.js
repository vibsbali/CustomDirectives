"use strict";
(function () {
    angular.module("exampleApp")
        .directive("unorderedList", function () {
            return function (scope, element, attrs) {

                var dataValue = attrs["propertyName"];
                var data = scope.$eval(dataValue);

                //var data = scope.vm.products;
                var propertyExpression = attrs["listProperty"];


                if (angular.isArray(data)) {
                    var listElem = angular.element("<ul>");
                    element.append(listElem);
                    for (var i = 0; i < data.length; i++) {
                        var itemElement = angular.element("<li>").text(scope.$eval(propertyExpression, data[i]));
                        listElem.append(itemElement);
                    }

                    //listElem.append(angular.element("<li>").text(scope.$eval(propertyExpression, data[i])));
                }
            }
        });
}());