// var name="Ruthie P Floats";
// var role="Web Developer";
// var awesomethoughts="I am " +name +" and I am awesome.";
// var funThoughts=awesomethoughts.replace("awesome", "fun");
// console.log(funThoughts);
// $('#main').append(funThoughts);
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// // $("#header").append(formattedName).append(formattedRole);
// $("#header").prepend(formattedRole).prepend(formattedName);

var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    //split the name into a first name and a last name
    nameArray = oldName.split(" ");
    var firstName = nameArray[0];
    var lastName = nameArray[1];
    //change the first char of firstName to capital and leave the rest lower case
    firstName = firstName.charAt(0).toUpperCase()+firstName.slice(1).toLowerCase();
    //add the processed first name with the all caps last name
    finalName = firstName + " " + lastName.toUpperCase();
    // Don't delete this line!
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));