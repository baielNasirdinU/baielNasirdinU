import React, { useState } from 'react'
import styles from '../../../util/style'
import axios from 'axios'
import { FaSearch, FaCloudSun, FaWind, FaSun } from 'react-icons/fa'
import { WiHumidity, WiRainWind, WiRain, WiDayFog, WiDayCloudy } from 'react-icons/wi'
// import styles from '../../../util/style'

const Wheather = ({ theme }) => {
  const [cityName, setCityName] = useState('')
  const [error, setError] = useState('')
  // const [count, setCount] = useState(0)
  setTimeout(() => {
    if (error) {
      setError('')

    }

  }, 3000);
  const [data, setData] = useState({
    celcius: 0,
    name: ' ',
    humidity: 0,
    speed: 0,
    image: '',


  })

  const changeInput = (e) => {
    setCityName(

      e.target.value

    )



  }




  const handleWheather = () => {
    if (cityName) {
      const aipUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=597872fc47bb1c6261351b6332e5e857`
      axios.get(aipUrl)
        .then(res => {

          setData({
            ...data, celcius: res.data.main.temp, name: res.data.name, speed: res.data.wind.speed,
            humidity: res.data.main.humidity, image: res.data.weather[0].main
          })



        }
        )
        .catch(e => {
          if (e.response.status === 404) {
            setError(`i dont know so name of city << ${cityName}>>`)

          }
          else {
            setError('')

          }
        })
      setCityName('')



    } else {
      alert('write name of city')
    }


  }


  // console.log(count);

  return (
    <div className={` h-[100%]  `}>
      < div className={`m-auto lg:w-[800px] w-[80%] ${theme ? 'light' : 'dark'} p-8 rounded-lg`}>
        <div className={` flex gap-3 mb-2 flex-wrap`}>
          <input type="text" value={cityName}
            className={`pl-[10px] rounded-[15px] lg:w-[650px] w-[70%] lg:p-4 mr-3 ${theme ? ' dark' : 'light'}`}
            placeholder='write name of city' onChange={changeInput} />
          <button className={`lg:text-[24px] p-3  border rounded-[50%]  ${theme ? ' dark' : 'light'}`}
            onClick={handleWheather}><FaSearch /></button>
        </div>
        <div className="error" >{error}</div>


        <div className="text-center">
          <div className="relative  h-[60px] mb-3 ">{
            data.image === 'Clouds' ? <FaCloudSun
              className={`absolute text-[72px] left-[50%] translate-x-[-50%]`} /> : data.image === 'Rain' ?
              <WiRainWind className={`absolute text-[72px] left-[50%] translate-x-[-50%]`} /> : data.image === 'Clear' ?
                <FaSun className={`absolute text-[72px] left-[50%] translate-x-[-50%]`} /> : data.image === 'Drizzle' ?
                  <WiRain className={`absolute text-[72px] left-[50%] translate-x-[-50%]`} /> : data.image === 'Mist' ?
                    <WiDayFog className={`absolute text-[72px] left-[50%] translate-x-[-50%]`} /> : <WiDayCloudy
                      className={`absolute text-[72px] left-[50%] translate-x-[-50%]`} />

          }
          </div>
          <h2 className='text-[32px] lg:text-[42px]'>{Math.round(data.celcius)}&deg;c</h2>
          <h1 className='text-[32px] font-bold mb-3'>{data.name}</h1>
          <div className={`${styles.flexBetween} `}>
            <div className={`${styles.flexBetween} lg:text-[32px] gap-6`}> <WiHumidity className={`text-[26px] lg:text-[42px]`} /> <div className="">
              <h3>{Math.round(data.humidity)}%</h3><p>humidity</p></div></div>

            <div className={`${styles.flexBetween} gap-6 lg:text-[32px]`}> <FaWind className={`text-[24px] lg:text-[42px]`} /> <div className=""><p>speed</p>
              <h3>{Math.round(data.speed)}km/h</h3></div></div>

          </div>
        </div>


      </div>
    </div>





  )
}

export default Wheather