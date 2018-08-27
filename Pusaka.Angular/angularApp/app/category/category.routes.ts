import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './components/category.component';

const routes: Routes = [
    { path: 'category', component: CategoryComponent }
];

export const CategoryRoutes = RouterModule.forChild(routes);
