import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DirectionService {

  constructor(){
  }

  private emitSecretKey = new ReplaySubject<any>();
  secretKeyEmitted$ = this.emitSecretKey.asObservable();
  emitChangeToGuard(change: any) {
      this.emitSecretKey.next(change);
}

}
