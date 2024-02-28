
import { API_URL } from "./config";

export async function createData(
    coffeeAmou: string, 
    foodAmou: string, 
    alcoholAmou: string)
    {
    const response = await fetch(`${API_URL}/create`,
        {method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            coffeeAmou,
            foodAmou,
            alcoholAmou,
        }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    
}