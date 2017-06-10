import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `


  <select (change)="onChangeSpecies($event.target.value)">
  <option value="allSpecies">All Species</option>
  <option *ngFor="let currentAnimal of childAnimalList" value="{{currentAnimal.species}}">{{currentAnimal.species}}</option>
  </select>

  <ul *ngFor="let currentAnimal of childAnimalList | species:filterBySpecies">
  <li>Species of Animal: {{currentAnimal.species}}</li>
  <li>{{currentAnimal.name}}</li>
  <li>{{currentAnimal.age}}</li>
  <li>{{currentAnimal.diet}}</li>
  <li>{{currentAnimal.location}}</li>
  <li>{{currentAnimal.caretakers}}</li>
  <li>{{currentAnimal.sex}}</li>
  <li>{{currentAnimal.likes}}</li>
  <li>{{currentAnimal.dislikes}}</li>

  <button (click)="editAnimalButtonHasBeenClicked(currentAnimal)">Edit!</button>
  </ul>`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSenderEdit= new EventEmitter();

  filterBySpecies: string = "allSpecies";
  speciesPipe = null;

  onChangeSpecies(optionFromMenu) {
    this.filterBySpecies = optionFromMenu;

  }


  editAnimalButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSenderEdit.emit(animalToEdit);
  }

}
