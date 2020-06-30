import { ApplicationRef, ComponentFactoryResolver, Injector, NgZone, ViewContainerRef } from '@angular/core';
import { FrameworkDelegate } from '@ionic/core';
import * as ɵngcc0 from '@angular/core';
export declare class AngularDelegate {
    private zone;
    private appRef;
    constructor(zone: NgZone, appRef: ApplicationRef);
    create(resolver: ComponentFactoryResolver, injector: Injector, location?: ViewContainerRef): AngularFrameworkDelegate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AngularDelegate, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AngularDelegate>;
}
export declare class AngularFrameworkDelegate implements FrameworkDelegate {
    private resolver;
    private injector;
    private location;
    private appRef;
    private zone;
    private elRefMap;
    private elEventsMap;
    constructor(resolver: ComponentFactoryResolver, injector: Injector, location: ViewContainerRef | undefined, appRef: ApplicationRef, zone: NgZone);
    attachViewToDom(container: any, component: any, params?: any, cssClasses?: string[]): Promise<any>;
    removeViewFromDom(_container: any, component: any): Promise<void>;
}
export declare const attachView: (zone: NgZone, resolver: ComponentFactoryResolver, injector: Injector, location: ViewContainerRef, appRef: ApplicationRef, elRefMap: WeakMap<HTMLElement, any>, elEventsMap: WeakMap<HTMLElement, () => void>, container: any, component: any, params: any, cssClasses: string[]) => any;
export declare const bindLifecycleEvents: (zone: NgZone, instance: any, element: HTMLElement) => () => void;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1kZWxlZ2F0ZS5kLnRzIiwic291cmNlcyI6WyJhbmd1bGFyLWRlbGVnYXRlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBsaWNhdGlvblJlZiwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBJbmplY3RvciwgTmdab25lLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGcmFtZXdvcmtEZWxlZ2F0ZSB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuZ3VsYXJEZWxlZ2F0ZSB7XG4gICAgcHJpdmF0ZSB6b25lO1xuICAgIHByaXZhdGUgYXBwUmVmO1xuICAgIGNvbnN0cnVjdG9yKHpvbmU6IE5nWm9uZSwgYXBwUmVmOiBBcHBsaWNhdGlvblJlZik7XG4gICAgY3JlYXRlKHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGluamVjdG9yOiBJbmplY3RvciwgbG9jYXRpb24/OiBWaWV3Q29udGFpbmVyUmVmKTogQW5ndWxhckZyYW1ld29ya0RlbGVnYXRlO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5ndWxhckZyYW1ld29ya0RlbGVnYXRlIGltcGxlbWVudHMgRnJhbWV3b3JrRGVsZWdhdGUge1xuICAgIHByaXZhdGUgcmVzb2x2ZXI7XG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcbiAgICBwcml2YXRlIGxvY2F0aW9uO1xuICAgIHByaXZhdGUgYXBwUmVmO1xuICAgIHByaXZhdGUgem9uZTtcbiAgICBwcml2YXRlIGVsUmVmTWFwO1xuICAgIHByaXZhdGUgZWxFdmVudHNNYXA7XG4gICAgY29uc3RydWN0b3IocmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgaW5qZWN0b3I6IEluamVjdG9yLCBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZiB8IHVuZGVmaW5lZCwgYXBwUmVmOiBBcHBsaWNhdGlvblJlZiwgem9uZTogTmdab25lKTtcbiAgICBhdHRhY2hWaWV3VG9Eb20oY29udGFpbmVyOiBhbnksIGNvbXBvbmVudDogYW55LCBwYXJhbXM/OiBhbnksIGNzc0NsYXNzZXM/OiBzdHJpbmdbXSk6IFByb21pc2U8YW55PjtcbiAgICByZW1vdmVWaWV3RnJvbURvbShfY29udGFpbmVyOiBhbnksIGNvbXBvbmVudDogYW55KTogUHJvbWlzZTx2b2lkPjtcbn1cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IGF0dGFjaFZpZXc6ICh6b25lOiBOZ1pvbmUsIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGluamVjdG9yOiBJbmplY3RvciwgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsIGFwcFJlZjogQXBwbGljYXRpb25SZWYsIGVsUmVmTWFwOiBXZWFrTWFwPEhUTUxFbGVtZW50LCBhbnk+LCBlbEV2ZW50c01hcDogV2Vha01hcDxIVE1MRWxlbWVudCwgKCkgPT4gdm9pZD4sIGNvbnRhaW5lcjogYW55LCBjb21wb25lbnQ6IGFueSwgcGFyYW1zOiBhbnksIGNzc0NsYXNzZXM6IHN0cmluZ1tdKSA9PiBhbnk7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBiaW5kTGlmZWN5Y2xlRXZlbnRzOiAoem9uZTogTmdab25lLCBpbnN0YW5jZTogYW55LCBlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gKCkgPT4gdm9pZDtcbiJdfQ==