import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { CONSTANTS } from 'config/application-constant';

@Injectable()
export class DownloadPdfServiceComponent {
  constructor() {}

  //open document as PDF
  openAsPdfDoc(imgPath) {
    var fileNameIndex = imgPath.substring(imgPath.lastIndexOf('/') + 1);
    var fileName = fileNameIndex.substr(0, fileNameIndex.lastIndexOf('.'));
    var img = new Image();
    let doc = new jsPDF();
    doc.setProperties({
      title: CONSTANTS.PDF_DOCUMENT,
    });
    img.src = imgPath;
    doc.addImage(img, 'png', 10, 10, 180, 150);
    doc.save(fileName + '.' + 'pdf');
    //doc.output('dataurlnewwindow');
  }
}
