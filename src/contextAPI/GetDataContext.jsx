import { createContext, useState } from "react";
import { Data } from '../Data/Data';

const GetDataContext = createContext();
const GetDataProvider = ({ children }) => {
    const [data, setData] = useState(Data);
    return <GetDataContext.Provider value={data}>{children}</GetDataContext.Provider>
}

export { GetDataProvider, GetDataContext };