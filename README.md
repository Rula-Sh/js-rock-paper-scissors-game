# Rock Paper Scissors 🧱 📄 ✂️

A classic Rock Paper Scissors game where you compete against the computer. Each round, you'll see both player and computer selections, track your score in real-time, and review previous match results.

## Features ✨

### Game Setup 🎮

- **Flexible Win Conditions** - Choose your winning target:
  - Custom input: Set your own score target
  - Random: Let the computer decide the winning score
  - Infinite: Play endlessly without a score limit

### Gameplay 🕹️

- **vs Computer** - Challenge the computer with random choices each round
- **Visual Feedback** - Clear visual indicators showing both player and computer selections
- **Real-time Score Tracking** - Dynamic score updates for both player and computer
- **Game History** - View results of previous matches in an interactive history log

### Visual Effects 🎨

- **Confetti Celebration** - Enjoy a fireworks confetti animation when you win! 🎊
- **Modal Interfaces** - Clean modal design for game setup and final results
- **Input Validation** - Helpful popup notifications for invalid winning target inputs

## Key Concepts Used 🧩

- **DOM Manipulation**: `document.getElementById()`, `.style`, `.textContent`, `.value`, `.checked`
- **Event Handling**: `.addEventListener()` for user interactions
- **Event Delegation**: Efficient event handling with `e.target`
- **Randomization**: `Math.floor()` & `Math.random()` for computer choices
- **Control Flow**: Conditional logic (`if/else`), Switch statements, Ternary operators
- **Timing Functions**: `window.setInterval()` & `clearInterval()` for winning animation
- **Dynamic Content**: `.createElement()` and `.after()` for game history
- **External Libraries**: `canvas-confetti` for win animations

## Programming Languages Used 🛠️

- HTML
- CSS
- JavaScript

## Screenshots 📸

### Selecting Winning Target

![Selecting the winning target type in Rock Paper Scissors](images/js-rock-paper-scissors-select-winning-target.png)

### Game Play (with visible Game History)

![Main Rock Paper Scissors gameplay interface](images/js-rock-paper-scissors-game-play.png)

### Winning The Game

![Victory screen showing "YOU WON" message with confetti animation](images/js-rock-paper-scissors-winning-the-game.png)
