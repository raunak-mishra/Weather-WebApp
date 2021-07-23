console.log('Raunak Mishra');
//Api Key = 468e21abd9e5849232008ae7175d97be
//Api Link = https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid={468e21abd9e5849232008ae7175d97be}
//New Api Key = http://api.weatherstack.com/current?access_key=e268d2a7cb03a380db05457129f68757&query=New%20York

const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');
const dataHide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    // alert('hii');
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerHTML = `Please Enter The City Name Before Searching`;
        dataHide.classList.add('data_hide');
    }else{
        try{
        let url = `api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid={468e21abd9e5849232008ae7175d97be}`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
        temp.innerHTML = arrData[0].main.temp;
        temp_status.innerHTML = arrData[0].weather[0].main;
        // console.log(response);
        const tempMood = arrData[0].weather[0].main;

        if(tempMood === "Clear"){
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #ecc68;'></i>";
        }else if(tempMood === "Clouds"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }else if(tempMood === "Rain"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        }else{
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }

        dataHide.classList.remove('data_hide');
        }catch{
            city_name.innerHTML = `Please Enter The City Name Properly`;
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);
