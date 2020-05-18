import { monthNames } from "./Constant";

export function getEndStartDateInMMDDYYYY(date){
    var splittedString = date.split("/");
    var dd = splittedString[0];
    var mm = splittedString[1];
    var yyyy = splittedString[2];
    return mm+"-"+dd+"-"+yyyy;
  }

export function getDateString(timeStamp){
  var date = new Date(timeStamp);
  var dateString  = monthNames[date.getMonth()];
  dateString += " ";
  dateString += date.getFullYear();
  dateString += ", ";
  dateString += date.getDate();
  return dateString;
}

export function getDaysDifference(date1, date2){
var Difference_In_Time = date2.getTime() - date1.getTime(); 
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
if(Math.floor(Difference_In_Days)<0){
    return ( -1 * Math.floor(Difference_In_Days)) +" days ahead";
}
else if( Math.floor(Difference_In_Days)>0){
    return (Math.floor(Difference_In_Days))+" days ago";
}
else{
    return " live now";
}
}
