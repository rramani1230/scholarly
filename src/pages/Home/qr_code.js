const QRCode = require('qrcode');

const url = 'https://bit.ly/scholarly-tutoring';
const outputFilePath = 'qr_code.png';

QRCode.toFile(outputFilePath, url, { errorCorrectionLevel: 'H' }, function (err) {
  if (err) throw err;
  console.log('QR Code generated and saved as', outputFilePath);
});
