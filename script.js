const qrText = document.getElementById("qr-text");
const qrSize = document.querySelector("select");
const generateButton = document.getElementById("generate");
const downloadButton = document.getElementById("download");
const qrcontainer = document.querySelector(".qr-container");



let size= qrSize.value;
generateButton.addEventListener('click', (e) => 
{
     e.preventDefault(); // on click in generate button page is refreshing again  so to prevent it we prevent now page will not refresh 
     generateQRCode();
});


qrSize.addEventListener('change', (e) =>
{
    size = e.target.value; // when we change the size of QR code it will change the size variable 
    generateQRCode(); // and generate the QR code again with new size   
}

function  generateQRcode()
{   
    qrContainer.innerHTML=" ";   // the previous QR will clear and the new QR code will generate 
    new QRCode(qrContainer,{
            text:qrText.value,
            height:size,
            width:size,
           colorLight:"white",
           colorDark:"black",
          

});
}
