"use strict";
var core_1 = require('@angular/core');
var router_1 = require('nativescript-angular/router');
var dialogs_1 = require('nativescript-angular/directives/dialogs');
var rxjs_1 = require("rxjs");
var DetailComponent = (function () {
    function DetailComponent(router, params) {
        var _this = this;
        this.router = router;
        this.params = params;
        this.items$ = new rxjs_1.BehaviorSubject([]);
        var items = [
            { title: 'Tonman' },
            { title: 'Worawut' },
            { title: 'Bobo' },
            { title: 'Javascript' }
        ];
        console.log(params.context.msg);
        var cnt = 0;
        var timer = setInterval(function () {
            if (cnt < 4) {
                _this.items$.next(_this.items$.getValue().concat([items[cnt]]));
                cnt++;
            }
            else {
                clearInterval(timer);
            }
        }, 1000);
    }
    DetailComponent.prototype.goBack = function () {
        this.router.back();
    };
    DetailComponent.prototype.close = function () {
        this.params.closeCallback('closed the ModalDialogs Options');
    };
    DetailComponent.prototype.onItemTap = function (e) {
        for (var key in e) {
            console.log(key + " : " + e[key]);
        }
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: 'detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.RouterExtensions, dialogs_1.ModalDialogParams])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map