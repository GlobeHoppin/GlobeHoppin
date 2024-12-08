import toast from "react-hot-toast";
import { addPin } from "../services/apiConnector";
import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import CreatableSelect from "react-select/creatable";
import JoditEditor from 'jodit-react';
import { useLocation } from "react-router-dom";


export const Pin = () => {
    const [pin, setPin] = useState({});
    const { state } = useLocation();
    useEffect(() => {
        if (state?.pin) {
            setPin(state.pin);
            console.log("PIN............", state.pin);
        } else {
            console.log("PIN IS EMPTY");
        }
    }, [state]);
    const [tags, setTags] = useState([]);
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const handleTagChange = (newValue) => {
        setTags(newValue || []);
    };

    // useEffect(() => {
    //     if (state?.pin) setPin(state.pin);
    //     console.log("PIN............", pin);
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.target.closest('form');
        const formData = new FormData(formElement);
        const body = Object.fromEntries([...formData].map(
            ([key, value]) => [key, value]
        ));
        const toastId = toast.loading("Loading...");
        try {
            await addPin(body);
            toast.success("Add Pin Successful");
            window.location.reload();
        } catch (error) {
            console.log("ADD PIN API ERROR............", error);
            toast.error("Add Pin Failed");
        }
        toast.dismiss(toastId); 
    }
    

    return (
        <>
            <PageNav />

            <div className="relative isolate px-6 pt-24 lg:px-8 max-w-7xl mx-auto">
                <form id="add-pin-form" className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Latitude
                            </label>
                            <input type="number" step="0.000001" name="latitude" id="latitude" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" defaultValue={pin?.latitude} />
                        </div>
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Longitude
                            </label>
                            <input type="number" step="0.000001" name="longitude" id="longitude" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" defaultValue={pin?.longitude}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Pin Name
                            </label>
                            <input type="text" name="title" id="name" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" defaultValue={pin?.title} />
                        </div>
                        <div className="rounded-md shadow-sm">
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Pin Color
                        </label>
                        <input type="color" name="color" id="color" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-full shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" defaultValue={pin?.color || "#000000"} />
                    </div>
                    </div>
                    
                    <div className="rounded-md shadow-sm">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Pin Description
                        </label>
                        <input name="description" id="description" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" rows="3" defaultValue={pin?.description} />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Start Date
                            </label>
                            <input type="date" name="travelStartDate" id="startDate" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" defaultValue={pin?.travelStartDate} />
                        </div>
                        <div className="rounded-md shadow-sm">
                            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            End Date
                            </label>
                            <input type="date" name="travelEndDate" id="endDate" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white" defaultValue={pin?.travelEndDate} placeholder="" />
                        </div>
                    </div>

                    <div className="rounded-md shadow-sm">
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Tags
                        </label>
                        <CreatableSelect
                            isMulti
                            onChange={handleTagChange}
                            options={tags.map(tag => ({ label: tag.label, value: tag.value }))}
                            value={tags}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Description
                        </label>
                        <div className="mt-1">
                            <JoditEditor
                                ref={editor}
                                value={content}   
                                // config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            />
                        </div>
                    </div>

                    <button type="submit" className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onClick={handleSubmit}>
                    Add Pin
                    </button>
                </form>
            </div>

            <Footer />
        </>
        
    );
}