import { UseLoginUser, UsecCreateUser } from '@src/apis/user'
import { AuthContextType, CreateUser, loginUser } from '@src/types/user';
import { message } from 'antd';
import { useRouter } from 'next/router';
import React, { ReactNode, createContext, useCallback, useMemo, useState } from 'react'

const AuthContext = createContext<AuthContextType | null>(null)

function AuthContextProvider({ children }: { children: ReactNode }) {
    const { push } = useRouter();
    const [loading, setloading] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const { mutateAsync: createUser } = UsecCreateUser();
    const { mutateAsync: loginUser } = UseLoginUser();

    const registerUser = useCallback(
        async ({ email, password, phoneNumber, username }: CreateUser) => {
            try {
                const response = await createUser({
                    email,
                    password,
                    phoneNumber,
                    username
                }, {
                    onSuccess: (user) => {
                        console.log("🚀 ~ user:", user)
                        push("/auth/login")

                    }
                })
            } catch (error: any) {
                message.error(error.message)
            }
        },
        [createUser, push]
    );

    const login = useCallback(async ({ email, password }: loginUser) => {
        try {
            const response = await loginUser({ email, password })
            console.log(response)
        } catch (error: any) {
            // message.error(error.message)
        }
    }, [loginUser])

    const value = useMemo(() => ({
        login,
        registerUser,
        loading,
        isAuthenticated
    }), [registerUser, login, loading, isAuthenticated])

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }