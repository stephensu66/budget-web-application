import { API_URL } from "./config";



export async function getAvgData(){
    const response = await fetch(`${API_URL}/avgdata`,
        {method: 'GET',
        });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}