import useAuth from "@src/hook/useAuth"
import { CreateUser } from "@src/types/user";
import { Input, Checkbox, Button, Form, message } from "antd"
import Link from "next/link"
import { useCallback } from "react"

export default function Signup() {
    const { registerUser } = useAuth();

    const onFinish = useCallback(async (value: CreateUser) => {
        try {
            const repsonse = await registerUser(value);
            console.log("🚀 ~ onFinish ~ repsonse:", repsonse)
        } catch (error: any) {
            message.error(error.message)
        }
    }, [registerUser])

    return (
        <div className="flex  mt-[50px] items-center justify-center bg-[#f4f7f6]">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">CREATE ACCOUNT</h2>
                </div>
                <Form className="space-y-6"
                    onFinish={onFinish}
                >
                    <Form.Item name="username" rules={[{ required: true, message: "Pleas enter the UserName!" }]}>
                        <Input id="name" placeholder="please Enter the User name" type="text" />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, message: "Please enter the email Address!" }]} name="email">
                        <Input id="email" placeholder="Your Email" type="email" />
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: "Pleas enter the password!" }]}>
                        <Input.Password id="password" placeholder="Password" type="password" />
                    </Form.Item>
                    <Form.Item name="phoneNumber" rules={[{ required: true, message: "Please enter the Phone Number" }]}>
                        <Input id="repeat-password" placeholder="Phone Number" type="password" />
                    </Form.Item>
                    <Button type="primary" block htmlType="submit">SIGN UP</Button>
                </Form>
                <div className="text-center">
                    <p className="text-sm">
                        Have already an account?
                        <Link className="text-blue-600" href="/auth/login">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

