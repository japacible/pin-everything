function pin(info, tab) {
    chrome.tabs.sendMessage(tab.id, {method: "getSelection"}, function() {
        var description = " ";
        var url = "http://pinterest.com/pin/create/bookmarklet/?media=" 
            + encodeURIComponent(info.srcUrl) 
            + "&url=" + encodeURIComponent(tab.url) 
            + "&description=" + encodeURIComponent(" ");
        
        chrome.windows.create({
            url: url,
            type: "popup",
            height: 300,
            width: 600
        });
    });
}

chrome.contextMenus.create({
    title: "Add to Pinterest",
    contexts: ["image"],
    onclick: pin
});