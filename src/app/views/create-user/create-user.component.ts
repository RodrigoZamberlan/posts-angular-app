import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../components/form-field/form-field.component";

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, FormFieldComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.maxLength(30), Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required])
  });

  onSubmit() {
    console.log(this.userForm.value);
  }
}
