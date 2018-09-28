import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Service
import { AuthService } from './../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private redirect = [null, '/admin/dashboard', '/director/dashboard', '/manager/dashboard', '/agent/dashboard'];
  public loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.authService.getAuth().then((user: any) => {
        this.router.navigate([this.redirect[user.user_type_id]]);
      }).catch(e => console.log('Erreur ngOnInit stockage user: ', e));
    }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  public doLogin(): void {
    if (this.loginForm.invalid) { return; }
    this.authService.login(this.loginForm.value).subscribe((user: any) => {
      this.router.navigate([this.redirect[user.user_type_id]]);
    }, e => console.log('Erreur login: ', e));
  }
}
