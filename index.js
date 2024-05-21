function uid(){
    return Math.random().toString(36).slice(-6);
}
uid()
var ids = []
document.getElementById("btn").addEventListener('click',() => {
    let value = document.getElementById("text").value;
    if(value == ''){
        alert("fill the value");
    }else{
        let uuid = uid();
        ids.concat({uuid:value})
        localStorage.setItem(uuid,value);
    }
});
document.getElementById("ref").addEventListener('click',() => {
    document.getElementById("store").innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let ii = localStorage.getItem(localStorage.key(i))
        var p = document.createElement("p")
        p.setAttribute("class","item")
        var text  = document.createTextNode(ii.toString());
        p.appendChild(text)
        document.getElementById("store").appendChild(p);
    }
});
document.getElementById("cl").addEventListener('click',() => {
    document.getElementById("store").innerHTML = '';
    localStorage.clear()
});