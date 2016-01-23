
var bio = {
  "name" : "Andi Buchanan",
  "role" : "Web Developer",
  "skills" : ["html", "css", "JavaScript"],
  "contacts" : {
    "email" : "andicbuchanan@gmail.com",
    "github" : "andi-crb",
    "twitter" : "@andicbuchanan",
    "location" : "Wellington"
  },
  "bioPic" : "https://andi-crb.github.io/me.jpg",
  "welcomeMessage" : "Hi there"
}

var education = {
  "schools": [
  {
    "name" : "Enspiral DevAcademy",
    "location" : "Wellington",
    "majors" : "Web Development",
    "graduationYear" : "2016"
  },
  {
    "name": "Victoria University",
    "location" : "Wellington",
    "degree" : "Master of Arts",
    "majors" : "English",
    "graduationYear" : "2015"
  }
  ]
}

var work = {
  "jobs" : [
  {
    "title" : "Graduation Manager",
    "employer" : "Victoria University of Wellington",
    "location" : "Wellington",
    "dates" : "2012-2015",
    "description" : "Managing processes around the award of qualifications."
  },
  {
    "title" : "Senior Administrator",
    "employer" : "Victoria University of Wellington",
    "location" : "Wellington",
    "dates" : "2009-2012",
    "description" : "Senior Administrator for a post-experience programme."
  }
  ]
}

var project = {
  "projects" : [
  {
    "title" : "Capricious Magazine",
    "dates" : "2015-2016",
    "description" : "SFF magazine",
    "images" : ["http://www.capricioussf.org/wp-content/uploads/2015/12/CapriciousCover002-1-212x300.png", "http://www.capricioussf.org/wp-content/uploads/2015/09/CapriciousCover1-medium-212x300.jpg"]
  }
  ]
}



  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

  
  $("#header").append(formattedName);
  $("#header").append(formattedRole);
  $("#header").append(formatedEmail);
  $("#header").append(formatedGithub);
  $("#header").append(formattedLocation);
  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);

  

function displayWork (){
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}

}

function inName(name) {
  name - name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();

    return name[0]+" "+name[1];
}


  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }   
  
}

$('#main').append(internationalizeButton);

displayWork();

$("#mapDiv").append(googleMap);