import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],

    declarations: [
        NavigationComponent,
        SidebarComponent
    ],

    exports: [
        NavigationComponent,
        SidebarComponent
    ]
})

export class SharedModule { }
