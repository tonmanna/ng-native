"use strict";
var platform_1 = require('nativescript-angular/platform');
var router_1 = require('nativescript-angular/router');
var core_1 = require('@angular/core');
var home_component_1 = require('./home/home.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var about_component_1 = require('./about/about.component');
var detail_component_1 = require('./detail/detail.component');
var COMPONENTS = [
    home_component_1.HomeComponent,
    dashboard_component_1.DashboardComponent,
    about_component_1.AboutComponent,
    detail_component_1.DetailComponent
];
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'about', component: about_component_1.AboutComponent }
        ]
    },
    {
        path: 'detail',
        component: detail_component_1.DetailComponent
    }
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ],
            declarations: [
                COMPONENTS
            ],
            exports: [
                COMPONENTS,
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
//# sourceMappingURL=components.module.js.map