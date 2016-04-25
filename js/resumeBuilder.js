var skills = ["lady swagger", "wordpress", "php", "html5/css3"];
var bio = {
    "name" : "Princess",
    "role": "Front-End Developer",
    "contact": "missruthie@gmail.com",
    "skills":skills,
    "welcome message": "A hearty welcome",
    "picUrl": "images/dummy.jpg"
};
bio.name="Queen";
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact);
$("#header").prepend(formattedRole).prepend(formattedName);
// $("#footerContacts").append(formattedContact);

var work ={
};

work.position="research tech";
work.employer="Thomas Jefferson University";
work.years="Less than one";
work.city="Philadelphia";

var education={

};
education["name"]="Boston College";
education["city"]="Chestnut Hill, Ma";

$("#main").append(work["position"]).append(education["name"]);

