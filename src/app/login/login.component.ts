import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DirectionService } from 'app/pages/direction.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showSpinner = true;
  error = false;
  password: string
  email: string;

  constructor(private directionService: DirectionService,public router: Router){
      setTimeout(() => {
        this.showSpinner = false;
      }, 5000);
  }

  login(form: NgForm){
    if(form.value.email =='lvr@investo-technologies.com' && form.value.password == 'lvr_investo@2'){
      this.directionService.emitChangeToGuard('loggedIn');
      this.router.navigate(['/pages']);
    }else{
      this.error=true;
      setTimeout(() => {
        this.error = false;
      }, 5000);
    }
  }



}
