import { useNavigate } from 'react-router-dom'

const useNewsNavigate = () => {
    let navigate = useNavigate();
    const Navigation = (name, key) => {
        let path = `singlepage/${name}/${key}`;
        navigate(path);
        console.log(path);
    }
    return { Navigation }
}

export default useNewsNavigate