import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <h1>Zoo Keeper App</h1>

    <animal-list [childAnimalList]="masterAnimalList" (clickSenderEdit)="editAnimal($event)"></animal-list>
    <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButton)="finishedEditing()"></edit-animal>
    
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  `
})

export class AppComponent {
selectedAnimal = null;

masterAnimalList: Animal[] = [
new Animal('Kodiak Bear','Baloo',5,'carnivore','Kodiak Islands','Peter','male','salmon','climbing trees'),
new Animal('Komodo Dragon','Dragon',7,'carnivore','Indonesia','Bob','female','buffalo','cold days'),
new Animal('Bengal Tiger','ShereKhan',2,'carnivore','India','Janet','male','deer','men')
];

finishedEditing() {
    this.selectedAnimal = null;
  }
editAnimal(clickedAnimal) {
   this.selectedAnimal = clickedAnimal;
 }
 addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
