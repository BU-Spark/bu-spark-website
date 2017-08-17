function changeText(name) {
		switch (name) {
				case "class-project":
						document.getElementById("project-name").innerHTML = "Class Project";
				    document.getElementById("project-description").innerHTML = "Projects are typically focused on one technical skill. A student team typically works for 50-80 hours over the course of a 6-8 week period as part of a class assignment. Technical focus determined by the class assignment and varies by semester";
            break;  
            
       	case "consulting-project":
            document.getElementById("project-name").innerHTML = "Consulting Project";
						document.getElementById("project-description").innerHTML = "Scope and technical focus driven by project partner. Past projects range from app development, evaluation of machine learning models, and creating a image filtering microservice.";
            break; 
            
        case "hackathon-project":
            document.getElementById("project-name").innerHTML = "Hackathon Project";
						document.getElementById("project-description").innerHTML = "Sumbit a project that can be project on in 24 hours. Help us provide prizes and event costs for sponsored hackathons, such as BostonHacks, Hack the Gap, or SheHacks Boston.";
            break;
				
       	default:
           document.getElementById("project-name").innerHTML = "Projects";
           document.getElementById("project-description").innerHTML = "Do you have data that needs to be scraped and analyzed? A machine learning model that needs to be improved or tested? An app developed? BU Spark! offers a unique opportunity for organizations to advance their technology projects by partnering with a diverse team(s) of Boston University computer science or engineering students."
        }
}