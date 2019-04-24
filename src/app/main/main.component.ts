import { Component, OnInit } from '@angular/core';
import { ComunicatorService } from '../comunicator.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data;
  constructor(private comunicatorService: ComunicatorService) { }
  ngOnInit() {
    this.data = this.comunicatorService.getData();
  }
  lodData() {
    console.log(this.data);
  }
}
