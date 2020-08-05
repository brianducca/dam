import { ElementRef, IterableDiffers, NgZone, SimpleChanges, TrackByFunction } from '@angular/core';
import { FooterHeightFn, HeaderFn, HeaderHeightFn, ItemHeightFn } from '@ionic/core';
import { VirtualFooter } from './virtual-footer';
import { VirtualHeader } from './virtual-header';
import { VirtualItem } from './virtual-item';
import * as ɵngcc0 from '@angular/core';
export declare interface IonVirtualScroll {
    /**
     * It is important to provide this
     * if virtual item height will be significantly larger than the default
     * The approximate height of each virtual item template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    approxItemHeight: number;
    /**
     * The approximate height of each header template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    approxHeaderHeight: number;
    /**
     * The approximate width of each footer template's cell.
     * This dimension is used to help determine how many cells should
     * be created when initialized, and to help calculate the height of
     * the scrollable area. This height value can only use `px` units.
     * Note that the actual rendered size of each cell comes from the
     * app's CSS, whereas this approximation is used to help calculate
     * initial dimensions before the item has been rendered.
     */
    approxFooterHeight: number;
    /**
     * Section headers and the data used within its given
     * template can be dynamically created by passing a function to `headerFn`.
     * For example, a large list of contacts usually has dividers between each
     * letter in the alphabet. App's can provide their own custom `headerFn`
     * which is called with each record within the dataset. The logic within
     * the header function can decide if the header template should be used,
     * and what data to give to the header template. The function must return
     * `null` if a header cell shouldn't be created.
     */
    headerFn?: HeaderFn;
    /**
     * Section footers and the data used within its given
     * template can be dynamically created by passing a function to `footerFn`.
     * The logic within the footer function can decide if the footer template
     * should be used, and what data to give to the footer template. The function
     * must return `null` if a footer cell shouldn't be created.
     */
    footerFn?: HeaderFn;
    /**
     * The data that builds the templates within the virtual scroll.
     * It's important to note that when this data has changed, then the
     * entire virtual scroll is reset, which is an expensive operation and
     * should be avoided if possible.
     */
    items?: any[];
    /**
     * An optional function that maps each item within their height.
     * When this function is provided, heavy optimizations and fast path can be taked by
     * `ion-virtual-scroll` leading to massive performance improvements.
     *
     * This function allows to skip all DOM reads, which can be Doing so leads
     * to massive performance
     */
    itemHeight?: ItemHeightFn;
    /**
     * An optional function that maps each item header within their height.
     */
    headerHeight?: HeaderHeightFn;
    /**
     * An optional function that maps each item footer within their height.
     */
    footerHeight?: FooterHeightFn;
    /**
     * Same as `ngForTrackBy` which can be used on `ngFor`.
     */
    trackBy: TrackByFunction<any>;
    /**
     * This method marks the tail the items array as dirty, so they can be re-rendered.  It's equivalent to calling:  ```js    * virtualScroll.checkRange(lastItemLen, items.length - lastItemLen);    * ```
     */
    'checkEnd': () => void;
    /**
     * This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as dirty any time the content or their style changes.  The subset of items to be updated can are specifing by an offset and a length.
     */
    'checkRange': (offset: number, len?: number) => void;
    /**
     * Returns the position of the virtual item at the given index.
     */
    'positionForItem': (index: number) => Promise<number>;
}
export declare class IonVirtualScroll {
    private z;
    private iterableDiffers;
    private differ?;
    private el;
    private refMap;
    itmTmp: VirtualItem;
    hdrTmp: VirtualHeader;
    ftrTmp: VirtualFooter;
    constructor(z: NgZone, iterableDiffers: IterableDiffers, elementRef: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngDoCheck(): void;
    private nodeRender;
    private getComponent;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IonVirtualScroll, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<IonVirtualScroll, "ion-virtual-scroll", never, { "approxItemHeight": "approxItemHeight"; "approxHeaderHeight": "approxHeaderHeight"; "approxFooterHeight": "approxFooterHeight"; "headerFn": "headerFn"; "footerFn": "footerFn"; "items": "items"; "itemHeight": "itemHeight"; "headerHeight": "headerHeight"; "footerHeight": "footerHeight"; "trackBy": "trackBy"; }, {}, ["itmTmp", "hdrTmp", "ftrTmp"], ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlydHVhbC1zY3JvbGwuZC50cyIsInNvdXJjZXMiOlsidmlydHVhbC1zY3JvbGwuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSXRlcmFibGVEaWZmZXJzLCBOZ1pvbmUsIFNpbXBsZUNoYW5nZXMsIFRyYWNrQnlGdW5jdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9vdGVySGVpZ2h0Rm4sIEhlYWRlckZuLCBIZWFkZXJIZWlnaHRGbiwgSXRlbUhlaWdodEZuIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHsgVmlydHVhbEZvb3RlciB9IGZyb20gJy4vdmlydHVhbC1mb290ZXInO1xuaW1wb3J0IHsgVmlydHVhbEhlYWRlciB9IGZyb20gJy4vdmlydHVhbC1oZWFkZXInO1xuaW1wb3J0IHsgVmlydHVhbEl0ZW0gfSBmcm9tICcuL3ZpcnR1YWwtaXRlbSc7XG5leHBvcnQgZGVjbGFyZSBpbnRlcmZhY2UgSW9uVmlydHVhbFNjcm9sbCB7XG4gICAgLyoqXG4gICAgICogSXQgaXMgaW1wb3J0YW50IHRvIHByb3ZpZGUgdGhpc1xuICAgICAqIGlmIHZpcnR1YWwgaXRlbSBoZWlnaHQgd2lsbCBiZSBzaWduaWZpY2FudGx5IGxhcmdlciB0aGFuIHRoZSBkZWZhdWx0XG4gICAgICogVGhlIGFwcHJveGltYXRlIGhlaWdodCBvZiBlYWNoIHZpcnR1YWwgaXRlbSB0ZW1wbGF0ZSdzIGNlbGwuXG4gICAgICogVGhpcyBkaW1lbnNpb24gaXMgdXNlZCB0byBoZWxwIGRldGVybWluZSBob3cgbWFueSBjZWxscyBzaG91bGRcbiAgICAgKiBiZSBjcmVhdGVkIHdoZW4gaW5pdGlhbGl6ZWQsIGFuZCB0byBoZWxwIGNhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mXG4gICAgICogdGhlIHNjcm9sbGFibGUgYXJlYS4gVGhpcyBoZWlnaHQgdmFsdWUgY2FuIG9ubHkgdXNlIGBweGAgdW5pdHMuXG4gICAgICogTm90ZSB0aGF0IHRoZSBhY3R1YWwgcmVuZGVyZWQgc2l6ZSBvZiBlYWNoIGNlbGwgY29tZXMgZnJvbSB0aGVcbiAgICAgKiBhcHAncyBDU1MsIHdoZXJlYXMgdGhpcyBhcHByb3hpbWF0aW9uIGlzIHVzZWQgdG8gaGVscCBjYWxjdWxhdGVcbiAgICAgKiBpbml0aWFsIGRpbWVuc2lvbnMgYmVmb3JlIHRoZSBpdGVtIGhhcyBiZWVuIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGFwcHJveEl0ZW1IZWlnaHQ6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgYXBwcm94aW1hdGUgaGVpZ2h0IG9mIGVhY2ggaGVhZGVyIHRlbXBsYXRlJ3MgY2VsbC5cbiAgICAgKiBUaGlzIGRpbWVuc2lvbiBpcyB1c2VkIHRvIGhlbHAgZGV0ZXJtaW5lIGhvdyBtYW55IGNlbGxzIHNob3VsZFxuICAgICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICAgKiB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBUaGlzIGhlaWdodCB2YWx1ZSBjYW4gb25seSB1c2UgYHB4YCB1bml0cy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFjdHVhbCByZW5kZXJlZCBzaXplIG9mIGVhY2ggY2VsbCBjb21lcyBmcm9tIHRoZVxuICAgICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgICAqIGluaXRpYWwgZGltZW5zaW9ucyBiZWZvcmUgdGhlIGl0ZW0gaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAgICovXG4gICAgYXBwcm94SGVhZGVySGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogVGhlIGFwcHJveGltYXRlIHdpZHRoIG9mIGVhY2ggZm9vdGVyIHRlbXBsYXRlJ3MgY2VsbC5cbiAgICAgKiBUaGlzIGRpbWVuc2lvbiBpcyB1c2VkIHRvIGhlbHAgZGV0ZXJtaW5lIGhvdyBtYW55IGNlbGxzIHNob3VsZFxuICAgICAqIGJlIGNyZWF0ZWQgd2hlbiBpbml0aWFsaXplZCwgYW5kIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaHQgb2ZcbiAgICAgKiB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBUaGlzIGhlaWdodCB2YWx1ZSBjYW4gb25seSB1c2UgYHB4YCB1bml0cy5cbiAgICAgKiBOb3RlIHRoYXQgdGhlIGFjdHVhbCByZW5kZXJlZCBzaXplIG9mIGVhY2ggY2VsbCBjb21lcyBmcm9tIHRoZVxuICAgICAqIGFwcCdzIENTUywgd2hlcmVhcyB0aGlzIGFwcHJveGltYXRpb24gaXMgdXNlZCB0byBoZWxwIGNhbGN1bGF0ZVxuICAgICAqIGluaXRpYWwgZGltZW5zaW9ucyBiZWZvcmUgdGhlIGl0ZW0gaGFzIGJlZW4gcmVuZGVyZWQuXG4gICAgICovXG4gICAgYXBwcm94Rm9vdGVySGVpZ2h0OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogU2VjdGlvbiBoZWFkZXJzIGFuZCB0aGUgZGF0YSB1c2VkIHdpdGhpbiBpdHMgZ2l2ZW5cbiAgICAgKiB0ZW1wbGF0ZSBjYW4gYmUgZHluYW1pY2FsbHkgY3JlYXRlZCBieSBwYXNzaW5nIGEgZnVuY3Rpb24gdG8gYGhlYWRlckZuYC5cbiAgICAgKiBGb3IgZXhhbXBsZSwgYSBsYXJnZSBsaXN0IG9mIGNvbnRhY3RzIHVzdWFsbHkgaGFzIGRpdmlkZXJzIGJldHdlZW4gZWFjaFxuICAgICAqIGxldHRlciBpbiB0aGUgYWxwaGFiZXQuIEFwcCdzIGNhbiBwcm92aWRlIHRoZWlyIG93biBjdXN0b20gYGhlYWRlckZuYFxuICAgICAqIHdoaWNoIGlzIGNhbGxlZCB3aXRoIGVhY2ggcmVjb3JkIHdpdGhpbiB0aGUgZGF0YXNldC4gVGhlIGxvZ2ljIHdpdGhpblxuICAgICAqIHRoZSBoZWFkZXIgZnVuY3Rpb24gY2FuIGRlY2lkZSBpZiB0aGUgaGVhZGVyIHRlbXBsYXRlIHNob3VsZCBiZSB1c2VkLFxuICAgICAqIGFuZCB3aGF0IGRhdGEgdG8gZ2l2ZSB0byB0aGUgaGVhZGVyIHRlbXBsYXRlLiBUaGUgZnVuY3Rpb24gbXVzdCByZXR1cm5cbiAgICAgKiBgbnVsbGAgaWYgYSBoZWFkZXIgY2VsbCBzaG91bGRuJ3QgYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICBoZWFkZXJGbj86IEhlYWRlckZuO1xuICAgIC8qKlxuICAgICAqIFNlY3Rpb24gZm9vdGVycyBhbmQgdGhlIGRhdGEgdXNlZCB3aXRoaW4gaXRzIGdpdmVuXG4gICAgICogdGVtcGxhdGUgY2FuIGJlIGR5bmFtaWNhbGx5IGNyZWF0ZWQgYnkgcGFzc2luZyBhIGZ1bmN0aW9uIHRvIGBmb290ZXJGbmAuXG4gICAgICogVGhlIGxvZ2ljIHdpdGhpbiB0aGUgZm9vdGVyIGZ1bmN0aW9uIGNhbiBkZWNpZGUgaWYgdGhlIGZvb3RlciB0ZW1wbGF0ZVxuICAgICAqIHNob3VsZCBiZSB1c2VkLCBhbmQgd2hhdCBkYXRhIHRvIGdpdmUgdG8gdGhlIGZvb3RlciB0ZW1wbGF0ZS4gVGhlIGZ1bmN0aW9uXG4gICAgICogbXVzdCByZXR1cm4gYG51bGxgIGlmIGEgZm9vdGVyIGNlbGwgc2hvdWxkbid0IGJlIGNyZWF0ZWQuXG4gICAgICovXG4gICAgZm9vdGVyRm4/OiBIZWFkZXJGbjtcbiAgICAvKipcbiAgICAgKiBUaGUgZGF0YSB0aGF0IGJ1aWxkcyB0aGUgdGVtcGxhdGVzIHdpdGhpbiB0aGUgdmlydHVhbCBzY3JvbGwuXG4gICAgICogSXQncyBpbXBvcnRhbnQgdG8gbm90ZSB0aGF0IHdoZW4gdGhpcyBkYXRhIGhhcyBjaGFuZ2VkLCB0aGVuIHRoZVxuICAgICAqIGVudGlyZSB2aXJ0dWFsIHNjcm9sbCBpcyByZXNldCwgd2hpY2ggaXMgYW4gZXhwZW5zaXZlIG9wZXJhdGlvbiBhbmRcbiAgICAgKiBzaG91bGQgYmUgYXZvaWRlZCBpZiBwb3NzaWJsZS5cbiAgICAgKi9cbiAgICBpdGVtcz86IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgbWFwcyBlYWNoIGl0ZW0gd2l0aGluIHRoZWlyIGhlaWdodC5cbiAgICAgKiBXaGVuIHRoaXMgZnVuY3Rpb24gaXMgcHJvdmlkZWQsIGhlYXZ5IG9wdGltaXphdGlvbnMgYW5kIGZhc3QgcGF0aCBjYW4gYmUgdGFrZWQgYnlcbiAgICAgKiBgaW9uLXZpcnR1YWwtc2Nyb2xsYCBsZWFkaW5nIHRvIG1hc3NpdmUgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnRzLlxuICAgICAqXG4gICAgICogVGhpcyBmdW5jdGlvbiBhbGxvd3MgdG8gc2tpcCBhbGwgRE9NIHJlYWRzLCB3aGljaCBjYW4gYmUgRG9pbmcgc28gbGVhZHNcbiAgICAgKiB0byBtYXNzaXZlIHBlcmZvcm1hbmNlXG4gICAgICovXG4gICAgaXRlbUhlaWdodD86IEl0ZW1IZWlnaHRGbjtcbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBmdW5jdGlvbiB0aGF0IG1hcHMgZWFjaCBpdGVtIGhlYWRlciB3aXRoaW4gdGhlaXIgaGVpZ2h0LlxuICAgICAqL1xuICAgIGhlYWRlckhlaWdodD86IEhlYWRlckhlaWdodEZuO1xuICAgIC8qKlxuICAgICAqIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgbWFwcyBlYWNoIGl0ZW0gZm9vdGVyIHdpdGhpbiB0aGVpciBoZWlnaHQuXG4gICAgICovXG4gICAgZm9vdGVySGVpZ2h0PzogRm9vdGVySGVpZ2h0Rm47XG4gICAgLyoqXG4gICAgICogU2FtZSBhcyBgbmdGb3JUcmFja0J5YCB3aGljaCBjYW4gYmUgdXNlZCBvbiBgbmdGb3JgLlxuICAgICAqL1xuICAgIHRyYWNrQnk6IFRyYWNrQnlGdW5jdGlvbjxhbnk+O1xuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIG1hcmtzIHRoZSB0YWlsIHRoZSBpdGVtcyBhcnJheSBhcyBkaXJ0eSwgc28gdGhleSBjYW4gYmUgcmUtcmVuZGVyZWQuICBJdCdzIGVxdWl2YWxlbnQgdG8gY2FsbGluZzogIGBgYGpzICAgICogdmlydHVhbFNjcm9sbC5jaGVja1JhbmdlKGxhc3RJdGVtTGVuLCBpdGVtcy5sZW5ndGggLSBsYXN0SXRlbUxlbik7ICAgICogYGBgXG4gICAgICovXG4gICAgJ2NoZWNrRW5kJzogKCkgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBtYXJrcyBhIHN1YnNldCBvZiBpdGVtcyBhcyBkaXJ0eSwgc28gdGhleSBjYW4gYmUgcmUtcmVuZGVyZWQuIEl0ZW1zIHNob3VsZCBiZSBtYXJrZWQgYXMgZGlydHkgYW55IHRpbWUgdGhlIGNvbnRlbnQgb3IgdGhlaXIgc3R5bGUgY2hhbmdlcy4gIFRoZSBzdWJzZXQgb2YgaXRlbXMgdG8gYmUgdXBkYXRlZCBjYW4gYXJlIHNwZWNpZmluZyBieSBhbiBvZmZzZXQgYW5kIGEgbGVuZ3RoLlxuICAgICAqL1xuICAgICdjaGVja1JhbmdlJzogKG9mZnNldDogbnVtYmVyLCBsZW4/OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIHZpcnR1YWwgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICovXG4gICAgJ3Bvc2l0aW9uRm9ySXRlbSc6IChpbmRleDogbnVtYmVyKSA9PiBQcm9taXNlPG51bWJlcj47XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJb25WaXJ0dWFsU2Nyb2xsIHtcbiAgICBwcml2YXRlIHo7XG4gICAgcHJpdmF0ZSBpdGVyYWJsZURpZmZlcnM7XG4gICAgcHJpdmF0ZSBkaWZmZXI/O1xuICAgIHByaXZhdGUgZWw7XG4gICAgcHJpdmF0ZSByZWZNYXA7XG4gICAgaXRtVG1wOiBWaXJ0dWFsSXRlbTtcbiAgICBoZHJUbXA6IFZpcnR1YWxIZWFkZXI7XG4gICAgZnRyVG1wOiBWaXJ0dWFsRm9vdGVyO1xuICAgIGNvbnN0cnVjdG9yKHo6IE5nWm9uZSwgaXRlcmFibGVEaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpO1xuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkO1xuICAgIG5nRG9DaGVjaygpOiB2b2lkO1xuICAgIHByaXZhdGUgbm9kZVJlbmRlcjtcbiAgICBwcml2YXRlIGdldENvbXBvbmVudDtcbn1cbiJdfQ==