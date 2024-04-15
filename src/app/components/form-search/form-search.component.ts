import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss'],
})
export class FormSearchComponent implements OnInit {
  dataLoaded: boolean = false;

  constructor(public loadingService: LoaderService) {}
  ngOnInit(): void {
    this.loadDataFromNetwork();
  }

  loadDataFromNetwork(): void {
    setTimeout(() => {
      this.dataLoaded = true;
    }, 2000);
  }
}
