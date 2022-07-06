import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/UserModel';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:FormControl = new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(15)])
  password:FormControl = new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(16)])
  authError:string | undefined

  constructor(private authService:AuthService,private loaderService: LoaderService,private router: Router) { }

  ngOnInit(): void {
  } 


  login(event:any) {
    event.preventDefault();
    this.authService.login(this.username.value,this.password.value).subscribe((result:User) => {
      this.authService.setUser(result)
      this.authService.setToken(result?.sessionToken)
      this.router.navigate(['/'])
    },
    _ => {
      console.log(_)
      this.authError = 'Login Failed'
      let x = setTimeout(()=>{
        this.authError = undefined
        clearTimeout(x)
      },2000)
    }
    )
  }

  isDisabled():boolean {
    return !this.username.valid || !this.password.valid || !this.password.touched || !this.username.touched
  }



}
