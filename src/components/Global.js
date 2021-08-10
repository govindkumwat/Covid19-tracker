import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { prettyPrintStat } from '../components/Utils/Utils';

const url = " https://disease.sh/v3/covid-19/all"

export const Global = () => {

    const [userData, setUserData] = useState({});


    const getDataWithAxios = async () => {
        const response = await axios.get(url);
        setUserData(response.data);
    };

    useEffect(() => {
        getDataWithAxios();
    }, []);

    return (
        <>
    <h4 className="fw-bold mt-3"><i class="fa fa-globe mt-1" style={{color: 'red'}} aria-hidden="true"></i> Global</h4>
           <div class="card-group mt-3 mb-3">
  <div class="card card1">
    <div class="card-body  ">
      <h5 class="card-title fw-bolder card1">Total Cases</h5>
      <p class="card-text">{prettyPrintStat(userData.todayCases)}</p>
      <h4 class="card-text fw-bold">{prettyPrintStat(userData.cases)}</h4>
      
    </div>
  </div>

  <div class="card card2">
    
    <div class="card-body ">
      <h5 class="card-title fw-bold ">Active</h5>
      <h4 class="card-text fw-bold">{prettyPrintStat(userData.active )}</h4>
    </div>
  </div>

  <div class="card card3">
    
    <div class="card-body ">
      <h5 class="card-title fw-bolder ">Deaths</h5>
      <p class="card-text fw-bold">{prettyPrintStat(userData.todayDeaths )}</p>
      <h4 class="card-text fw-bold">{prettyPrintStat(userData.deaths )}</h4>
    </div>
  </div>
  <div class="card card4">
    
    <div class="card-body ">
      <h5 class="card-title fw-bold ">Recovered</h5>
      <p class="card-text fw-bold">{prettyPrintStat(userData.todayRecovered )}</p>
      <h4 class="card-text fw-bold">{prettyPrintStat(userData.recovered )}</h4>
    </div>
  </div>
</div>

        </>
    )
}
