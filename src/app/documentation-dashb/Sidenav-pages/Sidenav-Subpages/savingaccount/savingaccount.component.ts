import { Component, OnInit } from '@angular/core';
import { DownloadPdfServiceComponent } from '../../../../LandingPage/downloadPdfService.component';
import { CONSTANTS } from '../../../../../../config/application-constant';

@Component({
  selector: 'app-savingaccount',
  templateUrl: './savingaccount.component.html',
  //styleUrls: ['./savingaccount.component.css']
})
export class SavingaccountComponent implements OnInit {
  constructor(public downloadAsPdfService: DownloadPdfServiceComponent) {}
  constants = CONSTANTS;

  ngOnInit() {}

  //open document as PDF
  openAsPdfDoc() {
    var imgPath = document.getElementById('img_id').getAttribute('src');
    this.downloadAsPdfService.openAsPdfDoc(imgPath);
  }
}
