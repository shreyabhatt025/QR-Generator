const qrText = document.getElementById("qr-text");
const qrSize = document.getElementById("size");
const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");
const qrContainer = document.querySelector(".qr-container");

let size = qrSize.value;

// Update size when dropdown changes
qrSize.addEventListener("change", (e) => {
  size = e.target.value;
});

// Generate QR on button click
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (qrText.value.trim().length === 0) {
    alert("Please enter some text to generate QR code");
    return;
  }
  generateQRCode();
});

// Handle download
downloadBtn.addEventListener("click", () => {
  const img = document.querySelector(".qr-container img");
  const canvas = document.querySelector("canvas");

  if (img) {
    downloadBtn.href = img.src;
  } else if (canvas) {
    downloadBtn.href = canvas.toDataURL();
  }
});

// Generate the QR Code
function generateQRCode() {
  qrContainer.innerHTML = ""; // clear previous QR

  new QRCode(qrContainer, {
    text: qrText.value,
    width: parseInt(size),
    height: parseInt(size),
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}
