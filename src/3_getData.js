import getYesterday from "./getYesterday";

module.exports = ({ name, id, value }) => ({
    id,
    name: name.trim().toLowerCase(),
    value: Math.round(value * 100),
    date: getYesterday()
});

