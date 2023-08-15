document.addEventListener('DOMContentLoaded', function () {
    var eventCards = document.querySelectorAll('.event');

    eventCards.forEach(function (card) {
        card.addEventListener('click', function () {
            var eventTitle = this.querySelector('.card-title').innerText;
            alert('You clicked on ' + eventTitle);
        });
    });
});
