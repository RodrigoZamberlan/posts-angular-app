import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IFormFieldInputs } from '../../shared/models/form-field.interface';

@Component({
  selector: 'app-form-field',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})

export class FormFieldComponent {
  @Input() formFieldInputs!: IFormFieldInputs;

  get errorMessage(): string | null {
    if (this.formFieldInputs.control.touched && this.formFieldInputs.control.errors && !this.formFieldInputs.control.valid) {
      if (this.formFieldInputs.control.hasError("required")) {
        return "The field is required";
      }

      if (this.formFieldInputs.control.hasError("email")) {
        return "Please type a valid email address";
      }

      if (this.formFieldInputs.control.hasError("minlength")) {
        return `Minimum of ${this.formFieldInputs.control.errors['minlength'].requiredLength} characters is required`;
      }

      if (this.formFieldInputs.control.hasError("maxlength")) {
        return `Max of ${this.formFieldInputs.control.errors['maxlength'].requiredLength} characters is required`;
      }
    }

    return null;
  } 
}
