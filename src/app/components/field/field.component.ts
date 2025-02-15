import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFieldInputs } from '../../shared/models/field.interface';

@Component({
  selector: 'app-field',
  imports: [],
  templateUrl: './field.component.html',
  styleUrl: './field.component.scss'
})

export class FieldComponent {
  @Input() fieldInputs!: IFieldInputs;
  @Output() value = EventEmitter<string>;

  onInputChange(event: Event) {
    console.log(event);
  }
}
