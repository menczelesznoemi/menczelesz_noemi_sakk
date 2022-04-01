window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}


function $(elem) {
    return document.querySelectorAll(elem);
}

function init() {
    
    tablarajz();
    
}

function tablarajz() {
    let tabla = ID("tabla");

    let sakk = "";
    for (i = 0; i < 8; i++) {
        
        sakk += '<tr>';
        
        
        
        for (j = 0; j < 8; j++) {
          
       
            if (((i + j) % 2) == 0)
                szin = "#FFFFFF"
            else
                szin = "#000000"
            sakk += "<td bgcolor='"+szin+"'>  </td>";
           
        }
        sakk += "</tr>";
      
    }
    
    tabla.innerHTML = sakk;

    
}