// Pedido a la api donde solo se traen 6 resultados al azar
async function get_random_six(){
    try {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/random?size=6`, { method: "GET"});

        if (!response.ok) {
            throw new Error(`Failed to fetch`);
        }

        const content = await response.json();
        return content;
    } catch (error) {
        console.error(`Error fetching:`, error);
        return null;
    }
}

async function get_one(id){
    try {
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`, { method: "GET"});

        if (!response.ok) {
            throw new Error(`Failed to fetch`);
        }

        const content = await response.json();
        return content;
    } catch (error) {
        console.error(`Error fetching:`, error);
        return null;
    }
}

export { get_random_six, get_one };