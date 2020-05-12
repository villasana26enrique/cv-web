import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ToolsComponent } from './components/tools/tools.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ExtraStudiesComponent } from './components/extra-studies/extra-studies.component';
import { ReferencesComponent } from './components/references/references.component';


const routes: Routes = [
    { path: 'home', component: EducationComponent },
    { path: 'languages', component: LanguagesComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'work-experience', component: WorkExperienceComponent },
    { path: 'extra-studies', component: ExtraStudiesComponent },
    { path: 'references', component: ReferencesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
