import { Platform, NavParams } from 'ionic-angular';
export declare class ContactsComponent {
    private platform;
    private navParams;
    private viewCtrl;
    constructor(platform: Platform, navParams: NavParams);
    ngOnInit(): void;
    closeModal(): void;
}
