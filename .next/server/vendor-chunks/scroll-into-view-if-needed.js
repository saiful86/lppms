"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/scroll-into-view-if-needed";
exports.ids = ["vendor-chunks/scroll-into-view-if-needed"];
exports.modules = {

/***/ "(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/scroll-into-view-if-needed/dist/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ e)\n/* harmony export */ });\n/* harmony import */ var compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! compute-scroll-into-view */ \"(ssr)/./node_modules/compute-scroll-into-view/dist/index.js\");\n\nconst o = (t)=>!1 === t ? {\n        block: \"end\",\n        inline: \"nearest\"\n    } : ((t)=>t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {\n        block: \"start\",\n        inline: \"nearest\"\n    };\nfunction e(e, r) {\n    if (!e.isConnected || !((t)=>{\n        let o = t;\n        for(; o && o.parentNode;){\n            if (o.parentNode === document) return !0;\n            o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;\n        }\n        return !1;\n    })(e)) return;\n    const n = ((t)=>{\n        const o = window.getComputedStyle(t);\n        return {\n            top: parseFloat(o.scrollMarginTop) || 0,\n            right: parseFloat(o.scrollMarginRight) || 0,\n            bottom: parseFloat(o.scrollMarginBottom) || 0,\n            left: parseFloat(o.scrollMarginLeft) || 0\n        };\n    })(e);\n    if (((t)=>\"object\" == typeof t && \"function\" == typeof t.behavior)(r)) return r.behavior((0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__.compute)(e, r));\n    const l = \"boolean\" == typeof r || null == r ? void 0 : r.behavior;\n    for (const { el: a, top: i, left: s } of (0,compute_scroll_into_view__WEBPACK_IMPORTED_MODULE_0__.compute)(e, o(r))){\n        const t = i - n.top + n.bottom, o = s - n.left + n.right;\n        a.scroll({\n            top: t,\n            left: o,\n            behavior: l\n        });\n    }\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUFBLE1BQU1FLElBQUVELENBQUFBLElBQUcsQ0FBQyxNQUFJQSxJQUFFO1FBQUNFLE9BQU07UUFBTUMsUUFBTztJQUFTLElBQUUsQ0FBQ0gsQ0FBQUEsSUFBR0EsTUFBSUksT0FBT0osTUFBSSxNQUFJSSxPQUFPQyxJQUFJLENBQUNMLEdBQUdNLE1BQU0sRUFBRU4sS0FBR0EsSUFBRTtRQUFDRSxPQUFNO1FBQVFDLFFBQU87SUFBUztBQUFFLFNBQVNJLEVBQUVBLENBQUMsRUFBQ0MsQ0FBQztJQUFFLElBQUcsQ0FBQ0QsRUFBRUUsV0FBVyxJQUFFLENBQUMsQ0FBQ1QsQ0FBQUE7UUFBSSxJQUFJQyxJQUFFRDtRQUFFLE1BQUtDLEtBQUdBLEVBQUVTLFVBQVUsRUFBRTtZQUFDLElBQUdULEVBQUVTLFVBQVUsS0FBR0MsVUFBUyxPQUFNLENBQUM7WUFBRVYsSUFBRUEsRUFBRVMsVUFBVSxZQUFZRSxhQUFXWCxFQUFFUyxVQUFVLENBQUNHLElBQUksR0FBQ1osRUFBRVMsVUFBVTtRQUFBO1FBQUMsT0FBTSxDQUFDO0lBQUMsR0FBR0gsSUFBRztJQUFPLE1BQU1PLElBQUUsQ0FBQ2QsQ0FBQUE7UUFBSSxNQUFNQyxJQUFFYyxPQUFPQyxnQkFBZ0IsQ0FBQ2hCO1FBQUcsT0FBTTtZQUFDaUIsS0FBSUMsV0FBV2pCLEVBQUVrQixlQUFlLEtBQUc7WUFBRUMsT0FBTUYsV0FBV2pCLEVBQUVvQixpQkFBaUIsS0FBRztZQUFFQyxRQUFPSixXQUFXakIsRUFBRXNCLGtCQUFrQixLQUFHO1lBQUVDLE1BQUtOLFdBQVdqQixFQUFFd0IsZ0JBQWdCLEtBQUc7UUFBQztJQUFDLEdBQUdsQjtJQUFHLElBQUcsQ0FBQ1AsQ0FBQUEsSUFBRyxZQUFVLE9BQU9BLEtBQUcsY0FBWSxPQUFPQSxFQUFFMEIsUUFBUSxFQUFFbEIsSUFBRyxPQUFPQSxFQUFFa0IsUUFBUSxDQUFDMUIsaUVBQUNBLENBQUNPLEdBQUVDO0lBQUksTUFBTW1CLElBQUUsYUFBVyxPQUFPbkIsS0FBRyxRQUFNQSxJQUFFLEtBQUssSUFBRUEsRUFBRWtCLFFBQVE7SUFBQyxLQUFJLE1BQUssRUFBQ0UsSUFBR0MsQ0FBQyxFQUFDWixLQUFJYSxDQUFDLEVBQUNOLE1BQUtPLENBQUMsRUFBQyxJQUFHL0IsaUVBQUNBLENBQUNPLEdBQUVOLEVBQUVPLElBQUk7UUFBQyxNQUFNUixJQUFFOEIsSUFBRWhCLEVBQUVHLEdBQUcsR0FBQ0gsRUFBRVEsTUFBTSxFQUFDckIsSUFBRThCLElBQUVqQixFQUFFVSxJQUFJLEdBQUNWLEVBQUVNLEtBQUs7UUFBQ1MsRUFBRUcsTUFBTSxDQUFDO1lBQUNmLEtBQUlqQjtZQUFFd0IsTUFBS3ZCO1lBQUV5QixVQUFTQztRQUFDO0lBQUU7QUFBQztBQUFzQixrQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9scHBtcy8uL25vZGVfbW9kdWxlcy9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZC9kaXN0L2luZGV4LmpzPzk2MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0e2NvbXB1dGUgYXMgdH1mcm9tXCJjb21wdXRlLXNjcm9sbC1pbnRvLXZpZXdcIjtjb25zdCBvPXQ9PiExPT09dD97YmxvY2s6XCJlbmRcIixpbmxpbmU6XCJuZWFyZXN0XCJ9Oih0PT50PT09T2JqZWN0KHQpJiYwIT09T2JqZWN0LmtleXModCkubGVuZ3RoKSh0KT90OntibG9jazpcInN0YXJ0XCIsaW5saW5lOlwibmVhcmVzdFwifTtmdW5jdGlvbiBlKGUscil7aWYoIWUuaXNDb25uZWN0ZWR8fCEodD0+e2xldCBvPXQ7Zm9yKDtvJiZvLnBhcmVudE5vZGU7KXtpZihvLnBhcmVudE5vZGU9PT1kb2N1bWVudClyZXR1cm4hMDtvPW8ucGFyZW50Tm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/by5wYXJlbnROb2RlLmhvc3Q6by5wYXJlbnROb2RlfXJldHVybiExfSkoZSkpcmV0dXJuO2NvbnN0IG49KHQ9Pntjb25zdCBvPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHQpO3JldHVybnt0b3A6cGFyc2VGbG9hdChvLnNjcm9sbE1hcmdpblRvcCl8fDAscmlnaHQ6cGFyc2VGbG9hdChvLnNjcm9sbE1hcmdpblJpZ2h0KXx8MCxib3R0b206cGFyc2VGbG9hdChvLnNjcm9sbE1hcmdpbkJvdHRvbSl8fDAsbGVmdDpwYXJzZUZsb2F0KG8uc2Nyb2xsTWFyZ2luTGVmdCl8fDB9fSkoZSk7aWYoKHQ9Plwib2JqZWN0XCI9PXR5cGVvZiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmJlaGF2aW9yKShyKSlyZXR1cm4gci5iZWhhdmlvcih0KGUscikpO2NvbnN0IGw9XCJib29sZWFuXCI9PXR5cGVvZiByfHxudWxsPT1yP3ZvaWQgMDpyLmJlaGF2aW9yO2Zvcihjb25zdHtlbDphLHRvcDppLGxlZnQ6c31vZiB0KGUsbyhyKSkpe2NvbnN0IHQ9aS1uLnRvcCtuLmJvdHRvbSxvPXMtbi5sZWZ0K24ucmlnaHQ7YS5zY3JvbGwoe3RvcDp0LGxlZnQ6byxiZWhhdmlvcjpsfSl9fWV4cG9ydHtlIGFzIGRlZmF1bHR9Oy8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbImNvbXB1dGUiLCJ0IiwibyIsImJsb2NrIiwiaW5saW5lIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImUiLCJyIiwiaXNDb25uZWN0ZWQiLCJwYXJlbnROb2RlIiwiZG9jdW1lbnQiLCJTaGFkb3dSb290IiwiaG9zdCIsIm4iLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwidG9wIiwicGFyc2VGbG9hdCIsInNjcm9sbE1hcmdpblRvcCIsInJpZ2h0Iiwic2Nyb2xsTWFyZ2luUmlnaHQiLCJib3R0b20iLCJzY3JvbGxNYXJnaW5Cb3R0b20iLCJsZWZ0Iiwic2Nyb2xsTWFyZ2luTGVmdCIsImJlaGF2aW9yIiwibCIsImVsIiwiYSIsImkiLCJzIiwic2Nyb2xsIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/scroll-into-view-if-needed/dist/index.js\n");

/***/ })

};
;