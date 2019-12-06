function GetCurrentYear()
{
    var date = new Date();
    var currentYear = date.getFullYear();

    document.getElementById("copyrightdate").innerHTML = currentYear;
}

function GetModifiedDate()
{
    var modifiedDate = document.lastModified;

    document.getElementById("date").innerHTML = modifiedDate;
}

function UpdateDates()
{
    GetCurrentYear();
    GetModifiedDate();
}