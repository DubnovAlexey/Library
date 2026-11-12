<!--suppress MarkdownUnresolvedFileReference -->

# My Library

[English](#english) · [Русский](#russian) · [עברית](#hebrew) · [Español](#spanish) · [Français](#french)

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

---

<a name="spanish"></a>

## Español

**Mi biblioteca**

Una lista personal de libros en JavaScript puro: añada libros con ISBN, título, autor y año, véalos en una tabla con estadísticas, y cada libro nuevo se recibe con fuegos artificiales. Además, un reloj y música de fondo.

**Demo:** https://dubnovalexey.github.io/Library/

### Recorrido rápido

Añada un libro de ejemplo, mire las estadísticas y recargue la página para comprobar el guardado local. Después borre el ejemplo; pruebe el botón de música por separado de la adición de libros.

Estudie la validación, el guardado y `updateStats()` en `homework.js`, y luego el ciclo de vida de los fuegos artificiales en Canvas. Los datos pertenecen a este navegador; no hay cuenta ni sincronización en la nube.

Los enlaces de idioma de arriba cambian la documentación; no traducen la interfaz de la demo.

### Funciones

- Formulario para añadir un libro; todos los campos son obligatorios.
- Tabla de libros con botones de borrado y estadísticas.
- Si el almacenamiento del navegador está disponible, los libros se guardan en `localStorage` (clave `library:books`) y sobreviven a la recarga.
- Todo lo que se escribe en el formulario se muestra como texto plano: el HTML de los campos no se ejecuta.
- Fuegos artificiales en canvas y su sonido al añadir un libro; mientras tanto la música baja de volumen.
- Reloj con segundos en rojo y botón de música.
- Funciona en el móvil: la tabla se desplaza dentro de la tarjeta.

### Música

Lista de fondo, en orden:

- Donn Bhat — «Ishq»
- YUNGBLUD — «Lowlife»
- Emog — «Under the Sun»
- Monolink — «Father Ocean» (Ben Böhmer Remix)
- Va-Bank — «Nebesnye griby» («Setas celestiales»)

La música pertenece a sus autores y solo se usa en este proyecto educativo sin fines comerciales. Si usted es titular de los derechos y quiere que se retire una pista, abra un issue y la quitaré.

### Tecnologías

HTML5 · CSS3 · JavaScript (DOM, Canvas 2D, `<audio>`, `localStorage`) · GitHub Pages

### Cómo ejecutarlo

Abra `index.html` en el navegador.

### Plan de desarrollo

Son propuestas, no funciones ya implementadas.

- Visual: mostrar el estado «guardado / solo esta sesión» y prever fuegos artificiales tranquilos para reduced motion.
- Ingeniería: separar en módulos el guardado de libros, las estadísticas y los efectos; fijar pruebas de almacenamiento dañado y de solapamiento de sonidos.
- Funciones: búsqueda/edición e importación/exportación validadas; la búsqueda por ISBN, más adelante, como función de red opcional.

---

<a name="french"></a>

## Français

**Ma bibliothèque**

Une liste de livres personnelle en JavaScript pur : ajoutez des livres avec ISBN, titre, auteur et année, voyez-les dans un tableau avec des statistiques, et chaque nouveau livre est salué par un feu d'artifice. En plus, une horloge et une musique de fond.

**Démo :** https://dubnovalexey.github.io/Library/

### Visite rapide

Ajoutez un livre d'exemple, regardez les statistiques et rechargez la page pour vérifier la sauvegarde locale. Ensuite, supprimez l'exemple ; essayez le bouton de musique séparément de l'ajout de livres.

Étudiez la validation, la sauvegarde et `updateStats()` dans `homework.js`, puis le cycle de vie du feu d'artifice en Canvas. Les données restent dans ce navigateur ; il n'y a ni compte ni synchronisation dans le cloud.

Les liens de langue ci-dessus changent la documentation ; ils ne traduisent pas l'interface de la démo.

### Fonctions

- Formulaire d'ajout de livre, tous les champs obligatoires.
- Tableau des livres avec boutons de suppression et statistiques.
- Si le stockage du navigateur est disponible, les livres sont gardés dans `localStorage` (clé `library:books`) et survivent au rechargement.
- Tout ce qui est saisi dans le formulaire s'affiche en texte brut : le HTML des champs n'est pas exécuté.
- Feu d'artifice sur canvas et son bruit à l'ajout d'un livre ; pendant ce temps, la musique baisse.
- Horloge aux secondes rouges et bouton de musique.
- Fonctionne sur téléphone : le tableau défile à l'intérieur de la carte.

### Musique

Liste de fond, dans l'ordre :

- Donn Bhat — « Ishq »
- YUNGBLUD — « Lowlife »
- Emog — « Under the Sun »
- Monolink — « Father Ocean » (Ben Böhmer Remix)
- Va-Bank — « Nebesnye griby » (« Champignons célestes »)

La musique appartient à ses auteurs et n'est utilisée que dans ce projet d'étude non commercial. Si vous êtes titulaire des droits et souhaitez qu'une piste soit retirée, ouvrez une issue : je la retirerai.

### Technologies

HTML5 · CSS3 · JavaScript (DOM, Canvas 2D, `<audio>`, `localStorage`) · GitHub Pages

### Lancer le projet

Ouvrez `index.html` dans le navigateur.

### Pistes d'évolution

Ce sont des propositions, pas des fonctions déjà réalisées.

- Visuel : afficher l'état « enregistré / cette session seulement » et prévoir un feu d'artifice calme pour reduced motion.
- Ingénierie : séparer en modules la sauvegarde des livres, les statistiques et les effets ; fixer des tests de stockage endommagé et de sons qui se chevauchent.
- Fonctions : recherche/modification et import/export validés ; la recherche par ISBN, plus tard, comme fonction réseau facultative.
