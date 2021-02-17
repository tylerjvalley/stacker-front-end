import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './services/api-service.service';
import { Data } from './models/Data';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stacker-back-end';

  data$: Observable<Data[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.data$ = this.apiService.fetchAll();
  }
  
}
