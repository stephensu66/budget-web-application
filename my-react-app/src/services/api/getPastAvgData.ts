import { API_URL } from "./config";



export async function getPastAvgData(){
    const response = await fetch(`${API_URL}/pastavgdata`,
        {method: 'GET',
        });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}