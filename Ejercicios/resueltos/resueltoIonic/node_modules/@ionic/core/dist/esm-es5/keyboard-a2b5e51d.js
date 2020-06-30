var KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
var KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
var KEYBOARD_THRESHOLD = 150;
var previousVisualViewport = {};
var currentVisualViewport = {};
var previousLayoutViewport = {};
var currentLayoutViewport = {};
var keyboardOpen = false;
/**
 * This is only used for tests
 */
var resetKeyboardAssist = function () {
    previousVisualViewport = {};
    currentVisualViewport = {};
    previousLayoutViewport = {};
    currentLayoutViewport = {};
    keyboardOpen = false;
};
var startKeyboardAssist = function (win) {
    startNativeListeners(win);
    if (!win.visualViewport) {
        return;
    }
    currentVisualViewport = copyVisualViewport(win.visualViewport);
    currentLayoutViewport = copyLayoutViewport(win);
    win.visualViewport.onresize = function () {
        trackViewportChanges(win);
        if (keyboardDidOpen() || keyboardDidResize(win)) {
            setKeyboardOpen(win);
        }
        else if (keyboardDidClose(win)) {
            setKeyboardClose(win);
        }
    };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
var startNativeListeners = function (win) {
    win.addEventListener('keyboardDidShow', function (ev) { return setKeyboardOpen(win, ev); });
    win.addEventListener('keyboardDidHide', function () { return setKeyboardClose(win); });
};
var setKeyboardOpen = function (win, ev) {
    fireKeyboardOpenEvent(win, ev);
    keyboardOpen = true;
};
var setKeyboardClose = function (win) {
    fireKeyboardCloseEvent(win);
    keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accomodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
var keyboardDidOpen = function () {
    var scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
    return (!keyboardOpen &&
        previousVisualViewport.width === currentVisualViewport.width &&
        scaledHeightDifference > KEYBOARD_THRESHOLD &&
        !layoutViewportDidChange());
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
var keyboardDidResize = function (win) {
    return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
var keyboardDidClose = function (win) {
    return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Determine if the layout viewport has
 * changed since the last visual viewport change.
 * It is rare that a layout viewport change is not
 * associated with a visual viewport change so we
 * want to make sure we don't get any false positives.
 */
var layoutViewportDidChange = function () {
    return (currentLayoutViewport.width !== previousLayoutViewport.width ||
        currentLayoutViewport.height !== previousLayoutViewport.height);
};
/**
 * Dispatch a keyboard open event
 */
var fireKeyboardOpenEvent = function (win, nativeEv) {
    var keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
    var ev = new CustomEvent(KEYBOARD_DID_OPEN, {
        detail: { keyboardHeight: keyboardHeight }
    });
    win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
var fireKeyboardCloseEvent = function (win) {
    var ev = new CustomEvent(KEYBOARD_DID_CLOSE);
    win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
var trackViewportChanges = function (win) {
    previousVisualViewport = Object.assign({}, currentVisualViewport);
    currentVisualViewport = copyVisualViewport(win.visualViewport);
    previousLayoutViewport = Object.assign({}, currentLayoutViewport);
    currentLayoutViewport = copyLayoutViewport(win);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
var copyVisualViewport = function (visualViewport) {
    return {
        width: Math.round(visualViewport.width),
        height: Math.round(visualViewport.height),
        offsetTop: visualViewport.offsetTop,
        offsetLeft: visualViewport.offsetLeft,
        pageTop: visualViewport.pageTop,
        pageLeft: visualViewport.pageLeft,
        scale: visualViewport.scale
    };
};
/**
 * Creates a deep copy of the layout viewport
 * at a given state
 */
var copyLayoutViewport = function (win) {
    return {
        width: win.innerWidth,
        height: win.innerHeight
    };
};
export { KEYBOARD_DID_CLOSE, KEYBOARD_DID_OPEN, copyLayoutViewport, copyVisualViewport, keyboardDidClose, keyboardDidOpen, keyboardDidResize, resetKeyboardAssist, setKeyboardClose, setKeyboardOpen, startKeyboardAssist, trackViewportChanges };
