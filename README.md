Link Github :
https://github.com/WinnieFelicia/ProyekUTS_WinnieFelicia.git

Cara Mengatur Database :
- install mysql2 pada terminal, dengan npm install mysql2
- Membuka localhost/phypmyadmin
- Membuat database baru : nama database saya "utsproyek_winnie"
- Selanjutnya, melalui SQL, create table untuk user dan tasks
- Isi table user ada uid, username, dan password
- Isi table tasks ada id, user_id, title, category, deadline, dan status"
- Setelah itu create table, dan table berhasil dibuat
- Selanjutnya pada vs code, melalui file .env, panggil database yang kita buat dengan code :
    PORT=3000
    MYSQL_HOST=localhost
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_DATABASE=utsproyek_winnie
    JWT_SECRET=mysecretkey
- Deklarasikan db pada file-file yang butuh terhubung ke database, seperti db.js dan userModel.js
-Pengetesan melalui postman juga telah terhubung ke database (GET, POST, PUT, DELETE)

Cara menjalankan proyek secara lokal :
- Pada terminal, jalankan node server.js atau npm start
- Jika muncul notifikasi server running di http://localhost:3000, maka server telah berhasil dijalankan
- Selanjutnya, buka http://localhost:3000 pada browser.
- Frontend akan dapat digunakan (sudah terhubung dengan backend)

Fitur Utama yang Telah Diimplementasikan :
- Fitur Register dan Login : Jika pengguna belum terdaftar, perlu dilakukan register terlebih dahulu. Sedangkan user yang telah terdaftar sebelumnya, dapat langsung melakukan login (Telah ada autentikasi JWT). Jika user yang belum terdaftar langsung melakukan login, maka login akan gagal. Password user baik dalam registrasi dan login, dalam database akan berubah menjadi password yang berupa string (menggunakan hashing password dan bcrypt).

- Fitur addTask (Tambah Tugas) : Setelah memasukkan judul, kategori, dan deadline dan melakukan tambah tugas, maka tugas yang telah ditambahkan akan masuk ke dalam daftar tugas dengan status belum selesai.

- Fitur Edit Task : User dapat melakukan edit task pada daftar tugas baik itu edit judul, kategori, deadline. User juga dapat mengubah tugas yang belum selesai menjadi selesai dengan klik checkbox tugas selesai. Dan update akan dilakukan setelah menekan tombol simpan.

- Fitur Delete : User dapat melakukan hapus tugas pada daftar tugas.

- Fitur Filter by Kategori : Pengguna dapat melakukan filter kategori daftar tugas dengan pilihan kuliah, organisasi, dan pribadi. Kategori yang dipilih secara langsung akan muncul tanpa harus reload halaman.

-Fitur Websocket : Memberikan notifikasi client jika terhubung ke server.

Note : 
- Setiap fitur telah menggunakan AJAX, sehingga tidak perlu reload halaman
- Setiap penginputan login, register, addTask, edit, delete melalui frontend telah terhubung langsung ke database.
