import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul *ngFor="let currentAnimal of childAnimalList">
  <li> {{currentAnimal.species}}<button (click)="editAnimal(currentAnimal)">Edit!</button></li>
  </ul>`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];


}
