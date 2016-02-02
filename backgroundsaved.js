	var currentTime = new Date()
	var hours = currentTime.getHours()
	if(hours < 10){
		hours = "0"+hours
	}
	var minutes = currentTime.getMinutes()
	if(minutes < 10){
		minutes = "0"+minutes
	}
	var seconds = currentTime.getSeconds()
	if(seconds < 10){
		seconds = "0"+seconds
	}

    var enterdate = "2016-02-01_"
	var startTime = 182700
	var time = hours +""+ minutes +""+ seconds 

	var i = startTime
	var jesse = "JMartin"
console.log(minutes)
	console.log(i)
	console.log(time)

        i = time-60
	while ( i < time ){
		var string = i.toString()		



        var h = string.substring(0,2)
        var m = string.substring(2,4)
        var s = string.substring(4,6)
        console.log(h+m+s)
        

        
        var image = h+"."+m+"."+s;
        document.getElementById("topBorder").innerHTML+="<img src="+enterdate+image+".png />";


       
        
		i = i+1
	}


//+i.substring(0,2)+"."+i.substring(2,4)+"."+i.substring(4,6)

 function autoRefresh()
{
    window.location = window.location.href;
}
setInterval('autoRefresh()', 5000);


