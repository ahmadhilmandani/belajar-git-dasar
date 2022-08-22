const batu = document.getElementById('batu');
const valueBatu = batu.getAttribute('data-value');
const gunting = document.getElementById('gunting');
const valueGunting = gunting.getAttribute('data-value');
const kertas = document.getElementById('kertas');
const valueKertas = kertas.getAttribute('data-value');

const getKonfirmasi = document.getElementById('tombol-konfirmasi')



batu.addEventListener('click', function () {
    batu.classList.toggle('fokus')

    if(gunting.classList.contains('fokus') === true){
        gunting.classList.remove('fokus')
    }
    if(kertas.classList.contains('fokus') === true){
        kertas.classList.remove('fokus')
    }

    const containFokus = batu.classList.contains('fokus');

    konfirmasiTombol('Batu', containFokus)
})



gunting.addEventListener('click', function () {
    gunting.classList.toggle('fokus')

    if(batu.classList.contains('fokus') === true){
        batu.classList.remove('fokus')
    }
    if(kertas.classList.contains('fokus') === true){
        kertas.classList.remove('fokus')
    }

    const containFokus = gunting.classList.contains('fokus');

    konfirmasiTombol('Gunting', containFokus)
})

kertas.addEventListener('click', function () {
    kertas.classList.toggle('fokus')

    if(batu.classList.contains('fokus') === true){
        batu.classList.remove('fokus')
    }
    if(gunting.classList.contains('fokus') === true){
        gunting.classList.remove('fokus')
    }

    
    const containFokus = kertas.classList.contains('fokus');

    konfirmasiTombol('Kertas', containFokus)
})

function konfirmasiTombol(pilihanUser, containsFokus) {
    // kalau ada tombol biru, maka hapus tombol biru
    if(getKonfirmasi.classList.contains('tombol-konfirmasi-biru') === true && containsFokus == false) 
    return getKonfirmasi.classList.remove('tombol-konfirmasi-biru')
    
    // klau ga ada mkaka tambahkan class tombol biru
    getKonfirmasi.innerHTML = 'Konfirmasi pilihan: <strong>'+pilihanUser+'</strong>';


    getKonfirmasi.classList.add('tombol-konfirmasi-biru')
}


function pilihanKomputer(){
    let randomNum = Math.random();
    let pilihanKomputer
        if(randomNum > 0 && randomNum <= 0.34)
        return pilihanKomputer = valueBatu;
        
        if(randomNum > 0.34 && randomNum <= 0.68)
        return pilihanKomputer = valueGunting;
        
        if(randomNum > 0.68 && randomNum < 1)
        return pilihanKomputer = valueKertas;
}


getKonfirmasi.addEventListener('click', function () {

    let randomNum = Math.random();
    let pilihanKomputer;

    if(randomNum > 0 && randomNum <= 0.34)
    pilihanKomputer = valueBatu;
        
    else if(randomNum > 0.34 && randomNum <= 0.68)
    pilihanKomputer = valueGunting;
        
    else if(randomNum > 0.68 && randomNum < 1)
    pilihanKomputer = valueKertas;

    let pilihanUser;
    if(batu.classList.contains('fokus') === true){
        pilihanUser = valueBatu;
    }
    else if(gunting.classList.contains('fokus')===true){
        pilihanUser = valueGunting;
    }
    else if(kertas.classList.contains('fokus')===true){
        pilihanUser = valueKertas;
    }
   
    if(pilihanKomputer != pilihanUser && pilihanUser == valueBatu){
        if(pilihanKomputer == valueGunting) return alert('anda MENAG!!!  Pilihan Komputer: gunting')
        if(pilihanKomputer == valueKertas) return alert('anda KALAH!!!  Pilihan Komputer: kertas')
    }
    else if(pilihanKomputer == valueBatu && pilihanKomputer == pilihanUser){
        return alert('SERI!!!  Pilihan Komputer: batu')
    }  
    
    if(pilihanKomputer != pilihanUser && pilihanUser == valueGunting){
        if(pilihanKomputer == valueBatu) return alert('anda KALAH!!!  Pilihan Komputer: batu')
        if(pilihanKomputer == valueKertas) return alert('anda MENANG!!!  Pilihan Komputer: kertas')
    }
    else if(pilihanKomputer == valueGunting && pilihanKomputer == pilihanUser){
        return alert('SERI!!!  Pilihan Komputer: gunting')
    } 

    if(pilihanKomputer != pilihanUser && pilihanUser == valueKertas){
        if(pilihanKomputer == valueBatu) return alert('anda MENANG!!!  Pilihan Komputer: batu')
        if(pilihanKomputer == valueGunting) return alert('anda KALAH!!!  Pilihan Komputer: gunting')
    }
    else if(pilihanKomputer == valueKertas && pilihanKomputer == pilihanUser){
        return alert('SERI!!!  Pilihan Komputer: kertas')
    } 


})