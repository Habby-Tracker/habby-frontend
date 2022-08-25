export async function verifyUser() {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/verify`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    return await response.json();
}

export async function signUp() {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    return await response.json();
}

export async function signOut() {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/signout`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    return await response.json();
}

export async function signIn() {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    return await response.json();
}

