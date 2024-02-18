import { CreateUser, loginUser } from "@src/types/user";
import axios from "@src/utils/axios";
import { useMutation } from "@tanstack/react-query";

export const UseLoginUser = () => useMutation<string, Error, loginUser>({
    mutationFn: async (props) => (await axios.post("/user/login", props)).data
})

export const UsecCreateUser = () => useMutation<string, Error, CreateUser>({
    mutationFn: async (props) => (await axios.post("/user/create", props)).data
})