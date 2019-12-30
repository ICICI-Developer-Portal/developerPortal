import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-onboardingrequests',
  templateUrl: './onboardingrequests.component.html',
})
export class OnboardingrequestsComponent implements OnInit {
  dataSource: any;
  p : any = "";
  role: string;
  //showurl:Boolean;
  constructor(private adm:LoginService,private spinnerService: Ng4LoadingSpinnerService) {
    this.request_data();
   
  }

  ngOnInit() {
  }


request_data(){
  this.spinnerService.show(); 
//  this.role=localStorage.getItem('role')
//   if(localStorage.getItem('role')=='admin'){
//     this.showurl=true;
//   }else{
//   this.showurl=false;
//   }
  this.adm.Onboardrequestsuser()
  .subscribe(
      (data:any) => {
      var response= data._body; 
      var obj=JSON.parse(response);
      this.dataSource=obj;
      this.spinnerService.hide();
      }
  );  
}

}
