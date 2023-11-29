let header = `
<div class="header-icon">
<a href="/"><img src="/Assets/Images/author.jpg"></a>
</div>

<h1 id="header-title">MELISSA UNDERWOOD</h1>
<h2 id="header-email">melissanneunderwood@gmail.com</h2>

<div id="quick-links" class="quick-links">
<button><s>About</s></button>
<a href="/resume.html"><button>Resume</button></a>
<a href=""><button><s>Projects</s></button></a>
</div>

<div id="side-links" class="side-links">
<span id="social-links">
<a href="https://www.instagram.com/melscatparty/" target="_blank" class="fa-brands fa-instagram"></a>
<a href="https://github.com/melissa-underwood" target="_blank" class="fa-brands fa-github"></a>
<a href="/Views/tumblr.html" target="_blank" class="fa-brands fa-tumblr"></a>
<a href="https://www.goodreads.com/user/show/78022394-m-u" target="_blank" class="fa-brands fa-goodreads"></a>
<a href="https://steamcommunity.com/id/cogshell/" target="_blank" class="fa-brands fa-steam"></a>
</span>
</div>
`;

let returnHome = `
<a id="returnHome" href="/" class="returnHome fa fa-home"><span class="backhome">Back Home<span></a>
`;

let expandLinks = `
<a id="expandLinks" onclick="toggleSocialLinks()" class="expandLinks fa fa-plus"></a>
`;

//<a id="returnHome" href="/" class="fa fa-home"><span class="backhome">Back Home<span></a>
//<a class="fa fa-chevron-down"></a>

function initializeHeader() {
    document.getElementById("header").innerHTML = header;
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
    document.getElementById("quick-links").style.visibility = "hidden";

    let tmp = document.getElementById("side-links").innerHTML;
    document.getElementById("side-links").innerHTML = returnHome + tmp + expandLinks;

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

