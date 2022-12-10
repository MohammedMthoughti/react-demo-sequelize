exports.select = (e) => {
    const items = document.querySelectorAll('.item');

    for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('selected');
    };
};