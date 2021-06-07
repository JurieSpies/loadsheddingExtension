
const axiosFunc = async (url, header, param) => {
  const config = {
    method: 'get',
    url,
    headers: header,
    params: { param },
  };
  return axios(config).catch((res) => { console.log('❌❌❌', res); });
};


  axiosFunc(areaUrl,{ 'Access-Control-Allow-Origin': '*' }).then((res) => { setUserArea(JSON.stringify(res)); });
  axiosFunc(statusUrl).then((res) => { setLoadsheddingStatus(res.data); }); 
