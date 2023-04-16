const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
const colors = ["#00ffff", "#ff00ff", "#ffff00", "#00ff00", "#ff0000"];
const confettiPieces = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function ConfettiPiece() {
  this.width = Math.floor(Math.random() * 30) + 5;
  this.height = this.width;
  this.color = colors[Math.floor(Math.random() * colors.length)];
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = -this.height;
  this.rotation = Math.random() * 360;
  this.rotationSpeed = Math.random() * 2 - 1;
  this.speed = Math.floor(Math.random() * 5) + 5;

  this.draw = function() {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation * Math.PI / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  };

  this.update = function() {
    this.y += this.speed;
    this.rotation += this.rotationSpeed;
    if (this.y > canvas.height) {
      this.y = -this.height;
    }
  };
}

for (let i = 0; i < 100; i++) {
  confettiPieces.push(new ConfettiPiece());
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < confettiPieces.length; i++) {
    confettiPieces[i].update();
    confettiPieces[i].draw();
  }
}

animate();
// Add animation to the reward box on mouse hover
const rewardBox = document.querySelector('.reward-box');
rewardBox.addEventListener('mouseover', () => {
  rewardBox.classList.add('animate__animated', 'animate__bounce');
});

rewardBox.addEventListener('animationend', () => {
  rewardBox.classList.remove('animate__animated', 'animate__bounce');
});

  document.getElementsByClassName("container").style.opacity = "0.0";
  
  function copyVoucher() {
    // Get the voucher code
    var voucherCode = document.getElementById("voucher-code").textContent;
    
    // Create a temporary input element to copy the voucher code to clipboard
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = voucherCode;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    
    // Alert the user that the voucher code has been copied
    alert("Voucher code copied to clipboard: " + voucherCode);
  }
  