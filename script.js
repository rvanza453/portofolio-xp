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
                                <p>Full-Stack Enthusiast | Problem Solver</p>
                            </div>
                        </div>

                        <div class="profile-section">
                            <fieldset>
                                <legend>i am()</legend>
                                <p class="typing-effect">
                                    Lulusan Informatika UPN "Veteran" Jatim (IPK 3.86) dengan hasrat tinggi pada pengembangan perangkat lunak. Pengalaman saya sebagai Ketua OSIS membentuk saya menjadi pribadi yang terstruktur dan andal dalam memecahkan masalah. Saya percaya setiap baris kode adalah langkah untuk menciptakan solusi yang berdampak.
                                </p>
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
                                <p class="skills-list">
                                    <strong>Lainnya:</strong> PHP, C++, Python, SQL, HTML, CSS, Figma.
                                </p>
                            </fieldset>
                        </div>
                        
                        <div class="profile-section">
                            <fieldset>
                                <legend>philosophy.txt</legend>
                                <p>
                                    Saya tidak membatasi diri pada satu bidang. Dari web, mobile, hingga UI/UX, saya selalu haus akan pengetahuan baru. Bagi saya, belajar adalah sebuah petualangan tanpa akhir.
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

    // Ganti fungsi openWindow di dalam file script.js Anda

    function openWindow(appId) {
        const app = apps[appId];
        const taskbarApps = document.getElementById('taskbar-apps');

        // Cek apakah sudah ada window untuk aplikasi ini
        const existingWindow = document.querySelector(`.window[data-app-id="${appId}"]`);
        if (existingWindow) {
            // Jika ada dan tersembunyi (minimized), tampilkan kembali
            if (existingWindow.style.display === 'none') {
                existingWindow.style.display = 'flex';
            }
            // Bawa ke depan
            highestZIndex++;
            existingWindow.style.zIndex = highestZIndex;
            return; // Hentikan fungsi agar tidak membuat window baru
        }
        
        const windowClone = windowTemplate.content.cloneNode(true);
        const newWindow = windowClone.querySelector('.window');
        newWindow.dataset.appId = appId; // Tambahkan ID aplikasi ke elemen window

        // Atur Z-Index
        highestZIndex++;
        newWindow.style.zIndex = highestZIndex;

        // Atur posisi acak
        const top = Math.random() * 50 + 20;
        const left = Math.random() * 150 + 50;
        newWindow.style.top = `${top}px`;
        newWindow.style.left = `${left}px`;
        
        // Simpan posisi dan ukuran awal untuk restore
        newWindow.dataset.originalTop = newWindow.style.top;
        newWindow.dataset.originalLeft = newWindow.style.left;
        newWindow.dataset.originalWidth = newWindow.style.width;
        newWindow.dataset.originalHeight = newWindow.style.height;

        // Isi konten jendela
        newWindow.querySelector('.title').textContent = app.title;
        newWindow.querySelector('.content').innerHTML = app.content;

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