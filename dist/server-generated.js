module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/yt-playlists-organiser'\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/api/updatePlaylistsDB.js":
/*!*****************************************!*\
  !*** ./server/api/updatePlaylistsDB.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  json\n} = __webpack_require__(/*! express */ \"express\");\n\nconst fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nconst util = __webpack_require__(/*! util */ \"util\");\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser';\nmongoose.connect(uri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nconst dbConnection = mongoose.connection;\ndbConnection.on('error', console.error.bind(console, 'connection error:'));\ndbConnection.once('open', () => {\n  console.log(\"Connected to DB, ready to update...\");\n});\n\nconst playlistModel = __webpack_require__(/*! ./../models/playlist.model */ \"./server/models/playlist.model.js\");\n\nconst dotenvres = __webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nif (dotenvres.error) {\n  throw dotenvres.error;\n} //SAFRAUL WAHY PLAYLIST ID: PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2\n\n\nconst fetchPlaylist = async playlistID => {\n  //let playlistID = 'PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2'\n  let playlistValues;\n  let playlistData;\n  await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?' + 'part=snippet%2CcontentDetails&maxResults=50' + '&playlistId=' + playlistID + '&fields=nextPageToken' + '%2Citems(snippet(publishedAt%2Ctitle%2Cdescription%2Cthumbnails(default(url)))' + '%2CcontentDetails)' + '&key=' + process.env.MY_KEY, {\n    method: 'GET'\n  }).then(res => res.json()).then(data => playlistValues = data);\n  await fetch('https://www.googleapis.com/' + 'youtube/v3/playlists?' + 'part=snippet%2CcontentDetails' + '&maxResults=5&id=' + playlistID + '&fields=items(snippet(publishedAt,channelId,title,description, channelTitle, thumbnails(medium)))' + '&key=' + process.env.MY_KEY, {\n    method: 'GET'\n  }).then(res => res.json()).then(data => playlistData = data);\n  const newPlaylist = {\n    snippet: playlistData.items[0].snippet,\n    channelTitle: playlistData.items[0].snippet.channelTitle,\n    items: playlistValues.items\n  };\n  return newPlaylist;\n};\n\nasync function updatePlaylistDB(playlistID) {\n  try {\n    const newPl = await fetchPlaylist(playlistID);\n    let playlist = await new playlistModel(newPl);\n    await playlist.save();\n  } catch (err) {\n    console.log(err);\n    return false;\n  } //console.log(JSON.stringify(res,null, 4));\n  //console.log(util.inspect(res,false,null,true));\n  //necessary details to extract:\n  //Playlists{ \n  //Playlist{ \n  //thumbnail\n  //title\n  //videoId\n  //videoOwnerChannelTitle\n  //videoOwnerChannelId\n  //date uploaded\n  //duration --later\n  //}\n  //}\n  //yt v3 returned object\n  // {\n  //   kind, etag, nextpagetoken,\n  //   items:[\n  //       {\n  //           kind, etag, id,\n  //           snippet:{\n  //               publishedAt, channelId, title, description,\n  //               thumbnails:{\n  //                   default,medium,high,standard,maxres:{\n  //                       url, width, height\n  //                   }\n  //               },\n  //               channelTitle, playlistId, position, \n  //               resourceId:{kind, videoId},\n  //               videoOwnerChannelTitle, videoOwnerChannelId\n  //           },\n  //           contentDetails:{ videoId, videoPublishedAt}\n  //       },\n  //       {\n  //       }\n  //   ]\n  // }\n\n\n  return true;\n}\n\nconst _default = updatePlaylistDB;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(uri, \"uri\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(dbConnection, \"dbConnection\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(dotenvres, \"dotenvres\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(fetchPlaylist, \"fetchPlaylist\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(updatePlaylistDB, \"updatePlaylistDB\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api\\\\updatePlaylistsDB.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/api/updatePlaylistsDB.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst compile = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/models/playlist.model.js":
/*!*****************************************!*\
  !*** ./server/models/playlist.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  Int32\n} = __webpack_require__(/*! bson */ \"bson\");\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"); //necessary details to extract:\n//thumbnail\n//title\n//videoId\n//videoOwnerChannelTitle\n//videoOwnerChannelId\n//date uploaded\n//duration --later\n\n\nconst PlaylistSchema = new mongoose.Schema({\n  channelTitle: String,\n  snippet: {\n    publishedAt: Date,\n    channelId: String,\n    title: String,\n    description: String,\n    thumbnails: {\n      medium: {\n        url: String,\n        width: Number,\n        height: Number\n      }\n    },\n    channelTitle: String\n  },\n  items: [{\n    snippet: {\n      publishedAt: Date,\n      title: String,\n      description: String,\n      thumbnails: {\n        default: {\n          url: String\n        }\n      }\n    },\n    contentDetails: {\n      videoId: String,\n      videoPublishedAt: Date\n    }\n  }]\n});\nmodule.exports = mongoose.model('Playlist', PlaylistSchema);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PlaylistSchema, \"PlaylistSchema\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\models\\\\playlist.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/playlist.model.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _api_updatePlaylistsDB__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api/updatePlaylistsDB */ \"./server/api/updatePlaylistsDB.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n/** dev mode only*/\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()(); //Express App -- to be used to build the rest of the Node server application\n\n/** dev mode only*/\n\n_devBundle__WEBPACK_IMPORTED_MODULE_5__[\"default\"].compile(app); //use middleware and hot-reloader\n\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('/', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  console.log(\"connected to route /\");\n});\napp.get('/upload', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n}); //app.use(bodyParser.urlencoded({ extended: false }));\n//app.use(bodyParser.json());\n\napp.get('/api/add-playlist/:url', async (req, res) => {\n  let url = req.params.url;\n  var success = await Object(_api_updatePlaylistsDB__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(url);\n\n  if (success) {\n    res.status(200).json({\n      ok: true\n    });\n  } else {\n    res.status(404).json({\n      ok: false\n    });\n  }\n});\nconst uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/yt-playlists-organiser';\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(uri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nconst dbConnection = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection;\ndbConnection.on('error', console.error.bind(console, 'connection error:'));\ndbConnection.once('open', () => {\n  console.log(\"Connected to DB!\");\n});\n\nconst playlist = __webpack_require__(/*! ./models/playlist.model */ \"./server/models/playlist.model.js\");\n\napp.get('/api/playlists', async (req, res) => {\n  await playlist.find().then(playlists => res.json(playlists)).catch(err => res.status(400).json('Error: ' + err)); //const pls = await getPlaylists();\n  //console.log(pls)\n  //connect to database and fetch all playlists\n  //send back all playlists\n  //res.send(pls)\n});\napp.get('/playlist/:ID', (req, res) => {\n  res.send(Object(_template__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\napp.get('/api/playlist/:ID', async (req, res) => {\n  //connect to database and grab playlist with given id\n  //return it\n  playlist.find({\n    _id: req.params.ID\n  }).then(playlists => res.json(playlists)).catch(err => res.status(400).json('Error: ' + err));\n});\napp.get('/playlists', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\nlet port = process.env.PORT || 3000;\napp.listen(port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', port);\n}); // //-------------------Connect to MongoDB\n// mongoose.Promise = global.Promise\n// mongoose.connect(config.mongoUri, {\n//     useNewUrlParser: true,\n//     useCreateIndex: true,\n//     useUnifiedTopology: true\n// })\n// mongoose.connection.on('error', () => {\n//     throw new Error(`unable to connect to database: ${mongoUri}`)\n// })\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(uri, \"uri\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(dbConnection, \"dbConnection\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(port, \"port\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `<!doctype html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <title>YT:Playlists-Organiser</title>\n        </head>\n        <body>\n            <div id=\"root\"></div>\n            <script type=\"text/javascript\" src=\"/dist/bundle.js\">  </script>\n        </body>\n    </html>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd(); // require===import ~ find this module across the entire workspace, determine what it is, wrap it and load it, also cache it\n\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'cheap-module-source-map',\n  //devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist/'),\n    filename: \"bundle.js\",\n    publicPath: \"/dist\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Muse\\vscode-source\\yt-playlists-organiser\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "bson":
/*!***********************!*\
  !*** external "bson" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bson\");\n\n//# sourceURL=webpack:///external_%22bson%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");\n\n//# sourceURL=webpack:///external_%22node-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });