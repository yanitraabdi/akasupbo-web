import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AvatarComponent } from './components/avatar.component';
import { AvatarRoutes } from './avatar.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        AvatarRoutes
    ],

    declarations: [
        AvatarComponent
    ],

    exports: [
        AvatarComponent
    ]
})

export class AvatarModule { }
