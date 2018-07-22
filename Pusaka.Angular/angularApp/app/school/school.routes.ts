import { RouterModule, Routes } from '@angular/router';

import { SchoolComponent } from './components/school.component';

const routes: Routes = [
    { path: 'school', component: SchoolComponent }
];

export const SchoolRoutes = RouterModule.forChild(routes);
