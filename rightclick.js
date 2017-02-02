function sendSearch(selectedText) {
 var serviceCall = 'http://www.multitran.ru/c/m.exe?CL=1&s=' + encodeURIComponent(selectedText);
   window.open(serviceCall);
}

chrome.contextMenus.create(
 {
  title: "Find '%s' on Multitran!", 
  contexts:["selection"], 
  onclick: function(info, tab) {
      sendSearch(info.selectionText);
  }
 });
