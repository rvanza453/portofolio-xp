document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop');
    const clockElement = document.getElementById('clock');
    const windowTemplate = document.getElementById('window-template');
    let highestZIndex = 100;
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');
    const audio = document.getElementById('background-audio');
    const volumeBtn = document.getElementById('volume-control-btn');
    audio.volume = 0.3;

    if (volumeBtn && audio) {
        volumeBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                volumeBtn.innerHTML = '🔊';
            } else {
                audio.pause();
                volumeBtn.innerHTML = '🔇';
            }
        });
    }

    const projects = {
        'project-erpl': {
            title: "Sistem E-RPL Universitas Trunojoyo",
            icon: "sertifikat.png",
            content: `
                <div class="project-detail">
                    <h2>Sistem E-RPL Alih Jenjang</h2>
                    <p><strong>Klien:</strong> PJM LPMPP Universitas Trunojoyo Madura (UTM)</p>
                    
                    <div class="slider-container">
                        <button class="slider-btn slider-btn-left" style="display: none;">&lt;</button>
                        <div class="slider-wrapper">
                            <div class="slider-item">
                                <img src="./assets/images/rpl/login.png" alt="Screenshot E-RPL login" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/dashboard.png" alt="Screenshot E-RPL dashboard" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/profil.png" alt="Screenshot E-RPL profil" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/kelola_matkul.png" alt="Screenshot E-RPL kelola_matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/input_matkul.png" alt="Screenshot E-RPL input_matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/kelola_penugasan.png" alt="Screenshot E-RPL kelola_penugasan" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/bukti.png" alt="Screenshot E-RPL bukti" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/self_assessment.png" alt="Screenshot E-RPL self_assessment" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/rekomendasi_matkul.png" alt="Screenshot E-RPL rekomendasi" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/penilaian_matkul.png" alt="Screenshot E-RPL penilaian_matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/luaran1.png" alt="Screenshot E-RPL luaran 1" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/rpl/luaran2.png" alt="Screenshot E-RPL luaran 2" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                        </div>
                        <button class="slider-btn slider-btn-right">&gt;</button>
                    </div>
                    <h3>Deskripsi</h3>
                    <p>
                        Sistem Rekognisi Pembelajaran Lampau (E-RPL) adalah proyek skripsi saya yang berhasil diimplementasikan secara nyata 
                        di Universitas Trunojoyo Madura. Sistem ini mendukung proses <em>alih jenjang</em> dengan cara menyederhanakan asesmen 
                        konversi mata kuliah dan pengalaman pendidikan mahasiswa. Salah satu fitur unggulannya adalah 
                        <strong>rekomendasi konversi mata kuliah</strong> menggunakan metode 
                        <em>Cosine Similarity</em> dan <em>Jaccard Similarity</em>, 
                        sehingga proses asesmen menjadi lebih objektif dan efisien.
                    </p>
                    <p>
                        Proyek ini menjadi puncak perjalanan akademik saya karena tidak hanya selesai sebagai skripsi, 
                        tetapi juga benar-benar digunakan oleh PJM LPMPP UTM. Hal ini membuktikan bahwa hasil karya saya 
                        dapat memberikan dampak nyata dan positif dalam dunia pendidikan.
                    </p>
                    <h3>Teknologi Utama</h3>
                    <ul class="tech-list">
                        <li>Laravel</li>
                        <li>Bootstrap & CSS</li>
                        <li>JavaScript (Frontend)</li>
                        <li>MySQL (Database)</li>
                        <li>Python (perhitungan similarity)</li>
                    </ul>
                    <h3>Kode Program</h3>
                    <ul class="tech-list">
                        <li>PHP</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Python</li>
                    </ul>
                    <div class="project-links">
                        <a href="https://www.figma.com/design/u88uOHgzNJAH5W9ViFhw0P/Hi-fi-RPL-Lintas-Jenjang?node-id=0-1&t=j1ot4ji2QRJVeKKR-1" class="project-link" target="_blank">Lihat Desain di Figma</a>
                        <a href="https://github.com/rvanza453/Rekognisi-Pembelajaran-Lampau-Alih-Jenjang-UTM" class="project-link" target="_blank">Lihat Kode di GitHub</a>
                        <a href="https://rpl-alihjenjang-utm.uinfaq.org/" class="project-link" target="_blank">Lihat Implementasi</a>
                    </div>
                </div>
            `
        },
        
        'project-obe': {
            title: "Sistem Outcome Based Education (OBE)",
            icon: "pie-chart.png",
            layout: 'portrait',
            content: `
                <div class="project-detail">
                    <h2>Sistem Outcome Based Education (OBE) - Versi Mobile</h2>
                    <p><strong>Klien:</strong> UPN Veteran Jawa Timur (Prodi Hukum & Kimia)</p>
                    <p><strong>Tipe Proyek:</strong> Pengembangan Aplikasi Mobile (Magang)</p>
                    
                    <div class="slider-container portrait-mode">
                        <button class="slider-btn slider-btn-left" style="display: none;">&lt;</button>
                        <div class="slider-wrapper">
                            <div class="slider-item">
                                <img src="./assets/images/obe/login.jpg" alt="Screenshot E-OBE login" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/dashboard.jpg" alt="Screenshot E-OBE dashboard" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/daftar_matkul.jpg" alt="Screenshot E-OBE daftar matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/detail_matkul.jpg" alt="Screenshot E-OBE detail matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/data_evaluasi_rps.jpg" alt="Screenshot E-OBE data evaluasi rps" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/evaluasi_rps_mahasiswa.jpg" alt="Screenshot E-OBE evaluasi rps mahasiswa" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/evaluasi_rps.jpg" alt="Screenshot E-OBE evaluasi rps" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/detail_evaluasi_rps.jpg" alt="Screenshot E-OBE detail evaluasi rps" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/statistik_matkul.jpg" alt="Screenshot E-OBE statistik matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                            <div class="slider-item">
                                <img src="./assets/images/obe/nilai_total_cpl.jpg" alt="Screenshot E-OBE nilai total cpl" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                        </div>
                        <button class="slider-btn slider-btn-right">&gt;</button>
                    </div>

                    <h3>Deskripsi Proyek</h3>
                    <p>
                        Aplikasi ini adalah ekstensi mobile dari Sistem OBE berbasis web yang sudah ada. Tujuannya adalah memberikan solusi yang lebih fleksibel dan praktis bagi <strong>dosen</strong> untuk mengelola tugas-tugas evaluasi pembelajaran langsung dari smartphone, mengurangi ketergantungan pada laptop.
                    </p>
                    <p>
                        Pengembangan difokuskan khusus untuk <strong>role Dosen</strong> karena alur kerjanya seimbang—tidak serumit role Admin/Kurikulum, namun lebih interaktif daripada role Mahasiswa yang cenderung pasif. Keputusan ini memastikan aplikasi dapat memberikan fungsionalitas yang maksimal dan pengalaman pengguna yang optimal di platform mobile.
                    </p>

                    <h3>Peran & Tanggung Jawab Saya</h3>
                    <p>
                        Sebagai salah satu dari dua <strong>Mobile Developer</strong> dalam tim, saya bertanggung jawab penuh dalam merancang dan mengimplementasikan antarmuka (UI/UX) serta logika aplikasi menggunakan <strong>Kotlin Native</strong>, memastikan aplikasi berjalan lancar, responsif, dan sesuai dengan alur kerja yang telah ditentukan.
                    </p>

                    <h3>Teknologi & Metodologi</h3>
                    <ul class="tech-list">
                        <li><strong>Mobile:</strong> Kotlin Native</li>
                        <li><strong>Backend:</strong> Laravel (PHP)</li>
                        <li><strong>Database:</strong> MySQL</li>
                    </ul>

                    <h3>Tim Proyek</h3>
                    <ul class="tech-list">
                        <li><strong>Mobile Developer:</strong> Muhammad Revanza, Isfa Fadil Muhammad</li>
                        <li><strong>Backend Developer:</strong> Abdul Azis Naufal Farizqi, Ahmad Sofian Aris Saputra</li>
                    </ul>
                    
                    <div class="project-links">
                        <a href="https://www.figma.com/proto/igDhsx6nXDG2sXLBCZeUEa/OBE-Team?node-id=1588-445&p=f&t=vylaMzW6S0WVhG6j-1&scaling=scale-down&content-scaling=fixed&page-id=3%3A154&starting-point-node-id=1588%3A445" class="project-link" target="_blank">Lihat Desain di Figma</a>
                        <a href="https://github.com/rvanza453/OBE-Dosen" class="project-link" target="_blank">Lihat Kode di GitHub</a>
                    </div>
                </div>
            `
        },

        'project-ects': {
            title: "Sistem Informasi PenyeTAraan Rekognisi Akademik (SITARA)",
            icon: "graduate.png",
            content: `
                <div class="project-detail">
                    <h2>Sistem Informasi PenyeTAraan Rekognisi Akademik (SITARA)</h2>
                    <p><strong>Klien:</strong> Dr. I Gede Susrama Mas Diyasa, S.T., M.T., IPU</p>
                    
                    <div class="slider-container">
                        <button class="slider-btn slider-btn-left" style="display: none;">&lt;</button>
                        <div class="slider-wrapper">
                            <div class="slider-item">
                                <img src="./assets/images/sitara/landing_page.png" alt="Screenshot SITARA landing page" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/login.png" alt="Screenshot SITARA login" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/dashboard_admin.png" alt="Screenshot SITARA dashboard admin" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/manajemen_matkul.png" alt="Screenshot SITARA manajemen matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/tambah_matkul.png" alt="Screenshot SITARA input matkul" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/input_transkrip_mhs.png" alt="Screenshot SITARA input transkrip mahasiswa" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/manajemen_admin.png" alt="Screenshot SITARA manajemen admin" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/dashboard_mhs.png" alt="Screenshot SITARA dashboard mahasiswa" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                             <div class="slider-item">
                                <img src="./assets/images/sitara/edit_profil_mhs.png" alt="Screenshot SITARA edit profil mahasiswa" class="slider-image">
                                <div class="fullscreen-btn" title="Perbesar gambar">⛶</div>
                            </div>
                        </div>
                        <button class="slider-btn slider-btn-right">&gt;</button>
                    </div>
                    <h3>Deskripsi</h3>
                    <p>
                        SITARA adalah sebuah sistem berbasis web yang berfungsi sebagai engine untuk melakukan konversi kredit akademik ECTS 
                        secara otomatis. Proyek ini bertujuan untuk menggantikan proses manual yang memakan waktu dengan sebuah aplikasi yang 
                        dapat mengimplementasikan formula dan aturan konversi yang kompleks secara efisien dan akurat.
                    </p>
                    <p>
                        Fokus utama pengembangan adalah membangun logika backend yang efektif untuk memproses data transkrip nilai berdasarkan 
                        aturan penyetaraan yang dapat dikonfigurasi. Sistem ini dirancang untuk menjadi alat bantu bagi administrator akademik, 
                        memastikan setiap hasil konversi dapat dipertanggungjawabkan dan sesuai dengan standar yang berlaku.
                    </p>

                    <h3>Teknologi & Metodologi</h3>
                    <ul class="tech-list">
                        <li><strong>Backend:</strong> Laravel (PHP)</li>
                        <li><strong>Frontend:</strong> Blade, Tailwind CSS, Vite</li>
                        <li><strong>Database:</strong> MySQL</li>
                    </ul>

                    <div class="project-links">
                        <a href="https://github.com/rvanza453/sistem_konversi_ects" class="project-link" target="_blank">Lihat Kode di GitHub</a>
                    </div>
                </div>
            `
        },
    };


    // const projects = {
    //     'project-erpl': {
    //         title: "Sistem E-RPL Universitas Trunojoyo",
    //         icon: "my-documents.png",
    //         content: `
    //             <div class="project-detail">
    //                 <h2>Sistem E-RPL Alih Jenjang</h2>
    //                 <p><strong>Klien:</strong> PJM LPMPP Universitas Trunojoyo Madura (UTM)</p>
    //                 <img src="https://via.placeholder.com/450x250.png?text=Screenshot+Proyek+E-RPL" alt="Screenshot E-RPL" class="project-screenshot">
    //                 <h3>Deskripsi</h3>
    //                 <p>
    //                     Sistem Rekognisi Pembelajaran Lampau (E-RPL) adalah proyek skripsi saya yang berhasil diimplementasikan secara nyata 
    //                     di Universitas Trunojoyo Madura. Sistem ini mendukung proses <em>alih jenjang</em> dengan cara menyederhanakan asesmen 
    //                     konversi mata kuliah dan pengalaman pendidikan mahasiswa. Salah satu fitur unggulannya adalah 
    //                     <strong>rekomendasi otomatis konversi mata kuliah</strong> menggunakan metode 
    //                     <em>Cosine Similarity</em> dan <em>Jaccard Similarity</em>, 
    //                     sehingga proses asesmen menjadi lebih objektif dan efisien.
    //                 </p>
    //                 <p>
    //                     Proyek ini menjadi puncak perjalanan akademik saya karena tidak hanya selesai sebagai skripsi, 
    //                     tetapi juga benar-benar digunakan oleh PJM LPMPP UTM. Hal ini membuktikan bahwa hasil karya saya 
    //                     dapat memberikan dampak nyata dan positif dalam dunia pendidikan.
    //                 </p>
    //                 <h3>Teknologi Utama</h3>
    //                 <ul class="tech-list">
    //                     <li>Laravel (Backend Framework)</li>
    //                     <li>Blade Template Engine</li>
    //                     <li>Bootstrap & CSS</li>
    //                     <li>JavaScript (Frontend)</li>
    //                     <li>MySQL (Database)</li>
    //                     <li>Python (perhitungan similarity)</li>
    //                 </ul>
    //                 <h3>Statistik Kode</h3>
    //                 <ul class="tech-list">
    //                     <li>JavaScript: 53.2%</li>
    //                     <li>Fluent: 24.2%</li>
    //                     <li>HTML: 13.2%</li>
    //                     <li>Blade: 4.1%</li>
    //                     <li>PHP: 2.9%</li>
    //                     <li>CSS: 2.3%</li>
    //                     <li>Python: 0.1%</li>
    //                 </ul>
    //                 <div class="project-links">
    //                     <a href="https://www.figma.com/design/u88uOHgzNJAH5W9ViFhw0P/Hi-fi-RPL-Lintas-Jenjang?node-id=0-1&t=j1ot4ji2QRJVeKKR-1" class="project-link" target="_blank">Lihat Desain di Figma</a>
    //                     <a href="https://github.com/rvanza453/Rekognisi-Pembelajaran-Lampau-Alih-Jenjang-UTM" class="project-link" target="_blank">Lihat Kode di GitHub</a>
    //                     <a href="https://rpl-alihjenjang-utm.uinfaq.org/" class="project-link" target="_blank">Lihat Implementasi</a>
    //                 </div>
    //             </div>
    //         `
    //     },
    //     'project-portfolio-terminal': {
    //         title: "Portofolio Tema Terminal",
    //         icon: "terminal.png",
    //         content: `
    //             <div class="project-detail">
    //                 <h2>Portofolio Tema Terminal</h2>
    //                 <p><strong>Tipe:</strong> Proyek Pribadi</p>
    //                 <img src="https://via.placeholder.com/450x250.png?text=Screenshot+Portofolio+Terminal" alt="Screenshot Portofolio Terminal" class="project-screenshot">
    //                 <h3>Deskripsi</h3>
    //                 <p>Sebuah portofolio interaktif yang dirancang dengan antarmuka seperti terminal command-line. Proyek ini dibuat untuk menunjukkan kreativitas dan keahlian dalam frontend development dengan vanilla JavaScript.</p>
    //                 <h3>Teknologi Utama</h3>
    //                 <ul class="tech-list">
    //                     <li>HTML5</li>
    //                     <li>CSS3</li>
    //                     <li>JavaScript (ES6)</li>
    //                 </ul>
    //                 <a href="#" class="project-link" target="_blank">Lihat Kode di GitHub</a>
    //             </div>
    //         `
    //     }
    //     // Tambahkan proyek lainnya di sini
    // }

    const apps = {
        'my-computer': {
            title: "Tentang Saya",
            icon: "my-computer.png",
            content: `
                    <div class="profile-container">
                        <div class="profile-header">
                            <img src="./assets/images/foto-profil.jpg" alt="Foto Profil Revanza" class="profile-pic">
                            <div class="profile-title">
                                <h1>Muhammad Revanza</h1>
                                <p>Web & Mobile Developer | Problem Solver</p>
                            </div>
                        </div>

                        <div class="profile-section">
                            <fieldset>
                                <legend>i am()</legend>
                                <p class="typing-effect">
    Saya adalah lulusan Cum Laude dari program studi Informatika UPN "Veteran" Jawa Timur dengan IPK 3.86. Sejak awal, saya memiliki ketertarikan yang mendalam pada pengembangan perangkat lunak, khususnya pada Web Development menggunakan framework Laravel dan Mobile Development dengan Kotlin Native. Bagi saya, coding bukan hanya tentang menulis perintah, tetapi tentang merakit solusi.

    Puncak dari perjalanan kuliah S1 saya adalah proyek skripsi, Sistem Rekognisi Pembelajaran Lampau Alih Jenjang (E-RPL). Saya bangga bahwa proyek ini bukan hanya sekadar tugas akhir, tetapi juga diimplementasikan dan digunakan oleh PJM LPMPP Universitas Trunojoyo Madura (UTM) untuk menyederhanakan proses asesmen mereka. Kebermanfaatan nyata dari proyek inilah yang menjadi pencapaian terbaik saya sejauh ini, membuktikan bahwa kode yang saya tulis dapat memberikan dampak positif.

    Fondasi kepemimpinan dan kemampuan memecahkan masalah saya terbentuk saat menjabat sebagai Ketua OSIS semasa SMA. Pengalaman tersebut mengajari saya untuk berpikir secara terstruktur, merencanakan setiap langkah, dan andal dalam menghadapi tantangan—sebuah keahlian yang kini saya terapkan dalam merancang alur kerja perangkat lunak yang efisien.                                </p>
                            </fieldset>
                        </div>

                        <div class="profile-section">
                            <fieldset>
                                <legend>my_arsenal.json</legend>
                                <p>Spesialisasi utama saya ada di dua dunia:</p>
                                <div class="skills-grid">
                                    <div class="skill-item web">
                                        <i class="icon-laravel"></i>
                                        <strong>Web Development</strong>
                                        <span>Laravel</span>
                                    </div>
                                    <div class="skill-item mobile">
                                        <i class="icon-kotlin"></i>
                                        <strong>Mobile Development</strong>
                                        <span>Kotlin Native</span>
                                    </div>
                                </div>

                                <p>Berikut adalah tingkat keahlian saya:</p>
                                
                                <div class="skill-bars-container">
                                    <div class="skill-bars-container">
                                        <div class="skill-bar">
                                            <span class="skill-name">Laravel</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="90%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">Kotlin Native</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="85%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">C++</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="80%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">PHP</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="85%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">SQL</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="90%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">HTML & CSS</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="90%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">Figma</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="75%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">Python</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="70%"></div>
                                            </div>
                                        </div>
                                        <div class="skill-bar">
                                            <span class="skill-name">Excel</span>
                                            <div class="bar-container">
                                                <div class="bar-fill" data-target-width="75%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        
                        <div class="profile-section">
                            <fieldset>
                                <legend>philosophy.txt</legend>
                                <p>
                                    Saya antusias untuk memulai karier sebagai seorang programmer, baik di bidang web, mobile, maupun sebagai bagian dari tim IT. Namun, saya percaya bahwa proses belajar tidak pernah berhenti. Saya selalu terbuka untuk mengeksplorasi hal-hal baru, termasuk Machine Learning, Data Analis, Jaringan dan lainnya, karena saya yakin setiap baris kode dan setiap elemen desain adalah langkah untuk menciptakan solusi yang lebih baik.
                                </p>
                            </fieldset>
                        </div>
                    </div>`,
        },
        'my-documents': {
            title: "Proyek Saya",
            icon: "my-documents.png",
            content: `<p>Memuat proyek...</p>`
        },
        'internet-explorer': {
            title: "Kontak Saya",
            icon: "ie.png",
            content: `
                <div class="digital-card">
                    <div class="card-header">
                        <img src="./assets/images/foto-profil.jpg" alt="Foto Profil" class="profile-pic">
                        <div class="card-header-text">
                            <h2>Muhammad Revanza</h2>
                            <p>Web & Mobile Developer | Problem Solver</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <p>Hubungi saya melalui platform di bawah ini. Saya selalu terbuka untuk diskusi, kolaborasi, atau peluang baru.</p>
                        <div class="contact-links">
                            <a href="mailto:muhammadrevanza453@gmail.com" class="contact-link" title="Kirim Email">
                                <img src="./assets/icons/mail.png" alt="Email">
                                <span>muhammadrevanza453@gmail.com</span>
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-revanza-1885b9298" target="_blank" class="contact-link" title="Lihat Profil LinkedIn">
                                <img src="./assets/icons/linkedin.png" alt="LinkedIn">
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/rvanza453" target="_blank" class="contact-link" title="Lihat Repositori GitHub">
                                <img src="./assets/icons/github.png" alt="GitHub">
                                <span>GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/rvanza.m" target="_blank" class="contact-link" title="Lihat Profil Instagram">
                                <img src="./assets/icons/instagram.png" alt="Instagram">
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>
            `
        },
        'revanza-cv': {
            title: "Revanza_CV.pdf",
            icon: "pdf.png",
            type: 'file',
            url: 'assets/muhammad_revanza_cv.pdf'
        }
    };

    // Fungsi untuk membuat ikon di desktop
    function createDesktopIcons() {
        for (const appId in apps) {
            const app = apps[appId];
            const iconDiv = document.createElement('div');
            iconDiv.className = 'desktop-icon';
            iconDiv.dataset.appId = appId;
            iconDiv.innerHTML = `
                <img src="assets/icons/${app.icon}" alt="${app.title}">
                <span>${app.title}</span>
            `;

            // Cek apakah tipe app adalah 'file'
            if (app.type === 'file') {
                // Jika 'file', maka saat di-double-click, buka URL di tab baru
                iconDiv.addEventListener('dblclick', () => {
                    window.open(app.url, '_blank');
                });
            } else {
                // Jika bukan 'file', jalankan fungsi openWindow seperti biasa
                iconDiv.addEventListener('dblclick', () => openWindow(appId));
            }

            desktop.appendChild(iconDiv);
        }
    }

    function showLightbox(imageSrc) {
        lightboxImage.src = imageSrc;
        lightboxOverlay.classList.remove('hidden');
    }

    function openWindow(appId) {
        const appData = apps[appId] || projects[appId];
        if (!appData) return;

        const taskbarApps = document.getElementById('taskbar-apps');

        // Cek apakah sudah ada window untuk aplikasi ini
        const existingWindow = document.querySelector(`.window[data-app-id="${appId}"]`);
        if (existingWindow) {
            if (existingWindow.style.display === 'none') {
                existingWindow.style.display = 'flex';
            }
            highestZIndex++;
            existingWindow.style.zIndex = highestZIndex;
            return;
        }
        
        const windowClone = windowTemplate.content.cloneNode(true);
        const newWindow = windowClone.querySelector('.window');
        newWindow.dataset.appId = appId;

        highestZIndex++;
        newWindow.style.zIndex = highestZIndex;
        newWindow.style.top = `${Math.random() * 50 + 20}px`;
        newWindow.style.left = `${Math.random() * 150 + 50}px`;

        newWindow.querySelector('.title').textContent = appData.title;
        const contentArea = newWindow.querySelector('.content');

        // Logika khusus untuk 'my-documents' dan lainnya ---
        if (appId === 'my-documents') {
            contentArea.innerHTML = '';
            contentArea.classList.add('file-explorer-view'); // Tambah kelas untuk styling

            for (const projectId in projects) {
                const project = projects[projectId];
                const projectIcon = document.createElement('div');
                projectIcon.className = 'desktop-icon'; // Pakai style icon desktop
                projectIcon.style.color = '#000';
                projectIcon.style.textShadow = 'none';

                projectIcon.innerHTML = `
                    <img src="assets/icons/${project.icon}" alt="${project.title}">
                    <span>${project.title}</span>`;
                
                projectIcon.addEventListener('dblclick', () => {
                    openWindow(projectId); // Buka jendela detail proyek
                });

                contentArea.appendChild(projectIcon);
            }
        } else {
            // Ini adalah logika asli untuk semua window lain
            contentArea.innerHTML = appData.content;
        }

        const sliderContainer = newWindow.querySelector('.slider-container');

        if (appData.layout === 'portrait') {
            sliderContainer.classList.add('portrait-mode');
        }
        
        if (sliderContainer) {
            const sliderWrapper = sliderContainer.querySelector('.slider-wrapper');
            const leftBtn = sliderContainer.querySelector('.slider-btn-left');
            const rightBtn = sliderContainer.querySelector('.slider-btn-right');
            const items = sliderContainer.querySelectorAll('.slider-item');

            const itemWidth = items[0].offsetWidth + 10; // Lebar item + gap

            const updateButtonVisibility = () => {
                // Tampilkan/sembunyikan tombol kiri
                leftBtn.style.display = sliderWrapper.scrollLeft > 0 ? 'block' : 'none';
                // Tampilkan/sembunyikan tombol kanan
                const maxScrollLeft = sliderWrapper.scrollWidth - sliderWrapper.clientWidth;
                rightBtn.style.display = sliderWrapper.scrollLeft < maxScrollLeft - 1 ? 'block' : 'none';
            };
            
            // Panggil sekali saat window dibuka
            setTimeout(updateButtonVisibility, 100); // Delay untuk memastikan layout sudah benar
            sliderWrapper.addEventListener('scroll', updateButtonVisibility);


            rightBtn.addEventListener('click', () => {
                sliderWrapper.scrollBy({ left: itemWidth, behavior: 'smooth' });
            });

            leftBtn.addEventListener('click', () => {
                sliderWrapper.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            });

            // --- LOGIKA UNTUK (FULLSCREEN) ---
            items.forEach(item => {
                const fullscreenBtn = item.querySelector('.fullscreen-btn');
                const image = item.querySelector('.slider-image');
                
                fullscreenBtn.addEventListener('click', () => {
                    showLightbox(image.src);
                });
            });
        }

        // LOGIKA ANIMASI SKILL BAR
        // Logika ini tetap di sini dan hanya akan berjalan jika window yang dibuka
        const legends = newWindow.querySelectorAll('legend');
        let arsenalSection = null;
        for (const legend of legends) {
            if (legend.textContent.trim() === 'my_arsenal.json') {
                arsenalSection = legend.parentElement;
                break;
            }
        }

        if (arsenalSection) {
            const skillBars = arsenalSection.querySelectorAll('.bar-fill');
            const observerOptions = {
                root: newWindow.querySelector('.content'),
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        skillBars.forEach(bar => {
                            const targetWidth = bar.dataset.targetWidth;
                            bar.style.width = targetWidth;
                        });
                        observer.unobserve(arsenalSection);
                    }
                });
            }, observerOptions);
            observer.observe(arsenalSection);
        }

        const closeBtn = newWindow.querySelector('.close');
        const maximizeBtn = newWindow.querySelector('.maximize');
        const minimizeBtn = newWindow.querySelector('.minimize');
        const titleBar = newWindow.querySelector('.title-bar');

        closeBtn.addEventListener('click', () => {
            newWindow.remove();
            const taskbarButton = document.querySelector(`.taskbar-btn[data-app-id="${appId}"]`);
            if (taskbarButton) taskbarButton.remove();
        });
        
        maximizeBtn.addEventListener('click', () => {
            const isMaximized = newWindow.classList.toggle('maximized');
            maximizeBtn.classList.toggle('restore', isMaximized);
            if (isMaximized) {
                newWindow.dataset.originalTop = newWindow.style.top;
                newWindow.dataset.originalLeft = newWindow.style.left;
                newWindow.dataset.originalWidth = newWindow.style.width;
                newWindow.dataset.originalHeight = newWindow.style.height;
                newWindow.style.top = '0px';
                newWindow.style.left = '0px';
                titleBar.style.cursor = 'default';
            } else {
                newWindow.style.top = newWindow.dataset.originalTop;
                newWindow.style.left = newWindow.dataset.originalLeft;
                titleBar.style.cursor = 'move';
            }
        });

        // Logika untuk auto-maximize di layar mobile
        if (window.innerWidth <= 480) {
            maximizeBtn.click();
        }

        minimizeBtn.addEventListener('click', () => {
            newWindow.style.display = 'none';
        });

        newWindow.addEventListener('mousedown', () => {
            highestZIndex++;
            newWindow.style.zIndex = highestZIndex;
            document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
            const taskbarButton = document.querySelector(`.taskbar-btn[data-app-id="${appId}"]`);
            if(taskbarButton) taskbarButton.classList.add('active');
        });

        makeDraggable(newWindow);
        desktop.appendChild(newWindow);
        
        // MEMBUAT TOMBOL DI TASKBAR
        const taskbarButton = document.createElement('button');
        taskbarButton.className = 'taskbar-btn active';
        taskbarButton.dataset.appId = appId;
        taskbarButton.innerHTML = `<img src="assets/icons/${appData.icon}" alt="${appData.title}" /> <span>${appData.title}</span>`;
        
        document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
        
        taskbarButton.addEventListener('click', () => {
            const isHidden = newWindow.style.display === 'none';
            if (isHidden) {
                newWindow.style.display = 'flex';
            }
            highestZIndex++;
            newWindow.style.zIndex = highestZIndex;
            document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
            taskbarButton.classList.add('active');
        });

        taskbarApps.appendChild(taskbarButton);
    }

    // FUNGSI DRAGGABLE & JAM
    function makeDraggable(element) {
        const titleBar = element.querySelector('.title-bar');
        let isDragging = false;
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', (e) => {
            if (element.classList.contains('maximized')) return;
            isDragging = true;
            offsetX = e.clientX - element.offsetLeft;
            offsetY = e.clientY - element.offsetTop;
            element.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                element.style.left = `${e.clientX - offsetX}px`;
                element.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            if(isDragging) {
                isDragging = false;
                // Kembalikan cursor ke 'move' hanya jika tidak maximized
                if (!element.classList.contains('maximized')) {
                    element.style.cursor = 'move';
                    titleBar.style.cursor = 'move';
                } else {
                     titleBar.style.cursor = 'default';
                }
            }
        });
    }

    function updateClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = (hours % 12) || 12;
        clockElement.textContent = `${formattedHours}:${minutes} ${ampm}`;
    }

        lightboxClose.addEventListener('click', () => {
        lightboxOverlay.classList.add('hidden');
    });

    createDesktopIcons();
    setInterval(updateClock, 1000);
    updateClock();

    lightboxOverlay.addEventListener('click', (e) => {
        // Hanya tutup jika yang diklik adalah area overlay gelap, bukan gambar
        if (e.target === lightboxOverlay) {
            lightboxOverlay.classList.add('hidden');
        }
    });
});