document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop');
    const clockElement = document.getElementById('clock');
    const windowTemplate = document.getElementById('window-template');
    let highestZIndex = 100;

    // --- TAMBAHAN: DATABASE KHUSUS UNTUK PROYEK ---
    // Kita buat objek terpisah untuk menyimpan semua data proyek.
    // Ini membuat data lebih rapi dan mudah dikelola.
    const projects = {
        'project-erpl': {
            title: "Sistem E-RPL Universitas Trunojoyo",
            icon: "my-documents.png",
            content: `
                <div class="project-detail">
                    <h2>Sistem E-RPL Alih Jenjang</h2>
                    <p><strong>Klien:</strong> PJM LPMPP Universitas Trunojoyo Madura (UTM)</p>
                    <img src="https://via.placeholder.com/450x250.png?text=Screenshot+Proyek+E-RPL" alt="Screenshot E-RPL" class="project-screenshot">
                    <h3>Deskripsi</h3>
                    <p>
                        Sistem Rekognisi Pembelajaran Lampau (E-RPL) adalah proyek skripsi saya yang berhasil diimplementasikan secara nyata 
                        di Universitas Trunojoyo Madura. Sistem ini mendukung proses <em>alih jenjang</em> dengan cara menyederhanakan asesmen 
                        konversi mata kuliah dan pengalaman pendidikan mahasiswa. Salah satu fitur unggulannya adalah 
                        <strong>rekomendasi otomatis konversi mata kuliah</strong> menggunakan metode 
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
                        <li>Laravel (Backend Framework)</li>
                        <li>Blade Template Engine</li>
                        <li>Bootstrap & CSS</li>
                        <li>JavaScript (Frontend)</li>
                        <li>MySQL (Database)</li>
                        <li>Python (perhitungan similarity)</li>
                    </ul>
                    <h3>Statistik Kode</h3>
                    <ul class="tech-list">
                        <li>JavaScript: 53.2%</li>
                        <li>Fluent: 24.2%</li>
                        <li>HTML: 13.2%</li>
                        <li>Blade: 4.1%</li>
                        <li>PHP: 2.9%</li>
                        <li>CSS: 2.3%</li>
                        <li>Python: 0.1%</li>
                    </ul>
                    <div class="project-links">
                        <a href="https://www.figma.com/design/u88uOHgzNJAH5W9ViFhw0P/Hi-fi-RPL-Lintas-Jenjang?node-id=0-1&t=j1ot4ji2QRJVeKKR-1" class="project-link" target="_blank">Lihat Desain di Figma</a>
                        <a href="https://github.com/rvanza453/Rekognisi-Pembelajaran-Lampau-Alih-Jenjang-UTM" class="project-link" target="_blank">Lihat Kode di GitHub</a>
                        <a href="https://rpl-alihjenjang-utm.uinfaq.org/" class="project-link" target="_blank">Lihat Implementasi</a>
                    </div>
                </div>
            `
        },
        'project-portfolio-terminal': {
            title: "Portofolio Tema Terminal",
            icon: "terminal.png",
            content: `
                <div class="project-detail">
                    <h2>Portofolio Tema Terminal</h2>
                    <p><strong>Tipe:</strong> Proyek Pribadi</p>
                    <img src="https://via.placeholder.com/450x250.png?text=Screenshot+Portofolio+Terminal" alt="Screenshot Portofolio Terminal" class="project-screenshot">
                    <h3>Deskripsi</h3>
                    <p>Sebuah portofolio interaktif yang dirancang dengan antarmuka seperti terminal command-line. Proyek ini dibuat untuk menunjukkan kreativitas dan keahlian dalam frontend development dengan vanilla JavaScript.</p>
                    <h3>Teknologi Utama</h3>
                    <ul class="tech-list">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript (ES6)</li>
                    </ul>
                    <a href="#" class="project-link" target="_blank">Lihat Kode di GitHub</a>
                </div>
            `
        }
        // Tambahkan proyek lainnya di sini
    }


    // Data untuk aplikasi/ikon di desktop
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
            content: `<p>Memuat proyek...</p>` // Konten ini akan diganti secara dinamis
        },
        'internet-explorer': {
            title: "Kontak",
            icon: "ie.png",
            content: `<h3>Hubungi Saya</h3><p>Email: revanza@example.com</p><p>LinkedIn: <a href="#" target="_blank">linkedin.com/in/revanza</a></p><p>GitHub: <a href="#" target="_blank">github.com/revanza</a></p>`
        },
        'terminal': {
            title: "Terminal",
            icon: "terminal.png",
            content: `<p>Fitur terminal akan ditambahkan di sini!</p>`
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
            iconDiv.addEventListener('dblclick', () => openWindow(appId));
            desktop.appendChild(iconDiv);
        }
    }

    function openWindow(appId) {
        // --- MODIFIKASI: Mengambil data dari 'apps' atau 'projects' ---
        const appData = apps[appId] || projects[appId];
        if (!appData) return; // Hentikan jika data tidak ditemukan

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

        // --- MODIFIKASI: Logika khusus untuk 'my-documents' dan lainnya ---
        if (appId === 'my-documents') {
            contentArea.innerHTML = ''; // Kosongkan konten default
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
            // Ini adalah logika asli Anda untuk semua window lain
            contentArea.innerHTML = appData.content;
        }

        // --- LOGIKA ANIMASI SKILL BAR ON-SCROLL ---
        // Logika ini tetap di sini dan hanya akan berjalan jika window yang dibuka
        // adalah 'my-computer' karena hanya di sana ada elemen fieldset yang sesuai.
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

        // --- LOGIKA TOMBOL WINDOW (TETAP SAMA) ---
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
        
        // --- MEMBUAT TOMBOL DI TASKBAR (TETAP SAMA) ---
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

    // --- FUNGSI DRAGGABLE & JAM (TETAP SAMA) ---
    function makeDraggable(element) {
        const titleBar = element.querySelector('.title-bar');
        let isDragging = false;
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', (e) => {
            // --- MODIFIKASI KECIL: Jangan drag saat maximized ---
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
                    element.style.cursor = 'move'; // Seharusnya titleBar, tapi element juga bisa
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

    // Inisialisasi
    createDesktopIcons();
    setInterval(updateClock, 1000);
    updateClock();
});