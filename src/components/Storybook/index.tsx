import { ReactNode } from 'react'

export const CenterXAndY = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', boxSizing: 'border-box' }}>
    {children}
  </div>
)