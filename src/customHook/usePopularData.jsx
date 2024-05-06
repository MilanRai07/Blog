
const usePopularData = (data) => {
    let filteredData = data.filter((item) => {
        return item.category == 'popular';
    })
    return filteredData;
}

export default usePopularData;