import { RouterModule } from '@angular/router';
export var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'badge', loadChildren: './badge/badge.module#BadgeModule' },
    { path: 'avatar', loadChildren: './avatar/avatar.module#AvatarModule' }
];
export var AppRoutes = RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map