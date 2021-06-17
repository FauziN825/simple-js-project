/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var App;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/employee/employee.js":
/*!**********************************!*\
  !*** ./src/employee/employee.js ***!
  \**********************************/
/***/ ((module) => {

eval("module.exports.Employee = class Employee {\r\n    name;\r\n    email;\r\n    password;\r\n  \r\n    constructor(name, email, password) {\r\n      this.name = name;\r\n      this.email = email;\r\n      this.password = password;\r\n    }\r\n  \r\n    details() {\r\n      return { name: this.name, email: this.email, password: this.password };\r\n    }\r\n  \r\n    getUsers() {\r\n      return fetch(`https://jsonplaceholder.typicode.com/users`)\r\n        .then(result => {\r\n          return result.json();\r\n        })\r\n        .catch(err => {\r\n          throw(err);\r\n        });\r\n    }\r\n  \r\n    getUserPosts(userId) {\r\n      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)\r\n        .then(result => {\r\n          return result.json();\r\n        })\r\n        .catch(err => {\r\n          throw(err);\r\n        });\r\n    }\r\n  \r\n    getPostComments(postId) {\r\n      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)\r\n        .then(result => {\r\n          return result.json();\r\n        })\r\n        .catch(err => {\r\n          throw(err);\r\n        });\r\n    }\r\n  };\r\n  \n\n//# sourceURL=webpack://App/./src/employee/employee.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Employee } = __webpack_require__(/*! ./employee/employee */ \"./src/employee/employee.js\");\r\nconst { Message } = __webpack_require__(/*! ./message */ \"./src/message.js\");\r\n\r\nmodule.exports = {\r\n  run: (elementId) => {\r\n    let employeeName = document.getElementById(elementId);\r\n    const employee = new Employee('AH', 'AH@email.com', 'password');\r\n    employeeName.innerHTML = `Name ${employee.name} and Email ${employee.email}.`;\r\n    // employee.getEmployeeTodo(1)\r\n    //   .then(result => {\r\n    //     if (result) {\r\n    //       employeeName.innerHTML = `Name ${result.userId} and Email ${result.id}.`;\r\n    //     }\r\n    //   })\r\n    //   .catch(err => {\r\n    //     console.log(err);\r\n    //   });\r\n    // status.innerHTML = 'End';\r\n  },\r\n  displayPosts: () => {\r\n      \r\n    GetUser = (users) => {\r\n        buttonTag = document.createElement(\"button\")\r\n        buttonValue = document.createTextNode(\"View Post\")\r\n        buttonTag.appendChild(buttonValue)\r\n        buttonTag.classList.add(\"button-view\",\"button-view:hover\",\"button-main\");\r\n\r\n\r\n        ListUser = document.createElement(\"li\");\r\n\r\n        buttonTag.addEventListener(\"click\", () => {\r\n        document.getElementById(\"spacePost\").innerHTML = '';\r\n        document.getElementById(\"spaceComment\").innerHTML = '';\r\n\r\n        employee.getUserPosts(users['id'])\r\n        .then(result => {\r\n          result.forEach(GetPost);\r\n        });\r\n      });\r\n        spaceUserList = document.getElementById(\"spaceUser\")\r\n\r\n        nameTag = document.createElement(\"p\")\r\n        nameNode = document.createTextNode(\"Name : \" + users['name'])\r\n        nameTag.appendChild(nameNode)\r\n\r\n        usernameTag = document.createElement(\"p\")\r\n        usernameNode = document.createTextNode(\"Username : \" + users['username'])\r\n        usernameTag.appendChild(usernameNode)\r\n\r\n        emailTag = document.createElement(\"p\")\r\n        emailNode = document.createTextNode(\"Email : \" + users['email'])\r\n        emailTag.appendChild(emailNode)\r\n\r\n        ListUser.appendChild(nameTag)\r\n        ListUser.appendChild(usernameTag)\r\n        ListUser.appendChild(emailTag)\r\n        ListUser.appendChild(buttonTag)\r\n        ListUser.classList.add(\"list-group-item\");\r\n        spaceUserList.appendChild(ListUser);\r\n    }\r\n\r\n    GetPost = (posts) => {\r\n        buttonTagP = document.createElement(\"button\")\r\n        buttonValueP = document.createTextNode(\"View Comment\")\r\n        buttonTagP.appendChild(buttonValueP)\r\n        buttonTagP.classList.add(\"button-view\",\"button-view:hover\",\"button-main\");\r\n\r\n        var ListPost = document.createElement(\"li\");\r\n        ListPost.classList.add(\"list-group-item\");\r\n        buttonTagP.addEventListener(\"click\", () => {\r\n            document.getElementById(\"spaceComment\").innerHTML = '';\r\n            employee.getPostComments(posts['id'])\r\n            .then(result => {\r\n            result.forEach(GetComments);\r\n            });\r\n        });\r\n        spacePostList = document.getElementById(\"spacePost\")\r\n\r\n        titleTag = document.createElement(\"h6\")\r\n        titleValue = document.createTextNode(posts['title'])\r\n        titleTag.appendChild(titleValue)\r\n\r\n        bodyTag = document.createElement(\"p\")\r\n        bodyValue = document.createTextNode(posts['body'])\r\n        bodyTag.appendChild(bodyValue)\r\n\r\n        ListPost.appendChild(titleTag)\r\n        ListPost.appendChild(bodyTag)\r\n        ListPost.appendChild(buttonTagP)\r\n        spacePostList.appendChild(ListPost);\r\n    }\r\n\r\n    GetComments = (comments) => {\r\n      var commentList = document.createElement(\"li\");\r\n      commentList.classList.add(\"list-group-item\");\r\n\r\n      bodyTagCo = document.createElement(\"p\")\r\n      bodyValueCo = document.createTextNode(comments['body'])\r\n      bodyTagCo.appendChild(bodyValueCo)\r\n\r\n      commentList.appendChild(bodyTagCo)\r\n    //   console.log(commentList)\r\n      \r\n      spaceComentList = document.getElementById(\"spaceComment\")\r\n      \r\n    //   commentList.innerHTML = `<div class=\"card-body\"><h5 class=\"card-title\">`+comments['name']+`</h5><h6 class=\"card-subtitle mb-2 text-muted\">`+ comments['email'] +`</h6><p class=\"card-text\">`+comments['body']+`</p></div>`;\r\n      spaceComentList.appendChild(commentList);\r\n    }\r\n    const employee = new Employee();\r\n    // employee.getUserPosts(1)\r\n    employee.getUsers()\r\n      .then(result => {\r\n        result.forEach(GetUser);\r\n      });\r\n\r\n      // employee.getUserPosts(1)\r\n      // .then(result => {\r\n      //   result.forEach(fetchPosts);\r\n        \r\n      //   // console.log(result)\r\n      // });\r\n\r\n      // employee.getPostComments(1)\r\n      // .then(result => {\r\n      //   result.forEach(fetchComments);\r\n        \r\n      //   // console.log(result)\r\n      // });\r\n    \r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://App/./src/index.js?");

/***/ }),

/***/ "./src/message.js":
/*!************************!*\
  !*** ./src/message.js ***!
  \************************/
/***/ ((module) => {

eval("module.exports.Message = class Message {\r\n    message;\r\n    constructor(message) {\r\n      this.message = message;\r\n    }\r\n  \r\n    displayMessage() {\r\n      // DO SOMETHING LONG/CALL API \r\n      return new Promise((resolve, reject) => {\r\n        setTimeout(() => {\r\n          return resolve(this.message);\r\n        }, 5000);\r\n      });\r\n      \r\n    }\r\n  };\n\n//# sourceURL=webpack://App/./src/message.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	App = __webpack_exports__;
/******/ 	
/******/ })()
;