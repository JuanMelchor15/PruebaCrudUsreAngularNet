import { Component } from '@angular/core';
import { LibeyUserService } from './core/service/libeyuser/libeyuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibeyTechnicalTest';

  constructor(private libeyUserService: LibeyUserService) { }

  onSearch(searchTerm: string): void {
    this.libeyUserService.getAll(searchTerm); // Pasa el valor capturado al servicio
  }
}
