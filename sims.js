class Sim {
constructor(imgsrc, name, career, aspiration, traits) {
    this.imgsrc = imgsrc;
    this.name = name;
    this.career = career;
    this.aspiration = aspiration;
    this.traits = traits;
}

/* displays description when hovering over portrait */
fullBio() {
    let bio = ``;

    bio += `<div class="sim">`;
    bio += `<img src="` + this.imgsrc + `">`;
    bio += `<h1 class="sim-name">` + this.name +`</h1>`;

    bio += `<div class="description">`;
        bio += `<h2>Career</h2>`;
        bio += `<li>` + this.career + `</li>`;
        bio += `<h2>Aspiration</h2>`;
        bio += `<li>` + this.aspiration + `</li>`;
        bio += `<h2>Traits (` + this.traits.length + `)</h2>`;
            bio += `<div id="traits" class="traits">`;
                for (let i = 0; i < this.traits.length; ++i) {
                    bio += `<li>` + this.traits[i] + `</li>`;
                };
            bio += `</div>`;
    bio += `</div>`;

    bio += `</div>`;

    return bio;
}

/* displays only image and portrait */
imageOnly(spareClass) {
    let bio = ``;

    bio += `<div class="sim `+ spareClass +`">`;
    bio += `<img src="` + this.imgsrc + `">`;
    bio += `<h1>` + this.name +`</h1>`;
    bio += `</div>`;

    return bio;
}
}

// reading sims json file
import data from './Data/grody.json' assert { type: 'json' };
// sims json holder
let grodySims = [];

// html containers
let gen1 = document.getElementById("gen1");
let gen2 = document.getElementById("gen2");
let gen3 = document.getElementById("gen3");

// sim relationships
let relMarried = `<img class="relationshipStatus" src="/Assets/Relationship/Married.png">`;
let relDating = `<img class="relationshipStatus" src="/Assets/Relationship/Dating.png">`;

// DEBUG
console.log(data);
console.log(grodySims);

// FUNCTIONS
function convert(x) {
    return new Sim(x.imgsrc, x.name, x.career, x.aspiration, x.traits);
}

function findSim(name) {
    for (let i = 0; i < grodySims.length; ++i) {
        if (grodySims[i].name == name) {
            return grodySims[i];
        }
    }
     return new Sim("/Assets/ERROR.png", name);
}

// CONVERTING JSON TO SIM ARRAY
for (let i = 0; i < data.genOne.length; ++i) { grodySims.push(convert(data.genOne[i])); }
for (let i = 0; i < data.genTwo.length; ++i) { grodySims.push(convert(data.genTwo[i])); }
for (let i = 0; i < data.genThree.length; ++i) { grodySims.push(convert(data.genThree[i])); }
for (let i = 0; i < data.pets.length; ++i) { grodySims.push(convert(data.pets[i])); }
for (let i = 0; i < data.spares.length; ++i) { grodySims.push(convert(data.spares[i])); }

// PRINTING GENERATION ONE
gen1.innerHTML += findSim("Izaiah").imageOnly("");
gen1.innerHTML += relMarried;
gen1.innerHTML += findSim("Monique").imageOnly("");
gen1.innerHTML += findSim("Mr. Whiskers").imageOnly("pet");

// PRINTING GENERATION TWO
gen2.innerHTML += findSim("Daniel").imageOnly("spare");
gen2.innerHTML += findSim("Sawyer").imageOnly("spare");

gen2.innerHTML += `<h2>Heir & Spouse</h2>`
gen2.innerHTML += findSim("Bella").imageOnly("pet");
gen2.innerHTML += findSim("Leila").fullBio();
gen2.innerHTML += relMarried;
gen2.innerHTML += findSim("Arthur Morgan").fullBio();
gen2.innerHTML += findSim("Boston Morgan").imageOnly("pet");

// PRINTING GENERATION THREE
gen3.innerHTML += findSim("Mollie").imageOnly("spare");
gen3.innerHTML += findSim("Marissa").imageOnly("spare");
gen3.innerHTML += findSim("Marcus").imageOnly("spare");

gen3.innerHTML += `<h2>Heir & Spouse</h2>`
gen3.innerHTML += findSim("Marshall").fullBio();
gen3.innerHTML += relDating;
gen3.innerHTML += findSim("Hazel Bradshaw").imageOnly("");





