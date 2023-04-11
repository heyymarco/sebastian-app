export type ThemeName =
    |'primary'
    |'secondary'
    |'success'
    |'info'
    |'warning'
    |'danger'
    |'light'
    |'dark'
    |(string & {})

export interface ThemableProps {
    // variants:
    theme ?: ThemeName
}
export const useThemable = ({theme}: ThemableProps) => theme ? `th${theme[0].toUpperCase() ?? ''}${theme.slice(1)}` : null;
