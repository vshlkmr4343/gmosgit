import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  private isSubmenuOpen = false;
  public subMenuPages = [];
  public appPages = [
    {
      title: 'HOME',
      url: '/user/dashboard',
    },
    {
      title: 'CASTINGS CALLS',
      url: '/gigs',
    },
    {
      title: 'CREW GIGS',
      url: '/gigs',
     
    },
    {
      title: 'ACTORS',
      url: '/artist',
      
    },
    {
      title: 'CREW',
      url: '/artist',
     
    },
    {
      title: 'MESSAGES',
      url: '/messages',
      icon: 'warning'
    },
    {
      title: 'GEAR RENTAL',
      url: '/user',
      icon: 'open'
    },
    {
      title: 'CLSSIFIEDS',
      url: '/user',
      icon: 'open'
    },
    {
      title: 'FORUM',
      url: '/user',
      icon: 'open'
    },
    {
      title: 'NOTIFICATIONS',
      url: 'notifications',
      icon: 'warning'
    },
    {
      title: 'MY PROFILE',
      url: '/user/dashboard',
      icon: 'arrow-forward'
    },
    {
      title: 'MORE',
      url: '/user/dashboard',
      icon: 'arrow-forward'
    },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#ffffff');
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {

      this.selectedIndex = this.appPages.findIndex(page => 
        page.title.toLowerCase() === path.toLowerCase()
       
        );
    }

    this.appPages =[
      {
        title: 'HOME',
        url: '/user/dashboard',
      },
      {
        title: 'CASTINGS CALLS',
        url: '/gigs',
      },
      {
        title: 'CREW GIGS',
        url: '/gigs',
       
      },
      {
        title: 'ACTORS',
        url: '/artist',
        
      },
      {
        title: 'CREW',
        url: '/artist',
       
      },
      {
        title: 'MESSAGES',
        url: '/messages',
        icon: 'warning'
      },
      {
        title: 'GEAR RENTAL',
        url: '/user/dashboard',
        icon: 'open'
      },
      {
        title: 'CLSSIFIEDS',
        url: '/user/dashboard',
        icon: 'open'
      },
      {
        title: 'FORUM',
        url: '/user/dashboard',
        icon: 'open'
      },
      {
        title: 'NOTIFICATIONS',
        url: 'notifications',
        icon: 'warning'
      },
      {
        title: 'MY PROFILE',
        url: '/user/dashboard',
        icon: 'arrow-forward'
      },
      {
        title: 'MORE',
        url: '/user/dashboard',
        icon: 'arrow-forward'
      },
    ];
  }

back(){
  this.isSubmenuOpen =false;
  this.appPages =[
    {
      title: 'HOME',
      url: '/user/dashboard',
    },
    {
      title: 'CASTINGS CALLS',
      url: '/gigs',
    },
    {
      title: 'CREW GIGS',
      url: '/gigs',
     
    },
    {
      title: 'ACTORS',
      url: '/artist',
      
    },
    {
      title: 'CREW',
      url: '/artist',
     
    },
    {
      title: 'MESSAGES',
      url: '/messages',
      icon: 'warning'
    },
    {
      title: 'GEAR RENTAL',
      url: '/user/dashboard',
      icon: 'open'
    },
    {
      title: 'CLSSIFIEDS',
      url: '/user/dashboard',
      icon: 'open'
    },
    {
      title: 'FORUM',
      url: '/user/dashboard',
      icon: 'open'
    },
    {
      title: 'NOTIFICATIONS',
      url: 'notifications',
      icon: 'warning'
    },
    {
      title: 'MY PROFILE',
      url: '/user/dashboard',
      icon: 'arrow-forward'
    },
    {
      title: 'MORE',
      url: '/user/dashboard',
      icon: 'arrow-forward'
    },
  ];
}
  open(title){
    this.isSubmenuOpen =true;
    let appPage
    if(title == 'MORE'){
     appPage =[
      {
        title: 'RULES',
        url: '/legal-documents/rules',
      },
      {
        title: 'FAQ',
        url: '/legal-documents/faq'
      },
      {
        title: 'HOW IT WORKS',
        url: '/legal-documents/howitworks'
      },
      {
        title: 'ABOUT US',
        url: '/legal-documents/aboutus'
      },
      {
        title: 'CONTACT US',
        url: '/legal-documents/contact-us'
      },
      {
        title: 'PRIVACY POLICY',
        url: '/legal-documents/privacy-policy'
      },
      {
        title: 'TERMS OF SERVICE',
        url:'/legal-documents/terms-of-service'
      }
     ]
    }
    else{
      appPage =[
        {
          title: 'MY GIGS',
          url: '/user/my-gigs'
        },
        {
          title: 'FAVORITES',
          url: '/user/favourite'
        },
        {
          title: 'EDIT PROFILE',
          url: '/user/edit-profile'
        },
        {
          title: 'CHANGE PASSWORD',
          url: '/user/change-password'
        },
        {
          title: 'LOGOUT',
          url: '',
        }
       ]
    }
    this.subMenuPages= appPage;
  }

  logout(){
    this.router.navigateByUrl('/signin');
  }
}
