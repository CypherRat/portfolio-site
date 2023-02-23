import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Abhimanyu Kumar | About',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Abhimanyu Kumar | Contact',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Abhimanyu Kumar | Projects',
  },
  {
    path: 'skills',
    component: SkillsComponent,
    title: 'Abhimanyu Kumar | Skills',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
