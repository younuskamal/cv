import { ResumeData } from '../types';

export const tr: ResumeData = {
    name: "Younis Yasser Kamal",
    title: "Yazılım Geliştirici | Full-Stack, Masaüstü ve Otomasyon",
    typewriterTitles: ["Full-Stack Geliştirici", "Endüstriyel Otomasyon Mühendisi", "Masaüstü Uygulama Uzmanı"],
    summary: "Python ve JavaScript alanındaki derin uzmanlığını, platformlar arası Masaüstü uygulamaları, yüksek performanslı Web uygulamaları ve Endüstriyel Otomasyon konusundaki özelleşmiş yetenekleriyle birleştiren profesyonel Full-Stack Geliştirici. Yazılım çözümleri ile gömülü sistemler (Arduino / PLC) arasında köprü kurarak entegre ve verimli teknik sistemler sunma konusunda uzmanım.",
    contact: {
        email: "yonsy205@gmail.com",
        phone: "+90 552 732 4029",
        location: "Samsun, Türkiye",
        birthDate: "18 Ağustos 2003",
    },
    highlights: [
        "Profesyonel Masaüstü Uygulama Geliştirme (Electron, PyQt)",
        "Endüstriyel Kontrol Sistemleri Tasarımı (PLC, Arduino)",
        "İnteraktif ve Hızlı Web Arayüzleri (React, Next.js)",
        "Veritabanı Yönetimi ve Entegre Yazılım Projeleri"
    ],
    projects: [
        {
            title: "SmartClinic - Diş Kliniği Yönetim SaaS'ı",
            technologies: ["React 19", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "i18next", "3D Diş Haritası"],
            description: "Diş klinikleri için kurumsal düzeyde SaaS platformu. Gerçek zamanlı randevu planlaması, interaktif 3D diş haritaları (@react-three/fiber), HIPAA uyumlu güvenlikle hasta kayıtları, otomatik faturalama ve faturalandırma, çok dilli destek (İngilizce/Arapça/Türkçe) ve rol tabanlı erişim kontrolü (RBAC) içerir. Offline-first yaklaşımıyla ve canlı bildirimler için WebSocket ile tasarlanmıştır."
        },
        {
            title: "SmartPoint POS - Çevrimdışı Öncelikli Satış Noktası",
            technologies: ["Electron", "React", "NestJS", "SQLite", "TypeORM", "better-sqlite3", "Zustand"],
            description: "Gelişmiş offline-first mimarisiyle çapraz platform masaüstü POS sistemi. Dinamik işletme profilleri (Restoran/Eczane/Perakende), bağlam duyarlı izinlerle RBAC, eczaneler için FEFO envanter yönetimi, Mutfak Görüntüleme Sistemi (KDS), vardiya yönetimi, çevrimdışı kuyrukla bulut senkronizasyonu, HWID kilitlemeli lisans yönetimi ve çok dilli RTL desteği içerir. Electron içinde paketlenmiş modüler NestJS backend ile oluşturulmuştur."
        },
        {
            title: "SourcePlus - Lisans ve Abonelik Platformu",
            technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe API", "Donanım ID Doğrulama"],
            description: "Abonelik planlarını, cihaz aktivasyonunu/doğrulamasını, HWID tabanlı korumayı, otomatik yenilemeleri ve gerçek zamanlı lisans durumu senkronizasyonunu yöneten güvenli bulut tabanlı lisanslama sistemi. Üstel geri çekilme mantığı, şifreli token depolama uygular ve sorunsuz kullanıcı deneyimi için deneme/çevrimdışı modları destekler."
        }
    ],
    methodology: [
        {
            title: "Çevik Geliştirme (Agile)",
            description: "Hızlı iterasyonlar ve gereksinimlere sürekli adaptasyon.",
            icon: "Zap"
        },
        {
            title: "Temiz Kod (Clean Code)",
            description: "Bakımı kolay, okunabilir ve ölçeklenebilir kod yazımı.",
            icon: "Code"
        },
        {
            title: "Kullanıcı Odaklı Tasarım",
            description: "Sezgisel arayüzler ve sorunsuz kullanıcı deneyimi.",
            icon: "UserCheck"
        }
    ],
    experience: [
        {
            role: "Full-Stack ve Masaüstü Uygulama Geliştirici",
            company: "Freelance / Teknoloji Çözümleri",
            location: "Uzaktan / Hibrit",
            description: [
                "Electron ve Python (PyQt / Tkinter) kullanarak profesyonel platformlar arası masaüstü uygulamaları geliştirme.",
                "React.js, Next.js ve Node.js kullanarak dinamik, yüksek performanslı web uygulamaları inşa etme.",
                "Veri yönetimi için sağlam RESTful API'ler ve güvenli Back-End sistemleri tasarlama ve uygulama.",
                "Verimlilik ve güvenilirlik sağlamak için SQLite ve PostgreSQL veritabanlarını kullanarak veri yönetimi ve organizasyonu."
            ]
        },
        {
            role: "Endüstriyel Otomasyon ve Gömülü Sistemler Mühendisi",
            company: "Endüstriyel Mühendislik",
            location: "Samsun, Türkiye",
            description: [
                "Arduino ve C++ kullanarak Gömülü Sistemler ve mikrodenetleyici mantığı programlama ve geliştirme.",
                "Üretim hatları için PLC (Ladder Logic / STL) kullanarak karmaşık endüstriyel kontrol mantığı geliştirme.",
                "İş akışlarını optimize etmek ve manuel eforu azaltmak için özel yazılım otomasyon araçları oluşturma.",
                "Gerçek zamanlı izleme ve kontrol için elektronik devreleri ve sensörleri yazılım arayüzleriyle entegre etme."
            ]
        },
        {
            role: "Teknik Destek ve Sistem Uzmanı",
            company: "Teknik Servisler",
            location: "Çeşitli Lokasyonlar",
            description: [
                "Operasyonel sürekliliği sağlamak için karmaşık yazılım ve donanım sorunlarını teşhis etme ve çözme.",
                "Kurumsal ortamlar için bilgisayar sistemlerini ve ağ performansını optimize etme.",
                "Envanter yönetimi ve müşteri takibi için dahili veritabanı çözümleri geliştirme."
            ]
        }
    ],
    education: [
        {
            degree: "Bilgisayar Programcılığı",
            institution: "Ondokuz Mayıs Üniversitesi",
            location: "Samsun, Türkiye",
            keyValues: [
                "Yazılım Mühendisliği ve Veri Yapıları odaklı olarak onur derecesiyle mezun oldu.",
                "Yazılım sistemleri geliştirme üzerine seçkin bir mezuniyet projesi tamamladı."
            ]
        },
        {
            degree: "Elektrik-Elektronik Mühendisliği",
            institution: "Mühendislik Fakültesi",
            location: "Samsun, Türkiye",
            keyValues: [
                "Şu anda ileri düzey eğitimine devam etmektedir.",
                "Donanım (Hardware) ile Yazılım (Software) ve Gömülü Sistemlerin entegrasyonuna akademik ve pratik odaklanma."
            ]
        }
    ],
    languages: [
        { name: "Arapça", level: "Anadil", proficiencyPercent: 100 },
        { name: "Kürtçe", level: "İleri Seviye", proficiencyPercent: 90 },
        { name: "Türkçe", level: "C1 Sertifikalı (Akıcı)", proficiencyPercent: 100 },
        { name: "İngilizce", level: "İleri Seviye", proficiencyPercent: 90 }
    ],
    skills: [
        {
            category: "Web",
            items: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
        },
        {
            category: "Sistemler",
            items: ["Electron.js", "Python (PyQt)", "Arduino", "PLC", "C++"]
        },
        {
            category: "Araçlar",
            items: ["Git/GitHub", "Docker", "PostgreSQL", "SQLite", "Figma"]
        }
    ],
    ui: {
        sectionTitles: {
            highlights: "Öne Çıkanlar",
            projects: "Projeler",
            methodology: "Çalışma Metodolojisi",
            experience: "İş Deneyimi",
            education: "Eğitim",
            languages: "Diller",
            skills: "Teknik Beceriler",
            contact: "İletişim",
            about: "Profil Özeti"
        },
        labels: {
            roleLabel: "Mevcut Odak",
            download: "Özgeçmiş İndir",
            availableForWork: "Çalışmaya Uygun"
        },
        codingTimer: {
            title: "Profesyonel Kodlama Zamanı",
            years: "Yıl",
            months: "Ay",
            days: "Gün",
            hours: "Saat",
            minutes: "Dak",
            seconds: "San"
        }
    }
};
