import axios from "axios";

async function getData() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );

    return response.data;
}

export default getData;
