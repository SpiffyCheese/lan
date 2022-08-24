function client() {
    graphics();

    socket.emit('clientData', clientData);
    
    socket.on('serverData', onData);
    function onData(serverData) {
        console.log(serverData);
    }

}

//Graphics
function graphics() {
    updateWindowDemensions();
    renderGraphics();
}

function renderGraphics() {
}

//Canvas
function resizeWindow() {
    updateWindowDemensions();
    renderGraphics();
}

function updateWindowDemensions() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}