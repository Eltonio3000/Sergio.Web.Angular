import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContainerTabela} from './container-tabela/container-tabela';

@Component({
  imports: [ContainerTabela],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('agro-sensor-web');
}
