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
  id?: number | string;
  name: string;
  value: string;
}

const MOCK_PORTFOLIOS: PortfolioType[] = [
  {
    id: 1,
    title: 'پروژه هواتون (دیتای فیک فرانت)',
    category: 'سایت اختصاصی',
    cover: 'https://picsum.photos/seed/shopfa/800/600',
    images: ['https://picsum.photos/seed/shopfa1/800/600'],
    description: 'این دیتا در حال صورت فیک نمایش داده می‌شود چون سرور در دسترس نیست.',
    technologies: ['Next.js'],
    link: '#'
  },
];

const MOCK_PROJECT_TYPES: ProjectType[] = [
  { id: 'webdesign', value: 'webdesign', name: 'طراحی وب‌سایت' },
  { id: 'seo', value: 'seo', name: 'خدمات سئو (SEO)' },
  { id: 'other', value: 'other', name: 'سایر موارد' },
];

export async function getPortfolios(): Promise<PortfolioType[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const res = await fetch(`${apiUrl}/portfolio/`, {
      next: { tags: ['portfolio-list'] }
    });
    if (!res.ok) throw new Error('Network response was not ok: ' + res.statusText);
    return await res.json();
  } catch (error: any) {
    console.log("Backend offline, using Mock Data instead for portfolios:", error?.message || error);
    return MOCK_PORTFOLIOS;
  }
}

export async function getProjectTypes(): Promise<ProjectType[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const res = await fetch(`${apiUrl}/project-types/`, {
      next: { tags: ['project-types'] }
    });
    if (!res.ok) throw new Error('Network response was not ok: ' + res.statusText);
    
    // Convert backend project types to frontend expectations if they differ
    const rawData = await res.json();
    return rawData.map((item: any) => ({
      id: item.id || item.value || item.title || item.name,
      value: item.id ? item.id.toString() : item.value || item.title || item.name,
      name: item.name || item.title || item.label || 'بدون نام'
    }));

  } catch (error: any) {
    console.log("Backend offline, using Mock Data instead for project types:", error?.message || error);
    return MOCK_PROJECT_TYPES;
  }
}

export async function submitContact(data: { full_name: string; phone_number: string; project_type: string | number; description: string }) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    const res = await fetch(`${apiUrl}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Network response was not ok: ' + res.statusText);
    return await res.json();
  } catch (error: any) {
    console.log("Backend offline, simulating success for contact:", error?.message || error);
    // Simulate successful request for fallback/AI studio development
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "Mock Mode: Submitted successfully" });
      }, 1500);
    });
  }
}
