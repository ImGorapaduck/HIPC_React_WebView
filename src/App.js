import './App.css';
import axios from 'axios';

axios.defaults.withCredentials = true;
function App() {

  const headers = {
    "Content-Type": "application/json",
    //FIXME: .env 파일로 교체 필요
    "user-id": "hanwookk12",
    "hkey": "9c0f1783f3ef6741",



  }



  const hipcTest = async () => {
    // const uriHIPC = "https://api.hyphen.im/in0002000467"; // 건강보험 납부확인서
    const uriHIPC = "/in0002000467"; // 건강보험 납부확인서
    // const uriHIPC = "/dev/v1/register/info"; // 건강보험 납부확인서
    // https://kbesmjg237.execute-api.ap-northeast-2.amazonaws.com
    const userData = {
      pdfYn: "N",
      loginMethod: "EASY",
      step: "init",
      stepMode: "nostep",
      cloudCertYn: "N",
      fromDate: "202305",
      loginOrgCd: "toss",
      resNm: "김한욱",
      resNo: "20010317",
      mobileNo: "01091977162",
      toDate: "202305",
    };

    try {


      const response = await axios.post(uriHIPC, userData, { headers })
      // const response = await axios.post(uriHIPC, userData, { headers }, {
      //   withCredentials: true
      // })


      console.log("Waiting for 5 seconds...");
      console.log('response: ', response)
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="App">

      <div className='AppDiv'>Web View Test</div>

      <button
        onClick={hipcTest}
        // onClick={tset}
        style={{ width: 200, height: 200, }}
      >AXIOS BUTTON</button>


    </div>
  );
}

export default App;
