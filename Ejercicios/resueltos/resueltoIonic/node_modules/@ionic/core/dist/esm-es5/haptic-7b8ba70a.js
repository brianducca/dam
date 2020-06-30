var HapticEngine = {
    getEngine: function () {
        var win = window;
        return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
    },
    available: function () {
        return !!this.getEngine();
    },
    isCordova: function () {
        return !!window.TapticEngine;
    },
    isCapacitor: function () {
        var win = window;
        return !!win.Capacitor;
    },
    impact: function (options) {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({ style: style });
    },
    notification: function (options) {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({ style: style });
    },
    selection: function () {
        this.impact({ style: 'light' });
    },
    selectionStart: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionStart();
        }
        else {
            engine.gestureSelectionStart();
        }
    },
    selectionChanged: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionChanged();
        }
        else {
            engine.gestureSelectionChanged();
        }
    },
    selectionEnd: function () {
        var engine = this.getEngine();
        if (!engine) {
            return;
        }
        if (this.isCapacitor()) {
            engine.selectionEnd();
        }
        else {
            engine.gestureSelectionEnd();
        }
    }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
var hapticImpact = function (options) {
    HapticEngine.impact(options);
};
export { hapticSelectionStart as a, hapticSelectionChanged as b, hapticSelection as c, hapticImpact as d, hapticSelectionEnd as h };
