import * as Yup from 'yup';

const basicSchema = Yup.object().shape({
  fullName: Yup.string().required('Adınız ve soyadınızı giriniz'),
  email: Yup.string().email('Geçerli bir e-posta adresi giriniz').required('E-posta giriniz'),
  password: Yup.string().required('Şifre giriniz'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Şifreler aynı olmalıdır') // Bu satır şifrelerin aynı olup olmadığını kontrol eder
    .required('Şifrenizi tekrar giriniz'),
});

export { basicSchema };