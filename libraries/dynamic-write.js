var typeWriteIndex = 0;

function titleAdd(title, id, classId, level) {
    var title = document.write("<h"+level+" id="+id+" class="+classId+">"+title+"</h"+level+">")
}

function paraAdd(para, id, classId) {
    var para = document.write("<p id="+id+" class="+classId+">"+para+"</p>")
}

function embedAdd(url, id, classId, width, height) {
    document.write("<embed src="+url+" width="+width+" height="+height+" id="+id+" class="+classId+"></embed>")
}

function removeContent(id) {
    id.remove()
}

function imgAdd(src, id, classId, width, height, alt) {
    document.write("<img src="+src+" id="+id+" class="+classId+" width="+width+" height="+height+" alt="+alt+">")
}

function changeText(text, id) {
    document.getElementById(id).innerHTML = text;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
