"use strict";
(function () {
    angular.module("exampleApp")
        .directive("unorderedList", function () {
            return {
                restrict: "AE",
                replace: true,
                templateUrl: function (elem, attrs) {
                    return attrs["template"] === "table" ? "/app/common/templates/tableTemplate.html" : "/app/common/templates/itemTemplate.html";
                },
                link: function (scope, element, attrs) {
                    var dataValue = attrs["propertyName"] || attrs["unorderedList"];
                    scope.data = scope.$eval(dataValue);
                    //var data = scope.vm.products;
                    var propertyExpression = attrs["listProperty"] || "price | currency";

                    //if (angular.isArray(data)) {
                    //    var listElem = angular.element("<ul>");
                    //    element.append(listElem);
                    //    for (var i = 0; i < data.length; i++) {
                    //        var itemElement = angular.element("<li>").text(scope.$eval(propertyExpression, data[i]));
                    //        listElem.append(itemElement);
                    //    }
                    //}
                }
            };
        });
}());