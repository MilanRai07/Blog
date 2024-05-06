
const useFilterPopular = (data) => {
    let PopularData = data.filter((item) => {
        return item.category == 'popular';
    })
    return PopularData;
}

export default useFilterPopular;