# My Library

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

A personal book list in plain JavaScript: add books with ISBN, title, author and year, see them in a table with statistics, and celebrate every new book with fireworks. Plus a live clock and background music.

**Live demo:** https://dubnovalexey.github.io/Library/

## Features

- A form to add a book; all fields are required.
- A table of books with delete buttons and statistics.
- Books are saved in `localStorage` (key `library:books`) and survive a reload.
- Everything typed into the form is shown as plain text, so HTML in the fields is never executed.
- Canvas fireworks and a firework sound when a book is added; the music volume dips meanwhile.
- A clock with red seconds and a music player button.
- Works on a phone: the table scrolls inside its card.

## Music

The background playlist, in order:

- Donn Bhat — "Ishq"
- YUNGBLUD — "Lowlife"
- Emog — "Under the Sun"
- Monolink — "Father Ocean" (Ben Böhmer Remix)
- Ва-Банкъ (Va-Bank) — "Небесные грибы"

The music belongs to its authors and is used only in this non-commercial study project. If you hold the rights to a track and want it removed, please open an issue and I will remove it.

## Tech stack

HTML5 · CSS3 · JavaScript (DOM, Canvas 2D, Web Audio via `<audio>`, `localStorage`) · GitHub Pages

## Run locally

Open `index.html` in a browser.

## Roadmap

- Search and sort the table, edit a book, export to CSV.
- Fill in book data by ISBN from the Open Library API.
