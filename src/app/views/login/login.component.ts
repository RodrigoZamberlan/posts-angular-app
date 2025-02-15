import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFieldInputs } from '../../shared/models/field.interface';
import { FieldComponent } from "../../components/field/field.component";

@Component({
  selector: 'app-login',
  imports: [FormsModule, FieldComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  fields: IFieldInputs[] = [
    {name: 'email', label: 'E-mail', placeholder: 'Please type your email address', required: true},
    {name: 'password', label: 'Password', placeholder: 'Please type your password', required: true}
  ]

  onSubmit() {
    console.log(this.email, this.password);
  }
}
