function aboutMe() {
    document.getElementById("card").innerHTML += "<span onclick=\"location.reload()\" class=\"material-symbols-outlined navi navi-back\">arrow_back_ios</span>";
    document.getElementById("navigation").setAttribute('style', 'display:none;');
    document.getElementById("header-email").setAttribute('style', 'display:none;');

    document.getElementById("header-title").innerHTML = "Hiya!";
}

function resume() {
    document.getElementById("card").innerHTML += "<span onclick=\"location.reload()\" class=\"material-symbols-outlined navi navi-back\">arrow_back_ios</span>";

    
    document.getElementById("content-icon").setAttribute('style', 'display:none;');
    document.getElementById("navigation").setAttribute('style', 'display:none;');

    document.getElementById("content").setAttribute('id', 'resume');

    const resume = document.getElementById("resume");

    resume.innerHTML += "<h2>Education/h2>";
    resume.innerHTML = "<h3>Kent State University</h3><p><li>August 2019 - Present</p>";

    resume.innerHTML += "<h2>Work History</h2>";
    resume.innerHTML += "<h3>Vitalia Rockside (Receptionist)</h3><li>Greet and welcome visitors upon arrival</li><li>Input work and resident requests into management platform (TELS) and Microsoft calendar</li><li>Kept clean and organized environment</li>";
    resume.innerHTML += "<h3>Vitalia Rockside (Server)</h3><li>Stressed heavy multitasking skills</li><li>Improved communication with coworkers and customers</li><li>Assisted in training new employees</li>";

    resume.innerHTML += "<h2>Skills</h2>";
    resume.innerHTML += "<li>Quick Learner</li>";
    resume.innerHTML += "<li>Multitasking Skills</li>";
    resume.innerHTML += "<li>C++, HTML, CSS, SQL</li>";
    resume.innerHTML += "<li>Microsoft Office</li>";

    resume.innerHTML += "<h2>Relevant Courses</h2>";
    resume.innerHTML += "<li>CSI: Procedural Programming, Object Oriented Programming</li>";
    resume.innerHTML += "<li>CSII: Data Structures</li>";
    resume.innerHTML += "<li>CSIII: Programming Patterns</li>";
    resume.innerHTML += "<li>Intro to Database System Design</li>";
    resume.innerHTML += "<li>Software Engineering</li>";

}