export interface SlideItem {
  id: number;
  label: string; // "Slide 1", "Slide 2", etc.
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  metrics?: { label: string; value: string }[];
}

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    label: 'Slide 1',
    title: 'Green Shop . Com বিজনেস মডেল',
    subtitle: 'Green Shop . Com',
    tagline: 'বিজনেস মডেল',
    description: 'Green Shop . Com বিজনেস মডেল: B2B, D2C, B2C, Export',
  },
  {
    id: 2,
    label: 'Slide 2',
    title: 'Green Shop . Com ডেলিভারি ম্যানেজমেন্ট',
    subtitle: 'ডেলিভারি ম্যানেজমেন্ট',
    tagline: 'ডেলিভারি ম্যানেজমেন্ট',
    description: 'Green Shop . Com ডেলিভারি ম্যানেজমেন্ট: ডাক বিভাগ ও অন্যান্য',
  },
  {
    id: 3,
    label: 'Slide 3',
    title: 'Green Shop . Com এর ফিচার ও কার্যপ্রণালী',
    subtitle: 'ফিচার ও কার্যপ্রণালী',
    tagline: 'এর ফিচার ও কার্যপ্রণালী',
    description: 'Green Shop . Com এর ফিচার ও কার্যপ্রণালী এবং এক্সট্রা ফিচার',
  },
  {
    id: 4,
    label: 'Slide 4',
    title: 'Green Shop . Com আমাদের প্ল্যাটফর্মে কেন মানুষ আসবে?',
    subtitle: 'কেন মানুষ আসবে?',
    tagline: 'প্ল্যাটফর্মের সুবিধা',
    description: 'Green Shop . Com: আস্থা, লাইভ প্রুফ মার্কেটিং, অথেন্টিকেশন (সেলার, বায়ার)',
  },
  {
    id: 5,
    label: 'Slide 5',
    title: 'Green Shop . Com Step 2 Project',
    subtitle: 'Step 2 Project',
    tagline: 'গ্লোবাল হাব সংস্করণ',
    description: 'Green Shop . Com Step 2 Project: প্রথম লক্ষ্য বন্দর বা গ্লোবাল হাব সংস্করণ (নৌ - বন্দর, বিমান - বন্দর)',
  },
  {
    id: 6,
    label: 'Slide 6',
    title: 'Green Shop . Com দ্বিতীয় লক্ষ্য',
    subtitle: 'দ্বিতীয় লক্ষ্য',
    tagline: 'উৎপাদন, রপ্তানি, GDP, কর্মসংস্থান',
    description: 'Green Shop . Com দ্বিতীয় লক্ষ্য: উৎপাদন, রপ্তানি, GDP, কর্মসংস্থান বাড়ানো',
  },
  {
    id: 7,
    label: 'Slide 7',
    title: 'Green Shop . Com কীভাবে বিশ্ববাজারে রাজত্ব করবে',
    subtitle: 'বিশ্ববাজারে রাজত্ব',
    tagline: 'বিশ্ববাজারে রাজত্ব',
    description: 'Green Shop . Com কীভাবে বিশ্ববাজারে রাজত্ব করবে',
  },
];
