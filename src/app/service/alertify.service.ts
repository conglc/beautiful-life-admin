import { Injectable } from '@angular/core';

declare var $:any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(message: string) {
    this.showNotification(message, "success", "ti-gift");
  }

  error(message: string) {
    this.showNotification(message, "danger", "ti-close");
  }

  warning(message: string) {
    this.showNotification(message, "warning", "ti-bolt-alt");
  }

  message(message: string) {
    this.showNotification(message, "info", "ti-info-alt");
  }

  showNotification(message: string, type: string, icon: string){
    $.notify({
        icon: icon,
        message: message
      },{
          type: type,
          timer: 0,
          placement: {
              from: 'top',
              align: 'center'
          }
      });
  }
}
