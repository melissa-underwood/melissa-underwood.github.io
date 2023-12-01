let header = `
<div class="header-icon">
<a href="/"><img src="/Assets/Images/author.jpg"></a>
</div>

<h1 id="header-title">MELISSA UNDERWOOD</h1>
<h2 id="header-email">melissanneunderwood@gmail.com</h2>

<div id="quick-links" class="quick-links">
<a href="/about.html"><button>About</button></a>
<a href="/resume.html"><button>Resume</button></a>
<a href=""><button><s>Projects</s></button></a>
</div>

<div id="side-links" class="side-links">
<span id="social-links">
<a href="https://www.instagram.com/melscatparty/" target="_blank" class="fa-brands fa-instagram"></a>
<a href="https://github.com/melissa-underwood" target="_blank" class="fa-brands fa-github"></a>
<a href="https://www.tumblr.com/cogshell" target="_blank" class="fa-brands fa-tumblr"></a>
<a href="https://www.goodreads.com/user/show/78022394-m-u" target="_blank" class="fa-brands fa-goodreads"></a>
<a href="https://steamcommunity.com/id/cogshell/" target="_blank" class="fa-brands fa-steam"></a>
</span>
</div>
`;

let heads = `
<title>Melissa Underwood</title>
<link href="/Style/main.css" rel="stylesheet">
<link href="/Style/header.css" rel="stylesheet">
<link href="/Style/variables.css" rel="stylesheet">

<script src="/index.js"></script>

<!-- FONTS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;800&display=swap" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap" rel="stylesheet">


<!-- ICONS -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<meta name="viewport" content="width=device-width, initial-scale=1">
`;

let returnHome = `
<a href="/index.html"><button class="returnHome"> <span class="fa fa-home"></span> Back Home</button></a>
`;

let expandLinks = `
<a id="expandLinks" onclick="toggleSocialLinks()" class="expandLinks fa fa-plus"></a>
`;

//<a id="returnHome" href="/" class="fa fa-home"><span class="backhome">Back Home<span></a>
//<a class="fa fa-chevron-down"></a>

function initializeHeader() {
    document.getElementById("header").innerHTML = header;
}

function initializeHead() {
    document.head.innerHTML += heads;
}

// CENTER'S HEADER CARD
function centerHeader() {
    cont = document.getElementById("container");
    cont.style.top = "50%";
    //cont.style.webkitTransform = "translateY(-50%)";
    //cont.style.mstransform = "translateY(-50%)";
    cont.style.transform = "translateY(-50%)";

}

function pageHeader() {
    document.getElementById("quick-links").innerHTML = returnHome;

    let tmp = document.getElementById("side-links").innerHTML;
    document.getElementById("side-links").innerHTML = expandLinks + tmp;

    document.getElementById("social-links").style.display = "none";

}

function toggleSocialLinks() {
    let socialmediaList = document.getElementById("social-links");
    let expandList = document.getElementById("expandLinks").classList;

    if (expandList.contains("fa-plus")) {
        socialmediaList.style.display = "inline";
        expandList.remove("fa-plus");
        expandList.add("fa-minus");
    } else if (expandList.contains("fa-minus")) {
        socialmediaList.style.display = "none";
        expandList.remove("fa-minus");
        expandList.add("fa-plus");

    }
}

function backtoTop() {
    document.getElementById("container").scrollIntoView({behavior:"smooth"});
}

