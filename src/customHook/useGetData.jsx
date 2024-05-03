import { useContext } from "react"
import { GetDataContext } from "../contextAPI/GetDataContext"

const useGetData = () => {
  return useContext(GetDataContext);
}

export default useGetData