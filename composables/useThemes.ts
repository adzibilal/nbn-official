import { useState, useEffect } from 'react'

type Theme = { id: string; name: string }

export function useThemes() {
    const themes: Theme[] = [
        { id: 'light', name: 'Terang' },
        { id: 'dark', name: 'Gelap' },
        { id: 'system', name: 'Default Sistem' }
    ]

    const savedTheme =
        typeof window !== 'undefined' ? localStorage.getItem('app_theme') : ''
    const [theme, setTheme] = useState<string>(savedTheme || themes[0].id)

    const getDefaultTheme = () => {
        const savedTheme = localStorage.getItem('app_theme')
        if (savedTheme) setTheme(savedTheme)
        if (!savedTheme) changeTheme('light')
    }

    const changeTheme = (selectedTheme: string) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('app_theme', selectedTheme)
        }
        const actions: Record<string, () => void> = {
            light: () => {
                document.documentElement.classList.remove('dark')
                document.documentElement.setAttribute('data-theme', 'light')
            },
            dark: () => {
                document.documentElement.classList.add('dark')
                document.documentElement.setAttribute('data-theme', 'luxury') // Ubah ke 'luxury'
            },
            system: () => {
                const isDark = window.matchMedia(
                    '(prefers-color-scheme: dark)'
                ).matches
                if (isDark) {
                    document.documentElement.classList.add('dark')
                    document.documentElement.setAttribute(
                        'data-theme',
                        'luxury'
                    )
                } else {
                    document.documentElement.classList.remove('dark')
                    document.documentElement.setAttribute('data-theme', 'light')
                }
            }
        }

        actions[selectedTheme]()
    }

    // Ganti tema saat komponen dimuat atau saat preferensi sistem berubah
    useEffect(() => {
        changeTheme(theme)
    }, [theme])

    const isDarkPreferred = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches

    return { themes, theme, getDefaultTheme, changeTheme, isDarkPreferred }
}
