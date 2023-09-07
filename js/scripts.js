// JavaScript Document for Church Website
document.addEventListener('DOMContentLoaded', function () {
  
  // Functionality for clicking on event cards
  var eventCards = document.querySelectorAll('.event');
  eventCards.forEach(function (card) {
    card.addEventListener('click', function () {
      var eventTitle = this.querySelector('.card-title').innerText;
      alert('You clicked on ' + eventTitle);
    });
  });

  // Functionality for hovering and clicking on staff members
  var staffMembers = document.querySelectorAll('.staff-member');
  staffMembers.forEach((member) => {
    member.addEventListener('mouseover', function () {
      this.classList.add('hovered');
    });
    member.addEventListener('mouseout', function () {
      this.classList.remove('hovered');
    });
    member.addEventListener('click', function () {
      this.classList.toggle('selected');
    });
  });

  // Smooth scrolling to 'staff-section' when 'Our Leadership' button is clicked
  var leadershipBtn = document.querySelector('.btn');
  if (leadershipBtn) {
    leadershipBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var staffSection = document.getElementById('staff-section');
      staffSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
  
  // Smooth scrolling to 'mission' section when 'Tell Us' button is clicked
  var tellUsBtn = document.getElementById('tell-us-button');
  if (tellUsBtn) {
    tellUsBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var missionSection = document.getElementById('mission');
      missionSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Text Animation for the Hero Title
  var heroTitle = document.querySelector('#hero-image .animated-text');
  if (heroTitle) {
    let textArray = heroTitle.textContent.split("");
    heroTitle.innerHTML = "";
    textArray.forEach((char, index) => {
      heroTitle.innerHTML += `<span style="transition-delay:${index * 0.05}s">${char}</span>`;
    });
  }

  // Parallax Effect for Hero Background
  var heroSection = document.getElementById('hero-image');
  if (heroSection) {
    window.addEventListener('scroll', function () {
      var offset = window.pageYOffset;
      heroSection.style.backgroundPositionY = offset * 0.7 + 'px';
    });
  }

  // Dynamic typing functionality
  var typeString = 'Loving God and Loving People';
  var typeElement = document.querySelector('#know-us h3');
  if (typeElement) {
    let i = 0;
    var typing = setInterval(() => {
      typeElement.textContent += typeString.charAt(i);
      i++;
      if (i === typeString.length) {
        clearInterval(typing);
      }
    }, 200);
  }

});
