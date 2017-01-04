import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { ComponentsModule, routes } from './components/components.module';
import {NativeScriptRouterModule} from "nativescript-angular";


@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        ComponentsModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
