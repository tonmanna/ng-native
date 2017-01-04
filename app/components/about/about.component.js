"use strict";
var core_1 = require('@angular/core');
var dialogs_1 = require('nativescript-angular/directives/dialogs');
var detail_component_1 = require("../detail/detail.component");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("CheckBox", function () { return require("nativescript-checkbox").CheckBox; });
var AboutComponent = (function () {
    function AboutComponent(modal, viewRef) {
        this.modal = modal;
        this.viewRef = viewRef;
    }
    AboutComponent.prototype.toggleCheck = function () {
        this.FirstCheckBox.nativeElement.toggle();
    };
    AboutComponent.prototype.getCheckProp = function () {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    };
    AboutComponent.prototype.openModal = function () {
        var options = {
            context: { msg: 'Hello' },
            viewContainerRef: this.viewRef
        };
        this.modal.showModal(detail_component_1.DetailComponent, options).then(function (result) {
            console.log(result);
        });
    };
    __decorate([
        core_1.ViewChild("CB1"), 
        __metadata('design:type', core_1.ElementRef)
    ], AboutComponent.prototype, "FirstCheckBox", void 0);
    AboutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'about',
            templateUrl: 'about.component.html'
        }), 
        __metadata('design:paramtypes', [dialogs_1.ModalDialogService, core_1.ViewContainerRef])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map