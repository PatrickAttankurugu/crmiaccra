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
  
    // Text animation for hero title
    var heroTitle = document.querySelector('#hero-image .animated-text');
    if (heroTitle) {
      let textArray = heroTitle.textContent.split("");
      heroTitle.innerHTML = "";
      textArray.forEach((char, index) => {
        heroTitle.innerHTML += `<span style="transition-delay:${index * 0.05}s">${char}</span>`;
      });
    }
  
    // Parallax effect for hero background
    var heroSection = document.getElementById('hero-image');
    if (heroSection) {
      window.addEventListener('scroll', function () {
        var offset = window.pageYOffset;
        heroSection.style.backgroundPositionY = offset * 0.7 + 'px';
      });
    }

    // Smooth scrolling to 'know-us' section when 'Our Mission' button is clicked
  var missionBtn = document.getElementById('mission-button');
  if (missionBtn) {
    missionBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var knowUsSection = document.getElementById('know-us');
      knowUsSection.scrollIntoView({ behavior: 'smooth' });
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
  