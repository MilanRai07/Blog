
const useFilterSport = (data, sport) => {
  let filterData = data.filter((item) => {
    return item.sport == sport;
  })
  return filterData;
}

export default useFilterSport;