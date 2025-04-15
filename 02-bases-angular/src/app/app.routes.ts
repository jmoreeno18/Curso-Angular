import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { Component } from '@angular/core';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
