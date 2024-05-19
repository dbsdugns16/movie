"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
var testModel_1 = require("./testModel");
var DB = /** @class */ (function () {
    function DB() {
    }
    DB.prototype.create = function (test) {
        var p = new testModel_1.TestModel(test);
        return p.save();
    };
    DB.prototype.read = function (query) {
        testModel_1.TestModel.find(query, function (err, tests) {
            console.log(tests.length);
        });
    };
    return DB;
}());
exports.DB = DB;
