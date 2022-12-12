import { getUserApi, updateUserApi } from "../api/user";

const getUser = async (setUser) => {
    try {
        const res = await getUserApi();
        
        if (!res.ok) {
            console.error(res.data);
        };

        console.log(res.data);

        const { data } = res.data;

        setUser(data);

    } catch (err) {
        console.error(err);
    }
};

const updateUser = async (e, setUser) => {
    try {
        const form = new FormData(e.target)
        
        const userData = {
            email: form.get('email'),
            first_name: form.get('first_name'),
            last_name: form.get('last_name'),
            age: form.get('age')
        };

        const res = await updateUserApi(userData);

        if (!res.ok) {
            console.error(res.data);
        };

        const { message, data } = res.data;
        alert(message);
        setUser(data);

        return { message, data };

    } catch (err) {
        console.error(err);
    }
};

export {
    getUser,
    updateUser
}