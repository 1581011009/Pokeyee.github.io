function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function ShowTime()
{
　document.getElementById('time').innerHTML = new Date();
　setTimeout('ShowTime()',1000);
}

function ChangeFontColor()
{
    var OriginalFont=document.getElementById("Font").innerHTML;
    document.getElementById("Font").innerHTML='<font color="red">'+OriginalFont+'</font>';
}
