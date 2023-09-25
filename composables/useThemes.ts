import { useState, useEffect } from 'react'

type Theme = { id: string; name: string }

export function useThemes() {
    const themes: Theme[] = [
        { id: 'system', name: 'Default Sistem' },
        { id: 'light', name: 'Terang' },
        { id: 'dark', name: 'Gelap' }
    ]

    const [theme, setTheme] = useState<string>(themes[0].id)

    const getDefaultTheme = () => {
        const savedTheme = localStorage.getItem('app_theme')
        if (savedTheme) setTheme(savedTheme)

        changeTheme(savedTheme || 'system')
    }

    const changeTheme = (selectedTheme: string) => {
        localStorage.setItem('app_theme', selectedTheme)
        const actions: Record<string, () => void> = {
            light: () => {
                document.documentElement.classList.remove('dark')
                document.documentElement.setAttribute('data-theme', 'light')
            },
            dark: () => {
                document.documentElement.classList.add('dark')
                document.documentElement.setAttribute('data-theme', 'luxury')
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

    useEffect(() => {
        changeTheme(theme)
    }, [theme])

    return { themes, theme, getDefaultTheme, changeTheme }
}
