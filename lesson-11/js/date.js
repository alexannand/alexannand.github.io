function GetCurrentYear() {
    var date = new Date();
    var currentYear = date.getFullYear();
    document.getElementById("copyrightdate").innerHTML = currentYear;
}

function GetModifiedDate() {
    var modifiedDate = document.lastModified;
    document.getElementById("datemodified").innerHTML = modifiedDate;
}

function printMonths() {
    var monthName = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    var daysName = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    
    var date = new Date(document.lastModified);

    var datePrint = daysName[date.getDay()] + ', ' + date.getDate() + ' ' + monthName[date.getMonth()] + ' ' + date.getFullYear();
    var divDate = document.getElementById('date');
    divDate.innerHTML = datePrint;
}

function UpdateDates() {
    GetCurrentYear();
    printMonths();
}