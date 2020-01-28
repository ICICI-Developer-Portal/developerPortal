import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { DownloadPdfServiceComponent } from '../../../../LandingPage/downloadPdfService.component';
import { CONSTANTS } from '../../../../../../config/application-constant';

@Component({
  selector: 'app-autoloan',
  templateUrl: './autoloan.component.html',
  //styleUrls: ['./autoloan.component.css']
})
export class AutoloanComponent implements OnInit {
  constructor(public downloadAsPdfService: DownloadPdfServiceComponent) {}
  constants = CONSTANTS;
  ngOnInit() {}

  openAsPdfDoc() {
    var imgPath = document.getElementById('img_id').getAttribute('src');
    this.downloadAsPdfService.openAsPdfDoc(imgPath);
  }
}
