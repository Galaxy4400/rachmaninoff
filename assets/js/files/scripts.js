// Инициализация динамической адаптации
new Adapt();

// Инициализация модального окна
const modal = new Modal({animation: 'fadeIn'});


new Menu('main-menu');

new Tabs('videos');

document.querySelectorAll('.persone-tabs').forEach(tabs => new Tabs(tabs.dataset.tabs));

document.querySelectorAll('.persone-schedule').forEach(spoiler => new Spoiler(spoiler.dataset.spoiler, { single: true }));

document.querySelectorAll('.persone-videos').forEach(spoiler => new Spoiler(spoiler.dataset.spoiler, { single: true }));

new Spoiler('about');

new Spoiler('tours');
new Spoiler('tour-1');
new Spoiler('tour-2');
new Spoiler('tour-3');