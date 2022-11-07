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

