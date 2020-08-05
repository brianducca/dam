import { EventEmitter } from '../stencil-public-runtime';
import { Side } from '../interface';
/**
 * Gets the root context of a shadow dom element
 * On newer browsers this will be the shadowRoot,
 * but for older browser this may just be the
 * element itself.
 *
 * Useful for whenever you need to explicitly
 * do "myElement.shadowRoot!.querySelector(...)".
 */
export declare const getElementRoot: (el: HTMLElement, fallback?: HTMLElement) => HTMLElement | ShadowRoot;
/**
 * Patched version of requestAnimationFrame that avoids ngzone
 * Use only when you know ngzone should not run
 */
export declare const raf: (h: any) => any;
export declare const hasShadowDom: (el: HTMLElement) => boolean;
export declare const findItemLabel: (componentEl: HTMLElement) => HTMLIonLabelElement | null;
export declare const renderHiddenInput: (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean) => void;
export declare const clamp: (min: number, n: number, max: number) => number;
export declare const assert: (actual: any, reason: string) => void;
export declare const now: (ev: UIEvent) => number;
export declare const pointerCoord: (ev: any) => {
    x: number;
    y: number;
};
/**
 * @hidden
 * Given a side, return if it should be on the end
 * based on the value of dir
 * @param side the side
 * @param isRTL whether the application dir is rtl
 */
export declare const isEndSide: (side: Side) => boolean;
export declare const deferEvent: (event: EventEmitter) => EventEmitter;
export declare const debounceEvent: (event: EventEmitter, wait: number) => EventEmitter;
export declare const debounce: (func: (...args: any[]) => void, wait?: number) => (...args: any[]) => any;
