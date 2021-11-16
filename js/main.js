let figure = document.getElementById("figure");
picForm.mySelect.onchange = function(){
    figure.className = this.value;
   if (figure.classList.contains('triangle')) {
    figure.style.backgroundColor = "transparent";
   } else {
    figure.style.backgroundColor = figure.style.borderBottomColor;
   }
}

let btn = document.getElementById("btn");
btn.onclick=function(){
    let x = document.getElementById("myColor").value;
    if (figure.classList.contains('triangle')) {
        figure.style.backgroundColor = "transparent";
        figure.style.borderBottomColor = x;
    } else {
        figure.style.backgroundColor = x;
        figure.style.borderBottomColor = x;
    }
}