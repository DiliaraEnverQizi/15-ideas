window.addEventListener('load',calculateTime);
function calculateTime(){
        let date=new Date();
        var dayNumber=date.getDay();
        let hour=date.getHours();
        let minute=date.getMinutes();
        let month=date.getMonth();
        let ampm=hour>=12?'PM':'AM';
        let dayNames=["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let monthNames=["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
        let dayNumber2=date.getDate();
        let year=date.getFullYear();

        hour=hour%12;
        
        hour=hour?hour:'12';
        hour=hour<10?'0'+hour:hour;
        minute=minute<10?'0'+minute:minute;

        document.getElementById("day").innerHTML=dayNames[dayNumber];
        document.getElementById("hour").innerHTML=hour;
        document.getElementById("minute").innerHTML=minute;
        document.getElementById("ampm").innerHTML=ampm;
        document.getElementById("month").innerHTML=monthNames[month];
        document.getElementById("date2").innerHTML=dayNumber2;
        document.getElementById("year").innerHTML=year;

        setTimeout(calculateTime,200);
}
