function changeName(name) {
    switch (name) {
        case "fiona":
                document.getElementById("person").innerHTML = "Fiona Whittington";
                document.getElementById("person-title").innerHTML = "Head of Student Innovation";
                document.getElementById("description").innerHTML = "Fiona Whittington is a junior at Boston University studying computer science and advertising. She is the Director of SheHacks and Hack The Gap, President of Girls Who Code, Head of Student Innovation at BU Spark and member of the BU Machine Intelligence Community. She is passionate about science, technology, communications, and travel. Her dream job would be to combine her interests in science and technology with her passion for design and innovation with the goal of bettering communities around the world. In her free time, Fiona enjoys running on along the Charles River, studying the stock market, and experimenting with mixed reality technologies.";
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

        case "alyssa":
                document.getElementById("person").innerHTML = "Alyssa Espiritu";
                document.getElementById("person-title").innerHTML = "Head of Communications and Marketing";
                document.getElementById("description").innerHTML = "Alyssa is a junior at Boston University majoring in public relations with a concentration in computer science. She has interned for Boston University's PRLab and Karbo Communications, a tech PR firm in San Francisco. For PRLab, Alyssa has worked with various organizations within the Boston area. She also worked with B2B technology for Karbo Communications, creating media lists, researching competitor and client news, and managing social media.  Alyssa is currently a PR and Communications Director for a start-up called Movez App, a social event platform. She is passionate about creative marketing, strategic PR, and innovative technology. Alyssa hopes to start her own marketing and branding firm for consumer tech and entertainment. In her free time, Alyssa enjoys browsing through fashion magazines and blogs, playing volleyball, and keeping up with pop-culture. ";
                break;
        case "candace":
                document.getElementById("person").innerHTML = "Candace Williams";
                document.getElementById("person-title").innerHTML = "Technical Intern";
                document.getElementById("description").innerHTML = "Candace is a sophomore currently enrolled in Match Charter Public High School (down the street from Boston University). She aspires to major in the field of computer science during college, and eventually get a job in that field. She is currently working as an intern at BU Spark!, an initiative to support student driven innovation and entrepreneurship in computer science, computer engineering and related disciplines, the beginning of what she hopes to be a long career in the tech industry.";
                break;

        case "taylor":
                document.getElementById("fellow-name").innerHTML = "Taylor Potye";
                document.getElementById("project-title").innerHTML = "BU Dance App";
                document.getElementById("fellow-description").innerHTML = "Taylor is a senior at Boston University majoring in computer science and minoring in dance and biology. At BU, she is a member of Fusion Hip Hop Dance Troupe and Dance Theatre Group. She loves to exercise and her creativity is in everything she does. She hopes to seek more projects that combine her passion for both technology and dance.";
                document.getElementById("project-description").innerHTML= "Taylor aims to create an app that lists what dance classes/events are available depending on your location. Let's say that I am in the Boston area, the app would list classes in a certain mile radius to my location that would include information such where the class is taking place, the choreographer, the style of dance, times, and how much the class costs. Local studios, dance teams, conventions, competitions, master choreographers, basically anyone who is teaching could post on this app and let everyone know!";
                break;

        case "helen":
                document.getElementById("fellow-name").innerHTML = "Helen Zhang";
                document.getElementById("project-title").innerHTML = "Ava";
                document.getElementById("fellow-description").innerHTML = "Originally an economics student at Baruch, her first internship at then startup Mogul sparked her interest in learning how to design and bring tech ideas to life. As a result, Helen transferred to BU to pursue computer science and is currently a rising senior. She recently completed an internship at NASA where she spent ten weeks building a voice AI chat-bot named Ava.";
                document.getElementById("project-description").innerHTML = "Helen aims to create a voice AI with Amazon’s Alexa Voice Service that can students can talk to and use to learn about clubs, events, schedule planning and much more (depending on what features seem useful to add).The chat bot will be able to understand a user’s intent based on certain key-words or phrases, and respond accordingly. Students may ask questions like: I like drawing, poetry, and biking (etc)—what clubs are there for me? Who is Professor {Name}?";
                break;

        case "dharmesh":
                document.getElementById("fellow-name").innerHTML = "Dharmesh Tarapore";
                document.getElementById("project-title").innerHTML = "Proactive Collision Avoidance Algorithm";
                document.getElementById("fellow-description").innerHTML = "Dharmesh is a senior at Boston University studying Computer Science and International Relations. He is the President & Founder of the BU Flying Club and hopes to combine passion for aviation and technology through innovation";
                document.getElementById("project-description").innerHTML= "Dharmesh and Vicent Wahl aim to create a proactive collision avoidance algorithm implementation that provides conflict resolution advisories to general aviation pilots by leveraging ADS-B information.";
                break;

        case "vincent":
                document.getElementById("fellow-name").innerHTML = "Vincent Wahl";
                document.getElementById("project-title").innerHTML = "Proactive Collision Avoidance Algorithm";
                document.getElementById("fellow-description").innerHTML = "Vincent is a junior at Boston University studying computer science. He has recently worked as a software developer for Norsk Titanium, and has previously worked with computer aided manufacturing, served in the Norwegian Armed Forces, and worked as a head sailing coach. He is passionate about skiing, mountaineering, and sailing, all of which has been very important to him throughout his entire life. His dream job would combine his interest for artificial intelligence, big data, and finance to make software that will allow companies to be able to make optimal business decisions from the vast amount of data available.";
                document.getElementById("project-description").innerHTML= "Vincent and Dharmesh Tarapore aim to create a proactive collision avoidance algorithm implementation that provides conflict resolution advisories to general aviation pilots by leveraging ADS-B information.";
                break;

        case "chris":
                document.getElementById("fellow-name").innerHTML = "Christopher Ackerman";
                document.getElementById("project-title").innerHTML = "Modular Car Sensor";
                document.getElementById("fellow-description").innerHTML = "I am a Junior at Questom School of Business dual concentrating in Management Information Systems and Entrepreneurship. I'm currently a full time student and a part time Web Developer with OneMark, a branding and web design company based in Lexington, MA. My passion for entrepreneurship stems from a belief that the most successful companies are started with a simple question: Why can't we do this simpler? Taking this question and running with it, I've filled my time learning everything from from systems architecture to graphic design, hoping to one day use those skills to make something simpler! ";
                document.getElementById("project-description").innerHTML= "Chris and his partner Max aim to create a modular car sensor product and application to aid drivers with parking. By using simple radar detection sensors, this application aims to close the gap between older cars that lack more modern safety technology and modern smart cars. The app will be free and will only require a unique alphanumeric code that will come with sensors the customer will purchase from us. The modular aspect will come from requiring different sensors for different abilities, such as parallel parking aid vs simple parking sensors.";
                break;

        case "warren-innovation-venture":
                document.getElementById("innovation-venture-studentname").innerHTML = "Warren Partridge";
                document.getElementById("innovation-venture-name").innerHTML = "Lewis";
                document.getElementById("innovation-venture-studentdescription").innerHTML = "Warren is a sophomore at Boston University studying computer science. He is Vice President of the Global App Initiative and Head of Mentoring Resources at BostonHacks. In his spare time, he enjoys running long distances, sketching on the esplanade, and making cool tech gadgets.";
                document.getElementById("innovation-venture-description").innerHTML= "Warren aims to create a for-profit mobile application, which he nicknames “Lewis” after the American explorer. Lewis would provide a platform for anyone to explore their local area and record accessible WiFi hotspots on a map. For example, a student might walk down Kendall Square and record all the open WiFi networks in the area, plus maybe one or two secure networks that they know the passwords to. Lewis users would interact with each other by selling and combining their self-created hotspot maps with each other. Ideally, over time, there could become one large useful map that everyone wants to buy. The target demographics for this app are business travelers who need reliable WiFi access and truck drivers/hobbyists who are happy to passively make maps. Profit could be made by taking a cut of all map transactions.";
                break;

        case "max-innovation-venture":
                document.getElementById("innovation-venture-studentname").innerHTML = "Max Mesirow";
                document.getElementById("innovation-venture-name").innerHTML = "Modular Car Sensor";
                document.getElementById("innovation-venture-studentdescription").innerHTML = "Max Mesirow is the president of BUILDS, the premier Computer Science club at BU. BUILDS offers a 24/7 maker space for students to work in. Every Wednesday at 7pm Builds will host a workshop or activity in MCS B26.";
                document.getElementById("innovation-venture-description").innerHTML= "Max and his partner Chris Ackerman aim to create a modular car sensor product and application to aid drivers with parking. By using simple radar detection sensors, this application aims to close the gap between older cars that lack more modern safety technology and modern smart cars. The app will be free and will only require a unique alphanumeric code that will come with sensors the customer will purchase from us. The modular aspect will come from requiring different sensors for different abilities, such as parallel parking aid vs simple parking sensors.";
                break;

        case "lawrence-innovation-venture":
                document.getElementById("innovation-venture-studentname").innerHTML = "Lawrence Luo";
                document.getElementById("innovation-venture-name").innerHTML = "Arc";
                document.getElementById("innovation-venture-studentdescription").innerHTML = "Lawrence is a junior at Boston University studying computer science. BU Spark! allows him to combine his passion for building creative, practical apps with his desire to empower his peers to develop their own projects. As a Student Ventures Consultant for Spark!, he connects companies with real-world projects that help motivated teams of students who want to work on them and provides students who have budding projects with technical suggestions. In his free time, Lawrence develops his own applications with the help of Open Web, BU’s most intimate app development group, and enjoys singing and performing with his cappella group In Achord.";
                document.getElementById("innovation-venture-description").innerHTML= "A Cappella groups, which are typically organized in non-hierarchical and non-corporate ways, oftentimes lack a centralized system for organizing their repertoire: rehearsal versions of songs, arrangements, recordings, videos, and choreography. Oftentimes, the most recent versions of these files can only be found after searching through a complicated array of mediums that a cappella groups use to communicate, such as email, group/individual text messages, and Facebook. Because of this inefficiency for group members to find the rehearsal materials they need, accountability is often left to the individual, which is only as good as any member is willing to put effort into. Furthermore, the lack of an efficient and music-first platform to host the group's repertoire makes the job of the Music Director difficult, who must repeat work when asked the same questions from group members at different times. My solution for this problem is an A Cappella 'manager' mobile app, Arc, which will be a beautiful, intuitive app that will store videos, choreography formations, lyrics, notes, audio recordings, starting pitch - and any other data you'd ever need associated with a song - under the name of a song. This would be integrated with Google Drive using its API. My goal is for this app to be an all-in-one package for A Cappella needs as well, so that there will also be an option for the Music Director to create and save setlists by dragging and dropping songs, as well as a stage formation creator for the choreographer to save songs.";
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
            document.getElementById("club-title").innerHTML = "Open Web";
            document.getElementById("council-description").innerHTML = "Hiya! I’m Sean, and I’m going into my senior year of college at Boston University. I currently serve as a Course Assistant for CS111 and I’m working towards building a CS community with student developers at Open Web and BU Spark. I am also working with a team of organizers to throw down Boston University’s third hackathon this upcoming fall. In my free time, I enjoy making fun vlogs to share with the internet, skateboarding, breakdancing, and playing video games.";
            break;

        case "brooke":
            document.getElementById("council-name").innerHTML = "Brooke Mullen";
            document.getElementById("club-title").innerHTML = "Girls Who Code BU";
            document.getElementById("council-description").innerHTML = "Brooke is a Junior studying Computer Science. She holds the position of Vice President for Girls Who Code Boston University and a member of several other BU computer science clubs. This past summer she worked in a data science company in Pune, India.";
            break;

        case "council-helen":
            document.getElementById("council-name").innerHTML = "Helen Zhang";
            document.getElementById("club-title").innerHTML = "Girls Who Code BU";
            document.getElementById("council-description").innerHTML = "Originally an economics student at Baruch, her first internship at then startup Mogul sparked her interest in learning how to design and bring tech ideas to life. As a result, Helen transferred to BU to pursue computer science and is currently a rising senior. She recently completed an internship at NASA where she spent ten weeks building a voice AI chat-bot named Ava.";
            break;

        case "council-fiona":
            document.getElementById("council-name").innerHTML = "Fiona Whittington";
            document.getElementById("club-title").innerHTML = "Head of the Ignite Leadership Council";
            document.getElementById("council-description").innerHTML = "Fiona Whittington is a junior at Boston University studying computer science and advertising. She is the Director of SheHacks and Hack The Gap, President of Girls Who Code, Head of Student Innovation at BU Spark and member of the BU Machine Intelligence Community. She is passionate about science, technology, communications, and travel. Her dream job would be to combine her interests in science and technology with her passion for design and innovation with the goal of bettering communities around the world. In her free time, Fiona enjoys running on along the Charles River, studying the stock market, and experimenting with mixed reality technologies.";
            break;

        case "council-lawrence":
            document.getElementById("council-name").innerHTML = "Lawrence Luo";
            document.getElementById("club-title").innerHTML = "Open Web";
            document.getElementById("council-description").innerHTML = "Lawrence is a junior at Boston University studying computer science. BU Spark! allows him to combine his passion for building creative, practical apps with his desire to empower his peers to develop their own projects. As a Student Ventures Consultant for Spark!, he connects companies with real-world projects that help motivated teams of students who want to work on them and provides students who have budding projects with technical suggestions. In his free time, Lawrence develops his own applications with the help of Open Web, BU’s most intimate app development group, and enjoys singing and performing with his cappella group In Achord.";
            break;

        case "lucas":
            document.getElementById("council-name").innerHTML = "Lucas Watson";
            document.getElementById("club-title").innerHTML = "BostonHacks";
            document.getElementById("council-description").innerHTML = "Lucas Watson is a Junior studying Mechanical Engineering and Physics. At BU, he leads a team to organize the annual BostonHacks hackathon, in addition to producing The Common Thread Podcast and being a member of OpenWeb. Outside of BU, he works on robotics software at Piaggio Fast Forward, and generally enjoys tinkering and creating things.";
            break;

        case "max":
            document.getElementById("council-name").innerHTML = "Max Mesirow";
            document.getElementById("club-title").innerHTML = "BUILDS";
            document.getElementById("council-description").innerHTML = "Max Mesirow is the president of BUILDS, the premier Computer Science club at BU. BUILDS offers a 24/7 maker space for students to work in. Every Wednesday at 7pm Builds will host a workshop or activity in MCS B26.";
            break;

        case "rudy":
            document.getElementById("council-name").innerHTML = "Rudhra Raveendran";
            document.getElementById("club-title").innerHTML = "BostonHacks";
            document.getElementById("council-description").innerHTML = "I’m a Computer Science Major and Dance Minor, expecting to graduate in May, 2020. For the 2017-2018 school year, I’ll be the President of MakeBU and the Treasurer of Bulletproof Funk. Outside of programming and dancing, I enjoy gaming, playing guitar, and soccer, although I won’t presume to say I’m very good at any of them.";
            break;

        case "anna":
            document.getElementById("council-name").innerHTML = "Anna Goncharova";
            document.getElementById("club-title").innerHTML = "Women In Computer Science";
            document.getElementById("council-description").innerHTML = "Anna Goncharova is a rising Senior majoring in Computer Science. She has interned with IBM, Pegasystems, HubSpot and Twitter. Anna has extensive experience with web development, amassed over the course of her academic and professional careers, with projects in areas ranging from User Interface development to Big Data Management and Application Security. Anna is open to learning more about full-stack Web Development opportunities.";
            break;
        case "chandler":
            document.getElementById("council-name").innerHTML = "Chandler Zhang";
            document.getElementById("club-title").innerHTML = "BU AR/VR Club";
            document.getElementById("council-description").innerHTML = "Hi there, call me Chandler.<br>I came to the U.S. for high school when I was 14.<br>I drink 2 gallons of water every day.<br>I'm starting an AR/VR community in BU. I sometimes use the name 'Mountain' to confuse people. <br>I also think holograms are the most incredible thing ever. <br>Don't you agree? If not, I will see you in the streets.<br> Oh no, I mean, see you in our meet ups. We need to talk. Seriously.";
            break;
        case "Jingning":
            document.getElementById("council-name").innerHTML = "Jingning (Alicia) Hong";
            document.getElementById("club-title").innerHTML = "BU AR/VR Club";
            document.getElementById("council-description").innerHTML = "Alicia is a graduate student at Boston University. She is a strong believer in the power of virtual reality to create awakening experiences and bolster human intelligence. Her work at BU explores the mind-and-body relationship with different media platforms in VR using biometric and psychological measurements. Her life goal is to define a spiritual language that further understanding between people. She is working for Amazon Alexa AI device this summer in 2017. After graduation, she wants to work on a bleeding-edge technology that provides a meaningful service and explores fluid stage of human-computer interaction, via independent work or in corporate environment.";
            break;
        case "chloe":
            document.getElementById("council-name").innerHTML = "Chole Kaubisch";
            document.getElementById("club-title").innerHTML = "Machine Intelligence Community";
            document.getElementById("council-description").innerHTML = "I’m a class of 2020 computer science major, representing the Boston University Machine Intelligence Community. Computer science has been my passion for years but I’ve only more recently gotten involved with artificial intelligence and machine learning. I’m interested in AI/ML because of its broad applicability outside of the field of computer science and because there is so much yet to be learned and I want to contribute to its research and development.";
            break;
        case "charles":
            document.getElementById("council-name").innerHTML = "Charles Ma";
            document.getElementById("club-title").innerHTML = "Machine Intelligence Community";
            document.getElementById("council-description").innerHTML = "Charles is a sophomore at Boston University studying finance and computer science. As a part of the council, Charles represents BU's newly formed Machine Intelligence Community, and hopes to help BU's tech community embrace machine learning and end imposter syndrome among students.";
            break;
        case "freddie":
            document.getElementById("council-name").innerHTML = "Freddie Vargus";
            document.getElementById("club-title").innerHTML = "Boston Drone Racing";
            document.getElementById("council-description").innerHTML = "Freddie is currently a senior at Boston University, studying Computer Science. He's passionate about Software Engineering and Quant Finance, with the occasional mix of Machine Learning. He's a member of the Boston Drone Racing club, leads BU Alpha, a Quant Research team at the BU Finance and Investment Club, and helps maintain Zipline, a Pythonic Algorithmic Trading Library built by Quantopian. Outside of school, Freddie enjoys playing soccer, muay thai, and 8-ball pool.";
            break;
        case "ryan":
            document.getElementById("council-name").innerHTML = "Ryan Chen";
            document.getElementById("club-title").innerHTML = "PC Gaming Club";
            document.getElementById("council-description").innerHTML = "Ryan is a senior at Boston University studying computer science. He is the current president of the PC Gaming Club and participates in various other clubs on campus. He has a wide range of interests, from music composition and cooking to snowboarding and esports. While fortunate enough to have visited many amazing places in his youth, he hopes to continue travelling after graduation now that he has a greater appreciation for culture.";
            break;
        case "natalie":
            document.getElementById("council-name").innerHTML = "Natalie Pienkowska";
            document.getElementById("club-title").innerHTML = "Global App Initiative";
            document.getElementById("council-description").innerHTML = "Natalie Pienkowska is a proud New Yorker that is going into her sophomore year at Boston University. She is currently studying Computer Science and Business Administration. In addition to venerating Mother Earth on a daily basis, her hobbies consist of reading books on psychology, watching videos of Elon Musk, and playing with her cat (although she has a severe cat allergy).";
            break;
        case "warren":
            document.getElementById("council-name").innerHTML = "Warren Partridge";
            document.getElementById("club-title").innerHTML = "Global App Initiative";
            document.getElementById("council-description").innerHTML = "Warren is a sophomore at Boston University studying computer science. He is Vice President of the Global App Initiative and Head of Mentoring Resources at BostonHacks. In his spare time, he enjoys running long distances, sketching on the esplanade, and making cool tech gadgets.";
            break;
        case "mariana":
            document.getElementById("council-name").innerHTML = "Mariana Garces Dematté";
            document.getElementById("club-title").innerHTML = "MakeBU";
            document.getElementById("council-description").innerHTML = "Mariana is a sophomore Computer Science major and Visual Arts minor, and currently holds the position of Vice-President for MakeBU. When she is not doing school work she is reading or painting.";
            break;
        default:
            document.getElementById("person").innerHTML = "STAFF";
            document.getElementById("description").innerHTML = "BU Spark! Staff";
    }
}