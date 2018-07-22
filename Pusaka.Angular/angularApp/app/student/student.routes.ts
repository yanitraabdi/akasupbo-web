import { RouterModule, Routes } from '@angular/router';

import { StudentComponent } from './components/student.component';

const routes: Routes = [
    { path: 'student', component: StudentComponent }
];

export const StudentRoutes = RouterModule.forChild(routes);
