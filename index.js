function changeColor(){
        let hex_numbers =["0", "1", "2", "3","4", "5", "6", "7","8", "9", "A", "B","C", "D", "E", "F"];
        var hexcode='';
        var hexcode2='';
        for(var i=0;i<6;i++){
                let random_index=Math.floor(Math.random()*hex_numbers.length);
                let random_index2=Math.floor(Math.random()*hex_numbers.length);
                hexcode+=hex_numbers[random_index];
                hexcode2+=hex_numbers[random_index2];
        }

        document.getElementById("hex-code").innerHTML=hexcode;
        document.getElementById("hex-code2").innerHTML=hexcode2;
        document.getElementsByTagName("body")[0].style.background=  "linear-gradient(to right, #"+hexcode2+", #"+hexcode+")";
}
