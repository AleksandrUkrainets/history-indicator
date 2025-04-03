/**
 * History Indicator Chrome Extension
 * -----------------------------------
 * Highlights whether the currently open webpage has been visited before.
 * Shows a green icon if the page was visited more than once,
 * otherwise shows a yellow icon.
 * 
 * Tooltip displays the total number of visits and timestamps.
 * 
 * Author: Ukrainets Oleksandr
 * Repository: https://github.com/<your-username>/history-indicator
 * License: MIT
 */

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  updateIconBasedOnHistory(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete") {
    updateIconBasedOnHistory(tabId);
  }
});

async function updateIconBasedOnHistory(tabId) {
  chrome.tabs.get(tabId, (tab) => {
    if (!tab.url || !tab.url.startsWith('http')) return;
    
    chrome.history.getVisits({ url: tab.url }, (visits) => {
      const hasOldVisit = visits.length > 1;

      const icon = hasOldVisit ? "icons/green.png" : "icons/yellow.png";

      let tooltip = "Not visited before";
      if (visits.length > 0) {
        let times = visits.sort(item => item.visitTime).reverse().map(item => "    - " + new Date(item.visitTime).toLocaleString()  + "\n");
        tooltip = "Visits: " + visits.length + "\n"
                             + "Visited: "+ "\n"
                             + times + "\n";
      }

      chrome.action.setIcon({
        tabId,
        path: {
          16: icon,
          32: icon
        }
      });

      chrome.action.setTitle({
        tabId,
        title: tooltip
      });
    });
  });
}