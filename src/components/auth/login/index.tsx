import useAuth from "@src/hook/useAuth"
import { loginUser } from "@src/types/user"
import { Form, Input, message } from "antd"
import { Button } from "antd"
import Link from "next/link"
import { useCallback, useState } from "react"

export default function Component() {
    const [email, setemail] = useState();
    const [password, setpassword] = useState()
    const { login } = useAuth();

    const onFinish = useCallback(async () => {
        try {
            const response = await login({ email, password } as any) as any
        } catch (error: any) {
        }
    }, [login, email, password])

    return (
        <div className="flex h-[86vh] bg-[#e0eaff]">
            <div className="flex w-1/2 bg-[#7f7fd5] bg-gradient-to-br from-[#7f7fd5] via-[#86a8e7] to-[#91eae4] p-12">
                <div className="m-auto">
                    <div className="flex items-center mb-8">
                        <FlagIcon className="h-8 w-8 text-white" />
                        <span className="ml-2 text-xl font-bold text-white">LOGO</span>
                    </div>
                    <h1 className="text-5xl font-bold text-white">Welcome Page</h1>
                    <p className="mt-3 text-lg text-white">Sign in to continue access</p>
                    <p className="absolute bottom-12 left-12 text-white">www.yoursite.com</p>
                </div>
            </div>
            <div className="flex w-1/2 bg-white">
                <div className="m-auto w-full max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900">Sign In</h2>
                    <Form className="mt-8 space-y-6" onFinish={onFinish}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <Form.Item name="email">
                                <Input id="email-address" placeholder="Email Address" type="email"
                                    value={email}
                                    onChange={(e: any) => setemail(e.target.value)}
                                />
                            </Form.Item>
                            <Form.Item className="mt-4" name="password">
                                <label className="sr-only" htmlFor="password">
                                    Password
                                </label>
                                <Input.Password id="password" placeholder="Password" type="password" value={password} onChange={(e: any) => setpassword(e.target.value)} />
                            </Form.Item>
                        </div>
                        <div>
                            <Button className="w-full" type="primary" htmlType="submit" onClick={onFinish}>Continue</Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                                    Forgot your password?
                                </Link>
                            </div>
                            <div className="text-sm">
                                <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="/auth/signup">
                                    Create a Account!
                                </Link>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">or Connect with Social Media</span>
                                </div>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <div>
                                    <Button className="inline-flex justify-center w-full rounded-md border border-transparent bg-[#1DA1F2] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#0d8aee]">
                                        Sign in With Twitter
                                    </Button>
                                </div>
                                <div>
                                    <Button className="inline-flex justify-center w-full rounded-md border border-transparent bg-[#4267B2] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#365899]">
                                        Sign in With Facebook
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

function FlagIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
            <line x1="4" x2="4" y1="22" y2="15" />
        </svg>
    )
}
