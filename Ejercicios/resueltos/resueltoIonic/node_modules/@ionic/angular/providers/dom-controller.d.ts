import * as ɵngcc0 from '@angular/core';
export declare class DomController {
    /**
     * Schedules a task to run during the READ phase of the next frame.
     * This task should only read the DOM, but never modify it.
     */
    read(cb: RafCallback): void;
    /**
     * Schedules a task to run during the WRITE phase of the next frame.
     * This task should write the DOM, but never READ it.
     */
    write(cb: RafCallback): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DomController, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DomController>;
}
export declare type RafCallback = (timeStamp?: number) => void;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLWNvbnRyb2xsZXIuZC50cyIsInNvdXJjZXMiOlsiZG9tLWNvbnRyb2xsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWNsYXJlIGNsYXNzIERvbUNvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhIHRhc2sgdG8gcnVuIGR1cmluZyB0aGUgUkVBRCBwaGFzZSBvZiB0aGUgbmV4dCBmcmFtZS5cbiAgICAgKiBUaGlzIHRhc2sgc2hvdWxkIG9ubHkgcmVhZCB0aGUgRE9NLCBidXQgbmV2ZXIgbW9kaWZ5IGl0LlxuICAgICAqL1xuICAgIHJlYWQoY2I6IFJhZkNhbGxiYWNrKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgYSB0YXNrIHRvIHJ1biBkdXJpbmcgdGhlIFdSSVRFIHBoYXNlIG9mIHRoZSBuZXh0IGZyYW1lLlxuICAgICAqIFRoaXMgdGFzayBzaG91bGQgd3JpdGUgdGhlIERPTSwgYnV0IG5ldmVyIFJFQUQgaXQuXG4gICAgICovXG4gICAgd3JpdGUoY2I6IFJhZkNhbGxiYWNrKTogdm9pZDtcbn1cbmV4cG9ydCBkZWNsYXJlIHR5cGUgUmFmQ2FsbGJhY2sgPSAodGltZVN0YW1wPzogbnVtYmVyKSA9PiB2b2lkO1xuIl19