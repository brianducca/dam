import { __awaiter, __generator } from "tslib";
var startHardwareBackButton = function () {
    var doc = document;
    var busy = false;
    doc.addEventListener('backbutton', function () {
        if (busy) {
            return;
        }
        var index = 0;
        var handlers = [];
        var ev = new CustomEvent('ionBackButton', {
            bubbles: false,
            detail: {
                register: function (priority, handler) {
                    handlers.push({ priority: priority, handler: handler, id: index++ });
                }
            }
        });
        doc.dispatchEvent(ev);
        var executeAction = function (handlerRegister) { return __awaiter(void 0, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!(handlerRegister && handlerRegister.handler)) return [3 /*break*/, 2];
                        result = handlerRegister.handler(processHandlers);
                        if (!(result != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, result];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        var processHandlers = function () {
            if (handlers.length > 0) {
                var selectedHandler_1 = {
                    priority: Number.MIN_SAFE_INTEGER,
                    handler: function () { return undefined; },
                    id: -1
                };
                handlers.forEach(function (handler) {
                    if (handler.priority >= selectedHandler_1.priority) {
                        selectedHandler_1 = handler;
                    }
                });
                busy = true;
                handlers = handlers.filter(function (handler) { return handler.id !== selectedHandler_1.id; });
                executeAction(selectedHandler_1).then(function () { return busy = false; });
            }
        };
        processHandlers();
    });
};
var OVERLAY_BACK_BUTTON_PRIORITY = 100;
var MENU_BACK_BUTTON_PRIORITY = 99; // 1 less than overlay priority since menu is displayed behind overlays
export { MENU_BACK_BUTTON_PRIORITY, OVERLAY_BACK_BUTTON_PRIORITY, startHardwareBackButton };
