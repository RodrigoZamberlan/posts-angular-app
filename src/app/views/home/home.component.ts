import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}

  users: any = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;

  fetchUsers() {
    this.isLoading = true;
    this.userService.getListOfUsers().subscribe({
      'next': (data) => {
        this.users = data;
        this.errorMessage = '';
      },
      'error': (error: string) => {
        this.errorMessage = error;
      },
      'complete': () => {
        this.isLoading = false;
      }
    });
  }
  
  ngOnInit(): void {
      this.fetchUsers();
      console.log(this.users);
  }
}
