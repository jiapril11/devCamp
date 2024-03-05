import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/;

const phoneRegex = /^010\d{8}$/;

export const registerSchema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  phone: z
    .string()
    .min(11, "연락처는 11자리여야 합니다.")
    .max(11, "연락처는 11자리여야 합니다.")
    .refine((phone) => phone.startsWith("010"), {
      message: "010으로 시작하는 11자리 숫자를 입력해주세요.",
    }),
  // .refine((phone) => phoneRegex.test(phone), {
  //   message: "010으로 시작하는 11자리 숫자를 입력해주세요.",
  // }),
  username: z
    .string()
    .min(2, { message: "이름은 2글자 이상이어야 합니다." })
    .max(30, { message: "이름은 30글자 이하여야 합니다." }),
  role: z.string().min(2, { message: "역할을 선택해주세요." }),
  password: z
    .string()
    .min(8, { message: "비밀번호는 8자리 이상이어야 합니다." })
    .max(30, "비밀번호는 30자리 이하여야 합니다.")
    .refine((password) => passwordRegex.test(password), {
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
    }),
  confirmPassword: z
    .string()
    .min(8, { message: "비밀번호는 8자리 이상이어야 합니다." })
    .max(30, "비밀번호는 30자리 이하여야 합니다.")
    .refine((password) => passwordRegex.test(password), {
      message: "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.",
    }),
});
