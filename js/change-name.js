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
				case "sofia":
						document.getElementById("person").innerHTML = "Sofía Cintrón-Schroeder";
						document.getElementById("person-title").innerHTML = "Head of Finance";
						document.getElementById("description").innerHTML = "Sofía Cintrón-Schroeder is currently an undergraduate student at Boston University. She is 20 years old, originally from San Juan, Puerto Rico, entering her Junior year in college. She studies Mathematics with a concentration in Statistics and a minor in Economics, which motivated her to apply for an internship at BU Spark!.";
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
					case "sean":
						document.getElementById("council-name").innerHTML = "Sean Zheng";
						document.getElementById("council-description").innerHTML = "Hiya! I’m Sean, and I’m going into my senior year of college at Boston University. I currently serve as a Course Assistant for CS111 and I’m working towards building a CS community with student developers at Open Web and BU Spark. I am also working with a team of organizers to throw down Boston University’s third hackathon this upcoming fall. In my free time, I enjoy making fun vlogs to share with the internet, skateboarding, breakdancing, and playing video games.";
						break;
					case "brooke":
						document.getElementById("council-name").innerHTML = "Brooke Mullen";
						document.getElementById("council-description").innerHTML = "Brooke is a Junior studying Computer Science. She holds the position of Vice President for Girls Who Code Boston University and a member of several other BU computer science clubs. This past summer she worked in a data science company in Pune, India.";
						break;
					case "council-fiona":
						document.getElementById("council-name").innerHTML = "Fiona Whittington";
						document.getElementById("council-description").innerHTML = "Fiona is a rising Junior at Boston University studying advertising and computer science. She is currently the President & Founder of Girls Who Code BU, Vice President of the Global App Initiative and Boston University Representative for InnovateEDU. She is passionate about science, technology, communications and travel. Her dream job would combine her interests in science and technology and her passion for design and innovation with the goal of bettering communities around the world.";
						break;
					case "council-lawrence":
						document.getElementById("council-name").innerHTML = "Lawrence Luo";
						document.getElementById("council-description").innerHTML = "Insert Bio";
						break;
					case "lucas":
						document.getElementById("council-name").innerHTML = "Lucas Watson";
						document.getElementById("council-description").innerHTML = "Insert Bio";
						break;
					case "max":
						document.getElementById("council-name").innerHTML = "Max Mesirow";
						document.getElementById("council-description").innerHTML = "Max Mesirow is the president of BUILDS, the premier Computer Science club at BU. BUILDS offers a 24/7 maker space for students to work in. Every Wednesday at 7pm Builds will host a workshop or activity in MCS B26.";
						break;
					case "rudy":
						document.getElementById("council-name").innerHTML = "Rudhra Raveendran";
						document.getElementById("council-description").innerHTML = "I’m a Computer Science Major and Dance Minor, expecting to graduate in May, 2020. For the 2017-2018 school year, I’ll be the President of MakeBU and the Treasurer of Bulletproof Funk. Outside of programming and dancing, I enjoy gaming, playing guitar, and soccer, although I won’t presume to say I’m very good at any of them.";
						break;
					case "anna":
						document.getElementById("council-name").innerHTML = "Anna Goncharova";
						document.getElementById("council-description").innerHTML = "Anna Goncharova is a rising Senior majoring in Computer Science. She has interned with IBM, Pegasystems, HubSpot and Twitter. Anna has extensive experience with web development, amassed over the course of her academic and professional careers, with projects in areas ranging from User Interface development to Big Data Management and Application Security. Anna is open to learning more about full-stack Web Development opportunities.";
						break;
					case "chandler":
						document.getElementById("council-name").innerHTML = "Chandler Zhang";
						document.getElementById("council-description").innerHTML = "Hi there, call me Chandler.<br>I came to the U.S. for high school when I was 14.<br>I drink 2 gallons of water every day.<br>I'm starting an AR/VR community in BU. I sometimes use the name 'Mountain' to confuse people. <br>I also think holograms are the most incredible thing ever. <br>Don't you agree? If not, I will see you in the streets.<br> Oh no, I mean, see you in our meet ups. We need to talk. Seriously.";
						break;
					case "Jingning":
						document.getElementById("council-name").innerHTML = "Jingning (Alicia) Hong";
						document.getElementById("council-description").innerHTML = "Alicia is a graduate student at Boston University. She is a strong believer in the power of virtual reality to create awakening experiences and bolster human intelligence. Her work at BU explores the mind-and-body relationship with different media platforms in VR using biometric and psychological measurements. Her life goal is to define a spiritual language that further understanding between people. She is working for Amazon Alexa AI device this summer in 2017. After graduation, she wants to work on a bleeding-edge technology that provides a meaningful service and explores fluid stage of human-computer interaction, via independent work or in corporate environment.";
						break;
					case "chloe":
						document.getElementById("council-name").innerHTML = "Chole Kaubisch";
						document.getElementById("council-description").innerHTML = "I’m a class of 2020 computer science major, representing the Boston University Machine Intelligence Community. Computer science has been my passion for years but I’ve only more recently gotten involved with artificial intelligence and machine learning. I’m interested in AI/ML because of its broad applicability outside of the field of computer science and because there is so much yet to be learned and I want to contribute to its research and development.";
						break;
					case "charles":
						document.getElementById("council-name").innerHTML = "Charles Ma";
						document.getElementById("council-description").innerHTML = "Charles is a sophomore at Boston University studying finance and computer science. As a part of the council, Charles represents BU's newly formed Machine Intelligence Community, and hopes to help BU's tech community embrace machine learning and end imposter syndrome among students.";
						break;
					case "freddie":
						document.getElementById("council-name").innerHTML = "Freddie Vargus";
						document.getElementById("council-description").innerHTML = "Insert Bio";
						break;
					case "ryan":
						document.getElementById("council-name").innerHTML = "Ryan Chen";
						document.getElementById("council-description").innerHTML = "Insert Bio";
						break;
				default:
						document.getElementById("person").innerHTML = "STAFF";
						document.getElementById("description").innerHTML = "BU Spark! Staff";
		}
}