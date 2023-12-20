"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jwt-decode";
exports.ids = ["vendor-chunks/jwt-decode"];
exports.modules = {

/***/ "(ssr)/./node_modules/jwt-decode/build/jwt-decode.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/jwt-decode/build/jwt-decode.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidTokenError: () => (/* binding */ n),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction e(e) {\n    this.message = e;\n}\ne.prototype = new Error, e.prototype.name = \"InvalidCharacterError\";\nvar r =  false || function(r) {\n    var t = String(r).replace(/=+$/, \"\");\n    if (t.length % 4 == 1) throw new e(\"'atob' failed: The string to be decoded is not correctly encoded.\");\n    for(var n, o, a = 0, i = 0, c = \"\"; o = t.charAt(i++); ~o && (n = a % 4 ? 64 * n + o : o, a++ % 4) ? c += String.fromCharCode(255 & n >> (-2 * a & 6)) : 0)o = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\".indexOf(o);\n    return c;\n};\nfunction t(e) {\n    var t = e.replace(/-/g, \"+\").replace(/_/g, \"/\");\n    switch(t.length % 4){\n        case 0:\n            break;\n        case 2:\n            t += \"==\";\n            break;\n        case 3:\n            t += \"=\";\n            break;\n        default:\n            throw \"Illegal base64url string!\";\n    }\n    try {\n        return function(e) {\n            return decodeURIComponent(r(e).replace(/(.)/g, function(e, r) {\n                var t = r.charCodeAt(0).toString(16).toUpperCase();\n                return t.length < 2 && (t = \"0\" + t), \"%\" + t;\n            }));\n        }(t);\n    } catch (e) {\n        return r(t);\n    }\n}\nfunction n(e) {\n    this.message = e;\n}\nfunction o(e, r) {\n    if (\"string\" != typeof e) throw new n(\"Invalid token specified\");\n    var o = !0 === (r = r || {}).header ? 0 : 1;\n    try {\n        return JSON.parse(t(e.split(\".\")[o]));\n    } catch (e) {\n        throw new n(\"Invalid token specified: \" + e.message);\n    }\n}\nn.prototype = new Error, n.prototype.name = \"InvalidTokenError\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (o);\n //# sourceMappingURL=jwt-decode.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvand0LWRlY29kZS9idWlsZC9qd3QtZGVjb2RlLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLEVBQUVBLENBQUM7SUFBRSxJQUFJLENBQUNDLE9BQU8sR0FBQ0Q7QUFBQztBQUFDQSxFQUFFRSxTQUFTLEdBQUMsSUFBSUMsT0FBTUgsRUFBRUUsU0FBUyxDQUFDRSxJQUFJLEdBQUM7QUFBd0IsSUFBSUMsSUFBRSxNQUFpRUMsSUFBRSxTQUFTRCxDQUFDO0lBQUUsSUFBSUksSUFBRUMsT0FBT0wsR0FBR00sT0FBTyxDQUFDLE9BQU07SUFBSSxJQUFHRixFQUFFRyxNQUFNLEdBQUMsS0FBRyxHQUFFLE1BQU0sSUFBSVosRUFBRTtJQUFxRSxJQUFJLElBQUlhLEdBQUVDLEdBQUVDLElBQUUsR0FBRUMsSUFBRSxHQUFFQyxJQUFFLElBQUdILElBQUVMLEVBQUVTLE1BQU0sQ0FBQ0YsTUFBSyxDQUFDRixLQUFJRCxDQUFBQSxJQUFFRSxJQUFFLElBQUUsS0FBR0YsSUFBRUMsSUFBRUEsR0FBRUMsTUFBSSxLQUFHRSxLQUFHUCxPQUFPUyxZQUFZLENBQUMsTUFBSU4sS0FBSSxFQUFDLElBQUVFLElBQUUsTUFBSSxFQUFFRCxJQUFFLG9FQUFvRU0sT0FBTyxDQUFDTjtJQUFHLE9BQU9HO0FBQUM7QUFBRSxTQUFTUixFQUFFVCxDQUFDO0lBQUUsSUFBSVMsSUFBRVQsRUFBRVcsT0FBTyxDQUFDLE1BQUssS0FBS0EsT0FBTyxDQUFDLE1BQUs7SUFBSyxPQUFPRixFQUFFRyxNQUFNLEdBQUM7UUFBRyxLQUFLO1lBQUU7UUFBTSxLQUFLO1lBQUVILEtBQUc7WUFBSztRQUFNLEtBQUs7WUFBRUEsS0FBRztZQUFJO1FBQU07WUFBUSxNQUFLO0lBQTJCO0lBQUMsSUFBRztRQUFDLE9BQU8sU0FBU1QsQ0FBQztZQUFFLE9BQU9xQixtQkFBbUJoQixFQUFFTCxHQUFHVyxPQUFPLENBQUMsUUFBUSxTQUFTWCxDQUFDLEVBQUNLLENBQUM7Z0JBQUUsSUFBSUksSUFBRUosRUFBRWlCLFVBQVUsQ0FBQyxHQUFHQyxRQUFRLENBQUMsSUFBSUMsV0FBVztnQkFBRyxPQUFPZixFQUFFRyxNQUFNLEdBQUMsS0FBSUgsQ0FBQUEsSUFBRSxNQUFJQSxDQUFBQSxHQUFHLE1BQUlBO1lBQUM7UUFBSSxFQUFFQTtJQUFFLEVBQUMsT0FBTVQsR0FBRTtRQUFDLE9BQU9LLEVBQUVJO0lBQUU7QUFBQztBQUFDLFNBQVNJLEVBQUViLENBQUM7SUFBRSxJQUFJLENBQUNDLE9BQU8sR0FBQ0Q7QUFBQztBQUFDLFNBQVNjLEVBQUVkLENBQUMsRUFBQ0ssQ0FBQztJQUFFLElBQUcsWUFBVSxPQUFPTCxHQUFFLE1BQU0sSUFBSWEsRUFBRTtJQUEyQixJQUFJQyxJQUFFLENBQUMsTUFBSSxDQUFDVCxJQUFFQSxLQUFHLENBQUMsR0FBR29CLE1BQU0sR0FBQyxJQUFFO0lBQUUsSUFBRztRQUFDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ2xCLEVBQUVULEVBQUU0QixLQUFLLENBQUMsSUFBSSxDQUFDZCxFQUFFO0lBQUUsRUFBQyxPQUFNZCxHQUFFO1FBQUMsTUFBTSxJQUFJYSxFQUFFLDhCQUE0QmIsRUFBRUMsT0FBTztJQUFDO0FBQUM7QUFBQ1ksRUFBRVgsU0FBUyxHQUFDLElBQUlDLE9BQU1VLEVBQUVYLFNBQVMsQ0FBQ0UsSUFBSSxHQUFDO0FBQW9CLGlFQUFlVSxDQUFDQSxFQUFDO0FBQStCLENBQzVzQywwQ0FBMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scHBtcy8uL25vZGVfbW9kdWxlcy9qd3QtZGVjb2RlL2J1aWxkL2p3dC1kZWNvZGUuZXNtLmpzPzFkOTMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZShlKXt0aGlzLm1lc3NhZ2U9ZX1lLnByb3RvdHlwZT1uZXcgRXJyb3IsZS5wcm90b3R5cGUubmFtZT1cIkludmFsaWRDaGFyYWN0ZXJFcnJvclwiO3ZhciByPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5hdG9iJiZ3aW5kb3cuYXRvYi5iaW5kKHdpbmRvdyl8fGZ1bmN0aW9uKHIpe3ZhciB0PVN0cmluZyhyKS5yZXBsYWNlKC89KyQvLFwiXCIpO2lmKHQubGVuZ3RoJTQ9PTEpdGhyb3cgbmV3IGUoXCInYXRvYicgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLlwiKTtmb3IodmFyIG4sbyxhPTAsaT0wLGM9XCJcIjtvPXQuY2hhckF0KGkrKyk7fm8mJihuPWElND82NCpuK286byxhKyslNCk/Yys9U3RyaW5nLmZyb21DaGFyQ29kZSgyNTUmbj4+KC0yKmEmNikpOjApbz1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIuaW5kZXhPZihvKTtyZXR1cm4gY307ZnVuY3Rpb24gdChlKXt2YXIgdD1lLnJlcGxhY2UoLy0vZyxcIitcIikucmVwbGFjZSgvXy9nLFwiL1wiKTtzd2l0Y2godC5sZW5ndGglNCl7Y2FzZSAwOmJyZWFrO2Nhc2UgMjp0Kz1cIj09XCI7YnJlYWs7Y2FzZSAzOnQrPVwiPVwiO2JyZWFrO2RlZmF1bHQ6dGhyb3dcIklsbGVnYWwgYmFzZTY0dXJsIHN0cmluZyFcIn10cnl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBkZWNvZGVVUklDb21wb25lbnQocihlKS5yZXBsYWNlKC8oLikvZywoZnVuY3Rpb24oZSxyKXt2YXIgdD1yLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7cmV0dXJuIHQubGVuZ3RoPDImJih0PVwiMFwiK3QpLFwiJVwiK3R9KSkpfSh0KX1jYXRjaChlKXtyZXR1cm4gcih0KX19ZnVuY3Rpb24gbihlKXt0aGlzLm1lc3NhZ2U9ZX1mdW5jdGlvbiBvKGUscil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpdGhyb3cgbmV3IG4oXCJJbnZhbGlkIHRva2VuIHNwZWNpZmllZFwiKTt2YXIgbz0hMD09PShyPXJ8fHt9KS5oZWFkZXI/MDoxO3RyeXtyZXR1cm4gSlNPTi5wYXJzZSh0KGUuc3BsaXQoXCIuXCIpW29dKSl9Y2F0Y2goZSl7dGhyb3cgbmV3IG4oXCJJbnZhbGlkIHRva2VuIHNwZWNpZmllZDogXCIrZS5tZXNzYWdlKX19bi5wcm90b3R5cGU9bmV3IEVycm9yLG4ucHJvdG90eXBlLm5hbWU9XCJJbnZhbGlkVG9rZW5FcnJvclwiO2V4cG9ydCBkZWZhdWx0IG87ZXhwb3J0e24gYXMgSW52YWxpZFRva2VuRXJyb3J9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9and0LWRlY29kZS5lc20uanMubWFwXG4iXSwibmFtZXMiOlsiZSIsIm1lc3NhZ2UiLCJwcm90b3R5cGUiLCJFcnJvciIsIm5hbWUiLCJyIiwid2luZG93IiwiYXRvYiIsImJpbmQiLCJ0IiwiU3RyaW5nIiwicmVwbGFjZSIsImxlbmd0aCIsIm4iLCJvIiwiYSIsImkiLCJjIiwiY2hhckF0IiwiZnJvbUNoYXJDb2RlIiwiaW5kZXhPZiIsImRlY29kZVVSSUNvbXBvbmVudCIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwiaGVhZGVyIiwiSlNPTiIsInBhcnNlIiwic3BsaXQiLCJJbnZhbGlkVG9rZW5FcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jwt-decode/build/jwt-decode.esm.js\n");

/***/ })

};
;