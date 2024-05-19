"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var express_1 = require("express");
var database_1 = require("./database");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var router = (0, express_1.Router)();
var options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // 다른 필요한 옵션들...
};
router.post("/users", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var uri, db, newData, createdData, testData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, 5, 7]);
                uri = process.env.DB_URL;
                return [4 /*yield*/, mongoose.connect(uri, options)];
            case 1:
                _a.sent();
                db = new database_1.DB();
                newData = { name: '김철수', age: 30 };
                return [4 /*yield*/, db.create(newData)];
            case 2:
                createdData = _a.sent();
                console.log('Created');
                console.log(createdData);
                return [4 /*yield*/, db.read({ name: createdData.name })];
            case 3:
                testData = _a.sent();
                console.log(testData);
                // 클라이언트에 JSON 응답 전송
                res.json(testData);
                return [3 /*break*/, 7];
            case 4:
                error_1 = _a.sent();
                console.error('Error handling /users request:', error_1);
                res.status(500).json({ error: 'Internal Server Error' });
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, mongoose.disconnect()];
            case 6:
                _a.sent();
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
