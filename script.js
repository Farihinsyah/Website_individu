let components = `<h1 class="bio-angkatan">Biodata Angkatan</h1>`




async function load() {
    let data = await fetch('./data.json');
    data = await data.json()
    data.forEach(mahasiswa => {
        if (mahasiswa.nim != "240411100031") {
            components += ` <div class="teman">
                <img src="${mahasiswa.fotoselfie}" alt="">
                <div class="bio-text">
                    <div class="text"><span>NIM</span><span>: ${mahasiswa.nim}</span></div>
                    <div class="text"><span>Nama Lengkap</span><span>: ${mahasiswa.nama}</span></div>
                    <div class="text"><span>TTL</span><span>: ${mahasiswa.ttl}</span></div>
                    <div class="text"><span>Alamat</span><span>: ${mahasiswa.alamat}</span></div>
                    <div class="text"><span>Nomor HP</span><span>: ${mahasiswa.no}</span></div>
                </div>
            </div>`
        }
    });

    document.getElementById('angkatan').innerHTML = components
}
load()