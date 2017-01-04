import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs'
import {BehaviorSubject} from "rxjs";
@Component({
    moduleId : module.id,
    selector : 'detail',
    templateUrl : 'detail.component.html'
})
export class DetailComponent {

    public items$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

    constructor(private router : RouterExtensions, private params : ModalDialogParams){
        let items: any[] = [
            { title: 'Tonman'},
            { title: 'Worawut'},
            { title: 'Bobo'},
            { title: 'Javascript'}
        ];
        console.log(params.context.msg);
        let cnt = 0;
        let timer = setInterval(() =>{
            if(cnt < 4){
                this.items$.next([...this.items$.getValue(),items[cnt]]);
                cnt++;
            }else{
                clearInterval(timer);
            }
        },1000)

    }
    public goBack(){
        this.router.back();
    }
    public close(){
        this.params.closeCallback('closed the ModalDialogs Options');
    }

    public onItemTap(e){
        for (let key in e){
            console.log(`${key} : ${e[key]}`)
        }
    }

}