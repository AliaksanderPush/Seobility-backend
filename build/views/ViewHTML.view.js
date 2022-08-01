"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewHTML = void 0;
var ViewHTML = /** @class */ (function () {
    function ViewHTML() {
    }
    ViewHTML.renderForm = function (res) {
        res.send("\n\t\t   <div>\n\t\t      <form method=\"post\">\n\t\t\t     <label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 e-mail</label>\n\t\t\t\t <input type=\"email\" name=\"email\" />\n                 <label>\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C</label>\n\t\t\t\t <input type=\"password\" name=\"password\" />\n                 <button type=\"submit\">\u0412\u043E\u0439\u0442\u0438</button>\n\t\t\t  </form>\n\t\t    </div>\n\t\t");
    };
    return ViewHTML;
}());
exports.ViewHTML = ViewHTML;
