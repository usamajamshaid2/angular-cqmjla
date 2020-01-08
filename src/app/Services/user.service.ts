import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../Entities/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(http:HttpClient) {
    super(http,"User");
  }
}
