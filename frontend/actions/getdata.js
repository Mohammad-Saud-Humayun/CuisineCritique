export const getData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/resaturant/');
  
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