import * as tslib_1 from "tslib";
/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
let IonApp = class IonApp {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonApp.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonApp = tslib_1.__decorate([
    Component({ selector: "ion-app", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonApp);
export { IonApp };
let IonAvatar = class IonAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonAvatar = tslib_1.__decorate([
    Component({ selector: "ion-avatar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonAvatar);
export { IonAvatar };
let IonBackButton = class IonBackButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonBackButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonBackButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }),
    Component({ selector: "ion-back-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
], IonBackButton);
export { IonBackButton };
let IonBackdrop = class IonBackdrop {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionBackdropTap"]);
    }
};
IonBackdrop.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonBackdrop = tslib_1.__decorate([
    ProxyCmp({ inputs: ["stopPropagation", "tappable", "visible"] }),
    Component({ selector: "ion-backdrop", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["stopPropagation", "tappable", "visible"] })
], IonBackdrop);
export { IonBackdrop };
let IonBadge = class IonBadge {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonBadge.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonBadge = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode"] }),
    Component({ selector: "ion-badge", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
], IonBadge);
export { IonBadge };
let IonButton = class IonButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
};
IonButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }),
    Component({ selector: "ion-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
], IonButton);
export { IonButton };
let IonButtons = class IonButtons {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonButtons.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonButtons = tslib_1.__decorate([
    ProxyCmp({ inputs: ["collapse"] }),
    Component({ selector: "ion-buttons", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse"] })
], IonButtons);
export { IonButtons };
let IonCard = class IonCard {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCard.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCard = tslib_1.__decorate([
    ProxyCmp({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
    Component({ selector: "ion-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
], IonCard);
export { IonCard };
let IonCardContent = class IonCardContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCardContent = tslib_1.__decorate([
    ProxyCmp({ inputs: ["mode"] }),
    Component({ selector: "ion-card-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] })
], IonCardContent);
export { IonCardContent };
let IonCardHeader = class IonCardHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCardHeader = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode", "translucent"] }),
    Component({ selector: "ion-card-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "translucent"] })
], IonCardHeader);
export { IonCardHeader };
let IonCardSubtitle = class IonCardSubtitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardSubtitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCardSubtitle = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode"] }),
    Component({ selector: "ion-card-subtitle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
], IonCardSubtitle);
export { IonCardSubtitle };
let IonCardTitle = class IonCardTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCardTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCardTitle = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode"] }),
    Component({ selector: "ion-card-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
], IonCardTitle);
export { IonCardTitle };
let IonCheckbox = class IonCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
};
IonCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCheckbox = tslib_1.__decorate([
    ProxyCmp({ inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }),
    Component({ selector: "ion-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
], IonCheckbox);
export { IonCheckbox };
let IonChip = class IonChip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonChip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonChip = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode", "outline"] }),
    Component({ selector: "ion-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "outline"] })
], IonChip);
export { IonChip };
let IonCol = class IonCol {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonCol.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonCol = tslib_1.__decorate([
    ProxyCmp({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }),
    Component({ selector: "ion-col", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
], IonCol);
export { IonCol };
let IonContent = class IonContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
    }
};
IonContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonContent = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"], "methods": ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] }),
    Component({ selector: "ion-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] })
], IonContent);
export { IonContent };
let IonDatetime = class IonDatetime {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
    }
};
IonDatetime.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonDatetime = tslib_1.__decorate([
    ProxyCmp({ inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"], "methods": ["open"] }),
    Component({ selector: "ion-datetime", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"] })
], IonDatetime);
export { IonDatetime };
let IonFab = class IonFab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonFab.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonFab = tslib_1.__decorate([
    ProxyCmp({ inputs: ["activated", "edge", "horizontal", "vertical"], "methods": ["close"] }),
    Component({ selector: "ion-fab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "edge", "horizontal", "vertical"] })
], IonFab);
export { IonFab };
let IonFabButton = class IonFabButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
};
IonFabButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonFabButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] }),
    Component({ selector: "ion-fab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
], IonFabButton);
export { IonFabButton };
let IonFabList = class IonFabList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonFabList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonFabList = tslib_1.__decorate([
    ProxyCmp({ inputs: ["activated", "side"] }),
    Component({ selector: "ion-fab-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "side"] })
], IonFabList);
export { IonFabList };
let IonFooter = class IonFooter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonFooter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonFooter = tslib_1.__decorate([
    ProxyCmp({ inputs: ["mode", "translucent"] }),
    Component({ selector: "ion-footer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "translucent"] })
], IonFooter);
export { IonFooter };
let IonGrid = class IonGrid {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonGrid.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonGrid = tslib_1.__decorate([
    ProxyCmp({ inputs: ["fixed"] }),
    Component({ selector: "ion-grid", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] })
], IonGrid);
export { IonGrid };
let IonHeader = class IonHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonHeader = tslib_1.__decorate([
    ProxyCmp({ inputs: ["collapse", "mode", "translucent"] }),
    Component({ selector: "ion-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse", "mode", "translucent"] })
], IonHeader);
export { IonHeader };
let IonIcon = class IonIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonIcon.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonIcon = tslib_1.__decorate([
    ProxyCmp({ inputs: ["ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "size", "src"] }),
    Component({ selector: "ion-icon", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "size", "src"] })
], IonIcon);
export { IonIcon };
let IonImg = class IonImg {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
    }
};
IonImg.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonImg = tslib_1.__decorate([
    ProxyCmp({ inputs: ["alt", "src"] }),
    Component({ selector: "ion-img", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "src"] })
], IonImg);
export { IonImg };
let IonInfiniteScroll = class IonInfiniteScroll {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInfinite"]);
    }
};
IonInfiniteScroll.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonInfiniteScroll = tslib_1.__decorate([
    ProxyCmp({ inputs: ["disabled", "position", "threshold"], "methods": ["complete"] }),
    Component({ selector: "ion-infinite-scroll", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "position", "threshold"] })
], IonInfiniteScroll);
export { IonInfiniteScroll };
let IonInfiniteScrollContent = class IonInfiniteScrollContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonInfiniteScrollContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonInfiniteScrollContent = tslib_1.__decorate([
    ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] }),
    Component({ selector: "ion-infinite-scroll-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["loadingSpinner", "loadingText"] })
], IonInfiniteScrollContent);
export { IonInfiniteScrollContent };
let IonInput = class IonInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
    }
};
IonInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonInput = tslib_1.__decorate([
    ProxyCmp({ inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
    Component({ selector: "ion-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] })
], IonInput);
export { IonInput };
let IonItem = class IonItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonItem = tslib_1.__decorate([
    ProxyCmp({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
    Component({ selector: "ion-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
], IonItem);
export { IonItem };
let IonItemDivider = class IonItemDivider {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItemDivider.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonItemDivider = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode", "sticky"] }),
    Component({ selector: "ion-item-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "sticky"] })
], IonItemDivider);
export { IonItemDivider };
let IonItemGroup = class IonItemGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItemGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonItemGroup = tslib_1.__decorate([
    Component({ selector: "ion-item-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonItemGroup);
export { IonItemGroup };
let IonItemOption = class IonItemOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonItemOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonItemOption = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] }),
    Component({ selector: "ion-item-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
], IonItemOption);
export { IonItemOption };
let IonItemOptions = class IonItemOptions {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSwipe"]);
    }
};
IonItemOptions.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonItemOptions = tslib_1.__decorate([
    ProxyCmp({ inputs: ["side"] }),
    Component({ selector: "ion-item-options", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["side"] })
], IonItemOptions);
export { IonItemOptions };
let IonItemSliding = class IonItemSliding {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionDrag"]);
    }
};
IonItemSliding.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonItemSliding = tslib_1.__decorate([
    ProxyCmp({ inputs: ["disabled"], "methods": ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] }),
    Component({ selector: "ion-item-sliding", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
], IonItemSliding);
export { IonItemSliding };
let IonLabel = class IonLabel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonLabel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonLabel = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode", "position"] }),
    Component({ selector: "ion-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "position"] })
], IonLabel);
export { IonLabel };
let IonList = class IonList {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonList = tslib_1.__decorate([
    ProxyCmp({ inputs: ["inset", "lines", "mode"], "methods": ["closeSlidingItems"] }),
    Component({ selector: "ion-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inset", "lines", "mode"] })
], IonList);
export { IonList };
let IonListHeader = class IonListHeader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonListHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonListHeader = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "lines", "mode"] }),
    Component({ selector: "ion-list-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "lines", "mode"] })
], IonListHeader);
export { IonListHeader };
let IonMenu = class IonMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
    }
};
IonMenu.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonMenu = tslib_1.__decorate([
    ProxyCmp({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], "methods": ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] }),
    Component({ selector: "ion-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"] })
], IonMenu);
export { IonMenu };
let IonMenuButton = class IonMenuButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonMenuButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonMenuButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] }),
    Component({ selector: "ion-menu-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
], IonMenuButton);
export { IonMenuButton };
let IonMenuToggle = class IonMenuToggle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonMenuToggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonMenuToggle = tslib_1.__decorate([
    ProxyCmp({ inputs: ["autoHide", "menu"] }),
    Component({ selector: "ion-menu-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "menu"] })
], IonMenuToggle);
export { IonMenuToggle };
let IonNav = class IonNav {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionNavWillChange", "ionNavDidChange"]);
    }
};
IonNav.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonNav = tslib_1.__decorate([
    ProxyCmp({ inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"], "methods": ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"] }),
    Component({ selector: "ion-nav", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"] })
], IonNav);
export { IonNav };
let IonNavLink = class IonNavLink {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonNavLink.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonNavLink = tslib_1.__decorate([
    ProxyCmp({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] }),
    Component({ selector: "ion-nav-link", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
], IonNavLink);
export { IonNavLink };
let IonNote = class IonNote {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonNote.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonNote = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode"] }),
    Component({ selector: "ion-note", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
], IonNote);
export { IonNote };
let IonProgressBar = class IonProgressBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonProgressBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonProgressBar = tslib_1.__decorate([
    ProxyCmp({ inputs: ["buffer", "color", "mode", "reversed", "type", "value"] }),
    Component({ selector: "ion-progress-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buffer", "color", "mode", "reversed", "type", "value"] })
], IonProgressBar);
export { IonProgressBar };
let IonRadio = class IonRadio {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
};
IonRadio.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRadio = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "disabled", "mode", "name", "value"] }),
    Component({ selector: "ion-radio", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "name", "value"] })
], IonRadio);
export { IonRadio };
let IonRadioGroup = class IonRadioGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
};
IonRadioGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRadioGroup = tslib_1.__decorate([
    ProxyCmp({ inputs: ["allowEmptySelection", "name", "value"] }),
    Component({ selector: "ion-radio-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["allowEmptySelection", "name", "value"] })
], IonRadioGroup);
export { IonRadioGroup };
let IonRange = class IonRange {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
};
IonRange.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRange = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] }),
    Component({ selector: "ion-range", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
], IonRange);
export { IonRange };
let IonRefresher = class IonRefresher {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
    }
};
IonRefresher.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRefresher = tslib_1.__decorate([
    ProxyCmp({ inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], "methods": ["complete", "cancel", "getProgress"] }),
    Component({ selector: "ion-refresher", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"] })
], IonRefresher);
export { IonRefresher };
let IonRefresherContent = class IonRefresherContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonRefresherContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRefresherContent = tslib_1.__decorate([
    ProxyCmp({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] }),
    Component({ selector: "ion-refresher-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
], IonRefresherContent);
export { IonRefresherContent };
let IonReorder = class IonReorder {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonReorder.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonReorder = tslib_1.__decorate([
    Component({ selector: "ion-reorder", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonReorder);
export { IonReorder };
let IonReorderGroup = class IonReorderGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionItemReorder"]);
    }
};
IonReorderGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonReorderGroup = tslib_1.__decorate([
    ProxyCmp({ inputs: ["disabled"], "methods": ["complete"] }),
    Component({ selector: "ion-reorder-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
], IonReorderGroup);
export { IonReorderGroup };
let IonRippleEffect = class IonRippleEffect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonRippleEffect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRippleEffect = tslib_1.__decorate([
    ProxyCmp({ inputs: ["type"], "methods": ["addRipple"] }),
    Component({ selector: "ion-ripple-effect", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["type"] })
], IonRippleEffect);
export { IonRippleEffect };
let IonRow = class IonRow {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonRow.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonRow = tslib_1.__decorate([
    Component({ selector: "ion-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonRow);
export { IonRow };
let IonSearchbar = class IonSearchbar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
    }
};
IonSearchbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSearchbar = tslib_1.__decorate([
    ProxyCmp({ inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "spellcheck", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
    Component({ selector: "ion-searchbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "spellcheck", "type", "value"] })
], IonSearchbar);
export { IonSearchbar };
let IonSegment = class IonSegment {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
};
IonSegment.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSegment = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "disabled", "mode", "scrollable", "value"] }),
    Component({ selector: "ion-segment", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "scrollable", "value"] })
], IonSegment);
export { IonSegment };
let IonSegmentButton = class IonSegmentButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSegmentButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSegmentButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ["disabled", "layout", "mode", "type", "value"] }),
    Component({ selector: "ion-segment-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "layout", "mode", "type", "value"] })
], IonSegmentButton);
export { IonSegmentButton };
let IonSelect = class IonSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionFocus", "ionBlur"]);
    }
};
IonSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSelect = tslib_1.__decorate([
    ProxyCmp({ inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"], "methods": ["open"] }),
    Component({ selector: "ion-select", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] })
], IonSelect);
export { IonSelect };
let IonSelectOption = class IonSelectOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSelectOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSelectOption = tslib_1.__decorate([
    ProxyCmp({ inputs: ["disabled", "value"] }),
    Component({ selector: "ion-select-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "value"] })
], IonSelectOption);
export { IonSelectOption };
let IonSkeletonText = class IonSkeletonText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSkeletonText.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSkeletonText = tslib_1.__decorate([
    ProxyCmp({ inputs: ["animated"] }),
    Component({ selector: "ion-skeleton-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated"] })
], IonSkeletonText);
export { IonSkeletonText };
let IonSlide = class IonSlide {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSlide.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSlide = tslib_1.__decorate([
    Component({ selector: "ion-slide", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonSlide);
export { IonSlide };
let IonSlides = class IonSlides {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSlidesDidLoad", "ionSlideTap", "ionSlideDoubleTap", "ionSlideWillChange", "ionSlideDidChange", "ionSlideNextStart", "ionSlidePrevStart", "ionSlideNextEnd", "ionSlidePrevEnd", "ionSlideTransitionStart", "ionSlideTransitionEnd", "ionSlideDrag", "ionSlideReachStart", "ionSlideReachEnd", "ionSlideTouchStart", "ionSlideTouchEnd"]);
    }
};
IonSlides.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSlides = tslib_1.__decorate([
    ProxyCmp({ inputs: ["mode", "options", "pager", "scrollbar"], "methods": ["update", "updateAutoHeight", "slideTo", "slideNext", "slidePrev", "getActiveIndex", "getPreviousIndex", "length", "isEnd", "isBeginning", "startAutoplay", "stopAutoplay", "lockSwipeToNext", "lockSwipeToPrev", "lockSwipes", "getSwiper"] }),
    Component({ selector: "ion-slides", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "options", "pager", "scrollbar"] })
], IonSlides);
export { IonSlides };
let IonSpinner = class IonSpinner {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonSpinner.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSpinner = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "duration", "name", "paused"] }),
    Component({ selector: "ion-spinner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "duration", "name", "paused"] })
], IonSpinner);
export { IonSpinner };
let IonSplitPane = class IonSplitPane {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
    }
};
IonSplitPane.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonSplitPane = tslib_1.__decorate([
    ProxyCmp({ inputs: ["contentId", "disabled", "when"] }),
    Component({ selector: "ion-split-pane", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "when"] })
], IonSplitPane);
export { IonSplitPane };
let IonTabBar = class IonTabBar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonTabBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonTabBar = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode", "selectedTab", "translucent"] }),
    Component({ selector: "ion-tab-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "selectedTab", "translucent"] })
], IonTabBar);
export { IonTabBar };
let IonTabButton = class IonTabButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonTabButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonTabButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] }),
    Component({ selector: "ion-tab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
], IonTabButton);
export { IonTabButton };
let IonText = class IonText {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonText.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonText = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode"] }),
    Component({ selector: "ion-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
], IonText);
export { IonText };
let IonTextarea = class IonTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
    }
};
IonTextarea.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonTextarea = tslib_1.__decorate([
    ProxyCmp({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"], "methods": ["setFocus", "getInputElement"] }),
    Component({ selector: "ion-textarea", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] })
], IonTextarea);
export { IonTextarea };
let IonThumbnail = class IonThumbnail {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonThumbnail.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonThumbnail = tslib_1.__decorate([
    Component({ selector: "ion-thumbnail", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
], IonThumbnail);
export { IonThumbnail };
let IonTitle = class IonTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonTitle = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "size"] }),
    Component({ selector: "ion-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "size"] })
], IonTitle);
export { IonTitle };
let IonToggle = class IonToggle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
};
IonToggle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonToggle = tslib_1.__decorate([
    ProxyCmp({ inputs: ["checked", "color", "disabled", "mode", "name", "value"] }),
    Component({ selector: "ion-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
], IonToggle);
export { IonToggle };
let IonToolbar = class IonToolbar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
IonToolbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
IonToolbar = tslib_1.__decorate([
    ProxyCmp({ inputs: ["color", "mode"] }),
    Component({ selector: "ion-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
], IonToolbar);
export { IonToolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9wcm94aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLekQsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTTtJQUVmLFlBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDaEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7Q0FDSixDQUFBOztZQUprQixpQkFBaUI7WUFBSyxVQUFVO1lBQWUsTUFBTTs7QUFGM0QsTUFBTTtJQURsQixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLENBQUM7R0FDOUcsTUFBTSxDQU1sQjtTQU5ZLE1BQU07QUFVbkIsSUFBYSxTQUFTLEdBQXRCLE1BQWEsU0FBUztJQUVsQixZQUFZLENBQW9CLEVBQUUsQ0FBYSxFQUFZLENBQVM7UUFBVCxNQUFDLEdBQUQsQ0FBQyxDQUFRO1FBQ2hFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0NBQ0osQ0FBQTs7WUFKa0IsaUJBQWlCO1lBQUssVUFBVTtZQUFlLE1B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LEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN2QyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO0dBQzdJLFVBQVUsQ0FNdEI7U0FOWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUHJveHlDbXAsIHByb3h5T3V0cHV0cyB9IGZyb20gXCIuL3Byb3hpZXMtdXRpbHNcIjtcbmltcG9ydCB7IENvbXBvbmVudHMgfSBmcm9tIFwiQGlvbmljL2NvcmVcIjtcbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25BcHAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkFwcCB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWFwcFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiIH0pXG5leHBvcnQgY2xhc3MgSW9uQXBwIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkF2YXRhciBleHRlbmRzIENvbXBvbmVudHMuSW9uQXZhdGFyIHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYXZhdGFyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25BdmF0YXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQmFja0J1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uQmFja0J1dHRvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVmYXVsdEhyZWZcIiwgXCJkaXNhYmxlZFwiLCBcImljb25cIiwgXCJtb2RlXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwidGV4dFwiLCBcInR5cGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYmFjay1idXR0b25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRlZmF1bHRIcmVmXCIsIFwiZGlzYWJsZWRcIiwgXCJpY29uXCIsIFwibW9kZVwiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInRleHRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQmFja0J1dHRvbiB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWNrZHJvcCBleHRlbmRzIENvbXBvbmVudHMuSW9uQmFja2Ryb3Age1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJzdG9wUHJvcGFnYXRpb25cIiwgXCJ0YXBwYWJsZVwiLCBcInZpc2libGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYmFja2Ryb3BcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJzdG9wUHJvcGFnYXRpb25cIiwgXCJ0YXBwYWJsZVwiLCBcInZpc2libGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25CYWNrZHJvcCB7XG4gICAgaW9uQmFja2Ryb3BUYXAhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkJhY2tkcm9wVGFwXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQmFkZ2UgZXh0ZW5kcyBDb21wb25lbnRzLklvbkJhZGdlIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWJhZGdlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQmFkZ2Uge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CdXR0b24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJidXR0b25UeXBlXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZXhwYW5kXCIsIFwiZmlsbFwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic3Ryb25nXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1idXR0b25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJidXR0b25UeXBlXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZXhwYW5kXCIsIFwiZmlsbFwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwic2hhcGVcIiwgXCJzaXplXCIsIFwic3Ryb25nXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkJ1dHRvbiB7XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkJ1dHRvbnMgZXh0ZW5kcyBDb21wb25lbnRzLklvbkJ1dHRvbnMge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xsYXBzZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1idXR0b25zXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sbGFwc2VcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25CdXR0b25zIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJidXR0b25cIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInJvdXRlckRpcmVjdGlvblwiLCBcInRhcmdldFwiLCBcInR5cGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2FyZFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImJ1dHRvblwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNhcmQge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZENvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmRDb250ZW50IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jYXJkLWNvbnRlbnRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2FyZENvbnRlbnQge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZEhlYWRlciBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZEhlYWRlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInRyYW5zbHVjZW50XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNhcmQtaGVhZGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25DYXJkSGVhZGVyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNhcmRTdWJ0aXRsZSBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZFN1YnRpdGxlIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNhcmQtc3VidGl0bGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25DYXJkU3VidGl0bGUge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZFRpdGxlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DYXJkVGl0bGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2FyZC10aXRsZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNhcmRUaXRsZSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25DaGVja2JveCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2hlY2tib3gge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjaGVja2VkXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImluZGV0ZXJtaW5hdGVcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNoZWNrYm94XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY2hlY2tlZFwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJpbmRldGVybWluYXRlXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNoZWNrYm94IHtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DaGFuZ2VcIiwgXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25DaGlwIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DaGlwIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwib3V0bGluZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jaGlwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwib3V0bGluZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNoaXAge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ29sIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Db2wge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJvZmZzZXRcIiwgXCJvZmZzZXRMZ1wiLCBcIm9mZnNldE1kXCIsIFwib2Zmc2V0U21cIiwgXCJvZmZzZXRYbFwiLCBcIm9mZnNldFhzXCIsIFwicHVsbFwiLCBcInB1bGxMZ1wiLCBcInB1bGxNZFwiLCBcInB1bGxTbVwiLCBcInB1bGxYbFwiLCBcInB1bGxYc1wiLCBcInB1c2hcIiwgXCJwdXNoTGdcIiwgXCJwdXNoTWRcIiwgXCJwdXNoU21cIiwgXCJwdXNoWGxcIiwgXCJwdXNoWHNcIiwgXCJzaXplXCIsIFwic2l6ZUxnXCIsIFwic2l6ZU1kXCIsIFwic2l6ZVNtXCIsIFwic2l6ZVhsXCIsIFwic2l6ZVhzXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNvbFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcIm9mZnNldFwiLCBcIm9mZnNldExnXCIsIFwib2Zmc2V0TWRcIiwgXCJvZmZzZXRTbVwiLCBcIm9mZnNldFhsXCIsIFwib2Zmc2V0WHNcIiwgXCJwdWxsXCIsIFwicHVsbExnXCIsIFwicHVsbE1kXCIsIFwicHVsbFNtXCIsIFwicHVsbFhsXCIsIFwicHVsbFhzXCIsIFwicHVzaFwiLCBcInB1c2hMZ1wiLCBcInB1c2hNZFwiLCBcInB1c2hTbVwiLCBcInB1c2hYbFwiLCBcInB1c2hYc1wiLCBcInNpemVcIiwgXCJzaXplTGdcIiwgXCJzaXplTWRcIiwgXCJzaXplU21cIiwgXCJzaXplWGxcIiwgXCJzaXplWHNcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Db2wge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ29udGVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ29udGVudCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZm9yY2VPdmVyc2Nyb2xsXCIsIFwiZnVsbHNjcmVlblwiLCBcInNjcm9sbEV2ZW50c1wiLCBcInNjcm9sbFhcIiwgXCJzY3JvbGxZXCJdLCBcIm1ldGhvZHNcIjogW1wiZ2V0U2Nyb2xsRWxlbWVudFwiLCBcInNjcm9sbFRvVG9wXCIsIFwic2Nyb2xsVG9Cb3R0b21cIiwgXCJzY3JvbGxCeVBvaW50XCIsIFwic2Nyb2xsVG9Qb2ludFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jb250ZW50XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJmb3JjZU92ZXJzY3JvbGxcIiwgXCJmdWxsc2NyZWVuXCIsIFwic2Nyb2xsRXZlbnRzXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Db250ZW50IHtcbiAgICBpb25TY3JvbGxTdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2Nyb2xsITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TY3JvbGxFbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblNjcm9sbFN0YXJ0XCIsIFwiaW9uU2Nyb2xsXCIsIFwiaW9uU2Nyb2xsRW5kXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRGF0ZXRpbWUgZXh0ZW5kcyBDb21wb25lbnRzLklvbkRhdGV0aW1lIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY2FuY2VsVGV4dFwiLCBcImRheU5hbWVzXCIsIFwiZGF5U2hvcnROYW1lc1wiLCBcImRheVZhbHVlc1wiLCBcImRpc2FibGVkXCIsIFwiZGlzcGxheUZvcm1hdFwiLCBcImRpc3BsYXlUaW1lem9uZVwiLCBcImRvbmVUZXh0XCIsIFwiaG91clZhbHVlc1wiLCBcIm1heFwiLCBcIm1pblwiLCBcIm1pbnV0ZVZhbHVlc1wiLCBcIm1vZGVcIiwgXCJtb250aE5hbWVzXCIsIFwibW9udGhTaG9ydE5hbWVzXCIsIFwibW9udGhWYWx1ZXNcIiwgXCJuYW1lXCIsIFwicGlja2VyRm9ybWF0XCIsIFwicGlja2VyT3B0aW9uc1wiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZG9ubHlcIiwgXCJ2YWx1ZVwiLCBcInllYXJWYWx1ZXNcIl0sIFwibWV0aG9kc1wiOiBbXCJvcGVuXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWRhdGV0aW1lXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY2FuY2VsVGV4dFwiLCBcImRheU5hbWVzXCIsIFwiZGF5U2hvcnROYW1lc1wiLCBcImRheVZhbHVlc1wiLCBcImRpc2FibGVkXCIsIFwiZGlzcGxheUZvcm1hdFwiLCBcImRpc3BsYXlUaW1lem9uZVwiLCBcImRvbmVUZXh0XCIsIFwiaG91clZhbHVlc1wiLCBcIm1heFwiLCBcIm1pblwiLCBcIm1pbnV0ZVZhbHVlc1wiLCBcIm1vZGVcIiwgXCJtb250aE5hbWVzXCIsIFwibW9udGhTaG9ydE5hbWVzXCIsIFwibW9udGhWYWx1ZXNcIiwgXCJuYW1lXCIsIFwicGlja2VyRm9ybWF0XCIsIFwicGlja2VyT3B0aW9uc1wiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZG9ubHlcIiwgXCJ2YWx1ZVwiLCBcInllYXJWYWx1ZXNcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25EYXRldGltZSB7XG4gICAgaW9uQ2FuY2VsITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DYW5jZWxcIiwgXCJpb25DaGFuZ2VcIiwgXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25GYWIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkZhYiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFjdGl2YXRlZFwiLCBcImVkZ2VcIiwgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl0sIFwibWV0aG9kc1wiOiBbXCJjbG9zZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1mYWJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhY3RpdmF0ZWRcIiwgXCJlZGdlXCIsIFwiaG9yaXpvbnRhbFwiLCBcInZlcnRpY2FsXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRmFiIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiQnV0dG9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwiY2xvc2VJY29uXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaG93XCIsIFwic2l6ZVwiLCBcInRhcmdldFwiLCBcInRyYW5zbHVjZW50XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1mYWItYnV0dG9uXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwiY2xvc2VJY29uXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaG93XCIsIFwic2l6ZVwiLCBcInRhcmdldFwiLCBcInRyYW5zbHVjZW50XCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkZhYkJ1dHRvbiB7XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYkxpc3QgZXh0ZW5kcyBDb21wb25lbnRzLklvbkZhYkxpc3Qge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhY3RpdmF0ZWRcIiwgXCJzaWRlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWZhYi1saXN0XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwic2lkZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkZhYkxpc3Qge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Gb290ZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tZm9vdGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wibW9kZVwiLCBcInRyYW5zbHVjZW50XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRm9vdGVyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkdyaWQgZXh0ZW5kcyBDb21wb25lbnRzLklvbkdyaWQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJmaXhlZFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1ncmlkXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZml4ZWRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25HcmlkIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkhlYWRlciBleHRlbmRzIENvbXBvbmVudHMuSW9uSGVhZGVyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sbGFwc2VcIiwgXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taGVhZGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sbGFwc2VcIiwgXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25IZWFkZXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSWNvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uSWNvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFyaWFMYWJlbFwiLCBcImNvbG9yXCIsIFwiZmxpcFJ0bFwiLCBcImljb25cIiwgXCJpb3NcIiwgXCJsYXp5XCIsIFwibWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInNpemVcIiwgXCJzcmNcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taWNvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFyaWFMYWJlbFwiLCBcImNvbG9yXCIsIFwiZmxpcFJ0bFwiLCBcImljb25cIiwgXCJpb3NcIiwgXCJsYXp5XCIsIFwibWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInNpemVcIiwgXCJzcmNcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JY29uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkltZyBleHRlbmRzIENvbXBvbmVudHMuSW9uSW1nIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWx0XCIsIFwic3JjXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWltZ1wiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFsdFwiLCBcInNyY1wiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkltZyB7XG4gICAgaW9uSW1nV2lsbExvYWQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkltZ0RpZExvYWQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkVycm9yITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25JbWdXaWxsTG9hZFwiLCBcImlvbkltZ0RpZExvYWRcIiwgXCJpb25FcnJvclwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkluZmluaXRlU2Nyb2xsIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JbmZpbml0ZVNjcm9sbCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImRpc2FibGVkXCIsIFwicG9zaXRpb25cIiwgXCJ0aHJlc2hvbGRcIl0sIFwibWV0aG9kc1wiOiBbXCJjb21wbGV0ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pbmZpbml0ZS1zY3JvbGxcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcInBvc2l0aW9uXCIsIFwidGhyZXNob2xkXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uSW5maW5pdGVTY3JvbGwge1xuICAgIGlvbkluZmluaXRlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25JbmZpbml0ZVwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkluZmluaXRlU2Nyb2xsQ29udGVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uSW5maW5pdGVTY3JvbGxDb250ZW50IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wibG9hZGluZ1NwaW5uZXJcIiwgXCJsb2FkaW5nVGV4dFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pbmZpbml0ZS1zY3JvbGwtY29udGVudFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImxvYWRpbmdTcGlubmVyXCIsIFwibG9hZGluZ1RleHRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JbmZpbml0ZVNjcm9sbENvbnRlbnQge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW5wdXQgZXh0ZW5kcyBDb21wb25lbnRzLklvbklucHV0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWNjZXB0XCIsIFwiYXV0b2NhcGl0YWxpemVcIiwgXCJhdXRvY29tcGxldGVcIiwgXCJhdXRvY29ycmVjdFwiLCBcImF1dG9mb2N1c1wiLCBcImNsZWFySW5wdXRcIiwgXCJjbGVhck9uRWRpdFwiLCBcImNvbG9yXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImVudGVya2V5aGludFwiLCBcImlucHV0bW9kZVwiLCBcIm1heFwiLCBcIm1heGxlbmd0aFwiLCBcIm1pblwiLCBcIm1pbmxlbmd0aFwiLCBcIm1vZGVcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJwYXR0ZXJuXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInJlcXVpcmVkXCIsIFwic2l6ZVwiLCBcInNwZWxsY2hlY2tcIiwgXCJzdGVwXCIsIFwidHlwZVwiLCBcInZhbHVlXCJdLCBcIm1ldGhvZHNcIjogW1wic2V0Rm9jdXNcIiwgXCJnZXRJbnB1dEVsZW1lbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taW5wdXRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhY2NlcHRcIiwgXCJhdXRvY2FwaXRhbGl6ZVwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiYXV0b2ZvY3VzXCIsIFwiY2xlYXJJbnB1dFwiLCBcImNsZWFyT25FZGl0XCIsIFwiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibWF4XCIsIFwibWF4bGVuZ3RoXCIsIFwibWluXCIsIFwibWlubGVuZ3RoXCIsIFwibW9kZVwiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwic3BlbGxjaGVja1wiLCBcInN0ZXBcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JbnB1dCB7XG4gICAgaW9uSW5wdXQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbklucHV0XCIsIFwiaW9uQ2hhbmdlXCIsIFwiaW9uQmx1clwiLCBcImlvbkZvY3VzXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSXRlbSBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImJ1dHRvblwiLCBcImNvbG9yXCIsIFwiZGV0YWlsXCIsIFwiZGV0YWlsSWNvblwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibGluZXNcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYnV0dG9uXCIsIFwiY29sb3JcIiwgXCJkZXRhaWxcIiwgXCJkZXRhaWxJY29uXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJsaW5lc1wiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtRGl2aWRlciBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbURpdmlkZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJzdGlja3lcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbS1kaXZpZGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwic3RpY2t5XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpdmlkZXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSXRlbUdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtR3JvdXAge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtLWdyb3VwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtR3JvdXAge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSXRlbU9wdGlvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbU9wdGlvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImV4cGFuZGFibGVcIiwgXCJocmVmXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInRhcmdldFwiLCBcInR5cGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbS1vcHRpb25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJleHBhbmRhYmxlXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbU9wdGlvbiB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbU9wdGlvbnMge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJzaWRlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWl0ZW0tb3B0aW9uc1wiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcInNpZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtT3B0aW9ucyB7XG4gICAgaW9uU3dpcGUhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblN3aXBlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSXRlbVNsaWRpbmcgZXh0ZW5kcyBDb21wb25lbnRzLklvbkl0ZW1TbGlkaW5nIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIl0sIFwibWV0aG9kc1wiOiBbXCJnZXRPcGVuQW1vdW50XCIsIFwiZ2V0U2xpZGluZ1JhdGlvXCIsIFwib3BlblwiLCBcImNsb3NlXCIsIFwiY2xvc2VPcGVuZWRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbS1zbGlkaW5nXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZGlzYWJsZWRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtU2xpZGluZyB7XG4gICAgaW9uRHJhZyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uRHJhZ1wiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxhYmVsIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25MYWJlbCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInBvc2l0aW9uXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWxhYmVsXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwicG9zaXRpb25cIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25MYWJlbCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25MaXN0IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25MaXN0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiaW5zZXRcIiwgXCJsaW5lc1wiLCBcIm1vZGVcIl0sIFwibWV0aG9kc1wiOiBbXCJjbG9zZVNsaWRpbmdJdGVtc1wiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1saXN0XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiaW5zZXRcIiwgXCJsaW5lc1wiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25MaXN0IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxpc3RIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxpc3RIZWFkZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImxpbmVzXCIsIFwibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1saXN0LWhlYWRlclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibGluZXNcIiwgXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uTGlzdEhlYWRlciB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25NZW51IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25NZW51IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29udGVudElkXCIsIFwiZGlzYWJsZWRcIiwgXCJtYXhFZGdlU3RhcnRcIiwgXCJtZW51SWRcIiwgXCJzaWRlXCIsIFwic3dpcGVHZXN0dXJlXCIsIFwidHlwZVwiXSwgXCJtZXRob2RzXCI6IFtcImlzT3BlblwiLCBcImlzQWN0aXZlXCIsIFwib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwic2V0T3BlblwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1tZW51XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29udGVudElkXCIsIFwiZGlzYWJsZWRcIiwgXCJtYXhFZGdlU3RhcnRcIiwgXCJtZW51SWRcIiwgXCJzaWRlXCIsIFwic3dpcGVHZXN0dXJlXCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk1lbnUge1xuICAgIGlvbldpbGxPcGVuITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25XaWxsQ2xvc2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkRpZE9wZW4hOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkRpZENsb3NlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25XaWxsT3BlblwiLCBcImlvbldpbGxDbG9zZVwiLCBcImlvbkRpZE9wZW5cIiwgXCJpb25EaWRDbG9zZVwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnVCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnVCdXR0b24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhdXRvSGlkZVwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtZW51XCIsIFwibW9kZVwiLCBcInR5cGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbWVudS1idXR0b25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhdXRvSGlkZVwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtZW51XCIsIFwibW9kZVwiLCBcInR5cGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25NZW51QnV0dG9uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnVUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnVUb2dnbGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhdXRvSGlkZVwiLCBcIm1lbnVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbWVudS10b2dnbGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhdXRvSGlkZVwiLCBcIm1lbnVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25NZW51VG9nZ2xlIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk5hdiBleHRlbmRzIENvbXBvbmVudHMuSW9uTmF2IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYW5pbWF0ZWRcIiwgXCJhbmltYXRpb25cIiwgXCJyb290XCIsIFwicm9vdFBhcmFtc1wiLCBcInN3aXBlR2VzdHVyZVwiXSwgXCJtZXRob2RzXCI6IFtcInB1c2hcIiwgXCJpbnNlcnRcIiwgXCJpbnNlcnRQYWdlc1wiLCBcInBvcFwiLCBcInBvcFRvXCIsIFwicG9wVG9Sb290XCIsIFwicmVtb3ZlSW5kZXhcIiwgXCJzZXRSb290XCIsIFwic2V0UGFnZXNcIiwgXCJnZXRBY3RpdmVcIiwgXCJnZXRCeUluZGV4XCIsIFwiY2FuR29CYWNrXCIsIFwiZ2V0UHJldmlvdXNcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbmF2XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYW5pbWF0ZWRcIiwgXCJhbmltYXRpb25cIiwgXCJyb290XCIsIFwicm9vdFBhcmFtc1wiLCBcInN3aXBlR2VzdHVyZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk5hdiB7XG4gICAgaW9uTmF2V2lsbENoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uTmF2RGlkQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25OYXZXaWxsQ2hhbmdlXCIsIFwiaW9uTmF2RGlkQ2hhbmdlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTmF2TGluayBleHRlbmRzIENvbXBvbmVudHMuSW9uTmF2TGluayB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbXBvbmVudFwiLCBcImNvbXBvbmVudFByb3BzXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLW5hdi1saW5rXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29tcG9uZW50XCIsIFwiY29tcG9uZW50UHJvcHNcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25OYXZMaW5rIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk5vdGUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk5vdGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbm90ZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk5vdGUge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUHJvZ3Jlc3NCYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblByb2dyZXNzQmFyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYnVmZmVyXCIsIFwiY29sb3JcIiwgXCJtb2RlXCIsIFwicmV2ZXJzZWRcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tcHJvZ3Jlc3MtYmFyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYnVmZmVyXCIsIFwiY29sb3JcIiwgXCJtb2RlXCIsIFwicmV2ZXJzZWRcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Qcm9ncmVzc0JhciB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SYWRpbyBleHRlbmRzIENvbXBvbmVudHMuSW9uUmFkaW8ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yYWRpb1wiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uUmFkaW8ge1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SYWRpb0dyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SYWRpb0dyb3VwIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWxsb3dFbXB0eVNlbGVjdGlvblwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yYWRpby1ncm91cFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFsbG93RW1wdHlTZWxlY3Rpb25cIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SYWRpb0dyb3VwIHtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhbmdlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SYW5nZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImR1YWxLbm9ic1wiLCBcIm1heFwiLCBcIm1pblwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGluXCIsIFwic25hcHNcIiwgXCJzdGVwXCIsIFwidGlja3NcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yYW5nZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImR1YWxLbm9ic1wiLCBcIm1heFwiLCBcIm1pblwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGluXCIsIFwic25hcHNcIiwgXCJzdGVwXCIsIFwidGlja3NcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJhbmdlIHtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DaGFuZ2VcIiwgXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZWZyZXNoZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblJlZnJlc2hlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNsb3NlRHVyYXRpb25cIiwgXCJkaXNhYmxlZFwiLCBcInB1bGxGYWN0b3JcIiwgXCJwdWxsTWF4XCIsIFwicHVsbE1pblwiLCBcInNuYXBiYWNrRHVyYXRpb25cIl0sIFwibWV0aG9kc1wiOiBbXCJjb21wbGV0ZVwiLCBcImNhbmNlbFwiLCBcImdldFByb2dyZXNzXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlZnJlc2hlclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNsb3NlRHVyYXRpb25cIiwgXCJkaXNhYmxlZFwiLCBcInB1bGxGYWN0b3JcIiwgXCJwdWxsTWF4XCIsIFwicHVsbE1pblwiLCBcInNuYXBiYWNrRHVyYXRpb25cIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SZWZyZXNoZXIge1xuICAgIGlvblJlZnJlc2ghOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblB1bGwhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25SZWZyZXNoXCIsIFwiaW9uUHVsbFwiLCBcImlvblN0YXJ0XCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmVmcmVzaGVyQ29udGVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uUmVmcmVzaGVyQ29udGVudCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcInB1bGxpbmdJY29uXCIsIFwicHVsbGluZ1RleHRcIiwgXCJyZWZyZXNoaW5nU3Bpbm5lclwiLCBcInJlZnJlc2hpbmdUZXh0XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlZnJlc2hlci1jb250ZW50XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wicHVsbGluZ0ljb25cIiwgXCJwdWxsaW5nVGV4dFwiLCBcInJlZnJlc2hpbmdTcGlubmVyXCIsIFwicmVmcmVzaGluZ1RleHRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SZWZyZXNoZXJDb250ZW50IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJlb3JkZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblJlb3JkZXIge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yZW9yZGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25SZW9yZGVyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJlb3JkZXJHcm91cCBleHRlbmRzIENvbXBvbmVudHMuSW9uUmVvcmRlckdyb3VwIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIl0sIFwibWV0aG9kc1wiOiBbXCJjb21wbGV0ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yZW9yZGVyLWdyb3VwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZGlzYWJsZWRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SZW9yZGVyR3JvdXAge1xuICAgIGlvbkl0ZW1SZW9yZGVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25JdGVtUmVvcmRlclwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJpcHBsZUVmZmVjdCBleHRlbmRzIENvbXBvbmVudHMuSW9uUmlwcGxlRWZmZWN0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1widHlwZVwiXSwgXCJtZXRob2RzXCI6IFtcImFkZFJpcHBsZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1yaXBwbGUtZWZmZWN0XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1widHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJpcHBsZUVmZmVjdCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Sb3cgZXh0ZW5kcyBDb21wb25lbnRzLklvblJvdyB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJvd1wiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiIH0pXG5leHBvcnQgY2xhc3MgSW9uUm93IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlYXJjaGJhciBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VhcmNoYmFyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYW5pbWF0ZWRcIiwgXCJhdXRvY29tcGxldGVcIiwgXCJhdXRvY29ycmVjdFwiLCBcImNhbmNlbEJ1dHRvbkljb25cIiwgXCJjYW5jZWxCdXR0b25UZXh0XCIsIFwiY2xlYXJJY29uXCIsIFwiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibW9kZVwiLCBcInBsYWNlaG9sZGVyXCIsIFwic2VhcmNoSWNvblwiLCBcInNob3dDYW5jZWxCdXR0b25cIiwgXCJzcGVsbGNoZWNrXCIsIFwidHlwZVwiLCBcInZhbHVlXCJdLCBcIm1ldGhvZHNcIjogW1wic2V0Rm9jdXNcIiwgXCJnZXRJbnB1dEVsZW1lbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2VhcmNoYmFyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYW5pbWF0ZWRcIiwgXCJhdXRvY29tcGxldGVcIiwgXCJhdXRvY29ycmVjdFwiLCBcImNhbmNlbEJ1dHRvbkljb25cIiwgXCJjYW5jZWxCdXR0b25UZXh0XCIsIFwiY2xlYXJJY29uXCIsIFwiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibW9kZVwiLCBcInBsYWNlaG9sZGVyXCIsIFwic2VhcmNoSWNvblwiLCBcInNob3dDYW5jZWxCdXR0b25cIiwgXCJzcGVsbGNoZWNrXCIsIFwidHlwZVwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2VhcmNoYmFyIHtcbiAgICBpb25JbnB1dCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25DYW5jZWwhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkNsZWFyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uSW5wdXRcIiwgXCJpb25DaGFuZ2VcIiwgXCJpb25DYW5jZWxcIiwgXCJpb25DbGVhclwiLCBcImlvbkJsdXJcIiwgXCJpb25Gb2N1c1wiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlZ21lbnQgZXh0ZW5kcyBDb21wb25lbnRzLklvblNlZ21lbnQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcInNjcm9sbGFibGVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zZWdtZW50XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1vZGVcIiwgXCJzY3JvbGxhYmxlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TZWdtZW50IHtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlZ21lbnRCdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvblNlZ21lbnRCdXR0b24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcImxheW91dFwiLCBcIm1vZGVcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2VnbWVudC1idXR0b25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcImxheW91dFwiLCBcIm1vZGVcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TZWdtZW50QnV0dG9uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlbGVjdCBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VsZWN0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY2FuY2VsVGV4dFwiLCBcImNvbXBhcmVXaXRoXCIsIFwiZGlzYWJsZWRcIiwgXCJpbnRlcmZhY2VcIiwgXCJpbnRlcmZhY2VPcHRpb25zXCIsIFwibW9kZVwiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcIm9rVGV4dFwiLCBcInBsYWNlaG9sZGVyXCIsIFwic2VsZWN0ZWRUZXh0XCIsIFwidmFsdWVcIl0sIFwibWV0aG9kc1wiOiBbXCJvcGVuXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNlbGVjdFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNhbmNlbFRleHRcIiwgXCJjb21wYXJlV2l0aFwiLCBcImRpc2FibGVkXCIsIFwiaW50ZXJmYWNlXCIsIFwiaW50ZXJmYWNlT3B0aW9uc1wiLCBcIm1vZGVcIiwgXCJtdWx0aXBsZVwiLCBcIm5hbWVcIiwgXCJva1RleHRcIiwgXCJwbGFjZWhvbGRlclwiLCBcInNlbGVjdGVkVGV4dFwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2VsZWN0IHtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkNhbmNlbCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbkNhbmNlbFwiLCBcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNlbGVjdE9wdGlvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VsZWN0T3B0aW9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zZWxlY3Qtb3B0aW9uXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNlbGVjdE9wdGlvbiB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ta2VsZXRvblRleHQgZXh0ZW5kcyBDb21wb25lbnRzLklvblNrZWxldG9uVGV4dCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFuaW1hdGVkXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNrZWxldG9uLXRleHRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhbmltYXRlZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNrZWxldG9uVGV4dCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TbGlkZSBleHRlbmRzIENvbXBvbmVudHMuSW9uU2xpZGUge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zbGlkZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiIH0pXG5leHBvcnQgY2xhc3MgSW9uU2xpZGUge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2xpZGVzIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TbGlkZXMge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJtb2RlXCIsIFwib3B0aW9uc1wiLCBcInBhZ2VyXCIsIFwic2Nyb2xsYmFyXCJdLCBcIm1ldGhvZHNcIjogW1widXBkYXRlXCIsIFwidXBkYXRlQXV0b0hlaWdodFwiLCBcInNsaWRlVG9cIiwgXCJzbGlkZU5leHRcIiwgXCJzbGlkZVByZXZcIiwgXCJnZXRBY3RpdmVJbmRleFwiLCBcImdldFByZXZpb3VzSW5kZXhcIiwgXCJsZW5ndGhcIiwgXCJpc0VuZFwiLCBcImlzQmVnaW5uaW5nXCIsIFwic3RhcnRBdXRvcGxheVwiLCBcInN0b3BBdXRvcGxheVwiLCBcImxvY2tTd2lwZVRvTmV4dFwiLCBcImxvY2tTd2lwZVRvUHJldlwiLCBcImxvY2tTd2lwZXNcIiwgXCJnZXRTd2lwZXJcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2xpZGVzXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wibW9kZVwiLCBcIm9wdGlvbnNcIiwgXCJwYWdlclwiLCBcInNjcm9sbGJhclwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNsaWRlcyB7XG4gICAgaW9uU2xpZGVzRGlkTG9hZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVUYXAhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlRG91YmxlVGFwITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVdpbGxDaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlRGlkQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZU5leHRTdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVQcmV2U3RhcnQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlTmV4dEVuZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVQcmV2RW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRyYW5zaXRpb25TdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVUcmFuc2l0aW9uRW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZURyYWchOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlUmVhY2hTdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVSZWFjaEVuZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVUb3VjaFN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRvdWNoRW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25TbGlkZXNEaWRMb2FkXCIsIFwiaW9uU2xpZGVUYXBcIiwgXCJpb25TbGlkZURvdWJsZVRhcFwiLCBcImlvblNsaWRlV2lsbENoYW5nZVwiLCBcImlvblNsaWRlRGlkQ2hhbmdlXCIsIFwiaW9uU2xpZGVOZXh0U3RhcnRcIiwgXCJpb25TbGlkZVByZXZTdGFydFwiLCBcImlvblNsaWRlTmV4dEVuZFwiLCBcImlvblNsaWRlUHJldkVuZFwiLCBcImlvblNsaWRlVHJhbnNpdGlvblN0YXJ0XCIsIFwiaW9uU2xpZGVUcmFuc2l0aW9uRW5kXCIsIFwiaW9uU2xpZGVEcmFnXCIsIFwiaW9uU2xpZGVSZWFjaFN0YXJ0XCIsIFwiaW9uU2xpZGVSZWFjaEVuZFwiLCBcImlvblNsaWRlVG91Y2hTdGFydFwiLCBcImlvblNsaWRlVG91Y2hFbmRcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TcGlubmVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TcGlubmVyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJkdXJhdGlvblwiLCBcIm5hbWVcIiwgXCJwYXVzZWRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc3Bpbm5lclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZHVyYXRpb25cIiwgXCJuYW1lXCIsIFwicGF1c2VkXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU3Bpbm5lciB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TcGxpdFBhbmUgZXh0ZW5kcyBDb21wb25lbnRzLklvblNwbGl0UGFuZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbnRlbnRJZFwiLCBcImRpc2FibGVkXCIsIFwid2hlblwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zcGxpdC1wYW5lXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29udGVudElkXCIsIFwiZGlzYWJsZWRcIiwgXCJ3aGVuXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU3BsaXRQYW5lIHtcbiAgICBpb25TcGxpdFBhbmVWaXNpYmxlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25TcGxpdFBhbmVWaXNpYmxlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVGFiQmFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25UYWJCYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJzZWxlY3RlZFRhYlwiLCBcInRyYW5zbHVjZW50XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXRhYi1iYXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJzZWxlY3RlZFRhYlwiLCBcInRyYW5zbHVjZW50XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVGFiQmFyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRhYkJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uVGFiQnV0dG9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJsYXlvdXRcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwic2VsZWN0ZWRcIiwgXCJ0YWJcIiwgXCJ0YXJnZXRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGFiLWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibGF5b3V0XCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInNlbGVjdGVkXCIsIFwidGFiXCIsIFwidGFyZ2V0XCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVGFiQnV0dG9uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRleHQgZXh0ZW5kcyBDb21wb25lbnRzLklvblRleHQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGV4dFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblRleHQge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVGV4dGFyZWEgZXh0ZW5kcyBDb21wb25lbnRzLklvblRleHRhcmVhIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYXV0b0dyb3dcIiwgXCJhdXRvY2FwaXRhbGl6ZVwiLCBcImF1dG9mb2N1c1wiLCBcImNsZWFyT25FZGl0XCIsIFwiY29sb3JcIiwgXCJjb2xzXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImVudGVya2V5aGludFwiLCBcImlucHV0bW9kZVwiLCBcIm1heGxlbmd0aFwiLCBcIm1pbmxlbmd0aFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInJlcXVpcmVkXCIsIFwicm93c1wiLCBcInNwZWxsY2hlY2tcIiwgXCJ2YWx1ZVwiLCBcIndyYXBcIl0sIFwibWV0aG9kc1wiOiBbXCJzZXRGb2N1c1wiLCBcImdldElucHV0RWxlbWVudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10ZXh0YXJlYVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImF1dG9Hcm93XCIsIFwiYXV0b2NhcGl0YWxpemVcIiwgXCJhdXRvZm9jdXNcIiwgXCJjbGVhck9uRWRpdFwiLCBcImNvbG9yXCIsIFwiY29sc1wiLCBcImRlYm91bmNlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbnRlcmtleWhpbnRcIiwgXCJpbnB1dG1vZGVcIiwgXCJtYXhsZW5ndGhcIiwgXCJtaW5sZW5ndGhcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZG9ubHlcIiwgXCJyZXF1aXJlZFwiLCBcInJvd3NcIiwgXCJzcGVsbGNoZWNrXCIsIFwidmFsdWVcIiwgXCJ3cmFwXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVGV4dGFyZWEge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uSW5wdXQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DaGFuZ2VcIiwgXCJpb25JbnB1dFwiLCBcImlvbkJsdXJcIiwgXCJpb25Gb2N1c1wiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRodW1ibmFpbCBleHRlbmRzIENvbXBvbmVudHMuSW9uVGh1bWJuYWlsIHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGh1bWJuYWlsXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25UaHVtYm5haWwge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVGl0bGUgZXh0ZW5kcyBDb21wb25lbnRzLklvblRpdGxlIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJzaXplXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXRpdGxlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJzaXplXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVGl0bGUge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Ub2dnbGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjaGVja2VkXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdG9nZ2xlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY2hlY2tlZFwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVG9nZ2xlIHtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25DaGFuZ2VcIiwgXCJpb25Gb2N1c1wiLCBcImlvbkJsdXJcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ub29sYmFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Ub29sYmFyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXRvb2xiYXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Ub29sYmFyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuIl19