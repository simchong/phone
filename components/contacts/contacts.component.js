import { Component } from '@angular/core';
import { Platform, NavParams } from 'ionic-angular';
var ContactsComponent = (function () {
    function ContactsComponent(platform, navParams) {
        this.platform = platform;
        this.navParams = navParams;
        this.platform.ready().then(function (readySource) {
        });
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.viewCtrl = this.navParams.get('viewCtrl');
    };
    ContactsComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ContactsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'contacts',
                    templateUrl: 'contacts.component.html',
                },] },
    ];
    /** @nocollapse */
    ContactsComponent.ctorParameters = function () { return [
        { type: Platform, },
        { type: NavParams, },
    ]; };
    return ContactsComponent;
}());
export { ContactsComponent };
//# sourceMappingURL=contacts.component.js.map