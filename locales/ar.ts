import { ResumeData } from '../types';

export const ar: ResumeData = {
    name: "يونس ياسر كمال",
    title: "مطور برمجيات | Full-Stack وأتمتة صناعية",
    typewriterTitles: ["مطور Full-Stack", "مهندس أتمتة صناعية", "خبير تطبيقات سطح المكتب"],
    summary: "مطور Full-Stack محترف يجمع بين الخبرة العميقة في Python و JavaScript وتخصص دقيق في تطبيقات سطح المكتب متعددة المنصات وتطبيقات الويب عالية الأداء. أتميز بخبرة عملية في الأتمتة الصناعية والقدرة على الربط السلس بين الحلول البرمجية والأنظمة المدمجة (Arduino / PLC) لتقديم حلول تقنية متكاملة وفعالة.",
    contact: {
        email: "yonsy205@gmail.com",
        phone: "+90 552 732 4029",
        location: "سامسون، تركيا",
        birthDate: "18 أغسطس 2003",
    },
    highlights: [
        "تطوير تطبيقات سطح المكتب الاحترافية (Electron, PyQt)",
        "تصميم نظم تحكم صناعي وربطها بالبرمجيات (PLC, Arduino)",
        "بناء واجهات ويب تفاعلية وسريعة (React, Next.js)",
        "إدارة قواعد بيانات ومشاريع برمجية متكاملة"
    ],
    projects: [
        {
            title: "SmartClinic - نظام إدارة عيادات الأسنان SaaS",
            technologies: ["React 19", "TypeScript", "NestJS", "TypeORM", "PostgreSQL", "i18next", "خريطة أسنان ثلاثية الأبعاد"],
            description: "منصة SaaS احترافية لإدارة عيادات الأسنان تتضمن جدولة المواعيد الفورية، خرائط أسنان تفاعلية ثلاثية الأبعاد (@react-three/fiber)، سجلات المرضى مع أمان متوافق مع HIPAA، الفوترة الآلية، دعم متعدد اللغات (الإنجليزية/العربية/التركية)، والتحكم في الوصول القائم على الأدوار (RBAC). بُنيت بنهج Offline-First و WebSocket للإشعارات المباشرة."
        },
        {
            title: "SmartPoint POS - نظام نقاط البيع الذكي",
            technologies: ["Electron", "React", "NestJS", "SQLite", "TypeORM", "better-sqlite3", "Zustand"],
            description: "نظام نقاط بيع سطح مكتب متعدد المنصات مع معمارية Offline-First متقدمة. يتميز بملفات تعريف أعمال ديناميكية (مطعم/صيدلية/تجزئة)، RBAC مع أذونات حسب السياق، إدارة مخزون FEFO للصيدليات، نظام عرض المطبخ (KDS)، إدارة الورديات، مزامنة سحابية مع قائمة انتظار غير متصلة، إدارة التراخيص بقفل HWID، ودعم RTL متعدد اللغات. مبني بخلفية NestJS معيارية مدمجة داخل Electron."
        },
        {
            title: "SourcePlus - منصة التراخيص والاشتراكات",
            technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe API", "Hardware ID Verification"],
            description: "نظام ترخيص سحابي آمن لإدارة خطط الاشتراك، تفعيل/التحقق من الأجهزة، الحماية المستندة إلى HWID، التجديدات التلقائية، ومزامنة حالة الترخيص الفورية. يطبق منطق إعادة المحاولة مع backoff أسي، تخزين الرموز المشفرة، ويدعم أوضاع التجربة/غير المتصل لتجربة مستخدم سلسة."
        }
    ],
    methodology: [
        {
            title: "التطوير المرن (Agile)",
            description: "تكرارات سريعة وتكيف مستمر مع المتطلبات.",
            icon: "Zap"
        },
        {
            title: "الكود النظيف (Clean Code)",
            description: "كتابة صيانة وقابلة للقراءة والتوسع.",
            icon: "Code"
        },
        {
            title: "التصميم المرتكز على المستخدم",
            description: "واجهات بديهية وتجربة مستخدم سلسة.",
            icon: "UserCheck"
        }
    ],
    experience: [
        {
            role: "مطور Full-Stack وتطبيقات سطح المكتب",
            company: "عمل حر / حلول تقنية",
            location: "عن بعد / نظام هجين",
            description: [
                "تطوير تطبيقات سطح مكتب احترافية متعددة المنصات باستخدام Electron و Python (PyQt / Tkinter).",
                "بناء تطبيقات ويب ديناميكية عالية الأداء باستخدام React.js و Next.js و Node.js.",
                "تصميم وتنفيذ RESTful APIs قوية وأنظمة Back-End آمنة لإدارة البيانات.",
                "إدارة وتنظيم البيانات باستخدام قواعد بيانات SQLite و PostgreSQL لضمان الكفاءة والموثوقية."
            ]
        },
        {
            role: "مهندس أتمتة صناعية ونظم مدمجة",
            company: "الهندسة الصناعية",
            location: "سامسون، تركيا",
            description: [
                "برمجة وتطوير الأنظمة المدمجة (Embedded Systems) والتحكم بالمتحكمات الدقيقة باستخدام Arduino و C++.",
                "تطوير منطق تحكم صناعي معقد باستخدام أجهزة PLC (Ladder Logic / STL) لخطوط الإنتاج.",
                "إنشاء أدوات أتمتة برمجية مخصصة لتحسين سير العمل وتقليل الجهد اليدوي.",
                "دمج الدوائر الإلكترونية وأجهزة الاستشعار مع الواجهات البرمجية للمراقبة والتحكم اللحظي."
            ]
        },
        {
            role: "فني دعم تقني وأنظمة",
            company: "خدمات تقنية",
            location: "مواقع متعددة",
            description: [
                "تشخيص وحل مشكلات البرمجيات والأجهزة المعقدة لضمان استمرارية العمل.",
                "تحسين أداء الأنظمة الحاسوبية والشبكات لبيئات العمل المؤسسية.",
                "تطوير حلول قواعد بيانات داخلية لإدارة المخزون وتتبع العملاء."
            ]
        }
    ],
    education: [
        {
            degree: "برمجة الكمبيوتر",
            institution: "جامعة أوندوكوز مايس",
            location: "سامسون، تركيا",
            keyValues: [
                "تخرجت بتفوق مع التركيز على هندسة البرمجيات وهياكل البيانات.",
                "مشروع تخرج متميز في تطوير النظم البرمجية."
            ]
        },
        {
            degree: "هندسة الكهرباء والإلكترون",
            institution: "كلية الهندسة",
            location: "سامسون، تركيا",
            keyValues: [
                "حالياً في مرحلة الدراسة المتقدمة.",
                "التركيز الأكاديمي والعملي على دمج الأجهزة (Hardware) مع البرمجيات (Software) والأنظمة المدمجة."
            ]
        }
    ],
    languages: [
        { name: "العربية", level: "اللغة الأم", proficiencyPercent: 100 },
        { name: "الكردية", level: "متقدم", proficiencyPercent: 90 },
        { name: "التركية", level: "C1 (بطلاقة)", proficiencyPercent: 100 },
        { name: "الإنجليزية", level: "متقدم", proficiencyPercent: 90 }
    ],
    skills: [
        {
            category: "الويب",
            items: ["React.js", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
        },
        {
            category: "الأنظمة",
            items: ["Electron.js", "Python (PyQt)", "Arduino", "PLC", "C++"]
        },
        {
            category: "الأدوات",
            items: ["Git/GitHub", "Docker", "PostgreSQL", "SQLite", "Figma"]
        }
    ],
    ui: {
        sectionTitles: {
            highlights: "نقاط القوة",
            projects: "أبرز المشاريع",
            methodology: "منهجية العمل",
            experience: "الخبرة العملية",
            education: "التعليم",
            languages: "اللغات",
            skills: "المهارات التقنية",
            contact: "اتصل بي",
            about: "الملخص المهني"
        },
        labels: {
            roleLabel: "التركيز الحالي",
            download: "تحميل السيرة الذاتية",
            availableForWork: "متاح للعمل"
        },
        codingTimer: {
            title: "وقت البرمجة الاحترافي",
            years: "سنة",
            months: "شهر",
            days: "يوم",
            hours: "ساعة",
            minutes: "دقيقة",
            seconds: "ثانية"
        }
    }
};
