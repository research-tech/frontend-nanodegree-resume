var skills = ["lady swagger", "wordpress", "php", "html5/css3"];
var bio = {
    "name" : "Princess",
    "role": "Front-End Developer",
    "contact": "missruthie@gmail.com",
    "skills":skills,
    "welcome message": "A hearty welcome",
    "picUrl": "images/pic"
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact);
$("#header").prepend(formattedRole).prepend(formattedName);
// $("#footerContacts").append(formattedContact);