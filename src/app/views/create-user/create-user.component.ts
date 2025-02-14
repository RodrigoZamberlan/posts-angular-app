import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.maxLength(30), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  getErrors(field: FormControl): string | null {
    if (field.touched && !field.valid) {
      if (field.hasError('required')) {
        return "The field is required";
      }

      if (field.hasError('minlength')) {
        return `Minimum ${field.errors?.['minlength'].requiredLength} characters required`;
      }

      if (field.hasError('maxlength')) {
        return `Max ${field.errors?.['maxlength'].requiredLength} characters required`;
      }

      if (field.hasError('email')) {
        return "Please type a valid e-mail address, example: name@provider.domain";
      }
    }
    
    return null;
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
