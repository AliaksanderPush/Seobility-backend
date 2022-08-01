"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var express_1 = require("express");
var BaseController = /** @class */ (function () {
    function BaseController() {
        this._router = (0, express_1.Router)();
    }
    Object.defineProperty(BaseController.prototype, "router", {
        get: function () {
            return this._router;
        },
        enumerable: false,
        configurable: true
    });
    BaseController.prototype.send = function (res, code, message) {
        res.status(code);
        return res.type('application/json').json(message);
    };
    BaseController.prototype.ok = function (res, message) {
        return this.send(res, 200, message);
    };
    BaseController.prototype.bindRouters = function (routers) {
        var _a;
        for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
            var router = routers_1[_i];
            var middleware = (_a = router.middlewares) === null || _a === void 0 ? void 0 : _a.map(function (m) { return m.execute.bind(m); });
            var handler = router.func.bind(this);
            var pipeLine = middleware ? __spreadArray(__spreadArray([], middleware, true), [handler], false) : handler;
            this.router[router.methot](router.path, pipeLine);
        }
    };
    return BaseController;
}());
exports.BaseController = BaseController;
