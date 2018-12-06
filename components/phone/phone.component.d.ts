import { ContactsComponent } from '../contacts/contacts.component';
import { ViewController } from 'ionic-angular';
export declare class PhoneComponent {
    private viewCtrl;
    tab2: typeof ContactsComponent;
    private rootParams;
    constructor(viewCtrl: ViewController);
    ngOnInit(): void;
}
