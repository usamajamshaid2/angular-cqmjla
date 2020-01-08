import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { UserRole } from '../Entities/UserRole';

@Injectable({
  providedIn: 'root'
})
export class UserroleService extends BaseService<UserRole>{

  constructor(http:HttpClient) {
    super(http,"UserRole");
  }
}

