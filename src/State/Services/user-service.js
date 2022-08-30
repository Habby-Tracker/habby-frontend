export async function verifyUser() {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/verify`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return response.status === 200 ? await response.json() : null;
}

export async function signUp(firstName, lastName, email, password) {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ firstName, lastName, email, password }),
    });
    return await response.json();
}

export async function signOut() {
    await fetch(`${process.env.API_URL}/api/v1/user/signout`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
}

export async function signIn(email, password) {
    const response = await fetch(`${process.env.API_URL}/api/v1/user/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({ email, password }),
    });
    return await response.json();
}
