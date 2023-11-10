document.getElementById('generateButton').addEventListener('click', function() {
  var name = document.getElementById('typingPad').value;
  var messages = [
    `May Goddess Lakshmi bless your home with love and prosperity. Happy Dhanteras! , ${name}.`,
    `Let's celebrate the festival of wealth and well-being with a heart full of gratitude to you , ${name}.`,
    `In the garden of life, friends like you are the most beautiful blossoms. Happy Dhanteras, my dear friend! , ${name}!`
  ];

  var randomIndex = Math.floor(Math.random() * messages.length);
  var message = messages[randomIndex];

  document.getElementById('messageArea').innerText = message;
});

// Title bar animation
var title = "Happy dhanteras  ";
var titleIndex = 0;

function animateTitle() {
  document.title = title.substring(titleIndex) + title.substring(0, titleIndex);
  titleIndex++;
  if (titleIndex > title.length) {
    titleIndex = 0;
  }
}

setInterval(animateTitle, 200);
