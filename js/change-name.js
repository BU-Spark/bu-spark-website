function changeText(name) {
		switch (name) {
				case "fiona":
						document.getElementById("person").innerHTML = "Fiona Whittington";
						document.getElementById("person-title").innerHTML = "Head of Student Innovation";
						document.getElementById("description").innerHTML = "Fiona is a sophomore at Boston University studying advertising and computer science. She is currently the President & Founder of Girls Who Code BU, Vice President of the Global App Initiative and Boston University Representative for InnovateEDU. She is passionate about science, technology, communications and travel. Her dream job would combine her interests in science and technology and her passion for design and innovation with the goal of bettering communities around the world.";
						break;
				
				case "lawrence":
						document.getElementById("person").innerHTML = "Lawrence Luo";
						document.getElementById("person-title").innerHTML = "Head of Technical Operations";
						document.getElementById("description").innerHTML = "Lawrence is a junior at Boston University studying computer science. BU Spark! allows him to combine his passion for building creative, practical apps with his desire to empower his peers to develop their own projects. As a Student Ventures Consultant for Spark!, he connects companies with real-world projects that help motivated teams of students who want to work on them and provides students who have budding projects with technical suggestions. In his free time, Lawrence develops his own applications with the help of Open Web, BU’s most intimate app development group, and enjoys singing and performing with his cappella group In Achord.";
						break;
				
				case "ziba":
						document.getElementById("person").innerHTML = "Ziba Cranmer";
						document.getElementById("person-title").innerHTML = "Director";
						document.getElementById("description").innerHTML = "Ziba is an innovation leader with a diverse range of experience spanning the public and private sectors. Prior to BU, Ziba served as Executive Director of a multimillion dollar initiative supporting public sector innovators in cities across the United States to combat trafficking through technology. Ziba spent over 11 years working in business including at Nike Inc. where she was a Portfolio Director in the Sustainable Business and Innovation Lab, an internal venture unit responsible for making investments with the potential for business and social impact. As a Vice President at Cone Communications, Ziba served as an advisor and account lead to technology startups and many leading global brands including Fedex, Disney, and Hilton Worldwide.";
						break;
				
				case "taylor":
						document.getElementById("fellow-name").innerHTML = "Taylor Potye";
						document.getElementById("project-title").innerHTML = "Project Name";
						document.getElementById("fellow-description").innerHTML = "Taylor is a senior at Boston University majoring in computer science and minoring in dance and biology. At BU, she is a member of Fusion Hip Hop Dance Troupe and Dance Theatre Group. She loves to exercise and her creativity is in everything she does. She hopes to seek more projects that combine her passion for both technology and dance.";
						break;
				
				case "helen":
						document.getElementById("fellow-name").innerHTML = "Helen Zhang";
						document.getElementById("project-title").innerHTML = "Project Name";
						document.getElementById("fellow-description").innerHTML = "";
						break;
				
				case "dharmesh":
						document.getElementById("fellow-name").innerHTML = "Dharmesh";
						document.getElementById("project-title").innerHTML = "Project Name";
						document.getElementById("fellow-description").innerHTML = "Dharmesh is a senior at Boston University studying Computer Science and International Relations. He is the President & Founder of the BU Flying Club and hopes to combine passion for aviation and technology through innovation";
						break;
				
				case "general":
						document.getElementById("consultation").innerHTML = "General Consultations";
						document.getElementById("consultation-description").innerHTML = "Are you just getting started? Do you have an idea or even an app or a program that you are excited about and want to take to the next level? We offer general consultations to help get you chart out your path!";
						break;
				
					case "technical":
						document.getElementById("consultation").innerHTML = "Technical Consultations";
						document.getElementById("consultation-description").innerHTML = "Do you need your code reviewed? Are you considering what language or cloud storage service to use? Set up a meeting with our team of technology experts and we will try to get you answers to your queries.";
						break;
				
					case "marketing":
						document.getElementById("consultation").innerHTML = "Marketing Consultations";
						document.getElementById("consultation-description").innerHTML = "Do you need help building a marketing plan for your crowdfunding project? Do you need to develop an advertising and marketing strategy for acquiring users for your new app? Sign up for marketing, communications or branding help from our team of partner experts.";
						break;
				
					case "space":
						document.getElementById("resource").innerHTML = "Innovation Space";
						document.getElementById("description").innerHTML = "Want to reserve a room in the Spark! office? Make a reservation through our portal!";
						break;
				
					case "collab":
						document.getElementById("resource").innerHTML = "Spark! Conference Room";
						document.getElementById("description").innerHTML = "A space for our community of innovators to meet with their teammates and mentors. Advanced level access to space is limited to individuals engaged formally in a Spark! program or through leaders on the Ignite Student Council.";
						break;
				
					case "conference":
						document.getElementById("resource").innerHTML = "Spark! Innovator Co-Working Space";
						document.getElementById("description").innerHTML = "A coworking space in the BU Spark! office that our community of innovators and their team members can reserve to work on their projects.  Spark! Innovators can access desk space, lockers, or reserve the conference room or lounge for a community event. You can apply on our website for access to this space!";
						break;
				
					case "cowork":
						document.getElementById("resource").innerHTML = "Spark! Collaboratory";
						document.getElementById("description").innerHTML = "Get to know our community of innovators and visit our collaboratory open from 9 am - 5 pm to all students. Hang out on a beanie bag and talk to other like-minded individuals about your emerging product ideas or the latest technology trends. For students formally participating in a BU Spark! Program, visit our resource page on our website to apply for the use of the office after hours as well as to reserve it for community events.";
						break;
				
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
						document.getElementById("person").innerHTML = "STAFF";
						document.getElementById("description").innerHTML = "BU Spark! Staff";
		}
}