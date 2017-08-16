function changeText(name) {
		switch (name) {
				case "microsoft":
						document.getElementById("case-study").innerHTML = "Microsfot Sports Analytics";
            document.getElementById("student-name").innerHTML = "Created by: Yaqin Huang, Sherman Y.L. Sze";
            document.getElementById("subsectiontitle-1").innerHTML = "Problem";
            document.getElementById("description").innerHTML = "With the inherent complexity of recruitment processes in the sports industry, where teams must synthesize an abundance of player data to make judgments on how they should manage their teams, there is a need for innovative and streamlined ways to derive player data.";
            document.getElementById("subsectiontitle-2").innerHTML = "Scope";
            document.getElementById("description2").innerHTML = "To solve this problem, BU Spark! assisted a team of student innovators and provided them with the resources and expertise to propose a new medium to discover undervalued players. By focusing its efforts on one medium, sports video games, the team was determined to see if games like EA Sports FIFA 17 could prove to be an accurate predictor of undervalued players in the industry.";
            break;  
       	case "converse":
            document.getElementById("case-study").innerHTML = "Optimizing Converse’s Social Media  Strategy";
            document.getElementById("student-name").innerHTML = "Created by: Mingxiang Cai, Junyi Du";
            document.getElementById("subsectiontitle-1").innerHTML = "Problem";
            document.getElementById("description").innerHTML = "Due to the slowing of sales in the Converse footwear brand, overlapped by competitors Adidas and Puma, there is a demand to understand how this competition manifest and where it is leading. As required by Converse, BU Spark! recruited a student team of innovators to find the cause of Converse’s slowed sales.";
            document.getElementById("subsectiontitle-2").innerHTML = "Scope";
            document.getElementById("description2").innerHTML = "The purpose of this project for the team was to use data analysis techniques to observe the current performance of the trend generating processes of Converse and their competitors on major social media platforms and develop product launch social media marketing strategies.";
            break;  
        case "aclu":
            document.getElementById("case-study").innerHTML = "Trends in Boston Policing and Crime Data";
            document.getElementById("student-name").innerHTML = "Created by: Kylie Moses, Eli Saracino";
            document.getElementById("subsectiontitle-1").innerHTML = "Problem";
            document.getElementById("description").innerHTML = "According to the on Field Interrogation and Observation reports given by the Boston Police Department, there are certain patterns in which the Boston Police patrols areas within and outside Boston. The ACLU reached out to BU Spark! To better understand what these patterns mean, as well as their implications on minorities in the Boston area. As a result, we recruited a team of talented student innovators to analyze the FIO reports and understand the implications of the Boston Police’s patrol patterns.";
            document.getElementById("subsectiontitle-2").innerHTML = "Scope";
            document.getElementById("description2").innerHTML = "Using reports provided by the Boston Police Department and the ACLU, we analyzed crime and policing trends in the Boston area from 2012-June 2015. We examined if the patterns surrounding crime in the area justified and explained the policing behavior determined by reports on Field Interrogation and Observation reports (FIO) given by the BPD. Understanding the age, race, and gender of individuals committing crimes compared to that of those who are being stopped was essential in identifying these patterns, as was looking into the districts that the crime and stops are taking place.";
            break;
       	default:
           document.getElementById("case-study").innerHTML = "Case Studies";
           document.getElementById("description").innerHTML = "Being a part of the Spark! community provides you with a breadth of resources and opportunities to cultivate learning and help realize your ideas"
        }
}