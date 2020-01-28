import { Component, OnInit } from '@angular/core';
import { DownloadPdfServiceComponent } from '../../../../LandingPage/downloadPdfService.component';
import { CONSTANTS } from '../../../../../../config/application-constant';

@Component({
  selector: 'app-fixeddeposit',
  templateUrl: './fixeddeposit.component.html',
  //styleUrls: ['./fixeddeposit.component.css']
})
export class FixeddepositComponent implements OnInit {
  constructor(public downloadAsPdfService: DownloadPdfServiceComponent) {}
  constants = CONSTANTS;

  ngOnInit() {}

  openAsPdfDoc() {
    var imgPath = document.getElementById('img_id').getAttribute('src');
    this.downloadAsPdfService.openAsPdfDoc(imgPath);
  }
}
