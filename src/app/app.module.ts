import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ResumeComponent } from './resume/resume.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { TileComponent } from './navigator/tile.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects',      component: ProjectsComponent },
  { path: 'resume',      component: ResumeComponent },
  { path: 'hobbies',      component: HobbiesComponent },
  { path: '',
  redirectTo: '/',
  pathMatch: 'full'
  },
  //,
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ResumeComponent,
    HobbiesComponent,
    TileComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    RouterModule.forChild(appRoutes),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule{ 

}
