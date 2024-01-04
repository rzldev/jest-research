import React from 'react'
import { RenderOptions, render } from '@testing-library/react'
import AppProvider from '../providers/AppProvider'

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppProvider, ...options })

export * from '@testing-library/react'
export { customRender as render }
