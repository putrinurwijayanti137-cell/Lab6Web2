const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    hapus.type = "button";
    hapus.textContent = "Hapus";

    hapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";

    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    hapus.type = "button";
    hapus.textContent = "Hapus";

    hapus.addEventListener("click", function () {
        item.remove();
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});

const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const hitungNama = document.getElementById("hitungNama");
const pilihanSesi = document.getElementById("pilihanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");
const ringkasanWorkshop = document.getElementById("ringkasanWorkshop");
const tombolRingkasan = document.getElementById("tombolRingkasan");

namaWorkshop.addEventListener("input", function () {
    hitungNama.textContent = namaWorkshop.value.length;
});

sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        pilihanSesi.textContent = "Belum ada sesi yang dipilih.";
    } else {
        pilihanSesi.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanWorkshop.textContent =
            "Nama wajib diisi minimal 3 karakter.";
        ringkasanWorkshop.textContent = "";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent =
            "Masukkan alamat email yang valid.";
        ringkasanWorkshop.textContent = "";
    } else if (sesi === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop.";
        ringkasanWorkshop.textContent = "";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran workshop berhasil.";

        ringkasanWorkshop.textContent =
            "Nama: " + nama +
            " | Email: " + email +
            " | Sesi: " + sesi;
    }
});

formWorkshop.addEventListener("reset", function () {
    pesanWorkshop.textContent = "";
    ringkasanWorkshop.textContent = "";
    pilihanSesi.textContent = "";
    hitungNama.textContent = "0";
});

tombolRingkasan.addEventListener("click", function () {
    ringkasanWorkshop.classList.toggle("tersembunyi");

    if (ringkasanWorkshop.classList.contains("tersembunyi")) {
        tombolRingkasan.textContent = "Tampilkan Ringkasan";
    } else {
        tombolRingkasan.textContent = "Sembunyikan Ringkasan";
    }
});