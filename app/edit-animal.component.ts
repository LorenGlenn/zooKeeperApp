import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
  <h3>{{childSelectedAnimal.species}}</h3>
  <h3>Edit Animal</h3>
    <label>Enter info:</label>
    <input [(ngModel)]="childSelectedAnimal.species">
    <button (click)="doneButtonClicked()">Done</button>
  </div>


  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() doneButton = new EventEmitter();


  doneButtonClicked(){
    this.doneButton.emit();
  }
}
