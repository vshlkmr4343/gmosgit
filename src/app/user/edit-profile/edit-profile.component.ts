import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/utilities/utility.service';
import { ActionSheetController } from '@ionic/angular';
import { Camera,CameraOptions} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
imagedata:any;
moreImagedata:any;
  constructor(
    private camera:Camera,
    private utility:UtilityService,
    private actionSheetController:ActionSheetController) { }

  ngOnInit() {}

  async addPhoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add photo',
      buttons: [ {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
       this.takePicture(this.camera.PictureSourceType.CAMERA)
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
        this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    console.log('image data in edit',this.imagedata)
    await actionSheet.present();
  }



  takePicture(sourceType) {
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
       this.imagedata= base64Image;
    }, (err) => {
    });
    //return await base64Image
   }

   async addImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add photo',
      buttons: [ {
        text: 'Camera',
        icon: 'camera',
        handler: () => {
       this.takeImage(this.camera.PictureSourceType.CAMERA)
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
        this.takeImage(this.camera.PictureSourceType.PHOTOLIBRARY)
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    console.log('image data in edit',this.imagedata)
    await actionSheet.present();
  }



  takeImage(sourceType) {
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
       this.moreImagedata= base64Image;
    }, (err) => {
    });
    //return await base64Image
   }
}
