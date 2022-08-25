export async function getTimePeriods() {
    const response = await fetch(`${process.env.API_URL}/api/v1/time-periods`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

export async function getStatuses() {
    const response = await fetch(`${process.env.API_URL}/api/v1/status`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

export async function getHabitTypes() {
    const response = await fetch(`${process.env.API_URL}/api/v1/habitTypes`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

