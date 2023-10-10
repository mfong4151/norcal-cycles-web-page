import { BIKES_FILE } from "./constants";

export const parseTxt =   async() =>  {
    try {
        // Fetch the content of the file
        const response = await fetch(BIKES_FILE);
        if (!response.ok) {
            throw new Error('Failed to fetch the file.');
        }
        
        const data = await response.text();
        const lines = data.split('\n').filter(Boolean); // filter out any empty lines
        const headers = lines[0].split('|');
        const jsonArray = [];

        for(let i=1; i<lines.length; i++) {
            const values = lines[i].split('|');
            const obj = {};

            // If the line is not empty, process it
            if(values.length === headers.length) {
                headers.forEach((header, index) => {
                    if (header === 'PhotoUrl' && values[index]) {
                        // Split the comma-separated string of photo URLs into an array
                        obj[header] = values[index].split(',');
                    } else {
                        obj[header] = values[index];
                    }
                });
                jsonArray.push(obj);
            }
        }

        return jsonArray;
    } catch (err) {
        console.error(err);
        return [];
    }
}

