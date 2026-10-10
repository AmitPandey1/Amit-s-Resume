import React from 'react';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const options = [
    { value: 'light', label: 'Day', Icon: Sun },
    { value: 'dark', label: 'Night', Icon: Moon },
    { value: 'system', label: 'System', Icon: Monitor },
];

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    return (
        <div role="group" aria-label="Color theme" className="flex rounded-full border border-line/15 bg-surface p-1">
            {options.map(({ value, label, Icon }) => (
                <button
                    key={value}
                    type="button"
                    aria-label={`${label} theme`}
                    aria-pressed={theme === value}
                    title={value === 'system' ? 'Follow device theme' : `${label} theme`}
                    onClick={() => setTheme(value)}
                    className={`inline-flex h-9 w-9 items-center justify-center gap-1.5 rounded-full text-xs font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-android sm:w-auto sm:px-3 ${theme === value ? 'bg-android text-on-android shadow-sm' : 'text-muted-foreground hover:bg-line/10 hover:text-foreground'}`}
                >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">{label}</span>
                </button>
            ))}
        </div>
    );
}
