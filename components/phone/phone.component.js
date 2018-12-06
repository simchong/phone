import { Component } from '@angular/core';
import { ContactsComponent } from '../contacts/contacts.component';
import { ViewController } from 'ionic-angular';
var PhoneComponent = (function () {
    function PhoneComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.tab2 = ContactsComponent;
    }
    PhoneComponent.prototype.ngOnInit = function () {
        this.rootParams = {
            viewCtrl: this.viewCtrl,
        };
    };
    PhoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'phoneComponent',
                    templateUrl: 'phone.component.html',
                },] },
    ];
    /** @nocollapse */
    PhoneComponent.ctorParameters = function () { return [
        { type: ViewController, },
    ]; };
    return PhoneComponent;
}());
export { PhoneComponent };
//# sourceMappingURL=phone.component.js.map