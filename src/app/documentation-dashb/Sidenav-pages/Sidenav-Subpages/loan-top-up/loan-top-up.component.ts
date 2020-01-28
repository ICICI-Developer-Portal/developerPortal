import { Component, OnInit } from '@angular/core';
import { DownloadPdfServiceComponent } from '../../../../LandingPage/downloadPdfService.component';
import { CONSTANTS } from '../../../../../../config/application-constant';

@Component({
  selector: 'app-loan-top-up',
  templateUrl: './loan-top-up.component.html',
  //styleUrls: ['./loan-top-up.component.css']
})
export class LoanTopUpComponent implements OnInit {
  constructor(public downloadAsPdfService: DownloadPdfServiceComponent) {}
  constants = CONSTANTS;

  ngOnInit() {}

  openAsPdfDoc() {
    var imgPath = document.getElementById('img_id').getAttribute('src');
    this.downloadAsPdfService.openAsPdfDoc(imgPath);
  }
}
