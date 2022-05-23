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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nUtil.inherits(Asteroid, MovingObject);\n\nfunction Asteroid(obj) {\n    const colors = [\"blue\", \"black\", \"green\", \"brown\", \"yellow\", \"orange\", \"red\", \"purple\", \"white\"];\n    if(!obj.color) obj.color = colors[Math.floor(Math.random()*colors.length)];\n    if(!obj.radius) obj.radius = 10;\n    MovingObject.call(this, obj);\n}\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nconst DIMX = 400;\nconst DIMY = 400;\nconst NUM_ASTEROIDS = 500;\n\nfunction Game() {\n    this.asteroids = [];\n    for(let i = 0; i < NUM_ASTEROIDS; i++) {\n        this.asteroids.push(this.addAsteroids());\n    }\n    // return this.asteroids;\n}\n\nGame.prototype.addAsteroids = function() {\n    const a1 = new Asteroid({\n        pos: this.randomPosition(),\n        vel: [10, 10]\n    });\n    return a1;\n}\n\nGame.prototype.randomPosition = function() {\n    let pos = [];\n    pos.push(Math.floor(Math.random() * DIMX));\n    pos.push(Math.floor(Math.random() * DIMY));\n    return pos;\n}\n\nGame.prototype.draw = function(context) {\n    context.clearRect;\n    context.fillStyle = \"grey\";\n    context.fillRect(0, 0, 400, 400);\n    for(let i = 0; i < this.asteroids.length; i++) {\n        this.asteroids[i].draw(context);\n    }\n}\n\nGame.prototype.moveObjects = function() {\n    for(let i = 0; i < this.asteroids.length; i++) {\n        this.asteroids[i].move();\n    }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nfunction GameView (game,ctx) {\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  let gv = this;\n  setInterval(function () {\n    gv.game.moveObjects() \n    gv.game.draw(gv.ctx);\n    }, 100);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView= __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n    const canvasEl = document.getElementById(\"canvas\");\n    const ctx = canvasEl.getContext(\"2d\");\n\n    canvasEl.width = 400;\n    canvasEl.height = 400;\n\n    ctx.fillStyle = \"grey\";\n    ctx.fillRect(0, 0, 400, 400);\n\n    // a.draw(ctx);\n    // debugger;\n    const game = new Game();\n    // debugger;\n    const game_view = new GameView(game,ctx);\n    // console.log(game);\n    // game.draw(ctx);\n    // game.moveObjects();\n    game_view.start();\n    // ctx.stroke();\n})\n\n// const a = new Asteroid({\n//     pos: [100, 100], \n//     vel: [10, 10]\n// })\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(obj) {\n  this.pos = obj.pos;\n  this.vel = obj.vel;\n  this.radius = obj.radius;\n  this.color = obj.color;\n}\n\nMovingObject.prototype.draw = function(context) {\n  context.beginPath();\n  context.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n\n  context.strokeStyle = \"black\";\n  context.fillStyle = this.color;\n  context.lineWidth = 1;\n\n  context.fill();\n  context.stroke();\n}\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {}\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    }, \n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n    }\n  };\n  \n  module.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;