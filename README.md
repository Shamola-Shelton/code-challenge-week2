# code-challenge-week2
# Event Guest List Manager

A web application built with HTML, CSS, and JavaScript to manage an event guest list. Users can add guests (up to a limit of 10), categorize them as Friend, Family, or Colleague with color-coded tags, toggle RSVP status between "Attending" and "Not Attending," and remove guests from the list. The app dynamically updates the DOM without refreshing the browser, providing a seamless user experience.

## Author
  Shelton Shamola Juma

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [File Structure](#file-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Technologies](#technologies)
- [Testing](#testing)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Add Guests**: Users can input a guest’s name and select a category (Friend, Family, Colleague) via a form.
- **Guest List Limit**: Enforces a maximum of 10 guests, with an alert if the limit is exceeded.
- **Color-Coded Categories**: Guests are displayed with color-coded backgrounds:
  - Friend: Light blue
  - Family: Light pink
  - Colleague: Light green
- **Toggle RSVP**: Each guest has a "Toggle RSVP" button to switch between "Attending" and "Not Attending."
- **Remove Guests**: Each guest has a "Remove" button to delete them from the list.
- **Responsive Design**: The layout adapts to smaller screens (e.g., mobile devices) by stacking guest list items vertically.

## Demo

The application is hosted on GitHub Pages at:  
(https://github.com/Shamola-Shelton/phase1-code-challenge-week2)  

## File Structure

```

phase1-code-challenge-week2/
├── index.html        # HTML structure with form and guest list
├── style.css         # CSS styling for layout and color-coded categories
├── src/
│   └── index.js      # JavaScript logic for DOM manipulation and guest management
├── README.md         # Project documentation

````

## Setup

To run the project locally or contribute to it, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/Shamola-Shelton/phase1-code-challenge-week2
cd event-guest-list-manager
````

### Open the Application

* Open `index.html` in a web browser (e.g., Chrome, Firefox) by double-clicking the file or using a local server (e.g., VS Code’s Live Server extension).

* Alternatively, host it on GitHub Pages:

  * Go to **GitHub > Repository > Settings > Pages**.
  * Set “Source” to “Deploy from a branch,” select `main`, and choose `/ (root)`.
  * Access the live site after deployment.

### Optional: Install a Local Server

For development, use a local server to avoid CORS issues:

```bash
npm install -g live-server
live-server
```

This serves the project at [http://localhost:8080](http://localhost:8080).

## Usage

### Adding a Guest

* Enter a guest’s name in the input field.
* Select a category (Friend, Family, or Colleague) from the dropdown.
* Click **“Add Guest”** to add them to the list.
* The guest appears with their category, RSVP status (“Not Attending”), and buttons.

### Toggling RSVP

* Click the **“Toggle RSVP”** button next to a guest to switch their status between “Attending” and “Not Attending.”

### Removing a Guest

* Click the **“Remove”** button next to a guest to delete them from the list.

### Guest Limit

* If you try to add more than 10 guests, an alert will notify you that the list is full.

### Responsive Design

* On screens smaller than 500px, guest list items stack vertically for better readability.

## Technologies

* **HTML5**: Structures the form and guest list.
* **CSS3**: Styles the app with Flexbox for layout and color-coded category tags.
* **JavaScript (ES6)**: Handles form submission, DOM updates, and guest management using array methods like `find()` and `filter()`.

### Key JavaScript Features

* **Array Methods**:

  * `find()`: Locates a guest by ID for RSVP toggling (similar to the `superbowlWin()` function).
  * `filter()`: Removes guests from the array.
  * `forEach()`: Renders the guest list dynamically.
* **DOM Manipulation**: Updates the guest list without page refreshes.
* **Event Listeners**: Handles form submissions and button clicks using first-class functions.

## Testing

To ensure the application meets all requirements, test the following in a browser:

### Add Guests

* Add a guest (e.g., “Alice”, “Friend”). Verify they appear with a blue background, “Not Attending” status, and “Toggle RSVP”/“Remove” buttons.
* Add multiple guests with different categories (Friend, Family, Colleague) to confirm color-coding.

### RSVP Toggle

* Click **“Toggle RSVP”** for a guest. Check that the status switches between “Attending” and “Not Attending.”
* Toggle multiple times to ensure consistency.

### Remove Guests

* Click **“Remove”** for a guest. Verify they disappear from the list.
* Add a new guest afterward to ensure the list updates correctly.

### Guest Limit

* Add 10 guests, then try adding an 11th. Confirm an alert appears:
  *“Guest list is full! Maximum 10 guests allowed.”*
* Remove a guest, then add another to verify the limit works.

### Responsive Design

* Resize the browser to < 500px or use a mobile device. Ensure guest list items stack vertically.

### Edge Cases

* Submit an empty form (should be prevented by the `required` attribute).
* Add guests with spaces in names (e.g., “John Doe”). Verify trimming works.
* Test with an empty guest list (should display nothing).

*Use the browser’s developer tools (`F12 > Console`) to check for JavaScript errors.*

## Future Improvements

* **Persistence**: Store the guest list in `localStorage` to persist across page refreshes.
* **Edit Guests**: Add an “Edit” button to update guest names or categories.
* **Timestamps**: Display when each guest was added (e.g., using `new Date().toLocaleString()`).
* **Accessibility**: Add ARIA labels and keyboard navigation for better accessibility.
* **Custom Feature**: Allow filtering the guest list by category or RSVP status.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes:

```bash
git commit -m "Add your feature description"
```

4. Push to the branch:

```bash
git push origin feature/your-feature-name
```

5. Open a pull request on GitHub.

*Please ensure your code follows the existing style and includes tests for new features.*

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this code, provided the original license is included.
