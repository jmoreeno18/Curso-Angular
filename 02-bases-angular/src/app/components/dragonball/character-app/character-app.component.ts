import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';
import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-character-app',
  templateUrl: './character-app.component.html',
})
export class CharacterAppComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields() {
    this.name.set(''), this.power.set(0);
  }
}
