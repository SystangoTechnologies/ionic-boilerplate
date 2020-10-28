import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router,  private menu: MenuController) { }

  ngOnInit() {
  
  }

  ionViewWillEnter(){
    this.menu.enable(false, 'customleft');
    this.menu.enable(false, 'customright');

    // this.menu.swipeGesture(false);
  }

  test(){

    this.router.navigate(['/tabs']);
  }

  test1(){

    this.router.navigate(['/register']);
  }

}
