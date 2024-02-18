import { AuthContextProvider } from '@src/context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import React, { ReactNode } from 'react'

const queryclient = new QueryClient();
function Provider({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryclient}>
            <AuthContextProvider>
                <ConfigProvider componentSize='large' >
                    {children}
                </ConfigProvider>
            </AuthContextProvider>
        </QueryClientProvider>
    )
}

export default Provider