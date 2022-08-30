export async function getCategory() {
    const response = await fetch(
        `${process.env.API_URL}/api/v1/user/categories`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
        }
    );
    return response.status === 200 ? await response.json() : null;
}

export async function getCategoryById(id) {
    const response = await fetch(
        `${process.env.API_URL}/api/v1/user/categories`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify({ id }),
        }
    );
    return response.status === 200 ? await response.json() : null;
}

export async function createCategory(category) {
    const response = await fetch(
        `${process.env.API_URL}/api/v1/user/categories`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify(category),
        }
    );
    return response.status === 200 ? await response.json() : null;
}

export async function deleteCategory(id) {
    const response = await fetch(
        `${process.env.API_URL}/api/v1/user/categories`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            mode: 'cors',
            body: JSON.stringify({ id }),
        }
    );

    return response.status === 200 ? await response.json() : null;
}
