import { API_URL } from "./config";


interface params{
    user_id: number, 
    date: string,
    };

export async function getCheck(user_id:number, date: string): Promise<params[]>{
    const response = await fetch(`${API_URL}/check?user_id=${encodeURIComponent(user_id)}&date=${encodeURIComponent(date)}`,
        {method: 'GET',
        });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}