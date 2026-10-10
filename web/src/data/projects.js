// Shared by the portfolio and downloadable resume.
// ─── Work Projects ──────────────────────────────────────────────────────────
export const workProjects = [
    {
        index: 'W.01',
        year: '2018 – Present',
        title: 'AppICE Android SDK',
        role: 'Android SDK Developer',
        platform: 'Android (Native)',
        type: 'work',
        description:
            'Mobile engagement SDK providing push notifications, in-app messaging, campaign & event tracking, geofencing, and user engagement. Maintained Android compatibility through API 36, improved ANR performance, and integrated SSL/TLS security.',
        metric: '8+ years maintained',
        tags: ['Java', 'Kotlin', 'FCM', 'SQLite', 'Gradle', 'API 36'],
        features: [
            { icon: '🔔', label: 'Push Notifications' },
            { icon: '💬', label: 'In-App Messaging' },
            { icon: '📍', label: 'Geofencing' },
            { icon: '📊', label: 'Campaign Tracking' },
            { icon: '🔐', label: 'SSL/TLS Security' },
            { icon: '⚡', label: 'ANR Debugging' },
            { icon: '🔗', label: 'Deep Links' },
            { icon: '📱', label: 'API 34–36 Support' },
        ],
    },
    {
        index: 'W.02',
        year: '2020 – Present',
        title: 'React Native AppICE Plugin',
        role: 'Native Android Integration',
        platform: 'React Native',
        type: 'work',
        description:
            'Native Android bridge enabling React Native apps to access AppICE SDK features. Built the JS-to-native communication layer supporting callbacks, push notifications, and full SDK feature access.',
        metric: 'Cross-platform SDK bridge',
        tags: ['React Native', 'Java', 'Native Modules', 'npm'],
    },
    {
        index: 'W.03',
        year: '2019 – Present',
        title: 'Kony / Volt MX Wrapper',
        role: 'SDK Wrapper Engineer',
        platform: 'Kony / Volt MX',
        type: 'work',
        description:
            'Java-based wrapper exposing AppICE SDK to Kony/Volt MX apps. Handled push notification routing, callbacks, and bridging native SDK features to the Kony JavaScript layer.',
        metric: 'Enterprise SDK wrapper',
        tags: ['Java', 'Kony', 'Volt MX', 'Push Notifications'],
    },
    {
        index: 'W.04',
        year: '2021 – Present',
        title: 'Cordova & Flutter Plugins',
        role: 'Plugin Developer',
        platform: 'Cordova / Flutter',
        type: 'work',
        description:
            'Cross-platform plugins for AppICE on Cordova and Flutter. Handled plugin setup, push notification routing, deep links, callbacks, and native-to-hybrid communication.',
        metric: '2 cross-platform plugins',
        tags: ['Cordova', 'Flutter', 'Android Native'],
    },
    {
        index: 'W.05',
        year: 'Semusi',
        title: 'AppICE iOS SDK',
        role: 'iOS Contributor',
        platform: 'iOS',
        type: 'work',
        description:
            'Contributed to AppICE iOS SDK development including live-events functionality. Worked on SDK packaging and distribution through CocoaPods and podspec.',
        metric: 'iOS SDK contribution',
        tags: ['iOS', 'CocoaPods', 'podspec', 'Swift/ObjC'],
    },
    {
        index: 'W.06',
        year: 'Semusi',
        title: 'Vtion',
        role: 'Android Developer',
        platform: 'Android',
        type: 'work',
        description:
            'Mobile platform for real-time tracking of media application usage for audience research and TRP-related analytics. Contributed to data collection and tracking features.',
        metric: 'Media analytics platform',
        tags: ['Android', 'Real-time Tracking', 'Analytics', 'TRP'],
    },
    {
        index: 'W.07',
        year: 'Cube Square',
        title: 'Searo / SyncNScan / QuTrust',
        role: 'Android Developer',
        platform: 'Android',
        type: 'work',
        description:
            'Contributed to multiple Android products: Searo (grocery workflows), SyncNScan (device protection & cloud backup), and QuTrust (mobile hardware & sensor diagnostics).',
        metric: '3 Android products',
        tags: ['Android', 'REST APIs', 'Retrofit', 'Volley'],
    },
];

// ─── Personal / Live Projects ─────────────────────────────────────────────
export const personalProjects = [
    {
        index: 'P.01',
        title: 'Shree Japa App',
        platform: 'Android · Live on Play Store',
        type: 'personal',
        description:
            'A spiritual Android app for Japa (mantra chanting) practice. Helps users track, count, and maintain their daily chanting sessions with a clean and focused interface.',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ap.shree.japamapp',
        tags: ['Java', 'Android', 'SQLite', 'Personal Project'],
        icon: '🕉️',
    },
    {
        index: 'P.02',
        title: 'Reqtor',
        platform: 'Android · Live on Play Store',
        type: 'personal',
        description:
            'An Android utility app published on the Play Store. Built and published independently, demonstrating end-to-end Android app development, deployment, and Play Store distribution.',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ap.reqtor',
        tags: ['Kotlin', 'Android', 'Play Store', 'Personal Project'],
        icon: '🔧',
    },
];

