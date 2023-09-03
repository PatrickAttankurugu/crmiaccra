document.addEventListener('DOMContentLoaded', function () {

    // Existing functionality for event cards
    var eventCards = document.querySelectorAll('.event');
    eventCards.forEach(function (card) {
      card.addEventListener('click', function () {
        var eventTitle = this.querySelector('.card-title').innerText;
        alert('You clicked on ' + eventTitle);
      });
    });
  
    // Functionality for staff-member hover and click effects
    var staffMembers = document.querySelectorAll('.staff-member');
    staffMembers.forEach((member) => {
      
      // Add hover effect
      member.addEventListener('mouseover', function () {
        this.classList.add('hovered');
      });
      
      // Remove hover effect
      member.addEventListener('mouseout', function () {
        this.classList.remove('hovered');
      });
      
      // Add click effect
      member.addEventListener('click', function () {
        this.classList.toggle('selected');
      });
      
    });
  
    // Smooth scrolling to staff-section when 'Our Leadership' button is clicked
    var leadershipBtn = document.querySelector('.btn');
    if (leadershipBtn) {
      leadershipBtn.addEventListener('click', function (e) {
        e.preventDefault();
        var staffSection = document.getElementById('staff-section');
        staffSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    // New functionality for hover effect on pastor's image
    var pastorImage = document.querySelector('.pastor-image img');
    if (pastorImage) {
      pastorImage.addEventListener('mouseover', function () {
        this.classList.add('hovered');
      });
  
      pastorImage.addEventListener('mouseout', function () {
        this.classList.remove('hovered');
      });
    }
  });
  