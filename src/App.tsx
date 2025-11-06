import '@/styles/scroll-bar-style.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'
import { ThemeProvider } from './providers/theme-provider'
import { AuthProvider } from './providers/auth-provider'
import { ConfirmProvider } from './providers/confirm-provider'
import { queryClient } from './lib/query-client'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="inmediam-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | PamelaMob" />
        <Toaster />
        <AuthProvider>
          <ConfirmProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider
                router={router}
                future={{
                  v7_startTransition: true,
                }}
              />
            </QueryClientProvider>
          </ConfirmProvider>
        </AuthProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}