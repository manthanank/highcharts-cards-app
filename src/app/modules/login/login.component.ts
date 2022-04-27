import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(['', Validators.required, Validators.minLength(5)])
  });

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  login(){
    this.http.get<any>('http://localhost:3000/users').subscribe(res =>{
      const user = res.find(
        (a:any) =>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        }
      )
      if(user){
        this.router.navigate(['/home']);
      }else{
        alert('Invalid credentials');
      }
    }, err =>{
      alert('Invalid credentials');
    }

    )
  }
}
