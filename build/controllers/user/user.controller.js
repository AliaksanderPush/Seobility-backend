"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var user_dto_1 = require("../../dto/user.dto");
var validate_middleware_1 = require("../../middleware/validate.middleware");
var base_controller_1 = require("../base/base.controller");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController() {
        var _this = _super.call(this) || this;
        _this.bindRouters([
            {
                path: '/register',
                methot: 'post',
                func: _this.register,
                middlewares: [new validate_middleware_1.ValidateMidleWare(user_dto_1.UserRegisterDto)],
            },
        ]);
        return _this;
    }
    UserController.prototype.register = function (req, res) {
        console.log(req.body);
        this.ok(res, 'success');
    };
    return UserController;
}(base_controller_1.BaseController));
exports.UserController = UserController;
