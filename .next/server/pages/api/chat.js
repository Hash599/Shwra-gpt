"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/chat";
exports.ids = ["pages/api/chat"];
exports.modules = {

/***/ "@pinecone-database/pinecone":
/*!**********************************************!*\
  !*** external "@pinecone-database/pinecone" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@pinecone-database/pinecone");

/***/ }),

/***/ "langchain/chains":
/*!***********************************!*\
  !*** external "langchain/chains" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("langchain/chains");;

/***/ }),

/***/ "langchain/embeddings/openai":
/*!**********************************************!*\
  !*** external "langchain/embeddings/openai" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("langchain/embeddings/openai");;

/***/ }),

/***/ "langchain/llms/openai":
/*!****************************************!*\
  !*** external "langchain/llms/openai" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("langchain/llms/openai");;

/***/ }),

/***/ "langchain/vectorstores/pinecone":
/*!**************************************************!*\
  !*** external "langchain/vectorstores/pinecone" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("langchain/vectorstores/pinecone");;

/***/ }),

/***/ "(api)/./config/pinecone.ts":
/*!****************************!*\
  !*** ./config/pinecone.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PINECONE_INDEX_NAME\": () => (/* binding */ PINECONE_INDEX_NAME),\n/* harmony export */   \"PINECONE_NAME_SPACE\": () => (/* binding */ PINECONE_NAME_SPACE)\n/* harmony export */ });\n/**\n * Change the namespace to the namespace on Pinecone you'd like to store your embeddings.\n */ if (!process.env.PINECONE_INDEX_NAME) {\n    throw new Error(\"Missing Pinecone index name in .env file\");\n}\nconst PINECONE_INDEX_NAME = process.env.PINECONE_INDEX_NAME ?? \"\";\nconst PINECONE_NAME_SPACE = \"demo\"; //namespace is optional for your vectors\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvcGluZWNvbmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Q0FFQyxHQUVELElBQUksQ0FBQ0EsUUFBUUMsR0FBRyxDQUFDQyxtQkFBbUIsRUFBRTtJQUNwQyxNQUFNLElBQUlDLE1BQU0sNENBQTRDO0FBQzlELENBQUM7QUFFRCxNQUFNRCxzQkFBc0JGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQUk7QUFFL0QsTUFBTUUsc0JBQXNCLFFBQVEsd0NBQXdDO0FBRXhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1TaHdyYS1wZGYtY2hhdGJvdC8uL2NvbmZpZy9waW5lY29uZS50cz82ZjA5Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hhbmdlIHRoZSBuYW1lc3BhY2UgdG8gdGhlIG5hbWVzcGFjZSBvbiBQaW5lY29uZSB5b3UnZCBsaWtlIHRvIHN0b3JlIHlvdXIgZW1iZWRkaW5ncy5cbiAqL1xuXG5pZiAoIXByb2Nlc3MuZW52LlBJTkVDT05FX0lOREVYX05BTUUpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIFBpbmVjb25lIGluZGV4IG5hbWUgaW4gLmVudiBmaWxlJyk7XG59XG5cbmNvbnN0IFBJTkVDT05FX0lOREVYX05BTUUgPSBwcm9jZXNzLmVudi5QSU5FQ09ORV9JTkRFWF9OQU1FID8/ICcnO1xuXG5jb25zdCBQSU5FQ09ORV9OQU1FX1NQQUNFID0gJ2RlbW8nOyAvL25hbWVzcGFjZSBpcyBvcHRpb25hbCBmb3IgeW91ciB2ZWN0b3JzXG5cbmV4cG9ydCB7IFBJTkVDT05FX0lOREVYX05BTUUsIFBJTkVDT05FX05BTUVfU1BBQ0UgfTtcbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiUElORUNPTkVfSU5ERVhfTkFNRSIsIkVycm9yIiwiUElORUNPTkVfTkFNRV9TUEFDRSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/pinecone.ts\n");

/***/ }),

/***/ "(api)/./pages/api/chat.ts":
/*!***************************!*\
  !*** ./pages/api/chat.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/embeddings/openai */ \"langchain/embeddings/openai\");\n/* harmony import */ var langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/vectorstores/pinecone */ \"langchain/vectorstores/pinecone\");\n/* harmony import */ var _utils_makechain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/makechain */ \"(api)/./utils/makechain.ts\");\n/* harmony import */ var _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/pinecone-client */ \"(api)/./utils/pinecone-client.ts\");\n/* harmony import */ var _config_pinecone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/pinecone */ \"(api)/./config/pinecone.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__]);\n([langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__, _utils_makechain__WEBPACK_IMPORTED_MODULE_2__, _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nasync function handler(req, res) {\n    const { question , history , temperature , selectedModel , qaPrompt , condensePrompt , topP , maxLength , presencePenalty , frequencyPenalty  } = req.body;\n    console.log(\"question\", question);\n    console.log(\"temp\", temperature);\n    console.log(\"model\", selectedModel);\n    console.log(\"qaPr\", qaPrompt);\n    console.log(\"cPr\", condensePrompt);\n    console.log(topP);\n    console.log(maxLength);\n    console.log(frequencyPenalty);\n    console.log(presencePenalty);\n    //only accept post requests\n    if (req.method !== \"POST\") {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n        return;\n    }\n    if (!question) {\n        return res.status(400).json({\n            message: \"No question in the request\"\n        });\n    }\n    // OpenAI recommends replacing newlines with spaces for best results\n    const sanitizedQuestion = question.trim().replaceAll(\"\\n\", \" \");\n    try {\n        const index = _utils_pinecone_client__WEBPACK_IMPORTED_MODULE_3__.pinecone.Index(_config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_INDEX_NAME);\n        /* create vectorstore*/ const vectorStore = await langchain_vectorstores_pinecone__WEBPACK_IMPORTED_MODULE_1__.PineconeStore.fromExistingIndex(new langchain_embeddings_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIEmbeddings({}), {\n            pineconeIndex: index,\n            textKey: \"text\",\n            namespace: _config_pinecone__WEBPACK_IMPORTED_MODULE_4__.PINECONE_NAME_SPACE\n        });\n        //create chain\n        const chain = (0,_utils_makechain__WEBPACK_IMPORTED_MODULE_2__.makeChain)(vectorStore, temperature, selectedModel, qaPrompt, condensePrompt, topP, maxLength, presencePenalty, frequencyPenalty);\n        //Ask a question using chat history\n        const response = await chain.call({\n            question: sanitizedQuestion,\n            chat_history: history || []\n        });\n        console.log(\"response\", response);\n        res.status(200).json(response);\n    } catch (error) {\n        console.log(\"error\", error);\n        res.status(500).json({\n            error: error.message || \"Something went wrong\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hhdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDK0Q7QUFDQztBQUNsQjtBQUNLO0FBQzBCO0FBRTlELGVBQWVNLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNLEVBQUVDLFNBQVEsRUFBRUMsUUFBTyxFQUFDQyxZQUFXLEVBQUNDLGNBQWEsRUFBQ0MsU0FBUSxFQUFDQyxlQUFjLEVBQUNDLEtBQUksRUFBQ0MsVUFBUyxFQUFDQyxnQkFBZSxFQUFDQyxpQkFBZ0IsRUFBRSxHQUFHWCxJQUFJWSxJQUFJO0lBRXhJQyxRQUFRQyxHQUFHLENBQUMsWUFBWVo7SUFDeEJXLFFBQVFDLEdBQUcsQ0FBQyxRQUFPVjtJQUNuQlMsUUFBUUMsR0FBRyxDQUFDLFNBQVFUO0lBQ3BCUSxRQUFRQyxHQUFHLENBQUMsUUFBT1I7SUFDbkJPLFFBQVFDLEdBQUcsQ0FBQyxPQUFNUDtJQUNwQk0sUUFBUUMsR0FBRyxDQUFDTjtJQUNaSyxRQUFRQyxHQUFHLENBQUNMO0lBQ1pJLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWkUsUUFBUUMsR0FBRyxDQUFDSjtJQUNWLDJCQUEyQjtJQUMzQixJQUFJVixJQUFJZSxNQUFNLEtBQUssUUFBUTtRQUN6QmQsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFCO1FBQ25EO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ2hCLFVBQVU7UUFDYixPQUFPRCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBNkI7SUFDdEUsQ0FBQztJQUNELG9FQUFvRTtJQUNwRSxNQUFNQyxvQkFBb0JsQixTQUFTbUIsSUFBSSxHQUFHQyxVQUFVLENBQUMsTUFBTTtJQUUzRCxJQUFJO1FBQ0YsTUFBTUMsUUFBUTNCLGtFQUFjLENBQUNDLGlFQUFtQkE7UUFFaEQscUJBQXFCLEdBQ3JCLE1BQU00QixjQUFjLE1BQU0vQiw0RkFBK0IsQ0FDdkQsSUFBSUQseUVBQWdCQSxDQUFDLENBQUMsSUFDdEI7WUFDRWtDLGVBQWVKO1lBQ2ZLLFNBQVM7WUFDVEMsV0FBVy9CLGlFQUFtQkE7UUFDaEM7UUFHRixjQUFjO1FBQ2QsTUFBTWdDLFFBQVFuQywyREFBU0EsQ0FBQzhCLGFBQWFyQixhQUFhQyxlQUFlQyxVQUFVQyxnQkFBZUMsTUFBS0MsV0FBVUMsaUJBQWdCQztRQUN6SCxtQ0FBbUM7UUFDbkMsTUFBTW9CLFdBQVcsTUFBTUQsTUFBTUUsSUFBSSxDQUFDO1lBQ2hDOUIsVUFBVWtCO1lBQ1ZhLGNBQWM5QixXQUFXLEVBQUU7UUFDN0I7UUFFQVUsUUFBUUMsR0FBRyxDQUFDLFlBQVlpQjtRQUN4QjlCLElBQUllLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNjO0lBQ3ZCLEVBQUUsT0FBT2IsT0FBWTtRQUNuQkwsUUFBUUMsR0FBRyxDQUFDLFNBQVNJO1FBQ3JCakIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxPQUFPQSxNQUFNQyxPQUFPLElBQUk7UUFBdUI7SUFDeEU7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1TaHdyYS1wZGYtY2hhdGJvdC8uL3BhZ2VzL2FwaS9jaGF0LnRzP2M1NzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBPcGVuQUlFbWJlZGRpbmdzIH0gZnJvbSAnbGFuZ2NoYWluL2VtYmVkZGluZ3Mvb3BlbmFpJztcbmltcG9ydCB7IFBpbmVjb25lU3RvcmUgfSBmcm9tICdsYW5nY2hhaW4vdmVjdG9yc3RvcmVzL3BpbmVjb25lJztcbmltcG9ydCB7IG1ha2VDaGFpbiB9IGZyb20gJ0AvdXRpbHMvbWFrZWNoYWluJztcbmltcG9ydCB7IHBpbmVjb25lIH0gZnJvbSAnQC91dGlscy9waW5lY29uZS1jbGllbnQnO1xuaW1wb3J0IHsgUElORUNPTkVfSU5ERVhfTkFNRSwgUElORUNPTkVfTkFNRV9TUEFDRSB9IGZyb20gJ0AvY29uZmlnL3BpbmVjb25lJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgY29uc3QgeyBxdWVzdGlvbiwgaGlzdG9yeSx0ZW1wZXJhdHVyZSxzZWxlY3RlZE1vZGVsLHFhUHJvbXB0LGNvbmRlbnNlUHJvbXB0LHRvcFAsbWF4TGVuZ3RoLHByZXNlbmNlUGVuYWx0eSxmcmVxdWVuY3lQZW5hbHR5IH0gPSByZXEuYm9keTtcblxuICBjb25zb2xlLmxvZygncXVlc3Rpb24nLCBxdWVzdGlvbik7XG4gIGNvbnNvbGUubG9nKCd0ZW1wJyx0ZW1wZXJhdHVyZSlcbiAgY29uc29sZS5sb2coJ21vZGVsJyxzZWxlY3RlZE1vZGVsKVxuICBjb25zb2xlLmxvZygncWFQcicscWFQcm9tcHQpXG4gIGNvbnNvbGUubG9nKCdjUHInLGNvbmRlbnNlUHJvbXB0KVxuY29uc29sZS5sb2codG9wUClcbmNvbnNvbGUubG9nKG1heExlbmd0aClcbmNvbnNvbGUubG9nKGZyZXF1ZW5jeVBlbmFsdHkpXG5jb25zb2xlLmxvZyhwcmVzZW5jZVBlbmFsdHkpXG4gIC8vb25seSBhY2NlcHQgcG9zdCByZXF1ZXN0c1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFxdWVzdGlvbikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6ICdObyBxdWVzdGlvbiBpbiB0aGUgcmVxdWVzdCcgfSk7XG4gIH1cbiAgLy8gT3BlbkFJIHJlY29tbWVuZHMgcmVwbGFjaW5nIG5ld2xpbmVzIHdpdGggc3BhY2VzIGZvciBiZXN0IHJlc3VsdHNcbiAgY29uc3Qgc2FuaXRpemVkUXVlc3Rpb24gPSBxdWVzdGlvbi50cmltKCkucmVwbGFjZUFsbCgnXFxuJywgJyAnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IGluZGV4ID0gcGluZWNvbmUuSW5kZXgoUElORUNPTkVfSU5ERVhfTkFNRSk7XG5cbiAgICAvKiBjcmVhdGUgdmVjdG9yc3RvcmUqL1xuICAgIGNvbnN0IHZlY3RvclN0b3JlID0gYXdhaXQgUGluZWNvbmVTdG9yZS5mcm9tRXhpc3RpbmdJbmRleChcbiAgICAgIG5ldyBPcGVuQUlFbWJlZGRpbmdzKHt9KSxcbiAgICAgIHtcbiAgICAgICAgcGluZWNvbmVJbmRleDogaW5kZXgsXG4gICAgICAgIHRleHRLZXk6ICd0ZXh0JyxcbiAgICAgICAgbmFtZXNwYWNlOiBQSU5FQ09ORV9OQU1FX1NQQUNFLCAvL25hbWVzcGFjZSBjb21lcyBmcm9tIHlvdXIgY29uZmlnIGZvbGRlclxuICAgICAgfSxcbiAgICApO1xuXG4gICAgLy9jcmVhdGUgY2hhaW5cbiAgICBjb25zdCBjaGFpbiA9IG1ha2VDaGFpbih2ZWN0b3JTdG9yZSwgdGVtcGVyYXR1cmUsIHNlbGVjdGVkTW9kZWwsIHFhUHJvbXB0LCBjb25kZW5zZVByb21wdCx0b3BQLG1heExlbmd0aCxwcmVzZW5jZVBlbmFsdHksZnJlcXVlbmN5UGVuYWx0eSk7XG4gICAgLy9Bc2sgYSBxdWVzdGlvbiB1c2luZyBjaGF0IGhpc3RvcnlcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNoYWluLmNhbGwoe1xuICAgICAgcXVlc3Rpb246IHNhbml0aXplZFF1ZXN0aW9uLFxuICAgICAgY2hhdF9oaXN0b3J5OiBoaXN0b3J5IHx8IFtdLFxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ3Jlc3BvbnNlJywgcmVzcG9uc2UpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8ICdTb21ldGhpbmcgd2VudCB3cm9uZycgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcGVuQUlFbWJlZGRpbmdzIiwiUGluZWNvbmVTdG9yZSIsIm1ha2VDaGFpbiIsInBpbmVjb25lIiwiUElORUNPTkVfSU5ERVhfTkFNRSIsIlBJTkVDT05FX05BTUVfU1BBQ0UiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicXVlc3Rpb24iLCJoaXN0b3J5IiwidGVtcGVyYXR1cmUiLCJzZWxlY3RlZE1vZGVsIiwicWFQcm9tcHQiLCJjb25kZW5zZVByb21wdCIsInRvcFAiLCJtYXhMZW5ndGgiLCJwcmVzZW5jZVBlbmFsdHkiLCJmcmVxdWVuY3lQZW5hbHR5IiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwic2FuaXRpemVkUXVlc3Rpb24iLCJ0cmltIiwicmVwbGFjZUFsbCIsImluZGV4IiwiSW5kZXgiLCJ2ZWN0b3JTdG9yZSIsImZyb21FeGlzdGluZ0luZGV4IiwicGluZWNvbmVJbmRleCIsInRleHRLZXkiLCJuYW1lc3BhY2UiLCJjaGFpbiIsInJlc3BvbnNlIiwiY2FsbCIsImNoYXRfaGlzdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/chat.ts\n");

/***/ }),

/***/ "(api)/./utils/makechain.ts":
/*!****************************!*\
  !*** ./utils/makechain.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeChain\": () => (/* binding */ makeChain)\n/* harmony export */ });\n/* harmony import */ var langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! langchain/llms/openai */ \"langchain/llms/openai\");\n/* harmony import */ var langchain_chains__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! langchain/chains */ \"langchain/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__]);\n([langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__, langchain_chains__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst CONDENSE_PROMPT = `بالنظر إلى المحادثة التالية وسؤال المتابعة ، أعد صياغة سؤال المتابعة ليكون سؤالاً مستقلاً.\n\nChat History:\n{chat_history}\nFollow Up Input: {question}\nStandalone question:`;\nconst QA_PROMPT = `أنت مساعد AI مفيد. استخدم أجزاء السياق التالية للإجابة على السؤال في النهاية.\nإذا كنت لا تعرف الإجابة ، قل فقط أنك لا تعرف. لا تحاول اختلاق إجابة.\nإذا لم يكن السؤال متعلقًا بالسياق ، فأجب بأدب أنك مضبوط للإجابة فقط على الأسئلة المتعلقة بالسياق.\n\n{context}\n\nQuestion: {question}\nHelpful answer in markdown:`;\nconst makeChain = (vectorstore, temperature, modelname, qaPrompt, condensePrompt, Topp, MaxLength, presenceP, frequencyP)=>{\n    const model = new langchain_llms_openai__WEBPACK_IMPORTED_MODULE_0__.OpenAI({\n        temperature: temperature,\n        modelName: modelname\n    });\n    const chain = langchain_chains__WEBPACK_IMPORTED_MODULE_1__.ConversationalRetrievalQAChain.fromLLM(model, vectorstore.asRetriever(), {\n        qaTemplate: `${qaPrompt} \n      {context}\n\n      Question: {question}\n      Helpful answer in markdown:`,\n        questionGeneratorTemplate: `${condensePrompt}\n      Chat History:\n{chat_history}\nFollow Up Input: {question}\nStandalone question:`,\n        returnSourceDocuments: true\n    });\n    return chain;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tYWtlY2hhaW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBRW1CO0FBRWxFLE1BQU1FLGtCQUFrQixDQUFDOzs7OztvQkFLTCxDQUFDO0FBRXJCLE1BQU1DLFlBQVksQ0FBQzs7Ozs7OzsyQkFPUSxDQUFDO0FBRXJCLE1BQU1DLFlBQVksQ0FBQ0MsYUFBNEJDLGFBQXFCQyxXQUFnQkMsVUFBa0JDLGdCQUF1QkMsTUFBU0MsV0FBY0MsV0FBY0MsYUFBbUI7SUFDMUwsTUFBTUMsUUFBUSxJQUFJZCx5REFBTUEsQ0FBQztRQUN2Qk0sYUFBYUE7UUFDYlMsV0FBV1I7SUFFYjtJQUVBLE1BQU1TLFFBQVFmLG9GQUFzQyxDQUNsRGEsT0FDQVQsWUFBWWEsV0FBVyxJQUN2QjtRQUNFQyxZQUFZLENBQUMsRUFBRVgsU0FBUzs7OztpQ0FJRyxDQUFDO1FBQzVCWSwyQkFBMkIsQ0FBQyxFQUFFWCxlQUFlOzs7O29CQUkvQixDQUFDO1FBQ2ZZLHVCQUF1QixJQUFJO0lBQzdCO0lBRUYsT0FBT0w7QUFDVCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1TaHdyYS1wZGYtY2hhdGJvdC8uL3V0aWxzL21ha2VjaGFpbi50cz9jZmE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wZW5BSSB9IGZyb20gJ2xhbmdjaGFpbi9sbG1zL29wZW5haSc7XG5pbXBvcnQgeyBQaW5lY29uZVN0b3JlIH0gZnJvbSAnbGFuZ2NoYWluL3ZlY3RvcnN0b3Jlcy9waW5lY29uZSc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25hbFJldHJpZXZhbFFBQ2hhaW4gfSBmcm9tICdsYW5nY2hhaW4vY2hhaW5zJztcblxuY29uc3QgQ09OREVOU0VfUFJPTVBUID0gYNio2KfZhNmG2LjYsSDYpdmE2Ykg2KfZhNmF2K3Yp9iv2KvYqSDYp9mE2KrYp9mE2YrYqSDZiNiz2KTYp9mEINin2YTZhdiq2KfYqNi52Kkg2Iwg2KPYudivINi12YrYp9i62Kkg2LPYpNin2YQg2KfZhNmF2KrYp9io2LnYqSDZhNmK2YPZiNmGINiz2KTYp9mE2KfZiyDZhdiz2KrZgtmE2KfZiy5cblxuQ2hhdCBIaXN0b3J5Olxue2NoYXRfaGlzdG9yeX1cbkZvbGxvdyBVcCBJbnB1dDoge3F1ZXN0aW9ufVxuU3RhbmRhbG9uZSBxdWVzdGlvbjpgO1xuXG5jb25zdCBRQV9QUk9NUFQgPSBg2KPZhtiqINmF2LPYp9i52K8gQUkg2YXZgdmK2K8uINin2LPYqtiu2K/ZhSDYo9is2LLYp9ihINin2YTYs9mK2KfZgiDYp9mE2KrYp9mE2YrYqSDZhNmE2KXYrNin2KjYqSDYudmE2Ykg2KfZhNiz2KTYp9mEINmB2Yog2KfZhNmG2YfYp9mK2KkuXG7Ypdiw2Kcg2YPZhtiqINmE2Kcg2KrYudix2YEg2KfZhNil2KzYp9io2Kkg2Iwg2YLZhCDZgdmC2Lcg2KPZhtmDINmE2Kcg2KrYudix2YEuINmE2Kcg2KrYrdin2YjZhCDYp9iu2KrZhNin2YIg2KXYrNin2KjYqS5cbtil2LDYpyDZhNmFINmK2YPZhiDYp9mE2LPYpNin2YQg2YXYqti52YTZgtmL2Kcg2KjYp9mE2LPZitin2YIg2Iwg2YHYo9is2Kgg2KjYo9iv2Kgg2KPZhtmDINmF2LbYqNmI2Lcg2YTZhNil2KzYp9io2Kkg2YHZgti3INi52YTZiSDYp9mE2KPYs9im2YTYqSDYp9mE2YXYqti52YTZgtipINio2KfZhNiz2YrYp9mCLlxuXG57Y29udGV4dH1cblxuUXVlc3Rpb246IHtxdWVzdGlvbn1cbkhlbHBmdWwgYW5zd2VyIGluIG1hcmtkb3duOmA7XG5cbmV4cG9ydCBjb25zdCBtYWtlQ2hhaW4gPSAodmVjdG9yc3RvcmU6IFBpbmVjb25lU3RvcmUsIHRlbXBlcmF0dXJlOiBudW1iZXIsIG1vZGVsbmFtZTogYW55LCBxYVByb21wdDogc3RyaW5nLCBjb25kZW5zZVByb21wdDogc3RyaW5nLFRvcHA6YW55LE1heExlbmd0aDphbnkscHJlc2VuY2VQOmFueSxmcmVxdWVuY3lQOmFueSkgPT4ge1xuICBjb25zdCBtb2RlbCA9IG5ldyBPcGVuQUkoe1xuICAgIHRlbXBlcmF0dXJlOiB0ZW1wZXJhdHVyZSwgLy8gaW5jcmVhc2UgdGVtZXByZWF0dXJlIHRvIGdldCBtb3JlIGNyZWF0aXZlIGFuc3dlcnNcbiAgICBtb2RlbE5hbWU6IG1vZGVsbmFtZSwgLy9jaGFuZ2UgdGhpcyB0byBncHQtNCBpZiB5b3UgaGF2ZSBhY2Nlc3NcblxuICB9KTtcblxuICBjb25zdCBjaGFpbiA9IENvbnZlcnNhdGlvbmFsUmV0cmlldmFsUUFDaGFpbi5mcm9tTExNKFxuICAgIG1vZGVsLFxuICAgIHZlY3RvcnN0b3JlLmFzUmV0cmlldmVyKCksXG4gICAge1xuICAgICAgcWFUZW1wbGF0ZTogYCR7cWFQcm9tcHR9IFxuICAgICAge2NvbnRleHR9XG5cbiAgICAgIFF1ZXN0aW9uOiB7cXVlc3Rpb259XG4gICAgICBIZWxwZnVsIGFuc3dlciBpbiBtYXJrZG93bjpgLFxuICAgICAgcXVlc3Rpb25HZW5lcmF0b3JUZW1wbGF0ZTogYCR7Y29uZGVuc2VQcm9tcHR9XG4gICAgICBDaGF0IEhpc3Rvcnk6XG57Y2hhdF9oaXN0b3J5fVxuRm9sbG93IFVwIElucHV0OiB7cXVlc3Rpb259XG5TdGFuZGFsb25lIHF1ZXN0aW9uOmAsXG4gICAgICByZXR1cm5Tb3VyY2VEb2N1bWVudHM6IHRydWUsIC8vVGhlIG51bWJlciBvZiBzb3VyY2UgZG9jdW1lbnRzIHJldHVybmVkIGlzIDQgYnkgZGVmYXVsdFxuICAgIH0sXG4gICk7XG4gIHJldHVybiBjaGFpbjtcbn07XG4iXSwibmFtZXMiOlsiT3BlbkFJIiwiQ29udmVyc2F0aW9uYWxSZXRyaWV2YWxRQUNoYWluIiwiQ09OREVOU0VfUFJPTVBUIiwiUUFfUFJPTVBUIiwibWFrZUNoYWluIiwidmVjdG9yc3RvcmUiLCJ0ZW1wZXJhdHVyZSIsIm1vZGVsbmFtZSIsInFhUHJvbXB0IiwiY29uZGVuc2VQcm9tcHQiLCJUb3BwIiwiTWF4TGVuZ3RoIiwicHJlc2VuY2VQIiwiZnJlcXVlbmN5UCIsIm1vZGVsIiwibW9kZWxOYW1lIiwiY2hhaW4iLCJmcm9tTExNIiwiYXNSZXRyaWV2ZXIiLCJxYVRlbXBsYXRlIiwicXVlc3Rpb25HZW5lcmF0b3JUZW1wbGF0ZSIsInJldHVyblNvdXJjZURvY3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/makechain.ts\n");

/***/ }),

/***/ "(api)/./utils/pinecone-client.ts":
/*!**********************************!*\
  !*** ./utils/pinecone-client.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pinecone\": () => (/* binding */ pinecone)\n/* harmony export */ });\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pinecone-database/pinecone */ \"@pinecone-database/pinecone\");\n/* harmony import */ var _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.PINECONE_ENVIRONMENT || !process.env.PINECONE_API_KEY) {\n    throw new Error(\"Pinecone environment or api key vars missing\");\n}\nasync function initPinecone() {\n    try {\n        const pinecone = new _pinecone_database_pinecone__WEBPACK_IMPORTED_MODULE_0__.PineconeClient();\n        await pinecone.init({\n            environment: process.env.PINECONE_ENVIRONMENT ?? \"\",\n            apiKey: process.env.PINECONE_API_KEY ?? \"\"\n        });\n        return pinecone;\n    } catch (error) {\n        console.log(\"error\", error);\n        throw new Error(\"Failed to initialize Pinecone Client\");\n    }\n}\nconst pinecone = await initPinecone();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9waW5lY29uZS1jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUU3RCxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUksQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxnQkFBZ0IsRUFBRTtJQUN0RSxNQUFNLElBQUlDLE1BQU0sZ0RBQWdEO0FBQ2xFLENBQUM7QUFFRCxlQUFlQyxlQUFlO0lBQzVCLElBQUk7UUFDRixNQUFNQyxXQUFXLElBQUlQLHVFQUFjQTtRQUVuQyxNQUFNTyxTQUFTQyxJQUFJLENBQUM7WUFDbEJDLGFBQWFSLFFBQVFDLEdBQUcsQ0FBQ0Msb0JBQW9CLElBQUk7WUFDakRPLFFBQVFULFFBQVFDLEdBQUcsQ0FBQ0UsZ0JBQWdCLElBQUk7UUFDMUM7UUFFQSxPQUFPRztJQUNULEVBQUUsT0FBT0ksT0FBTztRQUNkQyxRQUFRQyxHQUFHLENBQUMsU0FBU0Y7UUFDckIsTUFBTSxJQUFJTixNQUFNLHdDQUF3QztJQUMxRDtBQUNGO0FBRU8sTUFBTUUsV0FBVyxNQUFNRCxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3B0NC1TaHdyYS1wZGYtY2hhdGJvdC8uL3V0aWxzL3BpbmVjb25lLWNsaWVudC50cz9kZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpbmVjb25lQ2xpZW50IH0gZnJvbSAnQHBpbmVjb25lLWRhdGFiYXNlL3BpbmVjb25lJztcblxuaWYgKCFwcm9jZXNzLmVudi5QSU5FQ09ORV9FTlZJUk9OTUVOVCB8fCAhcHJvY2Vzcy5lbnYuUElORUNPTkVfQVBJX0tFWSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BpbmVjb25lIGVudmlyb25tZW50IG9yIGFwaSBrZXkgdmFycyBtaXNzaW5nJyk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRQaW5lY29uZSgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwaW5lY29uZSA9IG5ldyBQaW5lY29uZUNsaWVudCgpO1xuXG4gICAgYXdhaXQgcGluZWNvbmUuaW5pdCh7XG4gICAgICBlbnZpcm9ubWVudDogcHJvY2Vzcy5lbnYuUElORUNPTkVfRU5WSVJPTk1FTlQgPz8gJycsIC8vdGhpcyBpcyBpbiB0aGUgZGFzaGJvYXJkXG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52LlBJTkVDT05FX0FQSV9LRVkgPz8gJycsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGluZWNvbmU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGluaXRpYWxpemUgUGluZWNvbmUgQ2xpZW50Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHBpbmVjb25lID0gYXdhaXQgaW5pdFBpbmVjb25lKCk7XG4iXSwibmFtZXMiOlsiUGluZWNvbmVDbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiUElORUNPTkVfRU5WSVJPTk1FTlQiLCJQSU5FQ09ORV9BUElfS0VZIiwiRXJyb3IiLCJpbml0UGluZWNvbmUiLCJwaW5lY29uZSIsImluaXQiLCJlbnZpcm9ubWVudCIsImFwaUtleSIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/pinecone-client.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/chat.ts"));
module.exports = __webpack_exports__;

})();