import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  //styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {
  dataSource: any;
  p : any = "";
  constructor(private adm:LoginService,private spinnerService: Ng4LoadingSpinnerService) {
     this.approve_data(); 
     this.spinnerService.show();
    }

  ngOnInit() {
  }
  
     approve_data(){
        
        this.adm.approvals().subscribe(
        (data:any) => {
        var response= data._body; 
        var obj=JSON.parse(response);
        this.dataSource=obj;
        this.spinnerService.hide();
        }
    );  
    
    }


}
