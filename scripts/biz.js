angular.module("xs", [])
    .controller('rootCtrl', ['$scope', function (a) {
        a.name = 1;
    }])
    .directive('skateShoes', ['$timeout', function (a) {
        return {
            restrict: 'A',
            link: function (b, c, d) {
                var e, f = {click: !0, mouseWheel: !0};
                b.$watch(d.skateShoes, function () {
                    b && a(function () {
                        e && e.destroy(), e = new IScroll(c[0], f);
                    })
                })

            }
        }
    }]);