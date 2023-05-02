import {  useParams } from 'react-router-dom';

import {useEffect, useState} from "react";
import { useAppContext } from "../../context/AppContext";

import CountryPageLayout from "./CountryPageLayout";

const CountryPage = () => {
  const {allContriesData} = useAppContext();
  const { name } = useParams()
  
  
  const [currency,setCurrency ] = useState("")
const [dialCode,setDialCode ] = useState("")
const [flag,setFlag ] = useState("")
const [cName,setCName ] = useState("")
  

  useEffect(() => {
    if(name){
      getCountry(name);
    }
  }, []);
  const getCountry = async(param) => {
  console.log(allContriesData)
    const lowerSearch = param.toLowerCase();
  const cData = await allContriesData.filter((country) =>
    country.name.toLowerCase().includes(lowerSearch)
  );
  
  await setCurrency(cData[0].currency)
await setDialCode(cData[0].dialCode)
await setFlag(cData[0].flag)
await setCName(cData[0].name)
  
  console.log(cData)
}

  
  return <>{cName && <CountryPageLayout name={cName} flag={flag}/>}</>
}
export default CountryPage