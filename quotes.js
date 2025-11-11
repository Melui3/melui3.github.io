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
    "Alpine": "#2b9dd6",
    "Williams": "#005AFF",
    "AlphaTauri": "#4E7C9B",
    "Alfa Romeo": "#900000",
    "Haas": "#B6BABD"
};

let quotes = [
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
    ),
    new Quote(
        "Sebastian Vettel",
        "Red Bull Racing",
        [
            {speaker: "engineer", text:"Seb, you're in the wrong engine mode."},
            {speaker: "driver", text:"Copy that, switching now."}
        ]
    ),
    new Quote(
        "Lewis Hamilton",
        "Mercedes",
        [
            {speaker: "engineer", text:"Pace yourself, keep the tires alive."},
            {speaker: "driver", text:"Understood, managing tires."}
        ]
    ),
    new Quote(
        "Fernando Alonso",
        "Alpine",
        [
            {speaker: "driver", text:"I need more power, they're faster on the straight."},
            {speaker: "engineer", text:"We're monitoring, Fernando. Push safely."}
        ]
    ),
    new Quote(
        "Kimi Räikkönen",
        "Alfa Romeo",
        [
            {speaker: "engineer", text:"Kimi, we need to lift and coast."},
            {speaker: "driver", text:"Leave me alone, I know what I'm doing."}
        ]
    ),
    new Quote(
        "Valtteri Bottas",
        "Mercedes",
        [
            {speaker: "engineer", text:"Valtteri, push now, the gap is closing."},
            {speaker: "driver", text:"Pushing, but the tires are gone!"}
        ]
    ),
    new Quote(
        "Daniel Ricciardo",
        "McLaren",
        [
            {speaker: "driver", text:"This car feels like a rocket today!"},
            {speaker: "engineer", text:"Copy that, keep it steady out there!"}
        ]
    ),
    new Quote(
        "Max Verstappen",
        "Red Bull Racing",
        [
            {speaker: "engineer", text:"Max, push, push, push!"},
            {speaker: "driver", text:"I’m flat out, we’re good!"}
        ]
    ),
    new Quote(
        "Charles Leclerc",
        "Ferrari",
        [
            {speaker: "engineer", text:"We have a slow puncture."},
            {speaker: "driver", text:"Copy that, bringing it back."}
        ]
    ),
    new Quote(
        "Sebastian Vettel",
        "Aston Martin",
        [
            {speaker: "driver", text:"Why is it raining again?"},
            {speaker: "engineer", text:"Stay calm, we’ll adjust strategy."}
        ]
    ),
    new Quote(
        "Fernando Alonso",
        "Alpine",
        [
            {speaker: "engineer", text:"You need to save fuel, Fernando."},
            {speaker: "driver", text:"I’m saving, but I’m also fighting them!"}
        ]
    ),
    new Quote(
        "Lewis Hamilton",
        "Mercedes",
        [
            {speaker: "driver", text:"I can’t see him in the mirrors!"},
            {speaker: "engineer", text:"Copy, stay focused, keep your line."}
        ]
    ),
    new Quote(
        "Lando Norris",
        "McLaren",
        [
            {speaker: "engineer", text:"Push now, gap is 1.2 seconds."},
            {speaker: "driver", text:"I’m on it, the car feels amazing."}
        ]
    ),
    new Quote(
        "Kimi Räikkönen",
        "Alfa Romeo",
        [
            {speaker: "engineer", text:"Kimi, we need to lift."},
            {speaker: "driver", text:"Leave me alone, I know what I’m doing."}
        ]
    ),
    new Quote(
        "Daniel Ricciardo",
        "McLaren",
        [
            {speaker: "driver", text:"This corner feels like a slide."},
            {speaker: "engineer", text:"Take it easy, you’ve got this!"}
        ]
    ),
    new Quote(
        "Valtteri Bottas",
        "Mercedes",
        [
            {speaker: "engineer", text:"Valtteri, check the ERS deployment."},
            {speaker: "driver", text:"Copy, adjusting now."}
        ]
    ),
    new Quote(
        "Max Verstappen",
        "Red Bull Racing",
        [
            { speaker: "engineer", text: "I never thought I’d be saying this Max, but from the pit‑lane you are now race leader…" },
            { speaker: "driver", text: "Not bad." }
        ]
    ),
    new Quote(
        "Lewis Hamilton",
        "Ferrari",
        [
            { speaker: "driver", text: "Have a tea‑break while you're at it." },
            { speaker: "engineer", text: "Lewis, your tyres are overheating behind Charles." }
        ]
    ),
    new Quote(
        "Lewis Hamilton",
        "Ferrari",
        [
            { speaker: "driver", text: "Where are we?" },
            { speaker: "engineer", text: "That’s San Diego." }
        ]
    ),
    new Quote(
        "Daniel Ricciardo",
        "McLaren",
        [
            { speaker: "driver", text: "And for anyone who thought I left… I never left. Just moved aside for a while." }
        ]
    ),
    new Quote(
        "Sebastian Vettel",
        "Red Bull Racing",
        [
            { speaker: "driver", text: "There’s something loose between my legs… apart from the obvious." }
        ]
    ),
    new Quote(
        "Lance Stroll",
        "Aston Martin",
        [
            { speaker: "driver", text: "No... I'm in the f****** wall." }
        ]
    ),
];

// Export (pour utilisation dans script.js)
export { quotes, teamColors };
