import { NgModule } from '@angular/core';
import { PhoneComponent } from './components/phone/phone.component';
var PhoneModule = (function () {
    function PhoneModule() {
    }
    PhoneModule.forRoot = function () {
        return {
            ngModule: PhoneModule,
            providers: []
        };
    };
    PhoneModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [
                        PhoneComponent
                    ],
                    exports: [
                        PhoneComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    PhoneModule.ctorParameters = function () { return []; };
    return PhoneModule;
}());
export { PhoneModule };
//# sourceMappingURL=phone.module.js.map