export async function createGoal(newGoal) {
    const response = await fetch(`${process.env.API_URL}/api/v1/goals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(newGoal),
    });

    return await response.json();
}

export async function getGoalById(id) {
    const response = await fetch(`${process.env.API_URL}/api/v1/goals/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

export async function getGoals() {
    const response = await fetch(`${process.env.API_URL}/api/v1/goals`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}

export async function updateGoal(id, updatedGoal) {
    const response = await fetch(`${process.env.API_URL}/api/v1/goals/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify(updatedGoal),
    });

    return await response.json();
}

export async function deleteGoal(id) { 
    const response = await fetch(`${process.env.API_URL}/api/v1/goals/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        mode: 'cors',
    });

    return await response.json();
}
