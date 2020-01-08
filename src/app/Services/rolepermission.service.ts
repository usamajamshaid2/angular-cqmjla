import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { RolePermission } from '../Entities/RolePermission';

@Injectable({
  providedIn: 'root'
})
export class RolepermissionService extends BaseService<RolePermission>{

  constructor(http:HttpClient) {
    super(http,"RolePermission");
  }
}
