"use strict";
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var components_module_1 = require('./components/components.module');
var nativescript_angular_1 = require("nativescript-angular");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [
                components_module_1.ComponentsModule,
                nativescript_angular_1.NativeScriptRouterModule.forRoot(components_module_1.routes)
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map