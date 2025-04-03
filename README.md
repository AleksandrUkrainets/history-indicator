# History Indicator - Chrome Extension

**History Indicator** is a simple Chrome extension that visually shows whether the currently open page has been visited before.

- ![visited](icons/green.png) **Green pedestrian icon**: This page was visited more than once.
- ![not visited](icons/yellow.png) **Yellow pedestrian icon**: This page was either never visited or visited only once.

## 🧠 Features

- Automatically tracks page visits using the Chrome History API.
- Changes the toolbar icon based on visit history.
- Tooltip shows:
  - Total number of visits
  - Detailed timestamps for each visit

## 📦 Installation

1. Clone or download this repository:
   ```bash
   git clone https://github.com/AleksandrUkrainets/history-indicator.git
   ```
2. Open `chrome://extensions` in your browser.
3. Enable **Developer mode** (top right corner).
4. Click **"Load unpacked"** and select the extension folder.

The icon will appear in the toolbar. Navigate to different pages to see it update.

## 🛠 Requirements

- Chrome browser
- Permissions:
  - `tabs`
  - `history`

## 🔒 Privacy

This extension does **not** transmit or collect any data. It only accesses your local browser history.

## 🧑‍💻 Author

Created by [Ukrainets Oleksandr](https://github.com/AleksandrUkrainets)

## 📄 License

MIT License
