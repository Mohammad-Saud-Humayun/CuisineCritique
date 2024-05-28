import axios from "axios";

export const getDataById = async (id) => {
    try { 
        const Url = `http://localhost:8000/api/resaturant/${id}`
        const response = await fetch(Url);

        // Check for errors in the HTTP response
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
