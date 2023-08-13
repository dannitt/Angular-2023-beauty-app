import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  public user$ = this.user$$.asObservable();

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged():boolean {
    return !!this.user;
  }

  subscription: Subscription

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user; 
    })
  }

  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', {email, password}).pipe(tap(user => this.user$$.next(user)))
  }

  register(email: string, username: string, password:string, rePassword: string) { 
    return this.http.post<User>('/api/users/register', {email, username, password, rePassword}).pipe(tap(user => this.user$$.next(user)))
  }

  logout() {
    this.user = undefined;
    return this.http.post<User>('api/users/logout', {}).pipe(tap(() => this.user$$.next(undefined)))
    
  }
  getProfile() {
    return this.http
    .get<User>('/api/users/login')
    .pipe(tap((user) => this.user$$.next(user)))  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
 