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
    <input [(ngModel)]="childSelectedAnimal.name">
    <input [(ngModel)]="childSelectedAnimal.age">
    <input [(ngModel)]="childSelectedAnimal.diet">
    <input [(ngModel)]="childSelectedAnimal.location">
    <input [(ngModel)]="childSelectedAnimal.caretakers">
    <input [(ngModel)]="childSelectedAnimal.sex">
    <input [(ngModel)]="childSelectedAnimal.likes">
    <input [(ngModel)]="childSelectedAnimal.dislikes">
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
