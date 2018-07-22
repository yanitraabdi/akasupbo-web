import { RouterModule, Routes } from '@angular/router';

import { AvatarComponent } from './components/avatar.component';

const routes: Routes = [
    { path: 'avatar', component: AvatarComponent }
];

export const AvatarRoutes = RouterModule.forChild(routes);
