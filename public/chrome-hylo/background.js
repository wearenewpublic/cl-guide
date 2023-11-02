chrome.action.onClicked.addListener((tab) => {
    if (tab?.url?.includes("hylo.com")) {
        console.log('Injecting the script');
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['inject.js']
        });
    } else {
        console.log('Unrecognized domain. Not injecting.', tab)
    }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo?.status === 'complete' && tab?.url?.includes("hylo.com")) {
        console.log('New Hylo tab opened. Injecting the script.');
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['inject.js']
        });
    } else {
        console.log('Tab changed, but it is not a Hylo tab. Not injecting.', {tabId, tab, changeInfo})
    }
});

console.log('Hello from background.js')