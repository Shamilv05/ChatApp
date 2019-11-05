let socket = new WebSocket("ws://127.0.0.1:8080/connection");

let connect = () => {
    console.log("Attempt...");

    socket.onopen = () => {
        console.log("Connected");
    };

    socket.onmessage = (msg) => {
        console.log(msg);
    };

    socket.onclose = (e) => {
        console.log("Socket Closed: ", e);
    }

    socket.onerror = (err) => {
        console.log("Socket Error: ", err);
    }
};

let sendMessage = (msg) => {
    console.log("Sending msg: ", msg);
    socket.send(msg);
};

export { connect, sendMessage };