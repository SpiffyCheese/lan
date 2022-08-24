//Globals

//Misc
let clientData = 1337;

//Socket
const socket = io();

//Graphics
let width, height;
//Canvas
let canvas, c;
canvas = document.querySelector("canvas");
c = canvas.getContext("2d");

//Input Utilization
let downKey, downButton, downClickX, downClickY;
