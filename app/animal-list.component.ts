import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul *ngFor="let currentAnimal of childAnimalList">
  <li> {{currentAnimal.species}}<br> {{currentAnimal.name}}<br>{{currentAnimal.age}}<br> {{currentAnimal.diet}}<br>{{currentAnimal.location}}<br> {{currentAnimal.caretakers}} <br>{{currentAnimal.sex}} <br> {{currentAnimal.likes}}<br>{{currentAnimal.dislikes}}</li>

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
