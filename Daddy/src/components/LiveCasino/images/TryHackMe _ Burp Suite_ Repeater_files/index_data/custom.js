// Since Async Clipboard API is not supported for all browser!
function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text); // Supports older browsers
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        console.log('Async: Copying to clipboard was successful!');
    }, (err) => {
        console.error('Async: Could not copy text: ', err);
    });
}

let reconnectAttempts = 0;
// Tries to reconnect if error
function tryReconnect(UI) {
    const delay = 10;
    if (reconnectAttempts <= 2) {
        setTimeout(() => {
            console.log('Attempting reconnect');
            UI.connect();
            reconnectAttempts++;
        }, delay * 1000, UI);
    } else {
        renderRetryOption();
    }
}

function renderRetryOption() {
    document.querySelector('#thmVNC_status').innerHTML += '<div id="thmVNC_restart"><button onclick="javascript:location.reload()">Try Reconnecting</button></div>';
}

// If there is a custom proxyIP add it to the url
function getWebSocketProxyLoc() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let proxyIP = url.searchParams.get("proxyIP");
    proxyIP = (proxyIP != undefined && proxyIP != null) ? `/${proxyIP}` : '';
    return proxyIP;
}

function fallbackCopyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;

  // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

