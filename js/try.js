function changeContent() {
    // Change the header and text
    document.getElementById("headerText").innerText = "Be Part of Something Great";
    document.getElementById("mainText").innerText = "Discover the joy of fellowship, worship, and service.";
  
    // Change the button text and add new functionality
    const btn = document.getElementById("ctaButton");
    btn.innerText = "Join Us";
    btn.onclick = function() {
        window.location.href = "/join-us";
    };
}

function resetContent() {
    // Reset the header and text
    document.getElementById("headerText").innerText = "Join Us on a Journey";
    document.getElementById("mainText").innerText = "We invite you to be a part of a community where we celebrate faith, embrace love, and share the teachings of Jesus Christ.";
  
    // Reset the button text and functionality
    const btn = document.getElementById("ctaButton");
    btn.innerText = "Learn More";
    btn.onclick = function() {
        window.location.href = "/learn-more";
    };
}
