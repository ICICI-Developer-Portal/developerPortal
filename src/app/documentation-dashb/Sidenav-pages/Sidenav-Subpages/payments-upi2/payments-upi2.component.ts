import { Component, OnInit } from '@angular/core';
import { DownloadPdfServiceComponent } from '../../../../LandingPage/downloadPdfService.component';
import { CONSTANTS } from '../../../../../../config/application-constant';

@Component({
  selector: 'app-payments-upi2',
  templateUrl: './payments-upi2.component.html',
  //styleUrls: ['./payments-upi2.component.css']
})
export class PaymentsUPI2Component implements OnInit {
  constructor(public downloadAsPdfService: DownloadPdfServiceComponent) {}
  constants = CONSTANTS;

  ngOnInit() {}

  openAsPdfDoc() {
    var imgPath = document.getElementById('img_id').getAttribute('src');
    this.downloadAsPdfService.openAsPdfDoc(imgPath);
  }
}
