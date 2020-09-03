import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { HttpHeaders, HttpParams } from '@angular/common/http';
import { DirectionService } from './direction.service';



@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthGuard implements CanActivate {

    //can be token with some salt in it
    secretKey = '';

    constructor(private router: Router, private directionService:DirectionService) {
      this.directionService.secretKeyEmitted$.subscribe(
        event => {
          this.secretKey = event;
      });
    }

    canActivate() {
      if (this.secretKey == 'loggedIn') {
          return true;
      }
      this.router.navigate(['/auth']);
      return false;
    }


}
