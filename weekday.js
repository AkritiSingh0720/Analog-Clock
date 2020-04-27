function getWeekday(n,day)
{
    var today = new Date();
    var presentDay = today.getDay();
    var presentTime = today.getTime();
    if(day < presentDay)
    {
        day = day +6;
    }

    var diff = day - present day;

    var daysAfter = (n-1)*7 + diff;

    var timeAfter = presentTime+daysAfter*86400000;

    var next date = new Date(timeAfter);
}

// if you want to get 1st sunday from today just call this
   var sunday1 = getWeekday(1,0)

// to get second monday from today 
   var monday2 = getWeekday(2,1)