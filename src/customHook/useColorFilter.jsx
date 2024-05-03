
const useColorFilter = (sportName) => {
    switch (sportName) {
        case 'Football':
            return '#1a7489'

        case 'Basketball':
            return '#c85bab'

        default:
            return 'rgb(200, 77, 77)'
    }
}

export default useColorFilter