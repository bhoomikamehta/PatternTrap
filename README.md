# PatternTrap
An educational and interactive simulation game on Dark Patterns

Pattern Trap is a multi-task game and simulated website aimed to educate users about dark patterns: deceptive UI/UX practices that trick users into making unintentional choices

Simulated Website Experience:
* Users interact with a realistic website that mimics everyday tasks.
* Tasks include registering, logging in, subscribing, purchasing, etc.
* Dark patterns are embedded within these tasks.

How It Works:
* Users complete tasks without knowing which ones contain deceptive elements.
* If they fall for a dark pattern, it is recorded.
* They earn a better score if they identify and avoid a dark pattern.

Scoring & Feedback:
* After completing all tasks, users receive a detailed report.
* Breakdown of their Score
* Detailed list of which dark patterns they detected vs. missed in the game.
* Explanation of each pattern and why it’s deceptive.
* Tips on avoiding these patterns in real life.

Tech Stack: Web-based using JavaScript, HTML/CSS, React.js, Node.js, etc. TBD

High-Level Gamflow:

![Alt](/Pattern_Trap_HL_Gameflow.png "High-Level Gamflow")

Dev Notes
Open a terminal and navigate to the `/PatternTrap` directory then run `python3 -m http.server`
Open `localhost:8000` in a browser to view
Duplicate the `/template.html` file to quick start a new page