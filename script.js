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
            content: `<h1>Revanza</h1><p>Saya adalah seorang lulusan Teknik Informatika yang bersemangat dalam pengembangan web dan pemecahan masalah. Saya memiliki pengalaman dengan teknologi modern seperti JavaScript, Laravel, dan React, dan selalu antusias untuk belajar hal baru.</p>`
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

    // Fungsi untuk membuka jendela baru
    function openWindow(appId) {
        const app = apps[appId];
        const windowClone = windowTemplate.content.cloneNode(true);
        const newWindow = windowClone.querySelector('.window');

        // Atur Z-Index
        highestZIndex++;
        newWindow.style.zIndex = highestZIndex;

        // Atur posisi acak agar tidak menumpuk
        newWindow.style.top = `${Math.random() * 100 + 50}px`;
        newWindow.style.left = `${Math.random() * 200 + 100}px`;

        // Isi konten jendela
        newWindow.querySelector('.title').textContent = app.title;
        newWindow.querySelector('.content').innerHTML = app.content;
        
        // Tambahkan event listener untuk tombol close dan drag
        newWindow.querySelector('.close').addEventListener('click', () => newWindow.remove());
        
        // Bawa ke depan saat diklik
        newWindow.addEventListener('mousedown', () => {
             highestZIndex++;
             newWindow.style.zIndex = highestZIndex;
        });

        makeDraggable(newWindow);
        desktop.appendChild(newWindow);
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