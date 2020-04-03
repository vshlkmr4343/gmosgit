import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera , CameraOptions} from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private actionSheetController:ActionSheetController,private camera:Camera) { }


  async addphoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add photo',
      buttons: [ {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
           this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
           this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });
    await actionSheet.present();
  }


 async  takePicture(sourceType) {
   let base64Image
    const options: CameraOptions = {
    quality: 100,
    targetWidth: 900,
    targetHeight: 600,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: false,
    allowEdit: true,
    sourceType: sourceType,
   }
   this.camera.getPicture(options).then((imageData) => {
      base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
   });
   return await base64Image
  }


  public takeImage(sourceType): Observable<any> {
    return new Observable((observer)=>{
      let base64Image
      const options: CameraOptions = {
      quality: 100,
      targetWidth: 900,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: false,
      allowEdit: true,
      sourceType: sourceType,
     }
     this.camera.getPicture(options).then((imageData) => {
        base64Image = 'data:image/jpeg;base64,' + imageData;

        observer.next(base64Image)
     }, (err) => {
     });
      
    })
  }
}
