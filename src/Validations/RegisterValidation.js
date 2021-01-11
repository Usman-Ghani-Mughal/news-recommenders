import * as yup from 'yup';

export const regSchema = yup.object().shape({
    username: yup.string()
    .min(5,   "* minimum 5 characters required")
    .max(255, "* maximum 255 characters required")
    .required('* Required'),

    email: yup.string().email("* Invalid email").required('* Required'),

    password: yup.string()
    .min(8,   "* minimum 8 characters required")
    .max(255, "* maximum 255 characters required")
    .required('* Required')
});