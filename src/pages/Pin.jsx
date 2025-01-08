import toast from "react-hot-toast";
import { addPin, updatePin } from "../services/apiConnector";
import { useEffect, useRef, useState } from "react";
import CreatableSelect from "react-select/creatable";
import JoditEditor from 'jodit-react';
import { useLocation, useNavigate } from "react-router-dom";

export const Pin = () => {
    const [pin, setPin] = useState({});
    const { state } = useLocation();
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const editor = useRef(null);
    const [content, setContent] = useState('');

    // Format date to YYYY-MM-DD for input[type="date"]
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toISOString().split('T')[0];
    };

    useEffect(() => {
        if (state?.pin) {
            // Set all pin data
            setPin(state.pin);
            // Set journal content
            setContent(state.pin.journal || '');
            // Set tags with proper format for CreatableSelect
            const formattedTags = state.pin.tags?.map(tag => ({
                label: tag,
                value: tag
            })) || [];
            setTags(formattedTags);
        }
    }, [state]);

    const handleTagChange = (newValue) => {
        setTags(newValue || []);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.target.closest('form');
        const formData = new FormData(formElement);
        const pinData = Object.fromEntries([...formData].map(
            ([key, value]) => [key, value]
        ));
        
        pinData.tags = tags.map(tag => tag.value);
        pinData.journal = content;
        
        const toastId = toast.loading(state?.pin ? "Updating pin..." : "Creating pin...");
        
        try {
            if (state?.pin) {
                await updatePin(state.pin._id, pinData);
                toast.success("Pin updated successfully!");
            } else {
                await addPin(pinData);
                toast.success("Pin created successfully!");
            }
            navigate('/globe');
        } catch (error) {
            console.error("Operation failed:", error);
            toast.error(state?.pin ? "Failed to update pin" : "Failed to create pin");
        } finally {
            toast.dismiss(toastId);
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 pb-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {state?.pin ? 'Edit Pin' : 'Create New Pin'}
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Mark your memories on the map
                        </p>
                    </div>

                    <form id="add-pin-form" className="space-y-8">
                        {/* Location Section */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Location Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="latitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Latitude
                                    </label>
                                    <input 
                                        type="number" 
                                        step="0.000001" 
                                        name="latitude" 
                                        id="latitude" 
                                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white" 
                                        defaultValue={pin?.latitude || ''}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="longitude" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Longitude
                                    </label>
                                    <input 
                                        type="number" 
                                        step="0.000001" 
                                        name="longitude" 
                                        id="longitude" 
                                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white" 
                                        defaultValue={pin?.longitude || ''}
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Basic Information Section */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Basic Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Pin Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="title" 
                                        id="name" 
                                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white" 
                                        defaultValue={pin?.title || ''}
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="color" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Pin Color
                                    </label>
                                    <input 
                                        type="color" 
                                        name="color" 
                                        id="color" 
                                        className="h-[42px] w-full bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg cursor-pointer" 
                                        defaultValue={pin?.color || "#000000"}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea 
                                    name="description" 
                                    id="description" 
                                    rows="3"
                                    className="w-full px-4 py-2.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white" 
                                    defaultValue={pin?.description || ''}
                                    required
                                />
                            </div>
                        </div>

                        {/* Travel Details Section */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Travel Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Start Date
                                    </label>
                                    <input 
                                        type="date" 
                                        name="travelStartDate" 
                                        id="startDate" 
                                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white" 
                                        defaultValue={formatDate(pin?.travelStartDate)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        End Date
                                    </label>
                                    <input 
                                        type="date" 
                                        name="travelEndDate" 
                                        id="endDate" 
                                        className="w-full px-4 py-2.5 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white" 
                                        defaultValue={formatDate(pin?.travelEndDate)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Tags Section */}
                        <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 space-y-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Tags & Journal
                            </h2>
                            <div>
                                <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tags
                                </label>
                                <CreatableSelect
                                    isMulti
                                    onChange={handleTagChange}
                                    options={tags}
                                    value={tags}
                                    className="text-sm"
                                    classNamePrefix="select"
                                    placeholder="Add tags..."
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary: '#3b82f6',
                                            primary25: '#eff6ff',
                                            neutral0: '#ffffff',
                                            neutral80: '#1f2937',
                                        },
                                    })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Journal
                                </label>
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    tabIndex={1}
                                    onBlur={newContent => setContent(newContent)}
                                    className="min-h-[200px]"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => navigate('/globe')}
                                className="flex-1 px-6 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="flex-1 px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                            >
                                {state?.pin ? 'Save Changes' : 'Create Pin'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}