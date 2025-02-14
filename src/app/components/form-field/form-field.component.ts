import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})

export class FormFieldComponent {
  @Input() label: string = "";
  @Input() name: string = "";
  @Input() type: string = "";
  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() control!: FormControl;

  get errorMessage(): string | null {
    if (this.control.touched && this.control.errors && !this.control.valid) {
      if (this.control.hasError("required")) {
        return "The field is required";
      }

      if (this.control.hasError("email")) {
        return "Please type a valid email address";
      }

      if (this.control.hasError("minlength")) {
        return `Minimum of ${this.control.errors['minlength'].requiredLength} characters is required`;
      }

      if (this.control.hasError("maxlength")) {
        return `Max of ${this.control.errors['maxlength'].requiredLength} characters is required`;
      }
    }

    return null;
  } 
}
