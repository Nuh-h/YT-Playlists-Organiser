/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/api-helper/updatePlaylistsDB.js":
/*!************************************************!*\
  !*** ./server/api-helper/updatePlaylistsDB.js ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst fetch = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n\nconst util = __webpack_require__(/*! util */ \"util\");\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nif (true) {\n  const dotenvRes = __webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n  if (dotenvRes.error) {\n    throw dotenvRes.error;\n  }\n}\n\nconst uri = process.env.MONGODB_URI; // || 'mongodb://localhost:27017/yt-playlists-organiser'\n\nconst playlistModel = __webpack_require__(/*! ../models/playlist.model */ \"./server/models/playlist.model.js\");\n\nfunction createConn() {\n  mongoose.connect(uri, {\n    useNewUrlParser: true,\n    useCreateIndex: true,\n    useUnifiedTopology: true\n  });\n  const db = mongoose.connection;\n  db.on('error', console.error.bind(console, 'connection error:'));\n  db.once('open', () => {\n    console.log('Connected to DB, ready to update...');\n  });\n  return db;\n} //SAMPLE PLAYLIST: 'SAFRAUL WAHY' playlistID = PLo4PWr1VvhkkJZtK1kMWjV5sPee68fRF2\n//SAMPLE VIDEO for creating PLAYLIST anew. ID = INSlXPlG7Cg \n\n\nconst fetchPlaylist = async playlistID => {\n  let playlistVideos;\n  let playlistMetadata;\n  await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?' + 'part=snippet%2CcontentDetails&maxResults=50' + '&playlistId=' + playlistID + '&fields=nextPageToken' + '%2Citems(snippet(publishedAt%2Ctitle%2Cdescription%2Cthumbnails))' + '%2CcontentDetails)' + '&key=' + process.env.MY_KEY, {\n    method: 'GET'\n  }).then(res => res.json()).then(data => playlistVideos = data).catch(err => console.log(\"fetchPlaylistError: \" + util.inspect(err, false, null, true)));\n  await fetch('https://www.googleapis.com/' + 'youtube/v3/playlists?' + 'part=snippet,contentDetails' + '&maxResults=5&id=' + playlistID + '&fields=items(snippet(publishedAt,channelId,title,description,channelTitle,thumbnails))' + '&key=' + process.env.MY_KEY, {\n    method: 'GET'\n  }).then(res => res.json()).then(data => playlistMetadata = data).catch(err => console.log(\"playlistMetadataError: \" + util.inspect(err, false, null, true)));\n  const newPlaylist = {\n    snippet: playlistMetadata.items[0].snippet,\n    channelTitle: playlistMetadata.items[0].snippet.channelTitle,\n    items: playlistVideos.items\n  };\n  return newPlaylist;\n};\n\nconst createNewPlaylist = async (videoID, title) => {\n  let videoRes; //AFTER SORTING THIS, play with the IFRAME API\n\n  await fetch('https://www.googleapis.com/youtube/v3/videos?' + '&id=' + videoID + '&part=snippet,contentDetails' + '&fields=items(id,snippet(publishedAt,title,channelId,description,thumbnails),contentDetails)' + '&key=' + process.env.MY_KEY, {\n    method: 'GET'\n  }).then(res => res.json()).then(data => videoRes = data).catch(err => console.log(\"createNewPlaylistError: \" + util.inspect(err, false, null, true)));\n  const date = new Date();\n  const createdPlaylist = {\n    snippet: {\n      publishedAt: '' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),\n      channelId: videoRes.items[0].id,\n      title: title,\n      description: '',\n      thumbnails: {\n        medium: {\n          url: videoRes.items[0].snippet.thumbnails.medium.url || videoRes.items[0].snippet.thumbnails.default.url || videoRes.items[0].snippet.thumbnails.standard.url || videoRes.items[0].snippet.thumbnails.high.url || videoRes.items[0].snippet.thumbnails.maxres.url\n        }\n      }\n    },\n    channelTitle: 'You (current user)',\n    items: [{\n      snippet: {\n        publishedAt: videoRes.items[0].snippet.publishedAt,\n        title: videoRes.items[0].snippet.title,\n        description: videoRes.items[0].snippet.description,\n        thumbnails: {\n          default: {\n            url: videoRes.items[0].snippet.thumbnails.medium.url || videoRes.items[0].snippet.thumbnails.default.url || videoRes.items[0].snippet.thumbnails.standard.url || videoRes.items[0].snippet.thumbnails.high.url || videoRes.items[0].snippet.thumbnails.maxres.url\n          }\n        }\n      },\n      contentDetails: {\n        videoId: videoRes.items[0].id,\n        videoPublishedAt: videoRes.items[0].snippet.publishedAt\n      }\n    }]\n  };\n  return createdPlaylist;\n};\n\nasync function updatePlaylistDB(playlistID, title) {\n  var db = await createConn();\n\n  try {\n    const newPlaylist = title ? await createNewPlaylist(playlistID, title) : await fetchPlaylist(playlistID);\n    let playlist = await new playlistModel(newPlaylist);\n    await playlist.save();\n    db.close();\n  } catch (err) {\n    console.log(err);\n    db.close();\n    return false;\n  }\n\n  return true;\n}\n\nconst _default = updatePlaylistDB;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default); //console.log(JSON.stringify(res,null, 4));\n//console.log(util.inspect(res,false,null,true));\n//necessary details to extract:\n//Playlists{ \n//Playlist{ \n//thumbnail\n//title\n//videoId\n//videoOwnerChannelTitle\n//videoOwnerChannelId\n//date uploaded\n//duration --later\n//}\n//}\n//yt v3 returned object\n// {\n//   kind, etag, nextpagetoken,\n//   items:[\n//       {\n//           kind, etag, id,\n//           snippet:{\n//               publishedAt, channelId, title, description,\n//               thumbnails:{\n//                   default,medium,high,standard,maxres:{\n//                       url, width, height\n//                   }\n//               },\n//               channelTitle, playlistId, position, \n//               resourceId:{kind, videoId},\n//               videoOwnerChannelTitle, videoOwnerChannelId\n//           },\n//           contentDetails:{ videoId, videoPublishedAt}\n//       },\n//       {\n//       }\n//   ]\n// }\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(uri, \"uri\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api-helper\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(createConn, \"createConn\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api-helper\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(fetchPlaylist, \"fetchPlaylist\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api-helper\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(createNewPlaylist, \"createNewPlaylist\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api-helper\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(updatePlaylistDB, \"updatePlaylistDB\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api-helper\\\\updatePlaylistsDB.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\api-helper\\\\updatePlaylistsDB.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://yt-playlists-organiser/./server/api-helper/updatePlaylistsDB.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst compile = app => {\n  if (true) {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default()));\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler, {\n      publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath)\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://yt-playlists-organiser/./server/devBundle.js?");

/***/ }),

/***/ "./server/models/playlist.model.js":
/*!*****************************************!*\
  !*** ./server/models/playlist.model.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\"); //necessary details to extract:\n//thumbnail\n//title\n//videoId\n//videoOwnerChannelTitle\n//videoOwnerChannelId\n//date uploaded\n//duration --later\n\n\nconst PlaylistSchema = new mongoose.Schema({\n  channelTitle: String,\n  snippet: {\n    publishedAt: Date,\n    channelId: String,\n    title: String,\n    description: String,\n    thumbnails: {\n      medium: {\n        url: String,\n        width: Number,\n        height: Number\n      }\n    },\n    channelTitle: String\n  },\n  items: [{\n    snippet: {\n      publishedAt: Date,\n      title: String,\n      description: String,\n      thumbnails: {\n        default: {\n          url: String\n        }\n      }\n    },\n    contentDetails: {\n      videoId: String,\n      videoPublishedAt: Date\n    }\n  }]\n});\nmodule.exports = mongoose.model('Playlist', PlaylistSchema);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PlaylistSchema, \"PlaylistSchema\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\models\\\\playlist.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://yt-playlists-organiser/./server/models/playlist.model.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var _api_helper_updatePlaylistsDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api-helper/updatePlaylistsDB */ \"./server/api-helper/updatePlaylistsDB.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nconst express = __webpack_require__(/*! express */ \"express\");\n\nconst path = __webpack_require__(/*! path */ \"path\"); //const config = require('./../config/config')\n\n\n\n/** dev mode only*/\n\n\n\nconst app = express(); //Express App -- to be used to build the rest of the Node server application\n\n/** dev mode only*/\n\nif (true) {\n  __webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n  _devBundle__WEBPACK_IMPORTED_MODULE_1__.default.compile(app); //use middleware and hot-reloader\n}\n\nconst CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist'))); //frontend routes\n\napp.get('/', function callback(req, res) {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_0__.default)());\n});\napp.get('/upload', function callback(req, res) {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_0__.default)());\n});\napp.get('/create', function callback(req, res) {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_0__.default)());\n});\napp.get('/playlists', function callback(req, res) {\n  res.send((0,_template__WEBPACK_IMPORTED_MODULE_0__.default)());\n});\napp.get('/playlist/:ID', function callback(req, res) {\n  res.send((0,_template__WEBPACK_IMPORTED_MODULE_0__.default)());\n}); //backend routes\n\napp.get('/api/add-playlist/:ID/:TITLE', async (req, res) => {\n  let id = req.params.ID;\n  let title = req.params.TITLE;\n  var updated = await (0,_api_helper_updatePlaylistsDB__WEBPACK_IMPORTED_MODULE_2__.default)(id, title);\n\n  if (updated) {\n    res.status(200).json({\n      ok: true\n    });\n  } else {\n    res.status(404).json({\n      ok: false\n    });\n  }\n});\napp.get('/api/add-playlist/:ID', async (req, res) => {\n  let id = req.params.ID;\n  let title = null;\n  var updated = await (0,_api_helper_updatePlaylistsDB__WEBPACK_IMPORTED_MODULE_2__.default)(id, title);\n\n  if (updated) {\n    res.status(200).json({\n      ok: true\n    });\n  } else {\n    res.status(404).json({\n      ok: false\n    });\n  }\n}); //preparation for connecting to the database\n\nconst uri = process.env.MONGODB_URI; //|| 'mongodb://localhost:27017/yt-playlists-organiser'\n\nfunction connect() {\n  mongoose.connect(uri, {\n    useNewUrlParser: true,\n    useCreateIndex: true,\n    useUnifiedTopology: true\n  });\n  const db = mongoose.connection;\n  db.on('error', console.error.bind(console, 'connection error:'));\n  db.once('open', function callback() {\n    console.log(\"Connected to DB...\");\n  });\n  return db;\n}\n\nconst closeDB = db => {\n  db.close().then(res => console.log(\"Disconnected from DB\")).catch(err => console.log(err));\n};\n\nconst playlist = __webpack_require__(/*! ./models/playlist.model */ \"./server/models/playlist.model.js\");\n\napp.get('/api/playlists', async function callback(req, res) {\n  //get all playlists using builtin find method of mongoose/mongoDB\n  var db = await connect();\n  await playlist.find().then(playlists => res.json(playlists)).catch(err => res.status(400).json('Error: ' + err));\n  closeDB(db);\n});\napp.get('/api/playlist/:ID', async function callback(req, res) {\n  //connect to database and grab playlist with given id\n  var db = await connect();\n  await playlist.find({\n    _id: req.params.ID\n  }).then(thePlaylist => res.json(thePlaylist)) //IDs are unique so there will only be one playlist\n  .catch(err => res.status(400).json('Error: ' + err));\n  closeDB(db);\n});\napp.get('/playlists/delete/:id', async function callback(req, res) {\n  //connect to database and grab playlist with given id\n  var db = await connect();\n  await playlist.deleteOne({\n    _id: req.params.id\n  }).then(s => res.redirect('/playlists')) //IDs are unique so there will only be one playlist\n  .catch(err => res.status(400).json('Error: ' + err));\n  closeDB(db);\n}); //START SERVER\n\nlet port = process.env.PORT || 3000;\napp.listen(port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', port);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(uri, \"uri\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(connect, \"connect\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(closeDB, \"closeDB\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n  reactHotLoader.register(port, \"port\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://yt-playlists-organiser/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = () => {\n  return `<!doctype html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <title>YT:Playlists-Organiser</title>\n            <link rel=\"stylesheet\"></link>\n        </head>\n        <body>\n            <div id=\"root\"></div>\n            <script type=\"text/javascript\" src=\"/dist/bundle.js\">  </script>\n        </body>\n    </html>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://yt-playlists-organiser/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd(); // require===import ~ find this module across the entire workspace, determine what it is, wrap it and load it, also cache it\n\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'cheap-module-source-map',\n  //devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist/'),\n    filename: \"bundle.js\",\n    publicPath: \"/dist\"\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }, {\n      test: /\\.css$/i,\n      use: ['style-loader', 'css-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\Muse\\\\vscode-source\\\\yt-playlists-organiser\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://yt-playlists-organiser/./webpack.config.client.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");;

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;