import axios from "axios";

module.exports = async function getData() {
    const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
    );

    return response.data;
}

