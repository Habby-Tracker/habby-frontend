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
            if (data) {
                dispatchCategories({ type: 'load', payload: data });
            }
            if(data) {
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
        const data = await createCategory(category);
        if(data) {
            dispatchCategories({ type: 'add', payload: data });
        }
        if(!data){
            showError(data.message);
        }
    };

    const remove = async (id) => {
        const data = await deleteCategory(id);
        if(data) {
            dispatchCategories({ type: 'remove', payload: data });
        }
        if(!data){
            showError(data.message);
        }
    };
    
    return { create, remove };
}
