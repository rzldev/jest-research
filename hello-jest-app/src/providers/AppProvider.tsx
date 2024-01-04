import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { AppProviderProps } from '../@types/props'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function AppProvider(props: AppProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  )
}
