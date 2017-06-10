import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul *ngFor="let currentAnimal of childAnimalList">
  <li> {{currentAnimal.species}}</li>
  <li>{{currentAnimal.name}}</li>
  <li>{{currentAnimal.age}}</li> <li>{{currentAnimal.diet}}</li>
  <li>{{currentAnimal.location}}</li>
  <li>{{currentAnimal.caretakers}}</li>
  <li>{{currentAnimal.sex}}</li> <li>{{currentAnimal.likes}}</li>
  <li>{{currentAnimal.dislikes}}</li>

  <button (click)="editAnimalButtonHasBeenClicked(currentAnimal)">Edit!</button>
  </ul>`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSenderEdit= new EventEmitter();


  editAnimalButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSenderEdit.emit(animalToEdit);
  }

}
