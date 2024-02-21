const tombolTema = document.getElementById('tombolTema');
// const body = document.getElementsByTagName('body')[0];
tombolTema.onclick = function() {
    // document.body.style.backgroundColor = 'cyan';
    // document.body.setAttribute('class', 'cyan');
    document.body.classList.toggle('cyan');
}


const temaAcak = document.createElement('button');
const teksTombol = document.createTextNode('tema acak');
temaAcak.appendChild(teksTombol);
temaAcak.setAttribute('type', 'button');
tombolTema.after(temaAcak);

temaAcak.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});
sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});
sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
});



document.body.addEventListener('mousemove', function(event) {
    // POSISI MOUSE
    // console.log(event.clientX);

    // UKURAN BROWSER
    // console.log(window.innerWidth);

    const xPose = Math.round((event.clientX / window.innerWidth) * 255 );
    const yPose = Math.round((event.clientY / window.innerHeight) * 255 );
    document.body.style.backgroundColor = 'rgb('+ xPose +', '+ yPose +', 100)';
});














