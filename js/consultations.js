function changeText(name) {
    switch (name) {
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
        default:
            document.getElementById("resource").innerHTML = "Resources";
            document.getElementById("description").innerHTML = "Being a part of the Spark! community provides you with a breadth of resources and opportunities to cultivate learning and help realize your ideas"
    }
}