import { Animation } from '@ionic/core';
import * as ɵngcc0 from '@angular/core';
export declare class AnimationController {
    /**
     * Create a new animation
     */
    create(animationId?: string): Animation;
    /**
     * EXPERIMENTAL
     *
     * Given a progression and a cubic bezier function,
     * this utility returns the time value(s) at which the
     * cubic bezier reaches the given time progression.
     *
     * If the cubic bezier never reaches the progression
     * the result will be an empty array.
     *
     * This is most useful for switching between easing curves
     * when doing a gesture animation (i.e. going from linear easing
     * during a drag, to another easing when `progressEnd` is called)
     */
    easingTime(p0: number[], p1: number[], p2: number[], p3: number[], progression: number): number[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnimationController, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AnimationController>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5pbWF0aW9uLWNvbnRyb2xsZXIuZC50cyIsInNvdXJjZXMiOlsiYW5pbWF0aW9uLWNvbnRyb2xsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFuaW1hdGlvbkNvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBhbmltYXRpb25cbiAgICAgKi9cbiAgICBjcmVhdGUoYW5pbWF0aW9uSWQ/OiBzdHJpbmcpOiBBbmltYXRpb247XG4gICAgLyoqXG4gICAgICogRVhQRVJJTUVOVEFMXG4gICAgICpcbiAgICAgKiBHaXZlbiBhIHByb2dyZXNzaW9uIGFuZCBhIGN1YmljIGJlemllciBmdW5jdGlvbixcbiAgICAgKiB0aGlzIHV0aWxpdHkgcmV0dXJucyB0aGUgdGltZSB2YWx1ZShzKSBhdCB3aGljaCB0aGVcbiAgICAgKiBjdWJpYyBiZXppZXIgcmVhY2hlcyB0aGUgZ2l2ZW4gdGltZSBwcm9ncmVzc2lvbi5cbiAgICAgKlxuICAgICAqIElmIHRoZSBjdWJpYyBiZXppZXIgbmV2ZXIgcmVhY2hlcyB0aGUgcHJvZ3Jlc3Npb25cbiAgICAgKiB0aGUgcmVzdWx0IHdpbGwgYmUgYW4gZW1wdHkgYXJyYXkuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIG1vc3QgdXNlZnVsIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBlYXNpbmcgY3VydmVzXG4gICAgICogd2hlbiBkb2luZyBhIGdlc3R1cmUgYW5pbWF0aW9uIChpLmUuIGdvaW5nIGZyb20gbGluZWFyIGVhc2luZ1xuICAgICAqIGR1cmluZyBhIGRyYWcsIHRvIGFub3RoZXIgZWFzaW5nIHdoZW4gYHByb2dyZXNzRW5kYCBpcyBjYWxsZWQpXG4gICAgICovXG4gICAgZWFzaW5nVGltZShwMDogbnVtYmVyW10sIHAxOiBudW1iZXJbXSwgcDI6IG51bWJlcltdLCBwMzogbnVtYmVyW10sIHByb2dyZXNzaW9uOiBudW1iZXIpOiBudW1iZXJbXTtcbn1cbiJdfQ==