import * as ɵngcc0 from '@angular/core';
export declare class MenuController {
    /**
     * Programmatically open the Menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully opened
     */
    open(menuId?: string): Promise<boolean>;
    /**
     * Programmatically close the Menu. If no `menuId` is given as the first
     * argument then it'll close any menu which is open. If a `menuId`
     * is given then it'll close that exact menu.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu is fully closed
     */
    close(menuId?: string): Promise<boolean>;
    /**
     * Toggle the menu. If it's closed, it will open, and if opened, it
     * will close.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return returns a promise when the menu has been toggled
     */
    toggle(menuId?: string): Promise<boolean>;
    /**
     * Used to enable or disable a menu. For example, there could be multiple
     * left menus, but only one of them should be able to be opened at the same
     * time. If there are multiple menus on the same side, then enabling one menu
     * will also automatically disable all the others that are on the same side.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    enable(shouldEnable: boolean, menuId?: string): Promise<HTMLIonMenuElement>;
    /**
     * Used to enable or disable the ability to swipe open the menu.
     * @param shouldEnable  True if it should be swipe-able, false if not.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu, which is useful for chaining.
     */
    swipeGesture(shouldEnable: boolean, menuId?: string): Promise<HTMLIonMenuElement>;
    /**
     * @param [menuId] Optionally get the menu by its id, or side.
     * @return Returns true if the specified menu is currently open, otherwise false.
     * If the menuId is not specified, it returns true if ANY menu is currenly open.
     */
    isOpen(menuId?: string): Promise<boolean>;
    /**
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns true if the menu is currently enabled, otherwise false.
     */
    isEnabled(menuId?: string): Promise<boolean>;
    /**
     * Used to get a menu instance. If a `menuId` is not provided then it'll
     * return the first menu found. If a `menuId` is `left` or `right`, then
     * it'll return the enabled menu on that side. Otherwise, if a `menuId` is
     * provided, then it'll try to find the menu using the menu's `id`
     * property. If a menu is not found then it'll return `null`.
     * @param [menuId]  Optionally get the menu by its id, or side.
     * @return Returns the instance of the menu if found, otherwise `null`.
     */
    get(menuId?: string): Promise<HTMLIonMenuElement>;
    /**
     * @return Returns the instance of the menu already opened, otherwise `null`.
     */
    getOpen(): Promise<HTMLIonMenuElement>;
    /**
     * @return Returns an array of all menu instances.
     */
    getMenus(): Promise<HTMLIonMenuElement[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MenuController, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MenuController>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1jb250cm9sbGVyLmQudHMiLCJzb3VyY2VzIjpbIm1lbnUtY29udHJvbGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBjbGFzcyBNZW51Q29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogUHJvZ3JhbW1hdGljYWxseSBvcGVuIHRoZSBNZW51LlxuICAgICAqIEBwYXJhbSBbbWVudUlkXSAgT3B0aW9uYWxseSBnZXQgdGhlIG1lbnUgYnkgaXRzIGlkLCBvciBzaWRlLlxuICAgICAqIEByZXR1cm4gcmV0dXJucyBhIHByb21pc2Ugd2hlbiB0aGUgbWVudSBpcyBmdWxseSBvcGVuZWRcbiAgICAgKi9cbiAgICBvcGVuKG1lbnVJZD86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUHJvZ3JhbW1hdGljYWxseSBjbG9zZSB0aGUgTWVudS4gSWYgbm8gYG1lbnVJZGAgaXMgZ2l2ZW4gYXMgdGhlIGZpcnN0XG4gICAgICogYXJndW1lbnQgdGhlbiBpdCdsbCBjbG9zZSBhbnkgbWVudSB3aGljaCBpcyBvcGVuLiBJZiBhIGBtZW51SWRgXG4gICAgICogaXMgZ2l2ZW4gdGhlbiBpdCdsbCBjbG9zZSB0aGF0IGV4YWN0IG1lbnUuXG4gICAgICogQHBhcmFtIFttZW51SWRdICBPcHRpb25hbGx5IGdldCB0aGUgbWVudSBieSBpdHMgaWQsIG9yIHNpZGUuXG4gICAgICogQHJldHVybiByZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBtZW51IGlzIGZ1bGx5IGNsb3NlZFxuICAgICAqL1xuICAgIGNsb3NlKG1lbnVJZD86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogVG9nZ2xlIHRoZSBtZW51LiBJZiBpdCdzIGNsb3NlZCwgaXQgd2lsbCBvcGVuLCBhbmQgaWYgb3BlbmVkLCBpdFxuICAgICAqIHdpbGwgY2xvc2UuXG4gICAgICogQHBhcmFtIFttZW51SWRdICBPcHRpb25hbGx5IGdldCB0aGUgbWVudSBieSBpdHMgaWQsIG9yIHNpZGUuXG4gICAgICogQHJldHVybiByZXR1cm5zIGEgcHJvbWlzZSB3aGVuIHRoZSBtZW51IGhhcyBiZWVuIHRvZ2dsZWRcbiAgICAgKi9cbiAgICB0b2dnbGUobWVudUlkPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGVuYWJsZSBvciBkaXNhYmxlIGEgbWVudS4gRm9yIGV4YW1wbGUsIHRoZXJlIGNvdWxkIGJlIG11bHRpcGxlXG4gICAgICogbGVmdCBtZW51cywgYnV0IG9ubHkgb25lIG9mIHRoZW0gc2hvdWxkIGJlIGFibGUgdG8gYmUgb3BlbmVkIGF0IHRoZSBzYW1lXG4gICAgICogdGltZS4gSWYgdGhlcmUgYXJlIG11bHRpcGxlIG1lbnVzIG9uIHRoZSBzYW1lIHNpZGUsIHRoZW4gZW5hYmxpbmcgb25lIG1lbnVcbiAgICAgKiB3aWxsIGFsc28gYXV0b21hdGljYWxseSBkaXNhYmxlIGFsbCB0aGUgb3RoZXJzIHRoYXQgYXJlIG9uIHRoZSBzYW1lIHNpZGUuXG4gICAgICogQHBhcmFtIFttZW51SWRdICBPcHRpb25hbGx5IGdldCB0aGUgbWVudSBieSBpdHMgaWQsIG9yIHNpZGUuXG4gICAgICogQHJldHVybiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgbWVudSwgd2hpY2ggaXMgdXNlZnVsIGZvciBjaGFpbmluZy5cbiAgICAgKi9cbiAgICBlbmFibGUoc2hvdWxkRW5hYmxlOiBib29sZWFuLCBtZW51SWQ/OiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJb25NZW51RWxlbWVudD47XG4gICAgLyoqXG4gICAgICogVXNlZCB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYWJpbGl0eSB0byBzd2lwZSBvcGVuIHRoZSBtZW51LlxuICAgICAqIEBwYXJhbSBzaG91bGRFbmFibGUgIFRydWUgaWYgaXQgc2hvdWxkIGJlIHN3aXBlLWFibGUsIGZhbHNlIGlmIG5vdC5cbiAgICAgKiBAcGFyYW0gW21lbnVJZF0gIE9wdGlvbmFsbHkgZ2V0IHRoZSBtZW51IGJ5IGl0cyBpZCwgb3Igc2lkZS5cbiAgICAgKiBAcmV0dXJuIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBtZW51LCB3aGljaCBpcyB1c2VmdWwgZm9yIGNoYWluaW5nLlxuICAgICAqL1xuICAgIHN3aXBlR2VzdHVyZShzaG91bGRFbmFibGU6IGJvb2xlYW4sIG1lbnVJZD86IHN0cmluZyk6IFByb21pc2U8SFRNTElvbk1lbnVFbGVtZW50PjtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gW21lbnVJZF0gT3B0aW9uYWxseSBnZXQgdGhlIG1lbnUgYnkgaXRzIGlkLCBvciBzaWRlLlxuICAgICAqIEByZXR1cm4gUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbWVudSBpcyBjdXJyZW50bHkgb3Blbiwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgICAqIElmIHRoZSBtZW51SWQgaXMgbm90IHNwZWNpZmllZCwgaXQgcmV0dXJucyB0cnVlIGlmIEFOWSBtZW51IGlzIGN1cnJlbmx5IG9wZW4uXG4gICAgICovXG4gICAgaXNPcGVuKG1lbnVJZD86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogQHBhcmFtIFttZW51SWRdICBPcHRpb25hbGx5IGdldCB0aGUgbWVudSBieSBpdHMgaWQsIG9yIHNpZGUuXG4gICAgICogQHJldHVybiBSZXR1cm5zIHRydWUgaWYgdGhlIG1lbnUgaXMgY3VycmVudGx5IGVuYWJsZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKi9cbiAgICBpc0VuYWJsZWQobWVudUlkPzogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVc2VkIHRvIGdldCBhIG1lbnUgaW5zdGFuY2UuIElmIGEgYG1lbnVJZGAgaXMgbm90IHByb3ZpZGVkIHRoZW4gaXQnbGxcbiAgICAgKiByZXR1cm4gdGhlIGZpcnN0IG1lbnUgZm91bmQuIElmIGEgYG1lbnVJZGAgaXMgYGxlZnRgIG9yIGByaWdodGAsIHRoZW5cbiAgICAgKiBpdCdsbCByZXR1cm4gdGhlIGVuYWJsZWQgbWVudSBvbiB0aGF0IHNpZGUuIE90aGVyd2lzZSwgaWYgYSBgbWVudUlkYCBpc1xuICAgICAqIHByb3ZpZGVkLCB0aGVuIGl0J2xsIHRyeSB0byBmaW5kIHRoZSBtZW51IHVzaW5nIHRoZSBtZW51J3MgYGlkYFxuICAgICAqIHByb3BlcnR5LiBJZiBhIG1lbnUgaXMgbm90IGZvdW5kIHRoZW4gaXQnbGwgcmV0dXJuIGBudWxsYC5cbiAgICAgKiBAcGFyYW0gW21lbnVJZF0gIE9wdGlvbmFsbHkgZ2V0IHRoZSBtZW51IGJ5IGl0cyBpZCwgb3Igc2lkZS5cbiAgICAgKiBAcmV0dXJuIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBtZW51IGlmIGZvdW5kLCBvdGhlcndpc2UgYG51bGxgLlxuICAgICAqL1xuICAgIGdldChtZW51SWQ/OiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJb25NZW51RWxlbWVudD47XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm5zIHRoZSBpbnN0YW5jZSBvZiB0aGUgbWVudSBhbHJlYWR5IG9wZW5lZCwgb3RoZXJ3aXNlIGBudWxsYC5cbiAgICAgKi9cbiAgICBnZXRPcGVuKCk6IFByb21pc2U8SFRNTElvbk1lbnVFbGVtZW50PjtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYW4gYXJyYXkgb2YgYWxsIG1lbnUgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIGdldE1lbnVzKCk6IFByb21pc2U8SFRNTElvbk1lbnVFbGVtZW50W10+O1xufVxuIl19