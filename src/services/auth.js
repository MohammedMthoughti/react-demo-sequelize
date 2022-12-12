import { loginApi, registerApi } from "../api/auth";

const register = async (e, navigate) => {
    try {
        e.preventDefault();

        const form = new FormData(e.target);

        const data = {
            email: form.get('email'),
            password: form.get('password'),
            first_name: form.get('first_name'),
            last_name: form.get('last_name'),
            age: Number(form.get('age'))
        };

        const res = await registerApi(data);

        if (!res.ok) {
            console.error(res.data);
        }

        const { message, status } = res.data;

        if (!status) return alert(message);
        
        navigate('/');

    } catch (err) {
        console.error(err);
    }
};

const login = async (e, navigate) => {
    try {
        e.preventDefault();
        
        const form = new FormData(e.target);

        const data = {
            email: form.get('email'),
            password: form.get('password'),
        };

        const res = await loginApi(data);

        if (!res.ok) {
            console.error(res.data);
        }

        const resPayload = res.data.data;

        if (resPayload) {
            localStorage.setItem('react-demo-user-token', resPayload.token);
        }

        const { message, status } = res.data;

        if (!status) return alert(message);
        
        navigate('/profile');

    } catch (err) {
        console.error(err);
    }
};

export {
    register,
    login
}