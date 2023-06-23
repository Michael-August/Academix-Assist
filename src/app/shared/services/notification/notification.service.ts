import { Injectable } from '@angular/core';
// import Swal, { SweetAlertType } from 'sweetalert2';
import { ToastrService } from 'ngx-toastr'

export enum ToasterType {
  Success = 'success',
  Warning = 'warning',
  Info = 'info',
  Error = 'error'
}
export enum ModalSize {
  Large = 'modal-lg',
  Medium = 'modal-md',
  Small = 'modal-sm'
}
export enum AlertType {
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
  Success = 'success',
  Confirm = 'question',
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toaster: ToastrService) { }

  notifyByToast(
    message: string,
    type?: ToasterType,
    timeout: number = 3000,
    closeButton?: boolean,
    progressBar?: boolean
  ): void {
    switch (type) {
      case ToasterType.Error:
        this.toaster.error(message, '', {
          timeOut: timeout,
          closeButton,
          progressBar
        });
        break; // TODO: MORE TYPE SCENARIOS
      case ToasterType.Info:
        this.toaster.info(message, '', {
          timeOut: timeout,
          closeButton,
          progressBar
        });
        break;
      case ToasterType.Success:
        this.toaster.success(message, '', {
          timeOut: timeout,
          closeButton,
          progressBar
        });
        break;

      case ToasterType.Warning:
        this.toaster.warning(message, '', {
          timeOut: timeout,
          closeButton,
          progressBar
        });
        break;
    }
  }

  // popUpAlert(
  //   title: string,
  //   html: any,
  //   type?: SweetAlertType | null,
  //   showCancelButton: boolean = false,
  //   confirmButtonText = "Deactivate",
  //   confirmButtonColor = "#1AD364",
  //   cancelButtonText = 'cancel',
  // ): Promise<any> | void {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success__btn mr3',
  //       cancelButton: 'btn btn-green ml-2'
  //     },
  //     buttonsStyling: true
  //   });

  //   if (type === AlertType.Confirm) {
  //     return swalWithBootstrapButtons.fire({
  //       title,
  //       html,
  //       showCancelButton,
  //       cancelButtonText,
  //       confirmButtonText,
  //       confirmButtonColor
  //     });
  //   }

  //   swalWithBootstrapButtons.fire({
  //     title,
  //     html,
  //     showCancelButton,
  //     cancelButtonText,
  //     confirmButtonText,
  //     confirmButtonColor
  //   });
  // }
}