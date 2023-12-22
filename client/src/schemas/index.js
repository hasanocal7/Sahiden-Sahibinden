import * as yup from "yup"; //ezbere yazdım yıldızın anlamını bilmiyorum
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta  giriniz")
    .required("E-posta girmek zorunludur"),

  password: yup
    .string()
    .min(5, "Lütfen en az 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az bir büyük harf,bir küçük harf ve 1 sayi giriniz",
    })
    .required("Şifre girmek zorunludur"),
  
});