import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private menu: MenuController ) {
    // this.menu.enable(false, 'customleft');
    // this.menu.enable(false, 'customright');


  }

  ngOninit(){
     this.menu.enable(true, 'customleft');
     this.menu.enable(true, 'customright');
  }

}
