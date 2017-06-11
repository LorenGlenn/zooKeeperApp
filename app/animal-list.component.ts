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
  <div class="panel-body">
  <li><strong>Species of Animal:</strong> {{currentAnimal.species}}</li>
  <li><strong>Name of Animal: </strong> {{currentAnimal.name}}</li>
  <li><strong>The age:</strong> {{currentAnimal.age}}</li>
  <li><strong> Are they a Carnivore or Herbivore?:</strong> {{currentAnimal.diet}}</li>
  <li><strong>Where do they live?:</strong> {{currentAnimal.location}}</li>
  <li><strong>Who are their caretakers?:</strong> {{currentAnimal.caretakers}}</li>
  <li><strong>Sex of the animal:</strong> {{currentAnimal.sex}}</li>
  <li><strong>Likes:</strong> {{currentAnimal.likes}}</li>
  <li><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</li>

  <button (click)="editAnimalButtonHasBeenClicked(currentAnimal)">Edit!</button>
  </div>
  </ul>
  </div>

  <div *ngIf="speciesPipe">
  <ul *ngFor="let currentAnimal of childAnimalList | species:filterBySpecies">
  <div class="bg-success"class="panel-body">
  <li><strong>Species of Animal:</strong>    {{currentAnimal.species}}</li>
  <li><strong>Name of Animal:</strong> {{currentAnimal.name}}</li>
  <li><strong>The age:</strong> {{currentAnimal.age}}</li>
  <li><strong> Are they a Carnivore or Herbivore?:</strong> {{currentAnimal.diet}}</li>
  <li><strong>Where do they live?:</strong> {{currentAnimal.location}}</li>
  <li><strong>Who are their caretakers?:</strong> {{currentAnimal.caretakers}}</li>
  <li><strong>Sex of the animal:</strong> {{currentAnimal.sex}}</li>
  <li><strong>Likes:</strong> {{currentAnimal.likes}}</li>
  <li><strong>Dislikes:</strong> {{currentAnimal.dislikes}}</li>

  <button (click)="editAnimalButtonHasBeenClicked(currentAnimal)">Edit!</button>
  </div>
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
