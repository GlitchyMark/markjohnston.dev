export class DropdownObject {
    constructor(
        public name: string,
        public description: string,
        public link: string) {}
}

export const pages = [
    {
        name: "MarkJohnston.dev",
        description: "This website your on. First project using Angular and TypeScript. Hosted on AWS LightSail.",
        link: "https://markjohnston.dev",
        year: "2020",
        image: "assets/img/website.jpg"
    },
    {
        name: "C Compiler",
        description: "'Toy C' compiler for compiling C syntax code into JVM. Only supports strings, characters, and integer types. All expected operators are avaiable.",
        link: "https://github.com/MJ9001/Compiler-toyc",
        year: "2019",
        image: "assets/img/compiler.jpg"
    },
    {
        name: "Project-no (Android game)",
        description: "Team project. Made the physics and base of the game engine independetly.",
        link: "https://github.com/MJ9001/project-no",
        year: "2019",
        image: "assets/img/project-no.png"
    },
    {
        name: "Mips Emulator",
        description: "Developed an emulator and assembler for a subset of the MIPS architecture.",
        link: "https://github.com/MJ9001/Mips-Simulator/",
        year: "2019",
        image: "assets/img/mips.png"
    },
    {
        name: "LuteMod",
        description: "A simple mod for MORDHAU to implement playing of MIDI files on the lute through use of a function hook.",
        link: "https://github.com/MJ9001/LuteMod",
        year: "2018",
        image: "assets/img/lute.jpg"
    },
    {
        name: "Visualizer",
        description: "A visualizer to take windows device audio and visualize music to 32x8(256) pixel LEDs through serial COM.",
        link: "https://github.com/MJ9001/Visualizer",
        year: "2017",
        image: "assets/img/visualizer.png"
    },
    {
        name: "Game1",
        description: "A basic game made with C# and mono. Custom built physics and networking engine.",
        link: "https://github.com/MJ9001/OpenGLGame",
        year: "2016",
        image: "assets/img/game1.png"
    },
    {
        name: "Dogecoin Plugin",
        description: "Deposit and widthdraw dogecoin to a minecraft server. Can trade dogecoin and buy server donation ranks with dogecoin. Uses MySQL as a backend.",
        link: "https://github.com/MJ9001/Dogenation",
        year: "2014",
        image: "assets/img/dogecoin.jpg"
    }
];