export interface PortfolioType {
    id: number;
    title: string;
    category: string;
    cover: string;
    images: string[];
    description: string;
    technologies: string[];
    link: string;
  }
  
  export interface ProjectType {
    id: string;
    value: string;
    name: string;
  }
  
  export const PORTFOLIOS_DATA: PortfolioType[] = [
    {
      id: 1,
      title: 'رسانه خبری مجله ای هواتون',
      category: 'سایت اختصاصی',
      cover: '/img/havatoon/1.jpg',
      images: [
        '/img/havatoon/1.jpg',
        '/img/havatoon/2.jpg',
        '/img/havatoon/3.jpg',
        '/img/havatoon/4.jpg',
        '/img/havatoon/5.jpg',
        '/img/havatoon/6.jpg',
      ],
      description: 'یک رسانه سرگرمی و خبری در حوزه فیلم و سریال که به صورت کاملاً ریسپانسیو، با رابط و تجربه کاربری (UI/UX) جذاب و منحصر‌به‌فرد به همراه حالت لایت و دارک طراحی شده است. این پروژه با رعایت دقیق اصول فنی سئو، پنل اختصاصی مدیریت محتوا و سیستم بهینه‌سازی پیشرفته تحویل داده شد.',
      technologies: ['Next.js', 'Tailwind CSS', 'Django REST Framework', 'CMS', 'PostgreSQL', 'Redis Cache'],
      link: 'https://havatoon.ir'
    },
    {
      id: 2,
      title: 'سالن زیبایی',
      category: 'بیوتی',
      cover: '/img/eliya-beauty/1.jpg',
      images: [
        '/img/eliya-beauty/1.jpg',
        '/img/eliya-beauty/2.jpg',
        '/img/eliya-beauty/3.jpg',
        '/img/eliya-beauty/4.jpg',
        '/img/eliya-beauty/5.jpg',
      ],
      description: 'وب‌سایت مدرن و اختصاصی سالن زیبایی به منظور معرفی خدمات، نمایش حرفه‌ای نمونه کارهای عروس و مراجعین و سیستم آنلاین رزرو نوبت جهت رفاه حال مشتریان.',
      technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
      link: 'https://eliya-beauty.netlify.app'
    },
    {
      id: 3,
      title: 'آکادمی زبان',
      category: 'آموزشی',
      cover: '/img/farzanegan-language-academy/1.jpg',
      images: [
        '/img/farzanegan-language-academy/1.jpg',
        '/img/farzanegan-language-academy/2.jpg',
        '/img/farzanegan-language-academy/3.jpg',
        '/img/farzanegan-language-academy/4.jpg',
        '/img/farzanegan-language-academy/5.jpg',
      ],
      description: 'سایت آموزشی آکادمی زبان شامل معرفی دوره‌ها، ارائه تخصص‌ها و رزومه استاد و فرآیند ثبت‌نام آنلاین و مدیریت دانشجوها.',
      technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
      link: 'https://farzanegan-language-academy.netlify.app'
    },
    {
      id: 4,
      title: 'توسعه نما',
      category: 'پورتفولیو',
      cover: '/img/tosee-nama/1.jpg',
      images: [
        '/img/tosee-nama/1.jpg',
        '/img/tosee-nama/2.jpg',
        '/img/tosee-nama/3.jpg',
        '/img/tosee-nama/4.jpg',
      ],
      description: 'وب‌سایت شرکتی و پورتفولیو برای ارائه نمونه کارها، توضیحات طراحی و اجرای نماهای مدرن، سه‌بعدی و پارامتریک ساختمانی به همراه بخش ثبت درخواست پروژه.',
      technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
      link: 'https://tosee-nama.netlify.app'
    },
    {
      id: 5,
      title: 'کلینیک بیوتی نچرال',
      category: 'بیوتی',
      cover: '/img/beauty-naturall/1.jpg',
      images: [
        '/img/beauty-naturall/1.jpg',
        '/img/beauty-naturall/2.jpg',
        '/img/beauty-naturall/3.jpg',
        '/img/beauty-naturall/4.jpg',
        '/img/beauty-naturall/5.jpg',
      ],
      description: 'طراحی وب‌سایت مدرن و لوکس برای کلینیک زیبایی نچرال جهت معرفی خدمات تخصصی پوست، مو، زیبایی و امکان رزرو آنلاین.',
      technologies: ['Next.js', 'Tailwind CSS', 'CMS'],
      link: 'https://beauty-naturall.netlify.app'
    },
    {
      id: 6,
      title: 'سئو رسانه هواتون',
      category: 'سئو',
      cover: '/img/seo-havatoon/1.jpg',
      images: [
        '/img/seo-havatoon/1.jpg',
        '/img/seo-havatoon/2.jpg',
      ],
      description: 'پروژه بهینه‌سازی و سئوی جامع رسانه هواتون. آمار تصاویر نشان‌دهنده رشد مداوم سایت طی یک سال گذشته است؛ افت‌های مقطعی اخیر نیز به دلیل قطعی اینترنت رخ داده که با استراتژی‌های جدید، روند ریکاوری آغاز شده و نمودار انتهای تصویر مجدداً متمایل به صعود و رشد ترافیک است.',
      technologies: ['سئو تکنیکال', 'مدل پیلار/کلاستر', 'استراتژی محتوا', 'سئو داخلی (On-Page)', 'هرس محتوا (Content Pruning)'],
      link: '#'
    }
  ];
  
  export const PROJECT_TYPES_DATA: ProjectType[] = [
    { id: 'webdesign', value: 'webdesign', name: 'طراحی وب‌سایت' },
    { id: 'seo', value: 'seo', name: 'خدمات سئو (SEO)' },
    { id: 'consulting', value: 'consulting', name: 'مشاوره کسب‌وکار' },
    { id: 'other', value: 'other', name: 'سایر موارد' },
  ];