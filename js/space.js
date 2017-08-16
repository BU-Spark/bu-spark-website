    function changeText(name) {
        switch (name) {
            case "space":
                document.getElementById("resource").innerHTML = "Innovation Space"
                document.getElementById("description").innerHTML = "Want to reserve a room in the Spark! office? Make a reservation through our portal!";
            case "collab":
                document.getElementById("resource").innerHTML = "Spark! Conference Room"
                document.getElementById("description").innerHTML = "A space for our community of innovators to meet with their teammates and mentors. Advanced level access to space is limited to individuals engaged formally in a Spark! program or through leaders on the Ignite Student Council.";
                break;
            case "conference":
                document.getElementById("resource").innerHTML = "Spark! Innovator Co-Working Space"
                document.getElementById("description").innerHTML = "A coworking space in the BU Spark! office that our community of innovators and their team members can reserve to work on their projects.  Spark! Innovators can access desk space, lockers, or reserve the conference room or lounge for a community event. You can apply on our website for access to this space!";
                break;
            case "cowork":
                document.getElementById("resource").innerHTML = "Spark! Collaboratory";
                document.getElementById("description").innerHTML = "Get to know our community of innovators and visit our collaboratory open from 9 am - 5 pm to all students. Hang out on a beanie bag and talk to other like-minded individuals about your emerging product ideas or the latest technology trends. For students formally participating in a BU Spark! Program, visit our resource page on our website to apply for the use of the office after hours as well as to reserve it for community events.";
                break;
            default:
                document.getElementById("resource").innerHTML = "Resources";
                document.getElementById("description").innerHTML = "Being a part of the Spark! community provides you with a breadth of resources and opportunities to cultivate learning and help realize your ideas"
        }
    }