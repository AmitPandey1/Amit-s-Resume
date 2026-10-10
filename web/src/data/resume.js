// Single source of truth for Amit's professional "biodata".
// Consumed by FullDetailsSheet (mobile), PrintResume (download) and ResumeSection.

export const profile = {
    name: 'Amit Pandey',
    title: 'Senior Android & Mobile SDK Developer',
    company: 'Semusi Technologies · Noida, India',
    email: 'ap78700@gmail.com',
    phone: '+91 7379363416',
    location: 'Noida, Uttar Pradesh, India',
    linkedin: 'https://www.linkedin.com/in/amit-pandey-8a91b4140',
    github: 'https://github.com/AmitPandey1',
    summary:
        'Nearly 8 years engineering the AppICE Android SDK — push notifications, in-app messaging, geofencing and cross-platform bridges for React Native, Flutter, Cordova and Kony — plus apps live on the Google Play Store.',
};

export const experience = [
    {
        period: 'Oct 2018 — Present',
        role: 'Android Developer',
        company: 'Semusi · Noida, India',
        summary:
            'Develop and maintain the AppICE Android SDK with features including push notifications, rich notifications, in-app messaging, geofencing, campaign tracking, user and event tracking. Build reusable SDK solutions integrated into native Android, React Native, Kony/Volt MX, and Cordova applications.',
    },
    {
        period: 'Jan 2018 — Aug 2018',
        role: 'Android Developer Intern',
        company: 'Cube Square Technologies · Noida, India',
        summary:
            'Developed Android applications communicating with backend services using REST APIs, Retrofit, and Volley. Worked on a Bugzilla-based mobile app for issue tracking and content-based Android applications.',
    },
];

export const education = [
    {
        period: '2016 — 2018',
        degree: 'Master of Computer Applications (MCA)',
        school: 'DIT University, Dehradun',
        summary: 'CGPA: 7.4/10. Specialization in Computer Science.',
    },
    {
        period: '2012 — 2015',
        degree: 'Bachelor of Computer Applications (BCA)',
        school: 'Deen Dayal Upadhyay Gorakhpur University',
        summary: '73% — Foundation in Computer Science.',
    },
];

export const skills = [
    'Android SDK & Platform Development',
    'Java & Kotlin',
    'Push Notifications & FCM',
    'Cross-Platform SDK Integration (React Native, Flutter, Cordova, Kony)',
    'Networking & SSL/TLS Security',
    'Performance & ANR Debugging',
    'Jetpack Compose',
    'MVVM · Room · REST APIs',
];

export const skillLevels = [
    { name: 'Android SDK & Platform Development', level: 95 },
    { name: 'Java & Kotlin', level: 93 },
    { name: 'Push Notifications & FCM', level: 92 },
    { name: 'Cross-Platform SDK Integration', level: 88 },
    { name: 'Networking & SSL/TLS Security', level: 85 },
    { name: 'Performance & ANR Debugging', level: 87 },
];

export const certifications = [
    'Kotlin Android Development',
    'Java 8',
    'Android Architecture',
    'Java Design Patterns',
];

export const highlights = [
    'AppICE Android SDK — push notifications, in-app messaging, geofencing, campaign & event tracking (2018 – Present)',
    'Cross-platform integrations: React Native, Flutter, Cordova, Kony / Volt MX',
    'Android compatibility maintained through API 36; ANR performance tuning; SSL/TLS security',
    'Two apps published on the Google Play Store',
];
