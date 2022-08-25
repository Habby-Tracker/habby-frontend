export async function createHabit(newHabit) {
    const response = await fetch(`${process.env.API_URL}/api/v1/habits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(newHabit),
    });
    return await response.json();
}

export async function getHabitById(id) {
    const response = await fetch(`${process.env.API_URL}/api/v1/habits/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

export async function getHabits() {
    const response = await fetch(`${process.env.API_URL}/api/v1/habits`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

export async function updateHabit(id, updatedHabit) {
    const response = await fetch(`${process.env.API_URL}/api/v1/habits/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(updatedHabit),
    });

    return await response.json();
}

export async function deleteHabit(id) {
    const response = await fetch(`${process.env.API_URL}/api/v1/habits/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });
    
    return await response.json();
}
