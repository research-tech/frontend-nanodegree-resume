var name="Ruthie P Floats";
var role="Web Developer";
var awesomethoughts="I am " +name +" and I am awesome.";
var funThoughts=awesomethoughts.replace("awesome", "fun");
console.log(funThoughts);
$('#main').append(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedName).append(formattedRole);