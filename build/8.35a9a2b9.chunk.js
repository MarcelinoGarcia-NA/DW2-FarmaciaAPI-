(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 2513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireWildcard=__webpack_require__(5);var _interopRequireDefault=__webpack_require__(0);Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _extends2=_interopRequireDefault(__webpack_require__(6));var _react=_interopRequireWildcard(__webpack_require__(1));var _reactRouterDom=__webpack_require__(24);var _strapiHelperPlugin=__webpack_require__(7);var _permissions=_interopRequireDefault(__webpack_require__(282));var EditView=/*#__PURE__*/(0,_react.lazy)(function(){return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.t.bind(null, 2603, 7));});var EditSettingsView=/*#__PURE__*/(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 0).then(__webpack_require__.t.bind(null, 2512, 7));});var ListView=/*#__PURE__*/(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 6).then(__webpack_require__.t.bind(null, 3265, 7));});var ListSettingsView=/*#__PURE__*/(0,_react.lazy)(function(){return __webpack_require__.e(/* import() */ 7).then(__webpack_require__.t.bind(null, 3299, 7));});var CollectionTypeRecursivePath=function CollectionTypeRecursivePath(props){var _useRouteMatch=(0,_reactRouterDom.useRouteMatch)(),url=_useRouteMatch.url;var _useParams=(0,_reactRouterDom.useParams)(),slug=_useParams.slug;var renderRoute=function renderRoute(routeProps,Component){return/*#__PURE__*/_react["default"].createElement(Component,(0,_extends2["default"])({},props,routeProps,{slug:slug}));};var renderPermissionsRoute=function renderPermissionsRoute(routeProps,Component){return/*#__PURE__*/_react["default"].createElement(_strapiHelperPlugin.CheckPagePermissions,{permissions:_permissions["default"].collectionTypesConfigurations},/*#__PURE__*/_react["default"].createElement(Component,(0,_extends2["default"])({},props,routeProps,{slug:slug})));};var settingsRoutes=[{path:'ctm-configurations/list-settings',comp:ListSettingsView},{path:'ctm-configurations/edit-settings/:type',comp:EditSettingsView}].map(function(_ref){var path=_ref.path,comp=_ref.comp;return/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{key:path,path:"".concat(url,"/").concat(path),render:function render(props){return renderPermissionsRoute(props,comp);}});});var routes=[{path:':id',comp:EditView},{path:'',comp:ListView}].map(function(_ref2){var path=_ref2.path,comp=_ref2.comp;return/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route,{key:path,path:"".concat(url,"/").concat(path),render:function render(props){return renderRoute(props,comp);}});});return/*#__PURE__*/_react["default"].createElement(_react.Suspense,{fallback:/*#__PURE__*/_react["default"].createElement(_strapiHelperPlugin.LoadingIndicatorPage,null)},/*#__PURE__*/_react["default"].createElement(_reactRouterDom.Switch,null,settingsRoutes,routes));};var _default=CollectionTypeRecursivePath;exports["default"]=_default;

/***/ })

}]);