import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'badge', loadChildren: './badge/badge.module#BadgeModule' },
    { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarModule' },
    { path: 'school', loadChildren: './school/school.module#SchoolModule' },
    { path: 'student', loadChildren: './student/student.module#StudentModule' },
    { path: 'category', loadChildren: './category/category.module#CategoryModule' }
];

export const AppRoutes = RouterModule.forRoot(routes);
