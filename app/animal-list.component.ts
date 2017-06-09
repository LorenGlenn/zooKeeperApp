import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul *ngFor="let currentAnimal of childAnimalList">
  <li> {{currentAnimal.species}}<button (click)="editAnimalButtonHasBeenClicked(currentAnimal)">Edit!</button></li>
  </ul>`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSenderEdit= new EventEmitter();


  editAnimalButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSenderEdit.emit(animalToEdit);
  }

}
