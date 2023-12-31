"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const cors = require("cors");
const { funcTest } = require("../controller/controllTest");
const app = express();
exports.app = app;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.get("/api/debug", funcTest);
