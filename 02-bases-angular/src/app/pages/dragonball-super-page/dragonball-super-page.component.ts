import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAppComponent } from '../../components/dragonball/character-app/character-app.component';
import { DragonBallService } from '../../services/dragonball.service';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAppComponent],
})
export class DragonballSuperPageComponent {
  // constructor(public dragonballService: DragonBallService) {}
  public dragonballService = inject(DragonBallService);
}
