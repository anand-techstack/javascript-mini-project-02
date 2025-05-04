# 🕒 Digital Clock

This is a simple, lightweight **Digital Clock** built using HTML, CSS, BOOTSTRAP and JAVASCRIPT. It updates in real-time and displays the current time in a 12-hour format with AM/PM notation.

## 🔧 Features

- Displays current hours, minutes, and seconds
- Updates every second (real-time)
- 12-hour format with AM/PM
- Minimal and clean UI (you can customize it)

## 🚀 Live Preview

You can view a live version here: [Live Demo](#)  
<!-- Replace `#` with your GitHub Pages or deployment link -->

## 📁 Project Structure
### digital-clock/
### ├── index.html
### ├── style.css
### └── script.js


## 🧠 How It Works

- JavaScript's `Date` object fetches the current time.
- Time is converted to 12-hour format using `hours % 12 || 12`.
- Leading zeros are added to hours, minutes, and seconds for proper formatting.
- Time is displayed in separate HTML elements with IDs: `hours`, `minutes`, `seconds`, and `text` (for AM/PM).

## 📄 Example HTML Structure

```html
<div id="clock">
  <span id="hours">00</span> :
  <span id="minutes">00</span> :
  <span id="seconds">00</span>
  <span id="text">AM</span>
</div>


