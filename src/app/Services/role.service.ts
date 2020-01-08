import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Role } from '../Entities/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends BaseService<Role>{

  constructor(http:HttpClient) {
    super(http,"Role");
  }
}

