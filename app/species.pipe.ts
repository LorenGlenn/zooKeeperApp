import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';


@Pipe({
  name: "species",
  pure: false
})


export class SpeciesPipe implements PipeTransform {
  transform(input: Animal[], desiredSpecies) {
    var output: Animal[] = [];
    for (var i = 0; i < input.length; i++) {
      if (desiredSpecies === "allSpecies"){
        output.push(input[i]);
      }
      else if (input[i].species === desiredSpecies) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
