const tabElems = document.querySelectorAll('[data-tabs-handler]');
const tabFields = document.querySelectorAll('[data-tabs-field]');

for (const tab of tabElems) {
    tab.addEventListener('click', () => {
        tabElems.forEach(item => {
            if (item === tab) {
                item.classList.add('design-list__item_active');
            } else {
                item.classList.remove('design-list__item_active');
            }
        });

        tabFields.forEach(item => {
            if (item.dataset.tabsField === tab.dataset.tabsHandler) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}