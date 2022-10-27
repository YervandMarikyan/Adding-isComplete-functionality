"use strict";

const UI = require("./modules/ui");
const POST = require("./modules/postMethod");
const GET = require("./modules/getMethod");
const PUT = require("./modules/putMethod");
const DELETE = require("./modules/deleteMethod");

const root = document.querySelector("#root");
const url = "http://localhost:8888/todos";

const {form, screenInput} = UI;

UI.start();
POST(form, screenInput, url);

//(editBtnArray, saveBtnArray, content, isCompleted, url)

async function test () {
    await GET(UI, url);
    PUT(
        document.querySelectorAll(".editBtn"),
        document.querySelectorAll(".saveBtn"),
        document.querySelectorAll(".listsBlockItemContent"),
        document.querySelectorAll(".done"),
        url
    );
    DELETE(
        document.querySelectorAll(".removeBtn"),
        url
    )
}

test();

// .then(() => {
// 	PUT(
// 		document.querySelectorAll(".editBtn"),
// 		document.querySelectorAll(".saveBtn"),
// 		document.querySelectorAll(".listsBlockItemContent"),
// 		document.querySelectorAll(".done"),
// 		url
// 	);
// 	DELETE(document.querySelectorAll(".removeBtn"), url);
// })