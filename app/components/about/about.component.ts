import { Component, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { ModalDialogService , ModalDialogOptions} from 'nativescript-angular/directives/dialogs'
import { DetailComponent } from "../detail/detail.component";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);


@Component({
    moduleId : module.id,
    selector : 'about',
    templateUrl : 'about.component.html'
})
export class AboutComponent {

    @ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor(private modal : ModalDialogService ,private viewRef: ViewContainerRef){

    }

    public toggleCheck() {
        this.FirstCheckBox.nativeElement.toggle();
    }
    public getCheckProp() {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    }

    public openModal(){
        let options: ModalDialogOptions = {
            context: { msg: 'Hello' },
            viewContainerRef: this.viewRef
        };

        this.modal.showModal(DetailComponent, options).then((result) => {
            console.log(result);
        });
    }
}