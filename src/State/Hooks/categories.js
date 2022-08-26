import { useContext, useEffect, useState } from 'react';
import { DataContext, DataDispatchContext } from '../Context/dataContext';
import { createCategory, deleteCategory, getCategory } from '../Services/category-service';
import { showError } from '../Services/toaster';

export function useCategories() {
    const { categories } = useContext(DataContext);
    const { dispatch } = useContext(DataDispatchContext);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (categories) return;
        let ignore = false;
        const fetchCategories = async () => {
            const data = await getCategory();
            if (ignore) return;
            if (data.body) {
                dispatch({ type: 'load', payload: data });
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
    const { dispatch } = useContext(DataDispatchContext);

    const create = async (category) => {
        const { body, error } = await createCategory(category);
        if(body) {
            dispatch({ type: 'add', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };

    const remove = async (id) => {
        const { body, error } = await deleteCategory(id);
        if(body) {
            dispatch({ type: 'remove', payload: body });
        }
        if(error){
            showError(error.message);
        }
    };
    
    return { create, remove };
}