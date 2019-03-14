
let dropdownLink = $('.dropdown-link');

dropdownLink.on('click', function (event) {
    let dropdownMenu = $(this).find('.dropdown');
    dropdownMenu.toggle();
});