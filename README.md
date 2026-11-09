# My Library

[English](#english) · [Русский](#russian) · [עברית](#hebrew)

<a name="english"></a>

## English

A personal book list in plain JavaScript: add books with ISBN, title, author and year, see them in a table with statistics, and celebrate every new book with fireworks. Plus a live clock and background music.

**Live demo:** https://dubnovalexey.github.io/Library/

### Quick tour

Add a sample book, inspect the statistics and reload to check local persistence. Delete the sample afterwards; try the music control separately from adding a book.

Review validation, storage and `updateStats()` in `homework.js`, followed by the Canvas fireworks lifecycle. Data belongs to this browser; there is no account or cloud synchronization.

The language links above switch the documentation; they do not translate the existing demo interface.

### Features

- A form to add a book; all fields are required.
- A table of books with delete buttons and statistics.
- When browser storage is available, books are saved in `localStorage` (key `library:books`) and survive a reload.
- Everything typed into the form is shown as plain text, so HTML in the fields is never executed.
- Canvas fireworks and a firework sound when a book is added; the music volume dips meanwhile.
- A clock with red seconds and a music player button.
- Works on a phone: the table scrolls inside its card.

### Music

The background playlist, in order:

- Donn Bhat — "Ishq"
- YUNGBLUD — "Lowlife"
- Emog — "Under the Sun"
- Monolink — "Father Ocean" (Ben Böhmer Remix)
- Ва-Банкъ (Va-Bank) — "Небесные грибы"

The music belongs to its authors and is used only in this non-commercial study project. If you hold the rights to a track and want it removed, please open an issue and I will remove it.

### Tech stack

HTML5 · CSS3 · JavaScript (DOM, Canvas 2D, HTML audio, `localStorage`) · GitHub Pages

### Run locally

Open `index.html` in a browser.

### Planned improvements

These are proposals, not currently implemented features.

- Visual: show a clear saved/session-only state and a quieter reduced-motion celebration.
- Engineering: separate book storage, statistics and effects into modules and add permanent malformed-storage/media-overlap tests.
- Functionality: add search/edit and validated import/export; ISBN lookup can follow as an optional network feature.

---

<a name="russian"></a>

## Русский

**Моя библиотека**

Личный список книг на чистом JavaScript: добавляйте книги с ISBN, названием, автором и годом, смотрите их в таблице со статистикой, а каждую новую книгу встречает салют. Плюс часы и фоновая музыка.

**Демо:** https://dubnovalexey.github.io/Library/

### Быстрый просмотр

Добавьте пример книги, проверьте статистику и перезагрузите страницу для проверки локального сохранения. После просмотра удалите пример; кнопку музыки попробуйте отдельно от добавления книги.

Изучите валидацию, хранение и `updateStats()` в `homework.js`, затем жизненный цикл салюта Canvas. Данные относятся к этому браузеру; аккаунта и облачной синхронизации нет.

Языковые ссылки выше переключают документацию, а не переводят существующий интерфейс демо.

### Возможности

- Форма добавления книги, все поля обязательны.
- Таблица книг с кнопками удаления и статистикой.
- При доступном хранилище браузера книги сохраняются в `localStorage` (ключ `library:books`) и переживают перезагрузку.
- Всё, что введено в форму, выводится простым текстом — HTML из полей не исполняется.
- Салют на canvas и звук салюта при добавлении книги, музыка на это время приглушается.
- Часы с красными секундами и кнопка музыки.
- Работает на телефоне: таблица прокручивается внутри карточки.

### Музыка

Фоновый плейлист по порядку:

- Donn Bhat — «Ishq»
- YUNGBLUD — «Lowlife»
- Emog — «Under the Sun»
- Monolink — «Father Ocean» (Ben Böhmer Remix)
- Ва-Банкъ — «Небесные грибы»

Музыка принадлежит авторам и используется только в этом некоммерческом учебном проекте. Если вы правообладатель и хотите, чтобы трек убрали, откройте issue — уберу.

### Стек

HTML5 · CSS3 · JavaScript (DOM, Canvas 2D, `<audio>`, `localStorage`) · GitHub Pages

### Как запустить

Откройте `index.html` в браузере.

### План развития

Это предложения, а не уже реализованные возможности.

- Визуал: показывать состояние «сохранено/только текущая сессия» и предусмотреть спокойный reduced-motion салют.
- Инженерия: разделить хранение книг, статистику и эффекты на модули, закрепить проверки повреждённого storage и пересечения медиа.
- Функции: поиск/редактирование и валидируемый импорт/экспорт; поиск по ISBN — позднее как необязательная сетевая функция.

---

<a name="hebrew"></a>

<div dir="rtl">

## עברית

**הספרייה שלי**

רשימת ספרים אישית ב-JavaScript: מוסיפים ספר עם ISBN, שם, מחבר ושנה, רואים את הספרים בטבלה עם סטטיסטיקה, וכל ספר חדש מתקבל בזיקוקים. ובנוסף שעון ומוזיקת רקע.

**הדגמה:** https://dubnovalexey.github.io/Library/

### סיור קצר

הוסיפו ספר לדוגמה, בדקו את הסטטיסטיקה ורעננו כדי לבדוק שמירה מקומית. מחקו את הדוגמה בסיום ונסו את כפתור המוזיקה בנפרד מהוספת ספר.

בדקו אימות, אחסון ו־`updateStats()` ב־`homework.js`, ואז את מחזור החיים של זיקוקי Canvas. הנתונים שייכים לדפדפן זה; אין חשבון או סנכרון בענן.

קישורי השפה למעלה מחליפים את התיעוד, ולא מתרגמים את ממשק ההדגמה הקיים.

### מוזיקה

רשימת ההשמעה ברקע, לפי הסדר:

- Donn Bhat — "Ishq"
- YUNGBLUD — "Lowlife"
- Emog — "Under the Sun"
- Monolink — "Father Ocean" (Ben Böhmer Remix)
- Ва-Банкъ (Va-Bank) — "Небесные грибы"

המוזיקה שייכת ליוצריה ומשמשת רק בפרויקט לימודי לא מסחרי זה. בעלי זכויות שרוצים שרצועה תוסר מוזמנים לפתוח issue ואסיר אותה.

### טכנולוגיות

HTML5 · CSS3 · JavaScript (DOM, Canvas, `localStorage`) · GitHub Pages

### הרצה מקומית

פתחו את `index.html` בדפדפן.

### שיפורים מתוכננים

אלה הצעות, לא יכולות שכבר מומשו.

- חזות: להציג מצב שמירה/זיכרון זמני וחגיגה שקטה בהפחתת תנועה.
- הנדסה: להפריד אחסון, סטטיסטיקה ואפקטים למודולים ולשמור בדיקות נתונים פגומים וחפיפת מדיה.
- יכולות: חיפוש, עריכה וייבוא/ייצוא מאומת; חיפוש ISBN כאפשרות רשת עתידית.

</div>
