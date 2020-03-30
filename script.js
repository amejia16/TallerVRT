function randomPalette(){
    var randomNumber = Math.floor((Math.random() * 360));
    var randomePalette =[];
    //alert(randomePalette.length)
    for(i=0; i<5; i++){
        var tempColor = -1;
        if(i==0){
            randomePalette[i] = randomNumber;
        }else{
            tempColor = randomePalette[randomePalette.length-1] + 72;
            if(tempColor > 359){
                randomePalette[i] = tempColor - 359;
            }else{
                randomePalette[i] = tempColor;
            }
        }
    }
    
    //alert(randomNumber  + "\n" + randomePalette +"\n");

    generateRules(randomePalette, 1, 0.75);
}



function generateRules(ranPal, s, v){
    var ranPal;
    var s;
    var v;
    var colorRec = [];
    var colorRgbRec = [];
    //alert(ranPal[0]);
    

    for(i=0; i < 5;i++){
        //alert(ranPal[i]);
        colorRec[i] = ranPal[i]/360;
        colorRgbRec[i] = hsvToRgb(colorRec[i], s, v);
        
        var num = i + 1;
        document.getElementById("color"+num).style.color = "rgb"+"("+colorRgbRec[i]+")";
    }

    //alert(ranPal[1]);
    //alert(colorRgbRec[1]);

    document.getElementById("css-rules").value = "\n.website-background{ color: "+colorRgbRec[0]+";} \n\n.element-text{ color: "+colorRgbRec[1]+";} \n\n.element-border{ border-color: "+colorRgbRec[2]+";} \n\n.element-background{ background-color: "+colorRgbRec[3]+";} \n\n.header{ color: "+colorRgbRec[4]+";}";

    //var color1 = ranPal[0]/120;
    //var color2 = ranPal[1]/120;
    //var color3 = ranPal[2]/120;
    //var color4 = ranPal[3]/120;
    //var color5 = ranPal[4]/120;

    //var color1rgb = hsvToRgb(color1, s, v);
    //var color2rgb = hsvToRgb(color2, s, v);
    //var color3rgb = hsvToRgb(color3, s, v);
    //var color4rgb = hsvToRgb(color4, s, v);
    //var color5rgb = hsvToRgb(color5, s, v);

    //var color1hex = "#" + componentToHex(color1rgb[0]) + componentToHex(color1rgb[1]) + componentToHex(color1rgb[2]);
    //var color2hex = "#" + componentToHex(color2rgb[0]) + componentToHex(color2rgb[1]) + componentToHex(color2rgb[2]);
    //var color3hex = "#" + componentToHex(color3rgb[0]) + componentToHex(color3rgb[1]) + componentToHex(color3rgb[2]);
    //var color4hex = "#" + componentToHex(color4rgb[0]) + componentToHex(color4rgb[1]) + componentToHex(color4rgb[2]);
    //var color5hex = "#" + componentToHex(color5rgb[0]) + componentToHex(color5rgb[1]) + componentToHex(color5rgb[2]);

    //alert(color1hex);
    //document.getElementById("color1").style.color = "rgb"+"("+color1rgb+")";
    //document.getElementById("color2").style.color = "rgb"+"("+color2rgb+")";
    //document.getElementById("color3").style.color = "rgb"+"("+color3rgb+")";
    //document.getElementById("color4").style.color = "rgb"+"("+color4rgb+")";
    //document.getElementById("color5").style.color = "rgb"+"("+color5rgb+")";
    
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }


function clean(){
    var randomePaletteClean = [0,0,0,0,0];
    generateRules(randomePaletteClean, 0, 0);
}