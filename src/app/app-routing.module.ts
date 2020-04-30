import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'musics', pathMatch: 'full' },
  { path: 'musics', loadChildren: () => import('./musics/musics.module').then( m => m.MusicsPageModule)},
  { path: 'musics/:musicId', loadChildren: () => import('./musics/musics-detail/musics-detail.module').then( m => m.MusicsDetailPageModule)},
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  { path: 'register', loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)},
  { path: 'searchbar', loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)},
  { path: 'library', loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)},
  {
    path: 'musics',
    children: [
      {
        path: '',
        loadChildren: () => import('./musics/musics.module').then( m => m.MusicsPageModule)
      },
      {
        path :':musicId',
        loadChildren: () => import('./musics/musics-detail/musics-detail.module').then( m => m.MusicsDetailPageModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'searchbar',
    loadChildren: () => import('./searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then( m => m.LibraryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
