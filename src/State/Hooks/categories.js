import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/DataContext';
import { createCategory, deleteCategory, getCategory } from '../Services/category-service';
import { showError } from '../Services/toaster';

export function useCategories() {
    const { categories } = useContext(DataContext);
    const { dispatchCategories } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (categories) return;
        let ignore = false;
        const fetchCategories = async () => {
            const data = await getCategory();
            if (ignore) return;
            if (data.body) {
                dispatchCategories({ type: 'load', payload: data });
            }
            if(data.error) {
                setError(data.error);
            }
        };
        fetchCategories();
        
        return () => {
            ignore = true; 
        };
    }, []);

    return { categories, error };
}

export function categoryActions() {
    const { dispatchCategories } = useContext(DataDispatchContext);

    const create = async (category) => {
        const { body, error } = await createCategory(category);
        if(body) {
            dispatchCategories({ type: 'add', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };

    const remove = async (id) => {
        const { body, error } = await deleteCategory(id);
        if(body) {
            dispatchCategories({ type: 'remove', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };
    
    return { create, remove };
}
