import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  storageType = '';

  constructor(
    public readonly storageService: LocalStorageService) { }

  ngOnInit(): void {
    this.storageType = this.storageService.get('');
  }
}
