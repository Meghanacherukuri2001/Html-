const lightButton = document.getElementById('light-button');

let isLightOn = false;

lightButton.addEventListener('click', () => {
  isLightOn = !isLightOn; // Toggle light state
  const lightBulb = document.getElementById('window1'); // Assuming window is the light source

  if (isLightOn) {
    lightBulb.style.backgroundColor = 'yellow'; // Simulate light on
    lightButton.textContent = 'Turn Off Light';
  } else {
    lightBulb.style.backgroundColor = 'lightblue'; // Simulate light off
    lightButton.textContent = 'Turn On Light';
  }
});
