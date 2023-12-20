let indexHTML = `
<div class="card box10-purple">
<h1>Hi</h1>
<p>Welcome to my page! It's under major construction right now but feel free to look around!</p>
</div>
`;

let aboutHTML = `

`;


let resumeHTML = `
<div id="education" class="card box25-red">
<span class="card-title"><p>Education</p></span>
    <h1>Kent State University</h1>
    <h2>Bachelor of Science in Computer Science</h2>
    <h3>Relevant Courses</h3>
    <ul>
        <li>CSI: Procedural Programming, Object Oriented Programming</li>
        <li>CSII: Data Structures</li>
        <li>CSIII: Programming Patterns</li>
        <li>Intro to Database System Design</li>
        <li>Software Engineering</li>
    </ul>
</div>

<div id="work-history" class="card box25-green">
<span class="card-title"><p>Work History</p></span>
    <h1>Vitalia Senior Living</h1>
        <h2>Receptionist</h2>
        <h2>Server</h2>
    <h1>Walmart</h1>
</div>

<div id="skills" class="card box25-yellow">
<span class="card-title"><p>Skills</p></span>
    <h1>General</h1>
    <ul>
        <li>Quick Learner</li>
        <li>Multitasking Skills</li>
        <li>Microsoft Office</li>
        <li>Photoshop</li>
    </ul>
    <h1>Languages</h1>
    <ul>
        <li>English</li>
        <li>Filipino (Cebuano/Bisaya)</li>
    </ul>
    <h1>Programming Languages</h1>
    <ul>
        <li>C++</li>
        <li>HTML, CSS, Javascript</li>
    </ul>
</div>
`;

let projectsHTML = `

`;

/* initialize index */
document.getElementById("main-container").innerHTML = indexHTML;

function loadAbout() {
    document.getElementById("main-container").innerHTML = aboutHTML;
}

function loadResume() {
    document.getElementById("main-container").innerHTML = resumeHTML;
}

function loadProjects() {
    document.getElementById("main-container").innerHTML = projectsHTML;

}