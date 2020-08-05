import { EventEmitter } from '@angular/core';
import { NavController } from '../../providers/nav-controller';
import { IonTabBar } from '../proxies';
import { IonRouterOutlet } from './ion-router-outlet';
import { StackEvent } from './stack-utils';
import * as ɵngcc0 from '@angular/core';
export declare class IonTabs {
    private navCtrl;
    outlet: IonRouterOutlet;
    tabBar: IonTabBar | undefined;
    ionTabsWillChange: EventEmitter<{
        tab: string;
    }>;
    ionTabsDidChange: EventEmitter<{
        tab: string;
    }>;
    constructor(navCtrl: NavController);
    /**
     * @internal
     */
    onPageSelected(detail: StackEvent): void;
    /**
     * When a tab button is clicked, there are several scenarios:
     * 1. If the selected tab is currently active (the tab button has been clicked
     *    again), then it should go to the root view for that tab.
     *
     *   a. Get the saved root view from the router outlet. If the saved root view
     *      matches the tabRootUrl, set the route view to this view including the
     *      navigation extras.
     *   b. If the saved root view from the router outlet does
     *      not match, navigate to the tabRootUrl. No navigation extras are
     *      included.
     *
     * 2. If the current tab tab is not currently selected, get the last route
     *    view from the router outlet.
     *
     *   a. If the last route view exists, navigate to that view including any
     *      navigation extras
     *   b. If the last route view doesn't exist, then navigate
     *      to the default tabRootUrl
     */
    select(tab: string): Promise<boolean>;
    getSelected(): string | undefined;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonTabs, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonTabs, "ion-tabs", never, {}, { "ionTabsWillChange": "ionTabsWillChange"; "ionTabsDidChange": "ionTabsDidChange"; }, ["tabBar"], ["[slot=top]", "*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXRhYnMuZC50cyIsInNvdXJjZXMiOlsiaW9uLXRhYnMuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciB9IGZyb20gJy4uLy4uL3Byb3ZpZGVycy9uYXYtY29udHJvbGxlcic7XG5pbXBvcnQgeyBJb25UYWJCYXIgfSBmcm9tICcuLi9wcm94aWVzJztcbmltcG9ydCB7IElvblJvdXRlck91dGxldCB9IGZyb20gJy4vaW9uLXJvdXRlci1vdXRsZXQnO1xuaW1wb3J0IHsgU3RhY2tFdmVudCB9IGZyb20gJy4vc3RhY2stdXRpbHMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW9uVGFicyB7XG4gICAgcHJpdmF0ZSBuYXZDdHJsO1xuICAgIG91dGxldDogSW9uUm91dGVyT3V0bGV0O1xuICAgIHRhYkJhcjogSW9uVGFiQmFyIHwgdW5kZWZpbmVkO1xuICAgIGlvblRhYnNXaWxsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICB0YWI6IHN0cmluZztcbiAgICB9PjtcbiAgICBpb25UYWJzRGlkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICB0YWI6IHN0cmluZztcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3RvcihuYXZDdHJsOiBOYXZDb250cm9sbGVyKTtcbiAgICAvKipcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBvblBhZ2VTZWxlY3RlZChkZXRhaWw6IFN0YWNrRXZlbnQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW4gYSB0YWIgYnV0dG9uIGlzIGNsaWNrZWQsIHRoZXJlIGFyZSBzZXZlcmFsIHNjZW5hcmlvczpcbiAgICAgKiAxLiBJZiB0aGUgc2VsZWN0ZWQgdGFiIGlzIGN1cnJlbnRseSBhY3RpdmUgKHRoZSB0YWIgYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWRcbiAgICAgKiAgICBhZ2FpbiksIHRoZW4gaXQgc2hvdWxkIGdvIHRvIHRoZSByb290IHZpZXcgZm9yIHRoYXQgdGFiLlxuICAgICAqXG4gICAgICogICBhLiBHZXQgdGhlIHNhdmVkIHJvb3QgdmlldyBmcm9tIHRoZSByb3V0ZXIgb3V0bGV0LiBJZiB0aGUgc2F2ZWQgcm9vdCB2aWV3XG4gICAgICogICAgICBtYXRjaGVzIHRoZSB0YWJSb290VXJsLCBzZXQgdGhlIHJvdXRlIHZpZXcgdG8gdGhpcyB2aWV3IGluY2x1ZGluZyB0aGVcbiAgICAgKiAgICAgIG5hdmlnYXRpb24gZXh0cmFzLlxuICAgICAqICAgYi4gSWYgdGhlIHNhdmVkIHJvb3QgdmlldyBmcm9tIHRoZSByb3V0ZXIgb3V0bGV0IGRvZXNcbiAgICAgKiAgICAgIG5vdCBtYXRjaCwgbmF2aWdhdGUgdG8gdGhlIHRhYlJvb3RVcmwuIE5vIG5hdmlnYXRpb24gZXh0cmFzIGFyZVxuICAgICAqICAgICAgaW5jbHVkZWQuXG4gICAgICpcbiAgICAgKiAyLiBJZiB0aGUgY3VycmVudCB0YWIgdGFiIGlzIG5vdCBjdXJyZW50bHkgc2VsZWN0ZWQsIGdldCB0aGUgbGFzdCByb3V0ZVxuICAgICAqICAgIHZpZXcgZnJvbSB0aGUgcm91dGVyIG91dGxldC5cbiAgICAgKlxuICAgICAqICAgYS4gSWYgdGhlIGxhc3Qgcm91dGUgdmlldyBleGlzdHMsIG5hdmlnYXRlIHRvIHRoYXQgdmlldyBpbmNsdWRpbmcgYW55XG4gICAgICogICAgICBuYXZpZ2F0aW9uIGV4dHJhc1xuICAgICAqICAgYi4gSWYgdGhlIGxhc3Qgcm91dGUgdmlldyBkb2Vzbid0IGV4aXN0LCB0aGVuIG5hdmlnYXRlXG4gICAgICogICAgICB0byB0aGUgZGVmYXVsdCB0YWJSb290VXJsXG4gICAgICovXG4gICAgc2VsZWN0KHRhYjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICBnZXRTZWxlY3RlZCgpOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG59XG4iXX0=