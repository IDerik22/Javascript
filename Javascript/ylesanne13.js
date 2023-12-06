document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('#eemaldaID');
    elements.forEach(function (element) {
        element.removeAttribute('id');
        element.setAttribute('attr', 'Erik Teppan');
        console.log(element.getAttribute('attr'));
    });
});
