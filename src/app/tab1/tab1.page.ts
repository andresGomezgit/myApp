import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  fff="";


  public nombre:string;
 public name: string;

  

  constructor(public toastController: ToastController) {


    this.nombre = ""; 
   

  }

  save()
  {
  var str = this.fff;
  //alert(str);
  var spl = str.split(",");
  var res = spl[Math.floor(Math.random() * (spl.length - 0) + 0)];
  this.nombre =res;

  this.presentToast(res) 
  }


  async presentToast(text:any) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }



  private newMethod(): string {
    return 'entrada';
  }
}
