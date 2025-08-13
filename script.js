document.addEventListener('DOMContentLoaded', () => {
    const desktop = document.getElementById('desktop');
    const clockElement = document.getElementById('clock');
    const windowTemplate = document.getElementById('window-template');
    let highestZIndex = 100;

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
            content: `<h2>Daftar Proyek</h2><ul><li><a href="#" target="_blank">Sistem Manajemen Inventaris</a></li><li><a href="#" target="_blank">Website Portofolio Terminal</a></li><li>Proyek Skripsi: ...</li></ul>`
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
        const app = apps[appId];
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

        newWindow.querySelector('.title').textContent = app.title;
        newWindow.querySelector('.content').innerHTML = app.content;

        // ▼▼▼ BAGIAN YANG DIPERBAIKI ▼▼▼

        // --- LOGIKA ANIMASI SKILL BAR ON-SCROLL ---
        const legends = newWindow.querySelectorAll('legend');
        let arsenalSection = null;
        // Loop untuk mencari legend yang benar tanpa :contains()
        for (const legend of legends) {
            if (legend.textContent.trim() === 'my_arsenal.json') {
                arsenalSection = legend.parentElement; // Dapatkan fieldset-nya
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
                    // Jika elemen masuk ke viewport
                    if (entry.isIntersecting) {
                        // Terapkan width dari "data-target-width" ke setiap bar
                        skillBars.forEach(bar => {
                            const targetWidth = bar.dataset.targetWidth; // Baca data-target-width
                            bar.style.width = targetWidth; // Terapkan sebagai style, ini akan memicu transisi!
                        });
                        
                        // Berhenti mengamati setelah animasi berjalan
                        observer.unobserve(arsenalSection);
                    }
                });
            }, observerOptions);

            observer.observe(arsenalSection);
        }

        // --- LOGIKA TOMBOL WINDOW ---

        const closeBtn = newWindow.querySelector('.close');
        const maximizeBtn = newWindow.querySelector('.maximize');
        const minimizeBtn = newWindow.querySelector('.minimize');
        const titleBar = newWindow.querySelector('.title-bar');

        // 1. Tombol Close
        closeBtn.addEventListener('click', () => {
            newWindow.remove();
            const taskbarButton = document.querySelector(`.taskbar-btn[data-app-id="${appId}"]`);
            if (taskbarButton) {
                taskbarButton.remove();
            }
        });
        
        // 2. Tombol Maximize / Restore
        maximizeBtn.addEventListener('click', () => {
            const isMaximized = newWindow.classList.toggle('maximized');
            maximizeBtn.classList.toggle('restore', isMaximized); // Tambah/hapus class 'restore'
            
            if (isMaximized) {
                // Simpan posisi & ukuran sebelum maximize
                newWindow.dataset.originalTop = newWindow.style.top;
                newWindow.dataset.originalLeft = newWindow.style.left;
                newWindow.dataset.originalWidth = newWindow.style.width;
                newWindow.dataset.originalHeight = newWindow.style.height;
                // Set ke ukuran penuh
                newWindow.style.top = '0px';
                newWindow.style.left = '0px';
                // Draggable dinonaktifkan saat maximize
                titleBar.style.cursor = 'default';
            } else {
                // Kembalikan ke posisi & ukuran semula
                newWindow.style.top = newWindow.dataset.originalTop;
                newWindow.style.left = newWindow.dataset.originalLeft;
                // Kembalikan cursor drag
                titleBar.style.cursor = 'move';
            }
        });

        // 3. Tombol Minimize
        minimizeBtn.addEventListener('click', () => {
            newWindow.style.display = 'none'; // Sembunyikan window
        });

        // Bawa ke depan saat diklik
        newWindow.addEventListener('mousedown', () => {
            highestZIndex++;
            newWindow.style.zIndex = highestZIndex;
            // Juga aktifkan taskbar buttonnya
            document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
            const taskbarButton = document.querySelector(`.taskbar-btn[data-app-id="${appId}"]`);
            if(taskbarButton) taskbarButton.classList.add('active');
        });

        makeDraggable(newWindow);
        desktop.appendChild(newWindow);
        
        // --- MEMBUAT TOMBOL DI TASKBAR ---
        const taskbarButton = document.createElement('button');
        taskbarButton.className = 'taskbar-btn active';
        taskbarButton.dataset.appId = appId;
        taskbarButton.innerHTML = `<img src="assets/icons/${app.icon}" alt="${app.title}" /> <span>${app.title}</span>`;
        
        // Hapus status aktif dari tombol taskbar lain
        document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
        
        taskbarButton.addEventListener('click', () => {
            const isHidden = newWindow.style.display === 'none';
            if (isHidden) {
                newWindow.style.display = 'flex'; // Tampilkan kembali
            }
            // Bawa window ke depan
            highestZIndex++;
            newWindow.style.zIndex = highestZIndex;
            
            // Atur status aktif
            document.querySelectorAll('.taskbar-btn').forEach(btn => btn.classList.remove('active'));
            taskbarButton.classList.add('active');
        });

        taskbarApps.appendChild(taskbarButton);
    }

    // Fungsi untuk membuat jendela bisa di-drag
    function makeDraggable(element) {
        const titleBar = element.querySelector('.title-bar');
        let isDragging = false;
        let offsetX, offsetY;

        titleBar.addEventListener('mousedown', (e) => {
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
            isDragging = false;
            element.style.cursor = 'default';
        });
    }

    // Fungsi untuk jam digital
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