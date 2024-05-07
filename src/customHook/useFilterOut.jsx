
const useFilterOut = (data, name) => {
    let key;
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        for (let keys in obj) {
            if (obj[keys] == name) {
                key = keys;
            }
        }
    }
    let filteredData = data.filter((item) => {
        return item[key] !== name
    })
    return filteredData;
}

export default useFilterOut