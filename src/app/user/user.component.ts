import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  storageType = '';

  constructor(public readonly storage: LocalStorageService) { }

  ngOnInit(): void {
    this.storageType = this.storage.get('');
  }
}
