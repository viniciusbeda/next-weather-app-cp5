"use client"
import { Header } from "@/components/Header/Header";
import UserContext from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadLoginState } from "@/helper/State";

export default function Home() {
  loadLoginState()
  const searchParams = useSearchParams();
  const state = searchParams.get("cityCode")
  const { userName } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cityData, setCityData] = useState(null);
  const [forecast, setForecast] = useState([])

  const dateFormat = (data: string) => {
    return new Date(data).toLocaleDateString("pt-br", { timeZone: "UTC" })
  }

  const loadCity = async (cityCode: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://brasilapi.com.br/api/cptec/v1/clima/previsao/${cityCode}`
      );
      const data = await response.json();
      setCityData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadForecast = async (cityCode: string) => {
    const params = {
      code: cityCode,
      days: 6
    }
    
    setIsLoading(true)
    try{
      const response = await fetch(`
        https://brasilapi.com.br/api/cptec/v1/clima/previsao/${params.code}/${params.days}  
      `);

      const data = await response.json()
      setForecast(data.clima)
    } catch (error){
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // if (location.state === null) {
    if (!state) {
      const inicialCity = "244";
      loadCity(inicialCity);
      loadForecast(inicialCity)
      return;
    }

    loadCity(state);
    loadForecast(state);
  }, []);

  return (<>
      <Header title="Home" userName={userName} />
      <div>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          <div>
            <h2>
              {cityData?.cidade}/{cityData?.estado}
            </h2>
            <p>
              Min<span>{cityData?.clima[0].min}&#176;C </span>/ Max
              <span>{cityData?.clima[0].max}&#176;C</span>
            </p>
            <p>{cityData?.clima[0].condicao_desc}</p>
          </div>
        )}
      </div>
      <div>
        {forecast.map(item => (
          <div key={item.data}>
            <span>{dateFormat(item.data)} </span>
            <span>{item.condicao} </span>
            <span>Min: {item.min}&#176;C </span>
            <span>Max: {item.max}&#176;C</span>
          </div>
        ))}
      </div>
  </>)
}