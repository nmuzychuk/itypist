var keyHistory = [];

var addKeyToHistory = function (key) {
    keyHistory.push(key);
    document.getElementById("key-history").innerText = keyHistory.join(", ");
};

var searchKey = function (key) {
    var keyElements = document.getElementsByTagName("button");

    for (var i = 0; i < keyElements.length; i++) {
        var keyElement = keyElements[i];

        if (key === keyElement.innerText) {
            return keyElement;
        }
    }
};

function pressKey(e) {
    addKeyToHistory(e.key);
    var key = searchKey(e.key.toUpperCase());

    if (key) {
        key.classList.add("pressed");
    }
}

function unpressKey(e) {
    var key = searchKey(e.key.toUpperCase());

    if (key) {
        key.classList.remove("pressed");
    }
}

document.onkeydown = pressKey;
document.onkeyup = unpressKey;
