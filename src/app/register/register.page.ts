import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menu.enable(false, 'customleft');
    this.menu.enable(false, 'customright');
  }

}
