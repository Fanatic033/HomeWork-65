import {ChangeEvent, FormEvent, useState, useEffect} from "react";
import {useNavigate,} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";

const initialState = {
    title: '',
    content: '',
};

const EditPage = () => {
    const [form, setForm] = useState(initialState);
    const [selectedPage, setSelectedPage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosApi.get(`/pages/${selectedPage}.json`);
                const { title, content } = response.data;
                setForm({ title, content });
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedPage) {
           void fetchData();
        }
    }, [selectedPage]);

    const onFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSave = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axiosApi.put(`/pages/${selectedPage}.json`, form);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form className="container" onSubmit={onSave}>
                <h2 className="text-center mt-5">Edit Page</h2>
                <div className="input-group">
                    <label className="mt-5 w-100">
                        Pages
                        <select
                            name="page"
                            className="form-select form-select mt-1"
                            onChange={(e) => setSelectedPage(e.target.value)}
                            value={selectedPage}
                        >
                            <option value="" disabled>Choose a Page</option>
                            <option value="Home">Home</option>
                            <option value="About">About</option>
                            <option value="Contacts">Contacts</option>
                            <option value="Features">Features</option>
                            <option value="Pricing">Pricing</option>
                        </select>
                    </label>
                </div>
                <div className="input-group">
                    <label className="mt-5">
                        Title
                        <input
                            className="w-100"
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={onFieldChange}
                            placeholder="Enter Title"
                        />
                    </label>
                </div>
                <div className="input-group">
                    <label className="mt-5">
                        Content
                        <textarea
                            className="w-100"
                            name="content"
                            value={form.content}
                            onChange={onFieldChange}
                            placeholder="Enter Content"
                            cols={60}
                            rows={8}
                        />
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mt-3 px-5">Save</button>
            </form>
        </>
    );
};

export default EditPage;
