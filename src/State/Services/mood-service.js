export async function createMood(mood) {
    const rawResponse = await fetch(`${process.env.API_URL}/moods`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(mood),
    });
    const data = await rawResponse.json();

    return data;
}

export async function getMoodById(id) {
    const rawResponse = await fetch(`${process.env.API_URL}/moods/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    const data = await rawResponse.json();

    return data;
}

export async function getAllMoodsByUser() {
    const rawResponse = await fetch(`${process.env.API_URL}/moods`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    const data = await rawResponse.json();

    return data;
}

export async function updateMood(id, updatedMood) {
    const rawResponse = await fetch(`${process.env.API_URL}/moods/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(updatedMood),
    });

    const data = await rawResponse.json();

    return data;
}

export async function deleteMood(id) {
    const rawResponse = await fetch(`${process.env.API_URL}/moods/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    const data = await rawResponse.json();

    return data;
}
