import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormFieldComponent } from "../../components/form-field/form-field.component";
import { IFormFieldInputs } from '../../shared/models/form-field.interface';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { IUser } from '../../shared/models/user.interface';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  constructor(private userService: UserService, private router: Router) {}


  isLoading: boolean = false;
  errorMessage: string | null = null;

  userForm = new FormGroup({
    firstname: new FormControl<string>('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    lastname: new FormControl<string>('', [Validators.minLength(3), Validators.maxLength(30), Validators.required]),
    email: new FormControl<string>('', [Validators.email, Validators.maxLength(30), Validators.required]),
    role: new FormControl<'admin' | 'regular'>('regular'),
    password: new FormControl<string>('', [Validators.minLength(8), Validators.required]),
    isActive: new FormControl<boolean>(true, [Validators.required]),
  });

  formFields: IFormFieldInputs[] = [
    {
      label: 'First name',
      name: 'firstname', 
      placeholder: 'Type here your first name', 
      control: this.userForm.controls['firstname'], 
      required: true
    },
    {
      label: 'Last name', 
      name: 'lastname', 
      placeholder: 'Type here your last name', 
      control: this.userForm.controls['lastname'], 
      required: true
    },
    {
      label: 'E-mail', 
      name: 'email', 
      placeholder: 'Type here your best e-mail address', 
      control: this.userForm.controls['email'], 
      required: true
    },
    {
      label: 'Password', 
      name: 'password', 
      placeholder: 'Type here a strong password', 
      control: this.userForm.controls['password'], 
      type: 'password', 
      required: true
    }
  ]

  onSubmit() {
    this.isLoading = true;
    const newUser: IUser = this.userForm.value as IUser;
    this.userService.createUser(newUser).subscribe({ 
      'next': (response) => {
        if (response.message === "User registered successfully")
        this.router.navigate(['/login']);
      },
      'error': (error: string) => {
        this.errorMessage = error;
      },
      'complete': () => {
        this.isLoading = false;
      }
    });
  }
}
