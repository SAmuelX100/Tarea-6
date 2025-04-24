const form = document.getElementById('contactForm');
const qrcodeDiv = document.getElementById('qrcode');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  qrcodeDiv.innerHTML = '';

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;

  const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${apellido};${nombre}\nTEL;TYPE=CELL:${telefono}\nEMAIL:${email}\nEND:VCARD`;

  new QRCode(qrcodeDiv, {
    text: vCard,
    width: 256,
    height: 256,
  });
});

const limpiarBtn = document.getElementById('limpiarBtn');

limpiarBtn.addEventListener('click', () => {
  form.reset();
  qrcodeDiv.innerHTML = '';
});
