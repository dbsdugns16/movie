"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestModel = void 0;
var mongoose = require("mongoose");
;
var testSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});
exports.TestModel = mongoose.model('Test', testSchema);
