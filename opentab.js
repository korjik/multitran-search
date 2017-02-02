function OpenTab() {
  window.open('http://www.multitran.ru/c/m.exe?CL=1&s=' + encodeURIComponent(document.getElementById('text').value)); 
}

document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn');
    btn.addEventListener('click', OpenTab);

    var text = document.getElementById('text');
    text.addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        OpenTab();
      }
    });
});
