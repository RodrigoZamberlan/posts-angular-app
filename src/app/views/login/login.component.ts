import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILoginRequest, UserService } from '../../services/user.service';
import { IFormFieldInputs } from '../../shared/models/form-field.interface';
import { FormFieldComponent } from '../../components/form-field/form-field.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormFieldComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {}

  isLoading: boolean = false;
  errorMessage: string | null = null;

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.email, Validators.required]),
    password: new FormControl<string>('', [Validators.required]),
  });

  fields: IFormFieldInputs[] = [
    {
      name: 'email', 
      label: 'E-mail', 
      placeholder: 'Please type your email address', 
      control: this.loginForm.controls['email'], 
      required: true
    },
    {
      name: 'password', 
      label: 'Password', 
      placeholder: 'Please type your password', 
      type:"password", 
      control: this.loginForm.controls['password'], 
      required: true
    }
  ]

  onSubmit() {
    const email: string | null = this.loginForm.controls['email'].value;
    const password: string | null = this.loginForm.controls['password'].value;

    if (!email || !password) {
      this.errorMessage = "E-mail or password not defined";
      return;
    }

    const loginRequest: ILoginRequest = {email: email, password: password};

    if (this.loginForm.valid) {
      this.isLoading = true;
      this.userService.authenticate(loginRequest).subscribe({
        next: (response) => {
          if (response.message === 'Login successful') {
            this.router.navigate(['/home'])
          }
        },
        error: (error) => {
          if (error.status === 401) {
          this.errorMessage = 'Wrong e-mail or password, please try again!';
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      })
    }
  }
}
