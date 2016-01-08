var name = "Andi Buchanan"
var role = "Web Developer"
var skills = ["html", "css", "JavaScript"]

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(skills);