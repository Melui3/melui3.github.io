class Quote {
    constructor(driver, team, dialogue) {
        this.driver = driver;
        this.team = team;
        this.dialogue = dialogue;
    };


}
// Mapping des couleurs par écurie
const teamColors = {
    "Red Bull Racing": "#3871c3",
    "Ferrari": "#ee0034",
    "Mercedes": "#00D2BE",
    "McLaren": "#FF8700",
    "Aston Martin": "#2D826D",
    "Alpine": "#0090FF",
    "Williams": "#005AFF",
    "AlphaTauri": "#4E7C9B",
    "Alfa Romeo": "#900000",
    "Haas": "#B6BABD"
};

const quotes = [
    new Quote(
        "Charles Leclerc",
        "Ferrari",
        [
            {speaker: "driver", text:"Is there a leakage?"},
            {speaker: "engineer", text:"A leakage of what?"},
            {speaker: "driver", text:"I have the seat full of water! Like full of water!"},
            {speaker: "engineer", text:"Must be the water."},
            {speaker: "driver", text:"Let's add that to the words of wisdom"},
        ]
    ),
    new Quote(
        "Lando Norris",
        "McLaren",
        [
            {speaker: "engineer", text:"What damage do you have?"},
            {speaker: "driver", text:"Uh, talent."},
        ]
    ),
    new Quote(
        "Max Verstappen",
        "Red Bull Racing",
        [
            {speaker: "driver", text:"What an unbelieavable race, guys. You know what that is? Simply lovely, I tell you that."},
        ]
    ),
    new Quote(
        "Oscar Piastri",
        "McLaren",
        [
            {speaker: "driver", text:"Yep. Move of a world champion that one."}
        ]
    ),
    new Quote(
        "Charles Leclerc",
        "Ferrari",
        [
            {speaker: "driver", text:"I am stupid."}
        ]
    ),
    new Quote(
        "Lando Norris",
        "McLaren",
        [
            {speaker: "driver", text:"Uh huh. Simply lovely, uh? Well done."}
        ]
    ),
    new Quote(
        "Lando Norris",
        "McLaren",
        [
            {speaker: "driver", text:"It's Friday then... It's Saturday, Sunday WHAT?! It's Friday then... It's Saturday, Sunday WHAT?!"}
        ]
    )
];

// Export (pour utilisation dans script.js)
export { quotes, teamColors };
