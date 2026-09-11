export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  previews: {
    src: string;
    alt: string;
    label: string;
  }[];
  visualSteps: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Botox & Filler Lab",
    category: "Professional Project",
    description:
      "Website perusahaan untuk klinik kecantikan asal Amerika Serikat, dikembangkan bersama tim Owen Group dengan fokus pada pengalaman pengguna yang jelas dan terawat.",
    stack: ["Web Development", "Frontend", "Maintenance"],
    links: [{ label: "Kunjungi website", url: "https://botoxandfillerlab.com/" }],
    previews: [
      {
        src: "/projects/botox-filler-lab.png",
        alt: "Landing page website Botox and Filler Lab",
        label: "Botox & Filler Lab",
      },
    ],
    visualSteps: [],
    featured: true,
  },
  {
    title: "Reddith",
    category: "Academic Project",
    description:
      "Platform forum komunikasi dan komunitas kampus yang dirancang untuk membantu mahasiswa terhubung, berdiskusi, dan berbagi informasi.",
    stack: ["Full-stack", "Community Platform", "Responsive UI"],
    links: [
      {
        label: "Kunjungi website",
        url: "https://plum-giraffe-248987.hostingersite.com/",
      },
    ],
    previews: [
      {
        src: "/projects/reddith.png",
        alt: "Landing page platform forum kampus Reddith",
        label: "Reddith",
      },
    ],
    visualSteps: [],
    featured: true,
  },
  {
    title: "Digitalisasi Layanan Kelurahan",
    category: "KKN · 5 Digital Products",
    description:
      "Rangkaian lima website yang dibangun untuk mendukung akses layanan, informasi, partisipasi masyarakat, dan kebutuhan digital kelurahan di Kota Parepare.",
    stack: ["Next.js", "React", "Digital Public Service"],
    links: [
      { label: "KILAT", url: "https://kilat-watsor.vercel.app/" },
      { label: "SIMPEL", url: "https://simpel-watsor.vercel.app/" },
      { label: "SUARA KAMI", url: "https://suarakami-watsor.vercel.app/" },
      { label: "PASTI BISA", url: "https://pastibisa-watsor.vercel.app/" },
      { label: "PANTAS KEREN", url: "https://pantaskeren-watsor.vercel.app/" },
    ],
    previews: [
      { src: "/projects/kilat.png", alt: "Landing page KILAT layanan persuratan digital", label: "KILAT" },
      { src: "/projects/simpel.png", alt: "Landing page SIMPEL layanan pengaduan warga", label: "SIMPEL" },
      { src: "/projects/suarakami.png", alt: "Landing page SUARA KAMI survei pelayanan publik", label: "SUARA KAMI" },
      { src: "/projects/pastibisa.png", alt: "Landing page PASTI BISA pemetaan sasaran stunting", label: "PASTI BISA" },
      { src: "/projects/pantaskeren.png", alt: "Landing page PANTAS KEREN pemetaan ekonomi kreatif", label: "PANTAS KEREN" },
    ],
    visualSteps: [],
    featured: true,
  },
  {
    title: "Computer Vision untuk Pematang Sawah",
    category: "Intelligent System",
    description:
      "Sistem computer vision untuk mendeteksi dan menganalisis profil geometri pematang sawah, dengan Decision Tree sebagai pendukung keputusan navigasi.",
    stack: ["Python", "OpenCV", "YOLO", "Machine Learning"],
    links: [],
    previews: [],
    visualSteps: ["Data visual", "Deteksi YOLO", "Analisis OpenCV", "Decision Tree", "Keputusan navigasi"],
  },
];

export const skillGroups = [
  {
    title: "Web Development",
    description: "Membangun antarmuka, logika aplikasi, dan integrasi layanan untuk kebutuhan nyata.",
    items: ["Laravel", "PHP", "JavaScript", "HTML & CSS", "REST API"],
  },
  {
    title: "Data & Intelligent Systems",
    description: "Mengolah data visual dan menerapkan model untuk membantu sistem mengambil keputusan.",
    items: ["Python", "Machine Learning", "OpenCV", "YOLO", "Data Analysis"],
  },
  {
    title: "Tools & Database",
    description: "Menjaga alur pengembangan, data, dan kolaborasi proyek tetap terstruktur.",
    items: ["MySQL", "Git", "GitHub", "API Integration", "System Maintenance"],
  },
];

export const highlights = [
  { value: "7", label: "Website publik" },
  { value: "3.67", label: "IPK / 4.00" },
  { value: "3+", label: "Area teknologi" },
  { value: "2026", label: "Mulai profesional" },
];

export const workPrinciples = [
  {
    title: "Problem solving",
    description: "Memecah persoalan kompleks menjadi solusi yang lebih sederhana, terukur, dan dapat dikerjakan.",
  },
  {
    title: "Human-centered",
    description: "Memahami konteks pengguna agar produk bukan hanya berfungsi, tetapi juga mudah dipahami dan digunakan.",
  },
  {
    title: "Continuous learning",
    description: "Terbuka mempelajari teknologi baru dan mengevaluasi hasil untuk terus meningkatkan kualitas pekerjaan.",
  },
];

export const contactLinks = [
  {
    label: "WhatsApp",
    value: "+62 853-4261-4904",
    href: "https://wa.me/6285342614904",
  },
  {
    label: "Email",
    value: "imamhudzaifah@gmail.com",
    href: "mailto:imamhudzaifah@gmail.com",
  },
  {
    label: "Instagram",
    value: "@imamhzf",
    href: "https://www.instagram.com/imamhzf",
  },
];
