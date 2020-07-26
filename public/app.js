var list = document.getElementById("list")
function additems(){
    var addtext = document.getElementById("inputText")
    
    var li = document.createElement("li")
    var litext = document.createTextNode(inputText.value)
     li.appendChild(litext)
    list.appendChild(li)
    // console.log(list)
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("Delete")
    delbtn.setAttribute("class","deletebtn")
    delbtn.setAttribute("onclick","delet(this)")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)
    list.appendChild(li)
    addtext.value = ""
    // console.log(li)
    var editbtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editbtn.setAttribute("class","editbtn")
    editbtn.setAttribute("onclick","editfun(this)")
    editbtn.appendChild(editText)
    li.appendChild(editbtn)
    list.appendChild(li)
    
}
function delet(a){
a.parentNode.remove()
console.log(a)
}
function deleteAll(){
list.innerHTML = ""
}
function editfun(b){
    var inp = prompt("Please Edit value", b.parentNode.firstChild.nodeValue)
    b.parentNode.firstChild.nodeValue = inp
    console.log(b)
}