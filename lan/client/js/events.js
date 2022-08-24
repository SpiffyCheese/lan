//Functions vv

//Mouse v
//Down
function onMouseDown(e) {
    saveMouseDown(e);
    mouseDownTrigger();
}

function saveMouseDown(e) {
    downButton=e.button;
    downClickX=e.clientX;
    downClickY=e.clientY;
}

function mouseDownTrigger() {
    console.log('bd: ' + downButton, '\nx: ' +  downClickX,'\ny: ' +  downClickY);
}

//Up
function onMouseUp(e) {
    saveMouseUp(e);
    mouseUpTrigger();
}

function saveMouseUp(e) {
    upButton=e.button;
    upClickX=e.clientX;
    upClickY=e.clientY;
}

function mouseUpTrigger() {
    console.log('bu: ' + upButton, '\nx: ' + upClickX,'\ny: ' + upClickY);
}

//Key v
//Down
function onKeyDown(e) {
    saveKeyDown(e);
    keyDownTrigger();
}

function saveKeyDown(e) {
    downKey=e.key;
}

function keyDownTrigger() {
    console.log('kd: ' + downKey);
}

//Up
function onKeyUp(e) {
    saveKeyUp(e);
    keyUpTrigger();
}

function saveKeyUp(e) {
    upKey=e.key;
}

function keyUpTrigger() {
    console.log('ku: ' + upKey);
}

//Listeners
window.addEventListener("resize", resizeWindow);
addEventListener("mousedown", onMouseDown);
addEventListener("mouseup", onMouseUp);
addEventListener("keydown", onKeyDown);
addEventListener("keyup", onKeyUp);
