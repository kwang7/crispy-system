var pic = document.getElementById("vimage");

var clicked = function(e){
    if (e.toElement == this){
        drawDot(e.offsetX, e.offsetY)
    }
}

var drawDot = function(xc,yc){
    var cl=document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
    );
    cl.setAttribute("cx", xc);
    cl.setAttribute("cy", yc);
    cl.setAttribute("r",50);
    cl.setAttribute("fill","pink");
    cl.setAttribute("stroke","black");
    cl.addEventListener("click",change);
    pic.appendChild(cl)
}

var change = function(e){
    e.preventDefault();
    this.setAttribute("fill","red")
    this.addEventListener("click", randDot)
}

var randDot = function(e){
    pic.removeChild(this)
    drawDot( Math.random()*500, Math.random()*500 )
}

var clear = function(e){
    pic.innerHTML="";   
}

pic.addEventListener("click", clicked);

c = document.getElementById("clr")
c.addEventListener("click",clear)
