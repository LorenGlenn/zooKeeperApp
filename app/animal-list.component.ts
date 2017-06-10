import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <select (change)="onChangeAge($event.target.value)">
  <option value="allAges">All Ages</option>
  <option value="youngAnimals">Young Animals</option>
  <option value="oldAnimals">Old Animals</option>
  </select>

  <select (change)="onChangeSpecies($event.target.value)">
  <option value="allSpecies">All Species</option>
  <option *ngFor="let currentAnimal of childAnimalList" value="{{currentAnimal.species}}">{{currentAnimal.species}}</option>
  </select>

  <div *ngIf="agePipe">
  <ul *ngFor="let currentAnimal of childAnimalList | age:filterByAge">
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
  </ul>
  </div>
  <div *ngIf="speciesPipe">
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
  </ul>
  </div>`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSenderEdit= new EventEmitter();
  filterBySpecies: string = "allSpecies";
  speciesPipe = "allAges";
  agePipe = null;
  filterByAge: string = "allAges"

  onChangeSpecies(optionFromMenu) {
    this.filterBySpecies = optionFromMenu;
    this.speciesPipe = "allSpecies";
    this.agePipe = null;
  }
  onChangeAge(optionFromMenu) {
    this.filterByAge = optionFromMenu;
    this.agePipe = "allAges";
    this.speciesPipe = null;
  }

  editAnimalButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSenderEdit.emit(animalToEdit);
  }

}
