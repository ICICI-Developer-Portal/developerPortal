import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  //styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  logged_in:Boolean=false;
  user_name = '';
  constructor(private router:Router,private adm:LoginService,private auth : AuthService) {
    this.user_name = localStorage.getItem('username');
   }

  ngOnInit() {
    this.auth.ischeck_session();
    this.adm.getUserId().subscribe(
      data => {
          this.logged_in = (data !='' && data !=null && data !=undefined)?true:false;
      });
    this.adm.getUserName().subscribe(
    data => {
      this.user_name = data;
    });
  }
  
    //  Fuction for Logout
    logout(){
      localStorage.removeItem('username');
      sessionStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
      this.adm.sendUserId('');
      
      this.adm.LogoutPortal()
          .subscribe(
           (res) => { 
             this.router.navigate(['/index']);
           },
           (err) => {
             this.router.navigate(['/index']);
           }
         );
    }
    
      
    scroll_view(id){
      this.router.navigate(['index']);
      setTimeout(function(){ document.querySelector(id).scrollIntoView({behavior: 'smooth' }); }, 10);
     }
     
}
