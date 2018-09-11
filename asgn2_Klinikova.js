var $ = function (id) 
{
    return document.getElementById(id);
}

var processInfo = function()
{
    var date = new Date;
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var firstName = $('firstname').value;
    var lastName = $('lastname').value;
    var numPets = $('numpets').value;
    var pets = '';
	var err = 0;
    if (firstName == '')
    {
        $('firstname_error').innerHTML = "Please enter first name";
        err = 1;
    }
    if (lastName == '')
    {
        $('lastname_error').innerHTML = "Please enter last name";
        err = 1;
    } 
    if(isNaN(numPets) || numPets == '')
    { 
        $('numpets_error').innerHTML = "Please enter the number of pets you have";
        err = 1;
    }

    for(cntr = 1; cntr <=3; cntr++)
    {
        var petname = '';
        var petid = "pet" + cntr;
        petname = $(petid).value;
        if(petname != "")
        {
            pets += " Your Pet #" + cntr + " named " + petname + ". ";
        }
        
    }
    if(err == 0)
    {
        $('message').innerHTML = "Your Name is listed " + lastName + ", " + firstName + " and today's date is " + month.toString() + "-" + day.toString() + "-" + year.toString() + "." + pets;
    }
}

window.onload = function () 
{
    $("mybutton").onclick = processInfo;
}