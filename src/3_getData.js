import getYesterday from "./getYesterday";

const getData = ({ name, id, value }) => ({
    id,
    name: name.trim().toLowerCase(),
    value: Math.round(value * 100),
    date: getYesterday()
});

export default getData;
