import * as tslib_1 from "tslib";
/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
var IonApp = /** @class */ (function () {
    function IonApp(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonApp.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonApp = tslib_1.__decorate([
        Component({ selector: "ion-app", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonApp);
    return IonApp;
}());
export { IonApp };
var IonAvatar = /** @class */ (function () {
    function IonAvatar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonAvatar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonAvatar = tslib_1.__decorate([
        Component({ selector: "ion-avatar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonAvatar);
    return IonAvatar;
}());
export { IonAvatar };
var IonBackButton = /** @class */ (function () {
    function IonBackButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonBackButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonBackButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] }),
        Component({ selector: "ion-back-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "defaultHref", "disabled", "icon", "mode", "routerAnimation", "text", "type"] })
    ], IonBackButton);
    return IonBackButton;
}());
export { IonBackButton };
var IonBackdrop = /** @class */ (function () {
    function IonBackdrop(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionBackdropTap"]);
    }
    IonBackdrop.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonBackdrop = tslib_1.__decorate([
        ProxyCmp({ inputs: ["stopPropagation", "tappable", "visible"] }),
        Component({ selector: "ion-backdrop", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["stopPropagation", "tappable", "visible"] })
    ], IonBackdrop);
    return IonBackdrop;
}());
export { IonBackdrop };
var IonBadge = /** @class */ (function () {
    function IonBadge(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonBadge.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonBadge = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-badge", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonBadge);
    return IonBadge;
}());
export { IonBadge };
var IonButton = /** @class */ (function () {
    function IonButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
    IonButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }),
        Component({ selector: "ion-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] })
    ], IonButton);
    return IonButton;
}());
export { IonButton };
var IonButtons = /** @class */ (function () {
    function IonButtons(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonButtons.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonButtons = tslib_1.__decorate([
        ProxyCmp({ inputs: ["collapse"] }),
        Component({ selector: "ion-buttons", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse"] })
    ], IonButtons);
    return IonButtons;
}());
export { IonButtons };
var IonCard = /** @class */ (function () {
    function IonCard(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCard.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCard = tslib_1.__decorate([
        ProxyCmp({ inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
        Component({ selector: "ion-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
    ], IonCard);
    return IonCard;
}());
export { IonCard };
var IonCardContent = /** @class */ (function () {
    function IonCardContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["mode"] }),
        Component({ selector: "ion-card-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode"] })
    ], IonCardContent);
    return IonCardContent;
}());
export { IonCardContent };
var IonCardHeader = /** @class */ (function () {
    function IonCardHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "translucent"] }),
        Component({ selector: "ion-card-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "translucent"] })
    ], IonCardHeader);
    return IonCardHeader;
}());
export { IonCardHeader };
var IonCardSubtitle = /** @class */ (function () {
    function IonCardSubtitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardSubtitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardSubtitle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-card-subtitle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonCardSubtitle);
    return IonCardSubtitle;
}());
export { IonCardSubtitle };
var IonCardTitle = /** @class */ (function () {
    function IonCardTitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCardTitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCardTitle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-card-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonCardTitle);
    return IonCardTitle;
}());
export { IonCardTitle };
var IonCheckbox = /** @class */ (function () {
    function IonCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
    IonCheckbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCheckbox = tslib_1.__decorate([
        ProxyCmp({ inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] }),
        Component({ selector: "ion-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "indeterminate", "mode", "name", "value"] })
    ], IonCheckbox);
    return IonCheckbox;
}());
export { IonCheckbox };
var IonChip = /** @class */ (function () {
    function IonChip(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonChip.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonChip = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "outline"] }),
        Component({ selector: "ion-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "outline"] })
    ], IonChip);
    return IonChip;
}());
export { IonChip };
var IonCol = /** @class */ (function () {
    function IonCol(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonCol.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonCol = tslib_1.__decorate([
        ProxyCmp({ inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }),
        Component({ selector: "ion-col", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] })
    ], IonCol);
    return IonCol;
}());
export { IonCol };
var IonContent = /** @class */ (function () {
    function IonContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
    }
    IonContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"], "methods": ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"] }),
        Component({ selector: "ion-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] })
    ], IonContent);
    return IonContent;
}());
export { IonContent };
var IonDatetime = /** @class */ (function () {
    function IonDatetime(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
    }
    IonDatetime.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonDatetime = tslib_1.__decorate([
        ProxyCmp({ inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"], "methods": ["open"] }),
        Component({ selector: "ion-datetime", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "dayNames", "dayShortNames", "dayValues", "disabled", "displayFormat", "displayTimezone", "doneText", "hourValues", "max", "min", "minuteValues", "mode", "monthNames", "monthShortNames", "monthValues", "name", "pickerFormat", "pickerOptions", "placeholder", "readonly", "value", "yearValues"] })
    ], IonDatetime);
    return IonDatetime;
}());
export { IonDatetime };
var IonFab = /** @class */ (function () {
    function IonFab(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFab.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFab = tslib_1.__decorate([
        ProxyCmp({ inputs: ["activated", "edge", "horizontal", "vertical"], "methods": ["close"] }),
        Component({ selector: "ion-fab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "edge", "horizontal", "vertical"] })
    ], IonFab);
    return IonFab;
}());
export { IonFab };
var IonFabButton = /** @class */ (function () {
    function IonFabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
    IonFabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFabButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] }),
        Component({ selector: "ion-fab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"] })
    ], IonFabButton);
    return IonFabButton;
}());
export { IonFabButton };
var IonFabList = /** @class */ (function () {
    function IonFabList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFabList.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFabList = tslib_1.__decorate([
        ProxyCmp({ inputs: ["activated", "side"] }),
        Component({ selector: "ion-fab-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["activated", "side"] })
    ], IonFabList);
    return IonFabList;
}());
export { IonFabList };
var IonFooter = /** @class */ (function () {
    function IonFooter(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonFooter.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonFooter = tslib_1.__decorate([
        ProxyCmp({ inputs: ["mode", "translucent"] }),
        Component({ selector: "ion-footer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "translucent"] })
    ], IonFooter);
    return IonFooter;
}());
export { IonFooter };
var IonGrid = /** @class */ (function () {
    function IonGrid(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonGrid.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonGrid = tslib_1.__decorate([
        ProxyCmp({ inputs: ["fixed"] }),
        Component({ selector: "ion-grid", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] })
    ], IonGrid);
    return IonGrid;
}());
export { IonGrid };
var IonHeader = /** @class */ (function () {
    function IonHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ["collapse", "mode", "translucent"] }),
        Component({ selector: "ion-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["collapse", "mode", "translucent"] })
    ], IonHeader);
    return IonHeader;
}());
export { IonHeader };
var IonIcon = /** @class */ (function () {
    function IonIcon(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonIcon.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonIcon = tslib_1.__decorate([
        ProxyCmp({ inputs: ["ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "size", "src"] }),
        Component({ selector: "ion-icon", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ariaLabel", "color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "size", "src"] })
    ], IonIcon);
    return IonIcon;
}());
export { IonIcon };
var IonImg = /** @class */ (function () {
    function IonImg(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
    }
    IonImg.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonImg = tslib_1.__decorate([
        ProxyCmp({ inputs: ["alt", "src"] }),
        Component({ selector: "ion-img", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "src"] })
    ], IonImg);
    return IonImg;
}());
export { IonImg };
var IonInfiniteScroll = /** @class */ (function () {
    function IonInfiniteScroll(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInfinite"]);
    }
    IonInfiniteScroll.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonInfiniteScroll = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "position", "threshold"], "methods": ["complete"] }),
        Component({ selector: "ion-infinite-scroll", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "position", "threshold"] })
    ], IonInfiniteScroll);
    return IonInfiniteScroll;
}());
export { IonInfiniteScroll };
var IonInfiniteScrollContent = /** @class */ (function () {
    function IonInfiniteScrollContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonInfiniteScrollContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonInfiniteScrollContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["loadingSpinner", "loadingText"] }),
        Component({ selector: "ion-infinite-scroll-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["loadingSpinner", "loadingText"] })
    ], IonInfiniteScrollContent);
    return IonInfiniteScrollContent;
}());
export { IonInfiniteScrollContent };
var IonInput = /** @class */ (function () {
    function IonInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
    }
    IonInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonInput = tslib_1.__decorate([
        ProxyCmp({ inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
        Component({ selector: "ion-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearOnEdit", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "spellcheck", "step", "type", "value"] })
    ], IonInput);
    return IonInput;
}());
export { IonInput };
var IonItem = /** @class */ (function () {
    function IonItem(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItem.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItem = tslib_1.__decorate([
        ProxyCmp({ inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] }),
        Component({ selector: "ion-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"] })
    ], IonItem);
    return IonItem;
}());
export { IonItem };
var IonItemDivider = /** @class */ (function () {
    function IonItemDivider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemDivider.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemDivider = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "sticky"] }),
        Component({ selector: "ion-item-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "sticky"] })
    ], IonItemDivider);
    return IonItemDivider;
}());
export { IonItemDivider };
var IonItemGroup = /** @class */ (function () {
    function IonItemGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemGroup = tslib_1.__decorate([
        Component({ selector: "ion-item-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonItemGroup);
    return IonItemGroup;
}());
export { IonItemGroup };
var IonItemOption = /** @class */ (function () {
    function IonItemOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonItemOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemOption = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] }),
        Component({ selector: "ion-item-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"] })
    ], IonItemOption);
    return IonItemOption;
}());
export { IonItemOption };
var IonItemOptions = /** @class */ (function () {
    function IonItemOptions(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSwipe"]);
    }
    IonItemOptions.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemOptions = tslib_1.__decorate([
        ProxyCmp({ inputs: ["side"] }),
        Component({ selector: "ion-item-options", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["side"] })
    ], IonItemOptions);
    return IonItemOptions;
}());
export { IonItemOptions };
var IonItemSliding = /** @class */ (function () {
    function IonItemSliding(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionDrag"]);
    }
    IonItemSliding.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonItemSliding = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled"], "methods": ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"] }),
        Component({ selector: "ion-item-sliding", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
    ], IonItemSliding);
    return IonItemSliding;
}());
export { IonItemSliding };
var IonLabel = /** @class */ (function () {
    function IonLabel(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonLabel.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonLabel = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "position"] }),
        Component({ selector: "ion-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "position"] })
    ], IonLabel);
    return IonLabel;
}());
export { IonLabel };
var IonList = /** @class */ (function () {
    function IonList(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonList.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonList = tslib_1.__decorate([
        ProxyCmp({ inputs: ["inset", "lines", "mode"], "methods": ["closeSlidingItems"] }),
        Component({ selector: "ion-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inset", "lines", "mode"] })
    ], IonList);
    return IonList;
}());
export { IonList };
var IonListHeader = /** @class */ (function () {
    function IonListHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonListHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonListHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "lines", "mode"] }),
        Component({ selector: "ion-list-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "lines", "mode"] })
    ], IonListHeader);
    return IonListHeader;
}());
export { IonListHeader };
var IonMenu = /** @class */ (function () {
    function IonMenu(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
    }
    IonMenu.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonMenu = tslib_1.__decorate([
        ProxyCmp({ inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"], "methods": ["isOpen", "isActive", "open", "close", "toggle", "setOpen"] }),
        Component({ selector: "ion-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"] })
    ], IonMenu);
    return IonMenu;
}());
export { IonMenu };
var IonMenuButton = /** @class */ (function () {
    function IonMenuButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonMenuButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonMenuButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] }),
        Component({ selector: "ion-menu-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"] })
    ], IonMenuButton);
    return IonMenuButton;
}());
export { IonMenuButton };
var IonMenuToggle = /** @class */ (function () {
    function IonMenuToggle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonMenuToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonMenuToggle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["autoHide", "menu"] }),
        Component({ selector: "ion-menu-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoHide", "menu"] })
    ], IonMenuToggle);
    return IonMenuToggle;
}());
export { IonMenuToggle };
var IonNav = /** @class */ (function () {
    function IonNav(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionNavWillChange", "ionNavDidChange"]);
    }
    IonNav.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonNav = tslib_1.__decorate([
        ProxyCmp({ inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"], "methods": ["push", "insert", "insertPages", "pop", "popTo", "popToRoot", "removeIndex", "setRoot", "setPages", "getActive", "getByIndex", "canGoBack", "getPrevious"] }),
        Component({ selector: "ion-nav", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "animation", "root", "rootParams", "swipeGesture"] })
    ], IonNav);
    return IonNav;
}());
export { IonNav };
var IonNavLink = /** @class */ (function () {
    function IonNavLink(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNavLink.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonNavLink = tslib_1.__decorate([
        ProxyCmp({ inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] }),
        Component({ selector: "ion-nav-link", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["component", "componentProps", "routerAnimation", "routerDirection"] })
    ], IonNavLink);
    return IonNavLink;
}());
export { IonNavLink };
var IonNote = /** @class */ (function () {
    function IonNote(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonNote.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonNote = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-note", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonNote);
    return IonNote;
}());
export { IonNote };
var IonProgressBar = /** @class */ (function () {
    function IonProgressBar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonProgressBar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonProgressBar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["buffer", "color", "mode", "reversed", "type", "value"] }),
        Component({ selector: "ion-progress-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["buffer", "color", "mode", "reversed", "type", "value"] })
    ], IonProgressBar);
    return IonProgressBar;
}());
export { IonProgressBar };
var IonRadio = /** @class */ (function () {
    function IonRadio(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
    }
    IonRadio.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRadio = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "mode", "name", "value"] }),
        Component({ selector: "ion-radio", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "name", "value"] })
    ], IonRadio);
    return IonRadio;
}());
export { IonRadio };
var IonRadioGroup = /** @class */ (function () {
    function IonRadioGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
    IonRadioGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRadioGroup = tslib_1.__decorate([
        ProxyCmp({ inputs: ["allowEmptySelection", "name", "value"] }),
        Component({ selector: "ion-radio-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["allowEmptySelection", "name", "value"] })
    ], IonRadioGroup);
    return IonRadioGroup;
}());
export { IonRadioGroup };
var IonRange = /** @class */ (function () {
    function IonRange(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
    IonRange.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRange = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] }),
        Component({ selector: "ion-range", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "debounce", "disabled", "dualKnobs", "max", "min", "mode", "name", "pin", "snaps", "step", "ticks", "value"] })
    ], IonRange);
    return IonRange;
}());
export { IonRange };
var IonRefresher = /** @class */ (function () {
    function IonRefresher(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
    }
    IonRefresher.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRefresher = tslib_1.__decorate([
        ProxyCmp({ inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"], "methods": ["complete", "cancel", "getProgress"] }),
        Component({ selector: "ion-refresher", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["closeDuration", "disabled", "pullFactor", "pullMax", "pullMin", "snapbackDuration"] })
    ], IonRefresher);
    return IonRefresher;
}());
export { IonRefresher };
var IonRefresherContent = /** @class */ (function () {
    function IonRefresherContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRefresherContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRefresherContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] }),
        Component({ selector: "ion-refresher-content", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"] })
    ], IonRefresherContent);
    return IonRefresherContent;
}());
export { IonRefresherContent };
var IonReorder = /** @class */ (function () {
    function IonReorder(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonReorder.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonReorder = tslib_1.__decorate([
        Component({ selector: "ion-reorder", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonReorder);
    return IonReorder;
}());
export { IonReorder };
var IonReorderGroup = /** @class */ (function () {
    function IonReorderGroup(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionItemReorder"]);
    }
    IonReorderGroup.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonReorderGroup = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled"], "methods": ["complete"] }),
        Component({ selector: "ion-reorder-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled"] })
    ], IonReorderGroup);
    return IonReorderGroup;
}());
export { IonReorderGroup };
var IonRippleEffect = /** @class */ (function () {
    function IonRippleEffect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRippleEffect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRippleEffect = tslib_1.__decorate([
        ProxyCmp({ inputs: ["type"], "methods": ["addRipple"] }),
        Component({ selector: "ion-ripple-effect", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["type"] })
    ], IonRippleEffect);
    return IonRippleEffect;
}());
export { IonRippleEffect };
var IonRow = /** @class */ (function () {
    function IonRow(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonRow.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonRow = tslib_1.__decorate([
        Component({ selector: "ion-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonRow);
    return IonRow;
}());
export { IonRow };
var IonSearchbar = /** @class */ (function () {
    function IonSearchbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
    }
    IonSearchbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSearchbar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "spellcheck", "type", "value"], "methods": ["setFocus", "getInputElement"] }),
        Component({ selector: "ion-searchbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "spellcheck", "type", "value"] })
    ], IonSearchbar);
    return IonSearchbar;
}());
export { IonSearchbar };
var IonSegment = /** @class */ (function () {
    function IonSegment(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange"]);
    }
    IonSegment.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSegment = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "disabled", "mode", "scrollable", "value"] }),
        Component({ selector: "ion-segment", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "disabled", "mode", "scrollable", "value"] })
    ], IonSegment);
    return IonSegment;
}());
export { IonSegment };
var IonSegmentButton = /** @class */ (function () {
    function IonSegmentButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSegmentButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSegmentButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "layout", "mode", "type", "value"] }),
        Component({ selector: "ion-segment-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "layout", "mode", "type", "value"] })
    ], IonSegmentButton);
    return IonSegmentButton;
}());
export { IonSegmentButton };
var IonSelect = /** @class */ (function () {
    function IonSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionFocus", "ionBlur"]);
    }
    IonSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSelect = tslib_1.__decorate([
        ProxyCmp({ inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"], "methods": ["open"] }),
        Component({ selector: "ion-select", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["cancelText", "compareWith", "disabled", "interface", "interfaceOptions", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "value"] })
    ], IonSelect);
    return IonSelect;
}());
export { IonSelect };
var IonSelectOption = /** @class */ (function () {
    function IonSelectOption(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSelectOption.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSelectOption = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "value"] }),
        Component({ selector: "ion-select-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "value"] })
    ], IonSelectOption);
    return IonSelectOption;
}());
export { IonSelectOption };
var IonSkeletonText = /** @class */ (function () {
    function IonSkeletonText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSkeletonText.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSkeletonText = tslib_1.__decorate([
        ProxyCmp({ inputs: ["animated"] }),
        Component({ selector: "ion-skeleton-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["animated"] })
    ], IonSkeletonText);
    return IonSkeletonText;
}());
export { IonSkeletonText };
var IonSlide = /** @class */ (function () {
    function IonSlide(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSlide.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSlide = tslib_1.__decorate([
        Component({ selector: "ion-slide", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonSlide);
    return IonSlide;
}());
export { IonSlide };
var IonSlides = /** @class */ (function () {
    function IonSlides(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSlidesDidLoad", "ionSlideTap", "ionSlideDoubleTap", "ionSlideWillChange", "ionSlideDidChange", "ionSlideNextStart", "ionSlidePrevStart", "ionSlideNextEnd", "ionSlidePrevEnd", "ionSlideTransitionStart", "ionSlideTransitionEnd", "ionSlideDrag", "ionSlideReachStart", "ionSlideReachEnd", "ionSlideTouchStart", "ionSlideTouchEnd"]);
    }
    IonSlides.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSlides = tslib_1.__decorate([
        ProxyCmp({ inputs: ["mode", "options", "pager", "scrollbar"], "methods": ["update", "updateAutoHeight", "slideTo", "slideNext", "slidePrev", "getActiveIndex", "getPreviousIndex", "length", "isEnd", "isBeginning", "startAutoplay", "stopAutoplay", "lockSwipeToNext", "lockSwipeToPrev", "lockSwipes", "getSwiper"] }),
        Component({ selector: "ion-slides", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["mode", "options", "pager", "scrollbar"] })
    ], IonSlides);
    return IonSlides;
}());
export { IonSlides };
var IonSpinner = /** @class */ (function () {
    function IonSpinner(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonSpinner.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSpinner = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "duration", "name", "paused"] }),
        Component({ selector: "ion-spinner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "duration", "name", "paused"] })
    ], IonSpinner);
    return IonSpinner;
}());
export { IonSpinner };
var IonSplitPane = /** @class */ (function () {
    function IonSplitPane(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
    }
    IonSplitPane.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonSplitPane = tslib_1.__decorate([
        ProxyCmp({ inputs: ["contentId", "disabled", "when"] }),
        Component({ selector: "ion-split-pane", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["contentId", "disabled", "when"] })
    ], IonSplitPane);
    return IonSplitPane;
}());
export { IonSplitPane };
var IonTabBar = /** @class */ (function () {
    function IonTabBar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTabBar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTabBar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode", "selectedTab", "translucent"] }),
        Component({ selector: "ion-tab-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode", "selectedTab", "translucent"] })
    ], IonTabBar);
    return IonTabBar;
}());
export { IonTabBar };
var IonTabButton = /** @class */ (function () {
    function IonTabButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTabButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTabButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] }),
        Component({ selector: "ion-tab-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"] })
    ], IonTabButton);
    return IonTabButton;
}());
export { IonTabButton };
var IonText = /** @class */ (function () {
    function IonText(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonText.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonText = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-text", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonText);
    return IonText;
}());
export { IonText };
var IonTextarea = /** @class */ (function () {
    function IonTextarea(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
    }
    IonTextarea.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTextarea = tslib_1.__decorate([
        ProxyCmp({ inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"], "methods": ["setFocus", "getInputElement"] }),
        Component({ selector: "ion-textarea", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "spellcheck", "value", "wrap"] })
    ], IonTextarea);
    return IonTextarea;
}());
export { IonTextarea };
var IonThumbnail = /** @class */ (function () {
    function IonThumbnail(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonThumbnail.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonThumbnail = tslib_1.__decorate([
        Component({ selector: "ion-thumbnail", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
    ], IonThumbnail);
    return IonThumbnail;
}());
export { IonThumbnail };
var IonTitle = /** @class */ (function () {
    function IonTitle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonTitle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonTitle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "size"] }),
        Component({ selector: "ion-title", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "size"] })
    ], IonTitle);
    return IonTitle;
}());
export { IonTitle };
var IonToggle = /** @class */ (function () {
    function IonToggle(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
    }
    IonToggle.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonToggle = tslib_1.__decorate([
        ProxyCmp({ inputs: ["checked", "color", "disabled", "mode", "name", "value"] }),
        Component({ selector: "ion-toggle", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "color", "disabled", "mode", "name", "value"] })
    ], IonToggle);
    return IonToggle;
}());
export { IonToggle };
var IonToolbar = /** @class */ (function () {
    function IonToolbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    IonToolbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    IonToolbar = tslib_1.__decorate([
        ProxyCmp({ inputs: ["color", "mode"] }),
        Component({ selector: "ion-toolbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "mode"] })
    ], IonToolbar);
    return IonToolbar;
}());
export { IonToolbar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveGllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25pYy9hbmd1bGFyLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9wcm94aWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLDhDQUE4QztBQUM5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFLekQ7SUFFSSxnQkFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNoRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Z0JBSGMsaUJBQWlCO2dCQUFLLFVBQVU7Z0JBQWUsTUFBTTs7SUFGM0QsTUFBTTtRQURsQixTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLENBQUM7T0FDOUcsTUFBTSxDQU1sQjtJQUFELGFBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxNQUFNO0FBVW5CO0lBRUksbUJBQVksQ0FBb0IsRUFBRSxDQUFhLEVBQVksQ0FBUztRQUFULE1BQUMsR0FBRCxDQUFDLENBQVE7UUFDaEUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7O2dCQUhjLGlCQUFpQjtnQkFBSyxVQUFVO2dCQUFlLE1BQU07O0lBRjNELFNBQVM7UUFEckIsU0FBUyxDQUFDLEVBQUUsUUFBUSxF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LFNBQVMsQ0FVckI7SUFBRCxnQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLFNBQVM7QUFldEI7SUFFSSxvQkFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNoRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQzs7Z0JBSGMsaUJBQWlCO2dCQUFLLFVBQVU7Z0JBQWUsTUFBTTs7SUFGM0QsVUFBVTtRQUZ0QixRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUN2QyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUEyQixFQUFFLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDO09BQzdJLFVBQVUsQ0FNdEI7SUFBRCxpQkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGF1dG8tZ2VuZXJhdGVkIGFuZ3VsYXIgZGlyZWN0aXZlIHByb3hpZXMgKi9cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQcm94eUNtcCwgcHJveHlPdXRwdXRzIH0gZnJvbSBcIi4vcHJveGllcy11dGlsc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50cyB9IGZyb20gXCJAaW9uaWMvY29yZVwiO1xuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkFwcCBleHRlbmRzIENvbXBvbmVudHMuSW9uQXBwIHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYXBwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25BcHAge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQXZhdGFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25BdmF0YXIge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1hdmF0YXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiB9KVxuZXhwb3J0IGNsYXNzIElvbkF2YXRhciB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWNrQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CYWNrQnV0dG9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJkZWZhdWx0SHJlZlwiLCBcImRpc2FibGVkXCIsIFwiaWNvblwiLCBcIm1vZGVcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJ0ZXh0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1iYWNrLWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGVmYXVsdEhyZWZcIiwgXCJkaXNhYmxlZFwiLCBcImljb25cIiwgXCJtb2RlXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwidGV4dFwiLCBcInR5cGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25CYWNrQnV0dG9uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkJhY2tkcm9wIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25CYWNrZHJvcCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcInN0b3BQcm9wYWdhdGlvblwiLCBcInRhcHBhYmxlXCIsIFwidmlzaWJsZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1iYWNrZHJvcFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcInN0b3BQcm9wYWdhdGlvblwiLCBcInRhcHBhYmxlXCIsIFwidmlzaWJsZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkJhY2tkcm9wIHtcbiAgICBpb25CYWNrZHJvcFRhcCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQmFja2Ryb3BUYXBcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CYWRnZSBleHRlbmRzIENvbXBvbmVudHMuSW9uQmFkZ2Uge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tYmFkZ2VcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25CYWRnZSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25CdXR0b24gZXh0ZW5kcyBDb21wb25lbnRzLklvbkJ1dHRvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImJ1dHRvblR5cGVcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJleHBhbmRcIiwgXCJmaWxsXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzdHJvbmdcIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImJ1dHRvblR5cGVcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJleHBhbmRcIiwgXCJmaWxsXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzdHJvbmdcIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQnV0dG9uIHtcbiAgICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uRm9jdXNcIiwgXCJpb25CbHVyXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQnV0dG9ucyBleHRlbmRzIENvbXBvbmVudHMuSW9uQnV0dG9ucyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbGxhcHNlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWJ1dHRvbnNcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xsYXBzZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkJ1dHRvbnMge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImJ1dHRvblwiLCBcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwicm91dGVyQW5pbWF0aW9uXCIsIFwicm91dGVyRGlyZWN0aW9uXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jYXJkXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYnV0dG9uXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2FyZCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25DYXJkQ29udGVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uQ2FyZENvbnRlbnQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNhcmQtY29udGVudFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25DYXJkQ29udGVudCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25DYXJkSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DYXJkSGVhZGVyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2FyZC1oZWFkZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNhcmRIZWFkZXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uQ2FyZFN1YnRpdGxlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DYXJkU3VidGl0bGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2FyZC1zdWJ0aXRsZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNhcmRTdWJ0aXRsZSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25DYXJkVGl0bGUgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNhcmRUaXRsZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1jYXJkLXRpdGxlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2FyZFRpdGxlIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25DaGVja2JveCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNoZWNrZWRcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiaW5kZXRlcm1pbmF0ZVwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY2hlY2tib3hcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjaGVja2VkXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImluZGV0ZXJtaW5hdGVcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2hlY2tib3gge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkNoaXAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNoaXAge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJvdXRsaW5lXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNoaXBcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJvdXRsaW5lXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uQ2hpcCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Db2wgZXh0ZW5kcyBDb21wb25lbnRzLklvbkNvbCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcIm9mZnNldFwiLCBcIm9mZnNldExnXCIsIFwib2Zmc2V0TWRcIiwgXCJvZmZzZXRTbVwiLCBcIm9mZnNldFhsXCIsIFwib2Zmc2V0WHNcIiwgXCJwdWxsXCIsIFwicHVsbExnXCIsIFwicHVsbE1kXCIsIFwicHVsbFNtXCIsIFwicHVsbFhsXCIsIFwicHVsbFhzXCIsIFwicHVzaFwiLCBcInB1c2hMZ1wiLCBcInB1c2hNZFwiLCBcInB1c2hTbVwiLCBcInB1c2hYbFwiLCBcInB1c2hYc1wiLCBcInNpemVcIiwgXCJzaXplTGdcIiwgXCJzaXplTWRcIiwgXCJzaXplU21cIiwgXCJzaXplWGxcIiwgXCJzaXplWHNcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tY29sXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wib2Zmc2V0XCIsIFwib2Zmc2V0TGdcIiwgXCJvZmZzZXRNZFwiLCBcIm9mZnNldFNtXCIsIFwib2Zmc2V0WGxcIiwgXCJvZmZzZXRYc1wiLCBcInB1bGxcIiwgXCJwdWxsTGdcIiwgXCJwdWxsTWRcIiwgXCJwdWxsU21cIiwgXCJwdWxsWGxcIiwgXCJwdWxsWHNcIiwgXCJwdXNoXCIsIFwicHVzaExnXCIsIFwicHVzaE1kXCIsIFwicHVzaFNtXCIsIFwicHVzaFhsXCIsIFwicHVzaFhzXCIsIFwic2l6ZVwiLCBcInNpemVMZ1wiLCBcInNpemVNZFwiLCBcInNpemVTbVwiLCBcInNpemVYbFwiLCBcInNpemVYc1wiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNvbCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Db250ZW50IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25Db250ZW50IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJmb3JjZU92ZXJzY3JvbGxcIiwgXCJmdWxsc2NyZWVuXCIsIFwic2Nyb2xsRXZlbnRzXCIsIFwic2Nyb2xsWFwiLCBcInNjcm9sbFlcIl0sIFwibWV0aG9kc1wiOiBbXCJnZXRTY3JvbGxFbGVtZW50XCIsIFwic2Nyb2xsVG9Ub3BcIiwgXCJzY3JvbGxUb0JvdHRvbVwiLCBcInNjcm9sbEJ5UG9pbnRcIiwgXCJzY3JvbGxUb1BvaW50XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWNvbnRlbnRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcImZvcmNlT3ZlcnNjcm9sbFwiLCBcImZ1bGxzY3JlZW5cIiwgXCJzY3JvbGxFdmVudHNcIiwgXCJzY3JvbGxYXCIsIFwic2Nyb2xsWVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkNvbnRlbnQge1xuICAgIGlvblNjcm9sbFN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TY3JvbGwhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNjcm9sbEVuZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uU2Nyb2xsU3RhcnRcIiwgXCJpb25TY3JvbGxcIiwgXCJpb25TY3JvbGxFbmRcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25EYXRldGltZSBleHRlbmRzIENvbXBvbmVudHMuSW9uRGF0ZXRpbWUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjYW5jZWxUZXh0XCIsIFwiZGF5TmFtZXNcIiwgXCJkYXlTaG9ydE5hbWVzXCIsIFwiZGF5VmFsdWVzXCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNwbGF5Rm9ybWF0XCIsIFwiZGlzcGxheVRpbWV6b25lXCIsIFwiZG9uZVRleHRcIiwgXCJob3VyVmFsdWVzXCIsIFwibWF4XCIsIFwibWluXCIsIFwibWludXRlVmFsdWVzXCIsIFwibW9kZVwiLCBcIm1vbnRoTmFtZXNcIiwgXCJtb250aFNob3J0TmFtZXNcIiwgXCJtb250aFZhbHVlc1wiLCBcIm5hbWVcIiwgXCJwaWNrZXJGb3JtYXRcIiwgXCJwaWNrZXJPcHRpb25zXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInZhbHVlXCIsIFwieWVhclZhbHVlc1wiXSwgXCJtZXRob2RzXCI6IFtcIm9wZW5cIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tZGF0ZXRpbWVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjYW5jZWxUZXh0XCIsIFwiZGF5TmFtZXNcIiwgXCJkYXlTaG9ydE5hbWVzXCIsIFwiZGF5VmFsdWVzXCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNwbGF5Rm9ybWF0XCIsIFwiZGlzcGxheVRpbWV6b25lXCIsIFwiZG9uZVRleHRcIiwgXCJob3VyVmFsdWVzXCIsIFwibWF4XCIsIFwibWluXCIsIFwibWludXRlVmFsdWVzXCIsIFwibW9kZVwiLCBcIm1vbnRoTmFtZXNcIiwgXCJtb250aFNob3J0TmFtZXNcIiwgXCJtb250aFZhbHVlc1wiLCBcIm5hbWVcIiwgXCJwaWNrZXJGb3JtYXRcIiwgXCJwaWNrZXJPcHRpb25zXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInZhbHVlXCIsIFwieWVhclZhbHVlc1wiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkRhdGV0aW1lIHtcbiAgICBpb25DYW5jZWwhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNhbmNlbFwiLCBcImlvbkNoYW5nZVwiLCBcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkZhYiBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYWN0aXZhdGVkXCIsIFwiZWRnZVwiLCBcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXSwgXCJtZXRob2RzXCI6IFtcImNsb3NlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWZhYlwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFjdGl2YXRlZFwiLCBcImVkZ2VcIiwgXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25GYWIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRmFiQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25GYWJCdXR0b24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhY3RpdmF0ZWRcIiwgXCJjbG9zZUljb25cIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInJvdXRlckRpcmVjdGlvblwiLCBcInNob3dcIiwgXCJzaXplXCIsIFwidGFyZ2V0XCIsIFwidHJhbnNsdWNlbnRcIiwgXCJ0eXBlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWZhYi1idXR0b25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhY3RpdmF0ZWRcIiwgXCJjbG9zZUljb25cIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwiZG93bmxvYWRcIiwgXCJocmVmXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInJvdXRlckRpcmVjdGlvblwiLCBcInNob3dcIiwgXCJzaXplXCIsIFwidGFyZ2V0XCIsIFwidHJhbnNsdWNlbnRcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRmFiQnV0dG9uIHtcbiAgICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uRm9jdXNcIiwgXCJpb25CbHVyXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uRmFiTGlzdCBleHRlbmRzIENvbXBvbmVudHMuSW9uRmFiTGlzdCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImFjdGl2YXRlZFwiLCBcInNpZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tZmFiLWxpc3RcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhY3RpdmF0ZWRcIiwgXCJzaWRlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uRmFiTGlzdCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Gb290ZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvbkZvb3RlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1mb290ZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJtb2RlXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Gb290ZXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uR3JpZCBleHRlbmRzIENvbXBvbmVudHMuSW9uR3JpZCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImZpeGVkXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWdyaWRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJmaXhlZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkdyaWQge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25IZWFkZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xsYXBzZVwiLCBcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1oZWFkZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xsYXBzZVwiLCBcIm1vZGVcIiwgXCJ0cmFuc2x1Y2VudFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkhlYWRlciB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JY29uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JY29uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYXJpYUxhYmVsXCIsIFwiY29sb3JcIiwgXCJmbGlwUnRsXCIsIFwiaWNvblwiLCBcImlvc1wiLCBcImxhenlcIiwgXCJtZFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwic2l6ZVwiLCBcInNyY1wiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pY29uXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYXJpYUxhYmVsXCIsIFwiY29sb3JcIiwgXCJmbGlwUnRsXCIsIFwiaWNvblwiLCBcImlvc1wiLCBcImxhenlcIiwgXCJtZFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwic2l6ZVwiLCBcInNyY1wiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkljb24ge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW1nIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JbWcge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhbHRcIiwgXCJzcmNcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taW1nXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYWx0XCIsIFwic3JjXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uSW1nIHtcbiAgICBpb25JbWdXaWxsTG9hZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uSW1nRGlkTG9hZCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRXJyb3IhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkltZ1dpbGxMb2FkXCIsIFwiaW9uSW1nRGlkTG9hZFwiLCBcImlvbkVycm9yXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW5maW5pdGVTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnRzLklvbkluZmluaXRlU2Nyb2xsIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJwb3NpdGlvblwiLCBcInRocmVzaG9sZFwiXSwgXCJtZXRob2RzXCI6IFtcImNvbXBsZXRlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWluZmluaXRlLXNjcm9sbFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImRpc2FibGVkXCIsIFwicG9zaXRpb25cIiwgXCJ0aHJlc2hvbGRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JbmZpbml0ZVNjcm9sbCB7XG4gICAgaW9uSW5maW5pdGUhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkluZmluaXRlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uSW5maW5pdGVTY3JvbGxDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JbmZpbml0ZVNjcm9sbENvbnRlbnQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJsb2FkaW5nU3Bpbm5lclwiLCBcImxvYWRpbmdUZXh0XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWluZmluaXRlLXNjcm9sbC1jb250ZW50XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wibG9hZGluZ1NwaW5uZXJcIiwgXCJsb2FkaW5nVGV4dFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkluZmluaXRlU2Nyb2xsQ29udGVudCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JbnB1dCBleHRlbmRzIENvbXBvbmVudHMuSW9uSW5wdXQge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhY2NlcHRcIiwgXCJhdXRvY2FwaXRhbGl6ZVwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiYXV0b2ZvY3VzXCIsIFwiY2xlYXJJbnB1dFwiLCBcImNsZWFyT25FZGl0XCIsIFwiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibWF4XCIsIFwibWF4bGVuZ3RoXCIsIFwibWluXCIsIFwibWlubGVuZ3RoXCIsIFwibW9kZVwiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwicmVxdWlyZWRcIiwgXCJzaXplXCIsIFwic3BlbGxjaGVja1wiLCBcInN0ZXBcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0sIFwibWV0aG9kc1wiOiBbXCJzZXRGb2N1c1wiLCBcImdldElucHV0RWxlbWVudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pbnB1dFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFjY2VwdFwiLCBcImF1dG9jYXBpdGFsaXplXCIsIFwiYXV0b2NvbXBsZXRlXCIsIFwiYXV0b2NvcnJlY3RcIiwgXCJhdXRvZm9jdXNcIiwgXCJjbGVhcklucHV0XCIsIFwiY2xlYXJPbkVkaXRcIiwgXCJjb2xvclwiLCBcImRlYm91bmNlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbnRlcmtleWhpbnRcIiwgXCJpbnB1dG1vZGVcIiwgXCJtYXhcIiwgXCJtYXhsZW5ndGhcIiwgXCJtaW5cIiwgXCJtaW5sZW5ndGhcIiwgXCJtb2RlXCIsIFwibXVsdGlwbGVcIiwgXCJuYW1lXCIsIFwicGF0dGVyblwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZG9ubHlcIiwgXCJyZXF1aXJlZFwiLCBcInNpemVcIiwgXCJzcGVsbGNoZWNrXCIsIFwic3RlcFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbklucHV0IHtcbiAgICBpb25JbnB1dCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25CbHVyITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uSW5wdXRcIiwgXCJpb25DaGFuZ2VcIiwgXCJpb25CbHVyXCIsIFwiaW9uRm9jdXNcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYnV0dG9uXCIsIFwiY29sb3JcIiwgXCJkZXRhaWxcIiwgXCJkZXRhaWxJY29uXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJsaW5lc1wiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIiwgXCJ0YXJnZXRcIiwgXCJ0eXBlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWl0ZW1cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJidXR0b25cIiwgXCJjb2xvclwiLCBcImRldGFpbFwiLCBcImRldGFpbEljb25cIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcImxpbmVzXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInJvdXRlckRpcmVjdGlvblwiLCBcInRhcmdldFwiLCBcInR5cGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkl0ZW1EaXZpZGVyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtRGl2aWRlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInN0aWNreVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtLWRpdmlkZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJzdGlja3lcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtRGl2aWRlciB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLklvbkl0ZW1Hcm91cCB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWl0ZW0tZ3JvdXBcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiB9KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1Hcm91cCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtT3B0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtT3B0aW9uIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZXhwYW5kYWJsZVwiLCBcImhyZWZcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwidGFyZ2V0XCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtLW9wdGlvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImV4cGFuZGFibGVcIiwgXCJocmVmXCIsIFwibW9kZVwiLCBcInJlbFwiLCBcInRhcmdldFwiLCBcInR5cGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtT3B0aW9uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkl0ZW1PcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25JdGVtT3B0aW9ucyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcInNpZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24taXRlbS1vcHRpb25zXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wic2lkZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1PcHRpb25zIHtcbiAgICBpb25Td2lwZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uU3dpcGVcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25JdGVtU2xpZGluZyBleHRlbmRzIENvbXBvbmVudHMuSW9uSXRlbVNsaWRpbmcge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiXSwgXCJtZXRob2RzXCI6IFtcImdldE9wZW5BbW91bnRcIiwgXCJnZXRTbGlkaW5nUmF0aW9cIiwgXCJvcGVuXCIsIFwiY2xvc2VcIiwgXCJjbG9zZU9wZW5lZFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1pdGVtLXNsaWRpbmdcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1TbGlkaW5nIHtcbiAgICBpb25EcmFnITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25EcmFnXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTGFiZWwgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxhYmVsIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCIsIFwicG9zaXRpb25cIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbGFiZWxcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJwb3NpdGlvblwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkxhYmVsIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbkxpc3QgZXh0ZW5kcyBDb21wb25lbnRzLklvbkxpc3Qge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJpbnNldFwiLCBcImxpbmVzXCIsIFwibW9kZVwiXSwgXCJtZXRob2RzXCI6IFtcImNsb3NlU2xpZGluZ0l0ZW1zXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWxpc3RcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJpbnNldFwiLCBcImxpbmVzXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbkxpc3Qge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTGlzdEhlYWRlciBleHRlbmRzIENvbXBvbmVudHMuSW9uTGlzdEhlYWRlciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibGluZXNcIiwgXCJtb2RlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLWxpc3QtaGVhZGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJsaW5lc1wiLCBcIm1vZGVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25MaXN0SGVhZGVyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvbk1lbnUgZXh0ZW5kcyBDb21wb25lbnRzLklvbk1lbnUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb250ZW50SWRcIiwgXCJkaXNhYmxlZFwiLCBcIm1heEVkZ2VTdGFydFwiLCBcIm1lbnVJZFwiLCBcInNpZGVcIiwgXCJzd2lwZUdlc3R1cmVcIiwgXCJ0eXBlXCJdLCBcIm1ldGhvZHNcIjogW1wiaXNPcGVuXCIsIFwiaXNBY3RpdmVcIiwgXCJvcGVuXCIsIFwiY2xvc2VcIiwgXCJ0b2dnbGVcIiwgXCJzZXRPcGVuXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLW1lbnVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb250ZW50SWRcIiwgXCJkaXNhYmxlZFwiLCBcIm1heEVkZ2VTdGFydFwiLCBcIm1lbnVJZFwiLCBcInNpZGVcIiwgXCJzd2lwZUdlc3R1cmVcIiwgXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uTWVudSB7XG4gICAgaW9uV2lsbE9wZW4hOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbldpbGxDbG9zZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRGlkT3BlbiE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRGlkQ2xvc2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbldpbGxPcGVuXCIsIFwiaW9uV2lsbENsb3NlXCIsIFwiaW9uRGlkT3BlblwiLCBcImlvbkRpZENsb3NlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTWVudUJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uTWVudUJ1dHRvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImF1dG9IaWRlXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1lbnVcIiwgXCJtb2RlXCIsIFwidHlwZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1tZW51LWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImF1dG9IaWRlXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1lbnVcIiwgXCJtb2RlXCIsIFwidHlwZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk1lbnVCdXR0b24ge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTWVudVRvZ2dsZSBleHRlbmRzIENvbXBvbmVudHMuSW9uTWVudVRvZ2dsZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImF1dG9IaWRlXCIsIFwibWVudVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1tZW51LXRvZ2dsZVwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImF1dG9IaWRlXCIsIFwibWVudVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk1lbnVUb2dnbGUge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTmF2IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25OYXYge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhbmltYXRlZFwiLCBcImFuaW1hdGlvblwiLCBcInJvb3RcIiwgXCJyb290UGFyYW1zXCIsIFwic3dpcGVHZXN0dXJlXCJdLCBcIm1ldGhvZHNcIjogW1wicHVzaFwiLCBcImluc2VydFwiLCBcImluc2VydFBhZ2VzXCIsIFwicG9wXCIsIFwicG9wVG9cIiwgXCJwb3BUb1Jvb3RcIiwgXCJyZW1vdmVJbmRleFwiLCBcInNldFJvb3RcIiwgXCJzZXRQYWdlc1wiLCBcImdldEFjdGl2ZVwiLCBcImdldEJ5SW5kZXhcIiwgXCJjYW5Hb0JhY2tcIiwgXCJnZXRQcmV2aW91c1wiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1uYXZcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhbmltYXRlZFwiLCBcImFuaW1hdGlvblwiLCBcInJvb3RcIiwgXCJyb290UGFyYW1zXCIsIFwic3dpcGVHZXN0dXJlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uTmF2IHtcbiAgICBpb25OYXZXaWxsQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25OYXZEaWRDaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbk5hdldpbGxDaGFuZ2VcIiwgXCJpb25OYXZEaWRDaGFuZ2VcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25OYXZMaW5rIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25OYXZMaW5rIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29tcG9uZW50XCIsIFwiY29tcG9uZW50UHJvcHNcIiwgXCJyb3V0ZXJBbmltYXRpb25cIiwgXCJyb3V0ZXJEaXJlY3Rpb25cIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tbmF2LWxpbmtcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb21wb25lbnRcIiwgXCJjb21wb25lbnRQcm9wc1wiLCBcInJvdXRlckFuaW1hdGlvblwiLCBcInJvdXRlckRpcmVjdGlvblwiXSB9KVxuZXhwb3J0IGNsYXNzIElvbk5hdkxpbmsge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uTm90ZSBleHRlbmRzIENvbXBvbmVudHMuSW9uTm90ZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1ub3RlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uTm90ZSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Qcm9ncmVzc0JhciBleHRlbmRzIENvbXBvbmVudHMuSW9uUHJvZ3Jlc3NCYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJidWZmZXJcIiwgXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJyZXZlcnNlZFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1wcm9ncmVzcy1iYXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJidWZmZXJcIiwgXCJjb2xvclwiLCBcIm1vZGVcIiwgXCJyZXZlcnNlZFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblByb2dyZXNzQmFyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhZGlvIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SYWRpbyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJhZGlvXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25SYWRpbyB7XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJhZGlvR3JvdXAgZXh0ZW5kcyBDb21wb25lbnRzLklvblJhZGlvR3JvdXAge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhbGxvd0VtcHR5U2VsZWN0aW9uXCIsIFwibmFtZVwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJhZGlvLWdyb3VwXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYWxsb3dFbXB0eVNlbGVjdGlvblwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJhZGlvR3JvdXAge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2hhbmdlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmFuZ2UgZXh0ZW5kcyBDb21wb25lbnRzLklvblJhbmdlIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZHVhbEtub2JzXCIsIFwibWF4XCIsIFwibWluXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJwaW5cIiwgXCJzbmFwc1wiLCBcInN0ZXBcIiwgXCJ0aWNrc1wiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJhbmdlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZHVhbEtub2JzXCIsIFwibWF4XCIsIFwibWluXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJwaW5cIiwgXCJzbmFwc1wiLCBcInN0ZXBcIiwgXCJ0aWNrc1wiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uUmFuZ2Uge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJlZnJlc2hlciBleHRlbmRzIENvbXBvbmVudHMuSW9uUmVmcmVzaGVyIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY2xvc2VEdXJhdGlvblwiLCBcImRpc2FibGVkXCIsIFwicHVsbEZhY3RvclwiLCBcInB1bGxNYXhcIiwgXCJwdWxsTWluXCIsIFwic25hcGJhY2tEdXJhdGlvblwiXSwgXCJtZXRob2RzXCI6IFtcImNvbXBsZXRlXCIsIFwiY2FuY2VsXCIsIFwiZ2V0UHJvZ3Jlc3NcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tcmVmcmVzaGVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY2xvc2VEdXJhdGlvblwiLCBcImRpc2FibGVkXCIsIFwicHVsbEZhY3RvclwiLCBcInB1bGxNYXhcIiwgXCJwdWxsTWluXCIsIFwic25hcGJhY2tEdXJhdGlvblwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJlZnJlc2hlciB7XG4gICAgaW9uUmVmcmVzaCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uUHVsbCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU3RhcnQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblJlZnJlc2hcIiwgXCJpb25QdWxsXCIsIFwiaW9uU3RhcnRcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25SZWZyZXNoZXJDb250ZW50IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SZWZyZXNoZXJDb250ZW50IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wicHVsbGluZ0ljb25cIiwgXCJwdWxsaW5nVGV4dFwiLCBcInJlZnJlc2hpbmdTcGlubmVyXCIsIFwicmVmcmVzaGluZ1RleHRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tcmVmcmVzaGVyLWNvbnRlbnRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJwdWxsaW5nSWNvblwiLCBcInB1bGxpbmdUZXh0XCIsIFwicmVmcmVzaGluZ1NwaW5uZXJcIiwgXCJyZWZyZXNoaW5nVGV4dFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJlZnJlc2hlckNvbnRlbnQge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmVvcmRlciBleHRlbmRzIENvbXBvbmVudHMuSW9uUmVvcmRlciB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlb3JkZXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiB9KVxuZXhwb3J0IGNsYXNzIElvblJlb3JkZXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmVvcmRlckdyb3VwIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SZW9yZGVyR3JvdXAge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiXSwgXCJtZXRob2RzXCI6IFtcImNvbXBsZXRlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJlb3JkZXItZ3JvdXBcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblJlb3JkZXJHcm91cCB7XG4gICAgaW9uSXRlbVJlb3JkZXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkl0ZW1SZW9yZGVyXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uUmlwcGxlRWZmZWN0IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25SaXBwbGVFZmZlY3Qge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJ0eXBlXCJdLCBcIm1ldGhvZHNcIjogW1wiYWRkUmlwcGxlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXJpcHBsZS1lZmZlY3RcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJ0eXBlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uUmlwcGxlRWZmZWN0IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblJvdyBleHRlbmRzIENvbXBvbmVudHMuSW9uUm93IHtcbn1cbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tcm93XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25Sb3cge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VhcmNoYmFyIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TZWFyY2hiYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhbmltYXRlZFwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiY2FuY2VsQnV0dG9uSWNvblwiLCBcImNhbmNlbEJ1dHRvblRleHRcIiwgXCJjbGVhckljb25cIiwgXCJjb2xvclwiLCBcImRlYm91bmNlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbnRlcmtleWhpbnRcIiwgXCJpbnB1dG1vZGVcIiwgXCJtb2RlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzZWFyY2hJY29uXCIsIFwic2hvd0NhbmNlbEJ1dHRvblwiLCBcInNwZWxsY2hlY2tcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0sIFwibWV0aG9kc1wiOiBbXCJzZXRGb2N1c1wiLCBcImdldElucHV0RWxlbWVudFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zZWFyY2hiYXJcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJhbmltYXRlZFwiLCBcImF1dG9jb21wbGV0ZVwiLCBcImF1dG9jb3JyZWN0XCIsIFwiY2FuY2VsQnV0dG9uSWNvblwiLCBcImNhbmNlbEJ1dHRvblRleHRcIiwgXCJjbGVhckljb25cIiwgXCJjb2xvclwiLCBcImRlYm91bmNlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbnRlcmtleWhpbnRcIiwgXCJpbnB1dG1vZGVcIiwgXCJtb2RlXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzZWFyY2hJY29uXCIsIFwic2hvd0NhbmNlbEJ1dHRvblwiLCBcInNwZWxsY2hlY2tcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TZWFyY2hiYXIge1xuICAgIGlvbklucHV0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25DaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkNhbmNlbCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2xlYXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkZvY3VzITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHByb3h5T3V0cHV0cyh0aGlzLCB0aGlzLmVsLCBbXCJpb25JbnB1dFwiLCBcImlvbkNoYW5nZVwiLCBcImlvbkNhbmNlbFwiLCBcImlvbkNsZWFyXCIsIFwiaW9uQmx1clwiLCBcImlvbkZvY3VzXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VnbWVudCBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VnbWVudCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwiZGlzYWJsZWRcIiwgXCJtb2RlXCIsIFwic2Nyb2xsYWJsZVwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNlZ21lbnRcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcInNjcm9sbGFibGVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNlZ21lbnQge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2hhbmdlXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VnbWVudEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudHMuSW9uU2VnbWVudEJ1dHRvbiB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImRpc2FibGVkXCIsIFwibGF5b3V0XCIsIFwibW9kZVwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zZWdtZW50LWJ1dHRvblwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImRpc2FibGVkXCIsIFwibGF5b3V0XCIsIFwibW9kZVwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblNlZ21lbnRCdXR0b24ge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TZWxlY3Qge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjYW5jZWxUZXh0XCIsIFwiY29tcGFyZVdpdGhcIiwgXCJkaXNhYmxlZFwiLCBcImludGVyZmFjZVwiLCBcImludGVyZmFjZU9wdGlvbnNcIiwgXCJtb2RlXCIsIFwibXVsdGlwbGVcIiwgXCJuYW1lXCIsIFwib2tUZXh0XCIsIFwicGxhY2Vob2xkZXJcIiwgXCJzZWxlY3RlZFRleHRcIiwgXCJ2YWx1ZVwiXSwgXCJtZXRob2RzXCI6IFtcIm9wZW5cIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2VsZWN0XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY2FuY2VsVGV4dFwiLCBcImNvbXBhcmVXaXRoXCIsIFwiZGlzYWJsZWRcIiwgXCJpbnRlcmZhY2VcIiwgXCJpbnRlcmZhY2VPcHRpb25zXCIsIFwibW9kZVwiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcIm9rVGV4dFwiLCBcInBsYWNlaG9sZGVyXCIsIFwic2VsZWN0ZWRUZXh0XCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TZWxlY3Qge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQ2FuY2VsITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25Gb2N1cyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgICAgICBwcm94eU91dHB1dHModGhpcywgdGhpcy5lbCwgW1wiaW9uQ2hhbmdlXCIsIFwiaW9uQ2FuY2VsXCIsIFwiaW9uRm9jdXNcIiwgXCJpb25CbHVyXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uU2VsZWN0T3B0aW9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TZWxlY3RPcHRpb24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcInZhbHVlXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNlbGVjdC1vcHRpb25cIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcInZhbHVlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2VsZWN0T3B0aW9uIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNrZWxldG9uVGV4dCBleHRlbmRzIENvbXBvbmVudHMuSW9uU2tlbGV0b25UZXh0IHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiYW5pbWF0ZWRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tc2tlbGV0b24tdGV4dFwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImFuaW1hdGVkXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2tlbGV0b25UZXh0IHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNsaWRlIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25TbGlkZSB7XG59XG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNsaWRlXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIgfSlcbmV4cG9ydCBjbGFzcyBJb25TbGlkZSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25TbGlkZXMgZXh0ZW5kcyBDb21wb25lbnRzLklvblNsaWRlcyB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcIm1vZGVcIiwgXCJvcHRpb25zXCIsIFwicGFnZXJcIiwgXCJzY3JvbGxiYXJcIl0sIFwibWV0aG9kc1wiOiBbXCJ1cGRhdGVcIiwgXCJ1cGRhdGVBdXRvSGVpZ2h0XCIsIFwic2xpZGVUb1wiLCBcInNsaWRlTmV4dFwiLCBcInNsaWRlUHJldlwiLCBcImdldEFjdGl2ZUluZGV4XCIsIFwiZ2V0UHJldmlvdXNJbmRleFwiLCBcImxlbmd0aFwiLCBcImlzRW5kXCIsIFwiaXNCZWdpbm5pbmdcIiwgXCJzdGFydEF1dG9wbGF5XCIsIFwic3RvcEF1dG9wbGF5XCIsIFwibG9ja1N3aXBlVG9OZXh0XCIsIFwibG9ja1N3aXBlVG9QcmV2XCIsIFwibG9ja1N3aXBlc1wiLCBcImdldFN3aXBlclwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zbGlkZXNcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJtb2RlXCIsIFwib3B0aW9uc1wiLCBcInBhZ2VyXCIsIFwic2Nyb2xsYmFyXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uU2xpZGVzIHtcbiAgICBpb25TbGlkZXNEaWRMb2FkITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRhcCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVEb3VibGVUYXAhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlV2lsbENoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVEaWRDaGFuZ2UhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlTmV4dFN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVByZXZTdGFydCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVOZXh0RW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVByZXZFbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlVHJhbnNpdGlvblN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRyYW5zaXRpb25FbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlRHJhZyE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uU2xpZGVSZWFjaFN0YXJ0ITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVJlYWNoRW5kITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25TbGlkZVRvdWNoU3RhcnQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvblNsaWRlVG91Y2hFbmQhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblNsaWRlc0RpZExvYWRcIiwgXCJpb25TbGlkZVRhcFwiLCBcImlvblNsaWRlRG91YmxlVGFwXCIsIFwiaW9uU2xpZGVXaWxsQ2hhbmdlXCIsIFwiaW9uU2xpZGVEaWRDaGFuZ2VcIiwgXCJpb25TbGlkZU5leHRTdGFydFwiLCBcImlvblNsaWRlUHJldlN0YXJ0XCIsIFwiaW9uU2xpZGVOZXh0RW5kXCIsIFwiaW9uU2xpZGVQcmV2RW5kXCIsIFwiaW9uU2xpZGVUcmFuc2l0aW9uU3RhcnRcIiwgXCJpb25TbGlkZVRyYW5zaXRpb25FbmRcIiwgXCJpb25TbGlkZURyYWdcIiwgXCJpb25TbGlkZVJlYWNoU3RhcnRcIiwgXCJpb25TbGlkZVJlYWNoRW5kXCIsIFwiaW9uU2xpZGVUb3VjaFN0YXJ0XCIsIFwiaW9uU2xpZGVUb3VjaEVuZFwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNwaW5uZXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblNwaW5uZXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcImR1cmF0aW9uXCIsIFwibmFtZVwiLCBcInBhdXNlZFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi1zcGlubmVyXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJkdXJhdGlvblwiLCBcIm5hbWVcIiwgXCJwYXVzZWRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TcGlubmVyIHtcbiAgICBwcm90ZWN0ZWQgZWw6IEhUTUxFbGVtZW50O1xuICAgIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgICAgIGMuZGV0YWNoKCk7XG4gICAgICAgIHRoaXMuZWwgPSByLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblNwbGl0UGFuZSBleHRlbmRzIENvbXBvbmVudHMuSW9uU3BsaXRQYW5lIHtcbn1cbkBQcm94eUNtcCh7IGlucHV0czogW1wiY29udGVudElkXCIsIFwiZGlzYWJsZWRcIiwgXCJ3aGVuXCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXNwbGl0LXBhbmVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb250ZW50SWRcIiwgXCJkaXNhYmxlZFwiLCBcIndoZW5cIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25TcGxpdFBhbmUge1xuICAgIGlvblNwbGl0UGFuZVZpc2libGUhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvblNwbGl0UGFuZVZpc2libGVcIl0pO1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UYWJCYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblRhYkJhciB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInNlbGVjdGVkVGFiXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGFiLWJhclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiLCBcInNlbGVjdGVkVGFiXCIsIFwidHJhbnNsdWNlbnRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UYWJCYXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVGFiQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25UYWJCdXR0b24ge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiaHJlZlwiLCBcImxheW91dFwiLCBcIm1vZGVcIiwgXCJyZWxcIiwgXCJzZWxlY3RlZFwiLCBcInRhYlwiLCBcInRhcmdldFwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10YWItYnV0dG9uXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiZGlzYWJsZWRcIiwgXCJkb3dubG9hZFwiLCBcImhyZWZcIiwgXCJsYXlvdXRcIiwgXCJtb2RlXCIsIFwicmVsXCIsIFwic2VsZWN0ZWRcIiwgXCJ0YWJcIiwgXCJ0YXJnZXRcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UYWJCdXR0b24ge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVGV4dCBleHRlbmRzIENvbXBvbmVudHMuSW9uVGV4dCB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10ZXh0XCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiY29sb3JcIiwgXCJtb2RlXCJdIH0pXG5leHBvcnQgY2xhc3MgSW9uVGV4dCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UZXh0YXJlYSBleHRlbmRzIENvbXBvbmVudHMuSW9uVGV4dGFyZWEge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJhdXRvR3Jvd1wiLCBcImF1dG9jYXBpdGFsaXplXCIsIFwiYXV0b2ZvY3VzXCIsIFwiY2xlYXJPbkVkaXRcIiwgXCJjb2xvclwiLCBcImNvbHNcIiwgXCJkZWJvdW5jZVwiLCBcImRpc2FibGVkXCIsIFwiZW50ZXJrZXloaW50XCIsIFwiaW5wdXRtb2RlXCIsIFwibWF4bGVuZ3RoXCIsIFwibWlubGVuZ3RoXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJwbGFjZWhvbGRlclwiLCBcInJlYWRvbmx5XCIsIFwicmVxdWlyZWRcIiwgXCJyb3dzXCIsIFwic3BlbGxjaGVja1wiLCBcInZhbHVlXCIsIFwid3JhcFwiXSwgXCJtZXRob2RzXCI6IFtcInNldEZvY3VzXCIsIFwiZ2V0SW5wdXRFbGVtZW50XCJdIH0pXG5AQ29tcG9uZW50KHsgc2VsZWN0b3I6IFwiaW9uLXRleHRhcmVhXCIsIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLCB0ZW1wbGF0ZTogXCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XCIsIGlucHV0czogW1wiYXV0b0dyb3dcIiwgXCJhdXRvY2FwaXRhbGl6ZVwiLCBcImF1dG9mb2N1c1wiLCBcImNsZWFyT25FZGl0XCIsIFwiY29sb3JcIiwgXCJjb2xzXCIsIFwiZGVib3VuY2VcIiwgXCJkaXNhYmxlZFwiLCBcImVudGVya2V5aGludFwiLCBcImlucHV0bW9kZVwiLCBcIm1heGxlbmd0aFwiLCBcIm1pbmxlbmd0aFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJyZWFkb25seVwiLCBcInJlcXVpcmVkXCIsIFwicm93c1wiLCBcInNwZWxsY2hlY2tcIiwgXCJ2YWx1ZVwiLCBcIndyYXBcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UZXh0YXJlYSB7XG4gICAgaW9uQ2hhbmdlITogRXZlbnRFbWl0dGVyPEN1c3RvbUV2ZW50PjtcbiAgICBpb25JbnB1dCE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uQmx1ciE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbklucHV0XCIsIFwiaW9uQmx1clwiLCBcImlvbkZvY3VzXCJdKTtcbiAgICB9XG59XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVGh1bWJuYWlsIGV4dGVuZHMgQ29tcG9uZW50cy5Jb25UaHVtYm5haWwge1xufVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10aHVtYm5haWxcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiB9KVxuZXhwb3J0IGNsYXNzIElvblRodW1ibmFpbCB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25UaXRsZSBleHRlbmRzIENvbXBvbmVudHMuSW9uVGl0bGUge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcInNpemVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdGl0bGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjb2xvclwiLCBcInNpemVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25UaXRsZSB7XG4gICAgcHJvdGVjdGVkIGVsOiBIVE1MRWxlbWVudDtcbiAgICBjb25zdHJ1Y3RvcihjOiBDaGFuZ2VEZXRlY3RvclJlZiwgcjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHo6IE5nWm9uZSkge1xuICAgICAgICBjLmRldGFjaCgpO1xuICAgICAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICAgIH1cbn1cbmV4cG9ydCBkZWNsYXJlIGludGVyZmFjZSBJb25Ub2dnbGUgZXh0ZW5kcyBDb21wb25lbnRzLklvblRvZ2dsZSB7XG59XG5AUHJveHlDbXAoeyBpbnB1dHM6IFtcImNoZWNrZWRcIiwgXCJjb2xvclwiLCBcImRpc2FibGVkXCIsIFwibW9kZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiXSB9KVxuQENvbXBvbmVudCh7IHNlbGVjdG9yOiBcImlvbi10b2dnbGVcIiwgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsIHRlbXBsYXRlOiBcIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cIiwgaW5wdXRzOiBbXCJjaGVja2VkXCIsIFwiY29sb3JcIiwgXCJkaXNhYmxlZFwiLCBcIm1vZGVcIiwgXCJuYW1lXCIsIFwidmFsdWVcIl0gfSlcbmV4cG9ydCBjbGFzcyBJb25Ub2dnbGUge1xuICAgIGlvbkNoYW5nZSE6IEV2ZW50RW1pdHRlcjxDdXN0b21FdmVudD47XG4gICAgaW9uRm9jdXMhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIGlvbkJsdXIhOiBFdmVudEVtaXR0ZXI8Q3VzdG9tRXZlbnQ+O1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICAgICAgcHJveHlPdXRwdXRzKHRoaXMsIHRoaXMuZWwsIFtcImlvbkNoYW5nZVwiLCBcImlvbkZvY3VzXCIsIFwiaW9uQmx1clwiXSk7XG4gICAgfVxufVxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIElvblRvb2xiYXIgZXh0ZW5kcyBDb21wb25lbnRzLklvblRvb2xiYXIge1xufVxuQFByb3h5Q21wKHsgaW5wdXRzOiBbXCJjb2xvclwiLCBcIm1vZGVcIl0gfSlcbkBDb21wb25lbnQoeyBzZWxlY3RvcjogXCJpb24tdG9vbGJhclwiLCBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCwgdGVtcGxhdGU6IFwiPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlwiLCBpbnB1dHM6IFtcImNvbG9yXCIsIFwibW9kZVwiXSB9KVxuZXhwb3J0IGNsYXNzIElvblRvb2xiYXIge1xuICAgIHByb3RlY3RlZCBlbDogSFRNTEVsZW1lbnQ7XG4gICAgY29uc3RydWN0b3IoYzogQ2hhbmdlRGV0ZWN0b3JSZWYsIHI6IEVsZW1lbnRSZWYsIHByb3RlY3RlZCB6OiBOZ1pvbmUpIHtcbiAgICAgICAgYy5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5lbCA9IHIubmF0aXZlRWxlbWVudDtcbiAgICB9XG59XG4iXX0=