
var bio = {
  "name" : "Andi",
  "role" : "Web Developer",
  "skills" : ["html", "css", "JavaScript"],
  "contact" : "andicbuchanan@gmail.com",
  "image" : "https://andi-crb.github.io/me.jpg",
  "welcome" : "hi there",
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContact = HTMLemail.replace("%data%", bio.contact);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
var formattedImage = HTMLbioPic.replace("%data%", bio.image);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedContact);
$("#header").append(formattedSkills);
$("#header").append(formattedImage);
$("#header").append(formattedWelcome);