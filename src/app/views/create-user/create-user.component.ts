import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { IFormFieldInputs } from '../../shared/models/form-field.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, FormFieldComponent, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm = new FormGroup({
    fullname: new FormControl<string>('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email: new FormControl<string>('', [Validators.email, Validators.maxLength(30), Validators.required]),
    password: new FormControl<string>('', [Validators.minLength(8), Validators.required])
  });

  formFields: IFormFieldInputs[] = [
    {label: 'Fullname', name: 'fullname', placeholder: 'Type here your full name', control: this.userForm.controls['fullname'], required: true},
    {label: 'E-mail', name: 'email', placeholder: 'Type here your best e-mail address', control: this.userForm.controls['email'], required: true},
    {label: 'Fullname', name: 'password', placeholder: 'Type here a strong password', control: this.userForm.controls['password'], type: 'password', required: true}
  ]

  onSubmit() {
    console.log(this.userForm.value);
  }
}
