$(document).ready(function() {
    headerBtnToggle();
    eventCalculatorToggle();
    select2Init1();
    select2Init2();

    // header toggle menu
    function headerBtnToggle() {
        $('.js-menu-toggle').click(function() {
            $('body').toggleClass('is-menu-opened');
            $('.header__menu').toggleClass('is-show');
        });
    }

    // event card calc
    function eventCalculatorToggle() {
        $('.js-event-btn-calculator').click(function() {
            var eventCard = $(this).closest('.event-card');

            $('.js-event-btn-calculator').not(this).removeClass('is-active');
            $('.event-card').not(eventCard).removeClass('is-active');
            $(this).toggleClass('is-active');
            $(this).closest('.event-card').toggleClass('is-active');
        });
    }

    // select2 init
    function select2Init1() {
        if ($('.js-select-init')[0]){
            $('.js-select-init').select2({
                minimumResultsForSearch: Infinity,
                width: 'auto'
            });
        }
    }

    function select2Init2() {
        if ($('.js-select-light-init')[0]){
            $('.js-select-light-init').select2({
                minimumResultsForSearch: Infinity,
                width: 'auto',
                theme: 'select2-container--light'
            });
        }
    }
});