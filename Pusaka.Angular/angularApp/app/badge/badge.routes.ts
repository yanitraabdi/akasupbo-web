import { RouterModule, Routes } from '@angular/router';

import { BadgeComponent } from './components/badge.component';

const routes: Routes = [
    { path: 'badge', component: BadgeComponent }
];

export const BadgeRoutes = RouterModule.forChild(routes);
