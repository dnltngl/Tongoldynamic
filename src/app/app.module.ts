import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ReferencesComponent } from './references/references.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//Step 2 - Routing module import

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AboutComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    AchievementsComponent,
    ReferencesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
