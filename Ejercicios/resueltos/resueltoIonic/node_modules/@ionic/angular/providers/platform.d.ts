import { NgZone } from '@angular/core';
import { BackButtonEventDetail, Platforms } from '@ionic/core';
import { Subject, Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface BackButtonEmitter extends Subject<BackButtonEventDetail> {
    subscribeWithPriority(priority: number, callback: (processNextHandler: () => void) => Promise<any> | void): Subscription;
}
export declare class Platform {
    private doc;
    private _readyPromise;
    private win;
    /**
     * @hidden
     */
    backButton: BackButtonEmitter;
    /**
     * The keyboardDidShow event emits when the
     * on-screen keyboard is presented.
     */
    keyboardDidShow: any;
    /**
     * The keyboardDidHide event emits when the
     * on-screen keyboard is hidden.
     */
    keyboardDidHide: Subject<void>;
    /**
     * The pause event emits when the native platform puts the application
     * into the background, typically when the user switches to a different
     * application. This event would emit when a Cordova app is put into
     * the background, however, it would not fire on a standard web browser.
     */
    pause: Subject<void>;
    /**
     * The resume event emits when the native platform pulls the application
     * out from the background. This event would emit when a Cordova app comes
     * out from the background, however, it would not fire on a standard web browser.
     */
    resume: Subject<void>;
    /**
     * The resize event emits when the browser window has changed dimensions. This
     * could be from a browser window being physically resized, or from a device
     * changing orientation.
     */
    resize: Subject<void>;
    constructor(doc: any, zone: NgZone);
    /**
     * @returns returns true/false based on platform.
     * @description
     * Depending on the platform the user is on, `is(platformName)` will
     * return `true` or `false`. Note that the same app can return `true`
     * for more than one platform name. For example, an app running from
     * an iPad would return `true` for the platform names: `mobile`,
     * `ios`, `ipad`, and `tablet`. Additionally, if the app was running
     * from Cordova then `cordova` would be true, and if it was running
     * from a web browser on the iPad then `mobileweb` would be `true`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     if (this.platform.is('ios')) {
     *       // This will only print when on iOS
     *       console.log('I am an iOS device!');
     *     }
     *   }
     * }
     * ```
     *
     * | Platform Name   | Description                        |
     * |-----------------|------------------------------------|
     * | android         | on a device running Android.       |
     * | cordova         | on a device running Cordova.       |
     * | ios             | on a device running iOS.           |
     * | ipad            | on an iPad device.                 |
     * | iphone          | on an iPhone device.               |
     * | phablet         | on a phablet device.               |
     * | tablet          | on a tablet device.                |
     * | electron        | in Electron on a desktop device.   |
     * | pwa             | as a PWA app.                      |
     * | mobile          | on a mobile device.                |
     * | mobileweb       | on a mobile device in a browser.   |
     * | desktop         | on a desktop device.               |
     * | hybrid          | is a cordova or capacitor app.     |
     *
     */
    is(platformName: Platforms): boolean;
    /**
     * @returns the array of platforms
     * @description
     * Depending on what device you are on, `platforms` can return multiple values.
     * Each possible value is a hierarchy of platforms. For example, on an iPhone,
     * it would return `mobile`, `ios`, and `iphone`.
     *
     * ```
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyPage {
     *   constructor(public platform: Platform) {
     *     // This will print an array of the current platforms
     *     console.log(this.platform.platforms());
     *   }
     * }
     * ```
     */
    platforms(): string[];
    /**
     * Returns a promise when the platform is ready and native functionality
     * can be called. If the app is running from within a web browser, then
     * the promise will resolve when the DOM is ready. When the app is running
     * from an application engine such as Cordova, then the promise will
     * resolve when Cordova triggers the `deviceready` event.
     *
     * The resolved value is the `readySource`, which states which platform
     * ready was used. For example, when Cordova is ready, the resolved ready
     * source is `cordova`. The default ready source value will be `dom`. The
     * `readySource` is useful if different logic should run depending on the
     * platform the app is running from. For example, only Cordova can execute
     * the status bar plugin, so the web should not run status bar plugin logic.
     *
     * ```
     * import { Component } from '@angular/core';
     * import { Platform } from 'ionic-angular';
     *
     * @Component({...})
     * export MyApp {
     *   constructor(public platform: Platform) {
     *     this.platform.ready().then((readySource) => {
     *       console.log('Platform ready from', readySource);
     *       // Platform now ready, execute any required native code
     *     });
     *   }
     * }
     * ```
     */
    ready(): Promise<string>;
    /**
     * Returns if this app is using right-to-left language direction or not.
     * We recommend the app's `index.html` file already has the correct `dir`
     * attribute value set, such as `<html dir="ltr">` or `<html dir="rtl">`.
     * [W3C: Structural markup and right-to-left text in HTML](http://www.w3.org/International/questions/qa-html-dir)
     */
    readonly isRTL: boolean;
    /**
     * Get the query string parameter
     */
    getQueryParam(key: string): string | null;
    /**
     * Returns `true` if the app is in landscape mode.
     */
    isLandscape(): boolean;
    /**
     * Returns `true` if the app is in portait mode.
     */
    isPortrait(): boolean;
    testUserAgent(expression: string): boolean;
    /**
     * Get the current url.
     */
    url(): any;
    /**
     * Gets the width of the platform's viewport using `window.innerWidth`.
     */
    width(): any;
    /**
     * Gets the height of the platform's viewport using `window.innerHeight`.
     */
    height(): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<Platform, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<Platform>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uZC50cyIsInNvdXJjZXMiOlsicGxhdGZvcm0uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWNrQnV0dG9uRXZlbnREZXRhaWwsIFBsYXRmb3JtcyB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGludGVyZmFjZSBCYWNrQnV0dG9uRW1pdHRlciBleHRlbmRzIFN1YmplY3Q8QmFja0J1dHRvbkV2ZW50RGV0YWlsPiB7XG4gICAgc3Vic2NyaWJlV2l0aFByaW9yaXR5KHByaW9yaXR5OiBudW1iZXIsIGNhbGxiYWNrOiAocHJvY2Vzc05leHRIYW5kbGVyOiAoKSA9PiB2b2lkKSA9PiBQcm9taXNlPGFueT4gfCB2b2lkKTogU3Vic2NyaXB0aW9uO1xufVxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGxhdGZvcm0ge1xuICAgIHByaXZhdGUgZG9jO1xuICAgIHByaXZhdGUgX3JlYWR5UHJvbWlzZTtcbiAgICBwcml2YXRlIHdpbjtcbiAgICAvKipcbiAgICAgKiBAaGlkZGVuXG4gICAgICovXG4gICAgYmFja0J1dHRvbjogQmFja0J1dHRvbkVtaXR0ZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGtleWJvYXJkRGlkU2hvdyBldmVudCBlbWl0cyB3aGVuIHRoZVxuICAgICAqIG9uLXNjcmVlbiBrZXlib2FyZCBpcyBwcmVzZW50ZWQuXG4gICAgICovXG4gICAga2V5Ym9hcmREaWRTaG93OiBhbnk7XG4gICAgLyoqXG4gICAgICogVGhlIGtleWJvYXJkRGlkSGlkZSBldmVudCBlbWl0cyB3aGVuIHRoZVxuICAgICAqIG9uLXNjcmVlbiBrZXlib2FyZCBpcyBoaWRkZW4uXG4gICAgICovXG4gICAga2V5Ym9hcmREaWRIaWRlOiBTdWJqZWN0PHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIFRoZSBwYXVzZSBldmVudCBlbWl0cyB3aGVuIHRoZSBuYXRpdmUgcGxhdGZvcm0gcHV0cyB0aGUgYXBwbGljYXRpb25cbiAgICAgKiBpbnRvIHRoZSBiYWNrZ3JvdW5kLCB0eXBpY2FsbHkgd2hlbiB0aGUgdXNlciBzd2l0Y2hlcyB0byBhIGRpZmZlcmVudFxuICAgICAqIGFwcGxpY2F0aW9uLiBUaGlzIGV2ZW50IHdvdWxkIGVtaXQgd2hlbiBhIENvcmRvdmEgYXBwIGlzIHB1dCBpbnRvXG4gICAgICogdGhlIGJhY2tncm91bmQsIGhvd2V2ZXIsIGl0IHdvdWxkIG5vdCBmaXJlIG9uIGEgc3RhbmRhcmQgd2ViIGJyb3dzZXIuXG4gICAgICovXG4gICAgcGF1c2U6IFN1YmplY3Q8dm9pZD47XG4gICAgLyoqXG4gICAgICogVGhlIHJlc3VtZSBldmVudCBlbWl0cyB3aGVuIHRoZSBuYXRpdmUgcGxhdGZvcm0gcHVsbHMgdGhlIGFwcGxpY2F0aW9uXG4gICAgICogb3V0IGZyb20gdGhlIGJhY2tncm91bmQuIFRoaXMgZXZlbnQgd291bGQgZW1pdCB3aGVuIGEgQ29yZG92YSBhcHAgY29tZXNcbiAgICAgKiBvdXQgZnJvbSB0aGUgYmFja2dyb3VuZCwgaG93ZXZlciwgaXQgd291bGQgbm90IGZpcmUgb24gYSBzdGFuZGFyZCB3ZWIgYnJvd3Nlci5cbiAgICAgKi9cbiAgICByZXN1bWU6IFN1YmplY3Q8dm9pZD47XG4gICAgLyoqXG4gICAgICogVGhlIHJlc2l6ZSBldmVudCBlbWl0cyB3aGVuIHRoZSBicm93c2VyIHdpbmRvdyBoYXMgY2hhbmdlZCBkaW1lbnNpb25zLiBUaGlzXG4gICAgICogY291bGQgYmUgZnJvbSBhIGJyb3dzZXIgd2luZG93IGJlaW5nIHBoeXNpY2FsbHkgcmVzaXplZCwgb3IgZnJvbSBhIGRldmljZVxuICAgICAqIGNoYW5naW5nIG9yaWVudGF0aW9uLlxuICAgICAqL1xuICAgIHJlc2l6ZTogU3ViamVjdDx2b2lkPjtcbiAgICBjb25zdHJ1Y3Rvcihkb2M6IGFueSwgem9uZTogTmdab25lKTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyByZXR1cm5zIHRydWUvZmFsc2UgYmFzZWQgb24gcGxhdGZvcm0uXG4gICAgICogQGRlc2NyaXB0aW9uXG4gICAgICogRGVwZW5kaW5nIG9uIHRoZSBwbGF0Zm9ybSB0aGUgdXNlciBpcyBvbiwgYGlzKHBsYXRmb3JtTmFtZSlgIHdpbGxcbiAgICAgKiByZXR1cm4gYHRydWVgIG9yIGBmYWxzZWAuIE5vdGUgdGhhdCB0aGUgc2FtZSBhcHAgY2FuIHJldHVybiBgdHJ1ZWBcbiAgICAgKiBmb3IgbW9yZSB0aGFuIG9uZSBwbGF0Zm9ybSBuYW1lLiBGb3IgZXhhbXBsZSwgYW4gYXBwIHJ1bm5pbmcgZnJvbVxuICAgICAqIGFuIGlQYWQgd291bGQgcmV0dXJuIGB0cnVlYCBmb3IgdGhlIHBsYXRmb3JtIG5hbWVzOiBgbW9iaWxlYCxcbiAgICAgKiBgaW9zYCwgYGlwYWRgLCBhbmQgYHRhYmxldGAuIEFkZGl0aW9uYWxseSwgaWYgdGhlIGFwcCB3YXMgcnVubmluZ1xuICAgICAqIGZyb20gQ29yZG92YSB0aGVuIGBjb3Jkb3ZhYCB3b3VsZCBiZSB0cnVlLCBhbmQgaWYgaXQgd2FzIHJ1bm5pbmdcbiAgICAgKiBmcm9tIGEgd2ViIGJyb3dzZXIgb24gdGhlIGlQYWQgdGhlbiBgbW9iaWxld2ViYCB3b3VsZCBiZSBgdHJ1ZWAuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuICAgICAqXG4gICAgICogQENvbXBvbmVudCh7Li4ufSlcbiAgICAgKiBleHBvcnQgTXlQYWdlIHtcbiAgICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICAgKiAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XG4gICAgICogICAgICAgLy8gVGhpcyB3aWxsIG9ubHkgcHJpbnQgd2hlbiBvbiBpT1NcbiAgICAgKiAgICAgICBjb25zb2xlLmxvZygnSSBhbSBhbiBpT1MgZGV2aWNlIScpO1xuICAgICAqICAgICB9XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqXG4gICAgICogfCBQbGF0Zm9ybSBOYW1lICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgKiB8LS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICAgICAqIHwgYW5kcm9pZCAgICAgICAgIHwgb24gYSBkZXZpY2UgcnVubmluZyBBbmRyb2lkLiAgICAgICB8XG4gICAgICogfCBjb3Jkb3ZhICAgICAgICAgfCBvbiBhIGRldmljZSBydW5uaW5nIENvcmRvdmEuICAgICAgIHxcbiAgICAgKiB8IGlvcyAgICAgICAgICAgICB8IG9uIGEgZGV2aWNlIHJ1bm5pbmcgaU9TLiAgICAgICAgICAgfFxuICAgICAqIHwgaXBhZCAgICAgICAgICAgIHwgb24gYW4gaVBhZCBkZXZpY2UuICAgICAgICAgICAgICAgICB8XG4gICAgICogfCBpcGhvbmUgICAgICAgICAgfCBvbiBhbiBpUGhvbmUgZGV2aWNlLiAgICAgICAgICAgICAgIHxcbiAgICAgKiB8IHBoYWJsZXQgICAgICAgICB8IG9uIGEgcGhhYmxldCBkZXZpY2UuICAgICAgICAgICAgICAgfFxuICAgICAqIHwgdGFibGV0ICAgICAgICAgIHwgb24gYSB0YWJsZXQgZGV2aWNlLiAgICAgICAgICAgICAgICB8XG4gICAgICogfCBlbGVjdHJvbiAgICAgICAgfCBpbiBFbGVjdHJvbiBvbiBhIGRlc2t0b3AgZGV2aWNlLiAgIHxcbiAgICAgKiB8IHB3YSAgICAgICAgICAgICB8IGFzIGEgUFdBIGFwcC4gICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAqIHwgbW9iaWxlICAgICAgICAgIHwgb24gYSBtb2JpbGUgZGV2aWNlLiAgICAgICAgICAgICAgICB8XG4gICAgICogfCBtb2JpbGV3ZWIgICAgICAgfCBvbiBhIG1vYmlsZSBkZXZpY2UgaW4gYSBicm93c2VyLiAgIHxcbiAgICAgKiB8IGRlc2t0b3AgICAgICAgICB8IG9uIGEgZGVza3RvcCBkZXZpY2UuICAgICAgICAgICAgICAgfFxuICAgICAqIHwgaHlicmlkICAgICAgICAgIHwgaXMgYSBjb3Jkb3ZhIG9yIGNhcGFjaXRvciBhcHAuICAgICB8XG4gICAgICpcbiAgICAgKi9cbiAgICBpcyhwbGF0Zm9ybU5hbWU6IFBsYXRmb3Jtcyk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQHJldHVybnMgdGhlIGFycmF5IG9mIHBsYXRmb3Jtc1xuICAgICAqIEBkZXNjcmlwdGlvblxuICAgICAqIERlcGVuZGluZyBvbiB3aGF0IGRldmljZSB5b3UgYXJlIG9uLCBgcGxhdGZvcm1zYCBjYW4gcmV0dXJuIG11bHRpcGxlIHZhbHVlcy5cbiAgICAgKiBFYWNoIHBvc3NpYmxlIHZhbHVlIGlzIGEgaGllcmFyY2h5IG9mIHBsYXRmb3Jtcy4gRm9yIGV4YW1wbGUsIG9uIGFuIGlQaG9uZSxcbiAgICAgKiBpdCB3b3VsZCByZXR1cm4gYG1vYmlsZWAsIGBpb3NgLCBhbmQgYGlwaG9uZWAuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBpbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ2lvbmljLWFuZ3VsYXInO1xuICAgICAqXG4gICAgICogQENvbXBvbmVudCh7Li4ufSlcbiAgICAgKiBleHBvcnQgTXlQYWdlIHtcbiAgICAgKiAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICAgKiAgICAgLy8gVGhpcyB3aWxsIHByaW50IGFuIGFycmF5IG9mIHRoZSBjdXJyZW50IHBsYXRmb3Jtc1xuICAgICAqICAgICBjb25zb2xlLmxvZyh0aGlzLnBsYXRmb3JtLnBsYXRmb3JtcygpKTtcbiAgICAgKiAgIH1cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcGxhdGZvcm1zKCk6IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBwcm9taXNlIHdoZW4gdGhlIHBsYXRmb3JtIGlzIHJlYWR5IGFuZCBuYXRpdmUgZnVuY3Rpb25hbGl0eVxuICAgICAqIGNhbiBiZSBjYWxsZWQuIElmIHRoZSBhcHAgaXMgcnVubmluZyBmcm9tIHdpdGhpbiBhIHdlYiBicm93c2VyLCB0aGVuXG4gICAgICogdGhlIHByb21pc2Ugd2lsbCByZXNvbHZlIHdoZW4gdGhlIERPTSBpcyByZWFkeS4gV2hlbiB0aGUgYXBwIGlzIHJ1bm5pbmdcbiAgICAgKiBmcm9tIGFuIGFwcGxpY2F0aW9uIGVuZ2luZSBzdWNoIGFzIENvcmRvdmEsIHRoZW4gdGhlIHByb21pc2Ugd2lsbFxuICAgICAqIHJlc29sdmUgd2hlbiBDb3Jkb3ZhIHRyaWdnZXJzIHRoZSBgZGV2aWNlcmVhZHlgIGV2ZW50LlxuICAgICAqXG4gICAgICogVGhlIHJlc29sdmVkIHZhbHVlIGlzIHRoZSBgcmVhZHlTb3VyY2VgLCB3aGljaCBzdGF0ZXMgd2hpY2ggcGxhdGZvcm1cbiAgICAgKiByZWFkeSB3YXMgdXNlZC4gRm9yIGV4YW1wbGUsIHdoZW4gQ29yZG92YSBpcyByZWFkeSwgdGhlIHJlc29sdmVkIHJlYWR5XG4gICAgICogc291cmNlIGlzIGBjb3Jkb3ZhYC4gVGhlIGRlZmF1bHQgcmVhZHkgc291cmNlIHZhbHVlIHdpbGwgYmUgYGRvbWAuIFRoZVxuICAgICAqIGByZWFkeVNvdXJjZWAgaXMgdXNlZnVsIGlmIGRpZmZlcmVudCBsb2dpYyBzaG91bGQgcnVuIGRlcGVuZGluZyBvbiB0aGVcbiAgICAgKiBwbGF0Zm9ybSB0aGUgYXBwIGlzIHJ1bm5pbmcgZnJvbS4gRm9yIGV4YW1wbGUsIG9ubHkgQ29yZG92YSBjYW4gZXhlY3V0ZVxuICAgICAqIHRoZSBzdGF0dXMgYmFyIHBsdWdpbiwgc28gdGhlIHdlYiBzaG91bGQgbm90IHJ1biBzdGF0dXMgYmFyIHBsdWdpbiBsb2dpYy5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuICAgICAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XG4gICAgICpcbiAgICAgKiBAQ29tcG9uZW50KHsuLi59KVxuICAgICAqIGV4cG9ydCBNeUFwcCB7XG4gICAgICogICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgICogICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKChyZWFkeVNvdXJjZSkgPT4ge1xuICAgICAqICAgICAgIGNvbnNvbGUubG9nKCdQbGF0Zm9ybSByZWFkeSBmcm9tJywgcmVhZHlTb3VyY2UpO1xuICAgICAqICAgICAgIC8vIFBsYXRmb3JtIG5vdyByZWFkeSwgZXhlY3V0ZSBhbnkgcmVxdWlyZWQgbmF0aXZlIGNvZGVcbiAgICAgKiAgICAgfSk7XG4gICAgICogICB9XG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHJlYWR5KCk6IFByb21pc2U8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoaXMgYXBwIGlzIHVzaW5nIHJpZ2h0LXRvLWxlZnQgbGFuZ3VhZ2UgZGlyZWN0aW9uIG9yIG5vdC5cbiAgICAgKiBXZSByZWNvbW1lbmQgdGhlIGFwcCdzIGBpbmRleC5odG1sYCBmaWxlIGFscmVhZHkgaGFzIHRoZSBjb3JyZWN0IGBkaXJgXG4gICAgICogYXR0cmlidXRlIHZhbHVlIHNldCwgc3VjaCBhcyBgPGh0bWwgZGlyPVwibHRyXCI+YCBvciBgPGh0bWwgZGlyPVwicnRsXCI+YC5cbiAgICAgKiBbVzNDOiBTdHJ1Y3R1cmFsIG1hcmt1cCBhbmQgcmlnaHQtdG8tbGVmdCB0ZXh0IGluIEhUTUxdKGh0dHA6Ly93d3cudzMub3JnL0ludGVybmF0aW9uYWwvcXVlc3Rpb25zL3FhLWh0bWwtZGlyKVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlzUlRMOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcXVlcnkgc3RyaW5nIHBhcmFtZXRlclxuICAgICAqL1xuICAgIGdldFF1ZXJ5UGFyYW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBhcHAgaXMgaW4gbGFuZHNjYXBlIG1vZGUuXG4gICAgICovXG4gICAgaXNMYW5kc2NhcGUoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXBwIGlzIGluIHBvcnRhaXQgbW9kZS5cbiAgICAgKi9cbiAgICBpc1BvcnRyYWl0KCk6IGJvb2xlYW47XG4gICAgdGVzdFVzZXJBZ2VudChleHByZXNzaW9uOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCB1cmwuXG4gICAgICovXG4gICAgdXJsKCk6IGFueTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSB3aWR0aCBvZiB0aGUgcGxhdGZvcm0ncyB2aWV3cG9ydCB1c2luZyBgd2luZG93LmlubmVyV2lkdGhgLlxuICAgICAqL1xuICAgIHdpZHRoKCk6IGFueTtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBoZWlnaHQgb2YgdGhlIHBsYXRmb3JtJ3Mgdmlld3BvcnQgdXNpbmcgYHdpbmRvdy5pbm5lckhlaWdodGAuXG4gICAgICovXG4gICAgaGVpZ2h0KCk6IG51bWJlcjtcbn1cbiJdfQ==