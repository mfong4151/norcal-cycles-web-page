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
        const headers = lines[0].split('|').map(h => h.toLowerCase());
        const jsonArray = [];

        for(let i=1; i<lines.length; i++) {
            const values = lines[i].split('|');
            const obj = {};

            
            // If the line is not empty, process it
            headers.forEach((header, index) => {
                const item =  values[index]?.trim().replace(/"/g, '').trim()
                if (header === 'images' && values[index]) {
                    // Split the comma-separated string of photo URLs into an array
                    obj[header] = item?.split(',');
                } else {
                    obj[header] = item?.trim();
                }
            });

            obj['id'] = i - 1
            jsonArray.push(obj);

        }
        

        return jsonArray;
    } catch (err) {
        console.error(err);
        return [];
    }
}

