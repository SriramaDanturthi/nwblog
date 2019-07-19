import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { RacesComponent } from './races/races.component';
import { DungeonsComponent } from './dungeons/dungeons.component';
import { TrialsComponent } from './trials/trials.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { EnchantsComponent } from './enchants/enchants.component';
import { MountsComponent } from './mounts/mounts.component';
import { GearComponent } from './gear/gear.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { RefinementComponent } from './refinement/refinement.component';
import { BuildsComponent } from './builds/builds.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    RacesComponent,
    DungeonsComponent,
    TrialsComponent,
    ArtifactsComponent,
    EnchantsComponent,
    MountsComponent,
    GearComponent,
    CampaignsComponent,
    RefinementComponent,
    BuildsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
