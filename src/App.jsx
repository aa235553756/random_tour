import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";
// import { journeyList, spots } from './新文字文件'
import { data } from '../src/士林'

function App() {
  const [num, setNum] = useState(1);
  const [blur, setBlue] = useState('none')
  const [renderData, setRenderData] = useState([])

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = formData => {
    console.log(formData);
    setRenderData(
      getData(formData)
    )
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  function getData(formData) {
    let renderData = []
    for (let i = 0; renderData.length < 4; i++) {
      let num = getRandomInt(data.length)

      let firstCheck = false;
      let secondCheck = false;

      formData.Distric.map((item) => {
        if (item === '0') {
          firstCheck = true
        }
        if (data[num]["Distric"] === item) {
          firstCheck = true
        }
      })

      formData.Type.map((item) => {
        if (item === '0') {
          secondCheck = true
        }
        if (data[num]["Type"].includes(Number(item))) {
          secondCheck = true
        }
      })

      if (firstCheck && secondCheck) {
        if (!renderData.includes(data[num])) {
          renderData.push(data[num])
        }
      }
    } return renderData
  }

  return (
    <>
      <div className="App" style={{ display: 'flex', padding: '16px', outline: '0px solid black', maxHeight: '100vh' }} >
        <form style={{ margin: "auto 0", display: 'flex', alignItems: 'center', gap: '16px' }} onSubmit={handleSubmit(onSubmit)}>
          <div id="checkbox" style={{ display: 'flex', flexDirection: 'column' }}>
            <label><input type="checkbox" value="0" {...register("Type")} /><span className="round button">隨心所欲</span></label>
            <label><input type="checkbox" value="1" {...register("Type")} /><span className="round button">城市走走1</span></label>
            <label><input type="checkbox" value="2" {...register("Type")} /><span className="round button">拍照聖地2</span></label>
            <label><input type="checkbox" value="3" {...register("Type")} /><span className="round button">放鬆療癒3</span></label>
            <label><input type="checkbox" value="4" {...register("Type")} /><span className="round button">夜間首選4</span></label>
            <label><input type="checkbox" value="5" {...register("Type")} /><span className="round button">文藝青年5</span></label>
            <label><input type="checkbox" value="6" {...register("Type")} /><span className="round button">親子互動6</span></label>
            <label><input type="checkbox" value="7" {...register("Type")} /><span className="round button">冒險活潑7</span></label>
          </div>
          <div id="checkbox" style={{ display: 'flex', flexDirection: 'column' }}>
            <label><input type="checkbox" value="0"  {...register("Distric")} /><span className="round button">不限</span></label>
            <label><input type="checkbox" value="士林區" {...register("Distric")} /><span className="round button">士林區</span></label>
            <label><input type="checkbox" value="中山區" {...register("Distric")} /><span className="round button">中山區</span></label>
            <label><input type="checkbox" value="信義區" {...register("Distric")} /><span className="round button">信義區</span></label>
            <label><input type="checkbox" value="北投區" {...register("Distric")} /><span className="round button">北投區</span></label>
            <label><input type="checkbox" value="大安區" {...register("Distric")} /><span className="round button">大安區</span></label>
            <label><input type="checkbox" value="中正區" {...register("Distric")} /><span className="round button">中正區</span></label>
            <label><input type="checkbox" value="士林區" {...register("Distric")} /><span className="round button">士林區</span></label>
            <label><input type="checkbox" value="大同區" {...register("Distric")} /><span className="round button">大同區</span></label>
            <label><input type="checkbox" value="內湖區" {...register("Distric")} /><span className="round button">內湖區</span></label>
            <label><input type="checkbox" value="萬華區" {...register("Distric")} /><span className="round button">萬華區</span></label>
            <label><input type="checkbox" value="松山區" {...register("Distric")} /><span className="round button">松山區</span></label>
            <label><input type="checkbox" value="南港區" {...register("Distric")} /><span className="round button">南港區</span></label>
          </div>
          <button className='selectBlock' style={{ display: 'flex', gap: '12px', paddingLeft: '16px', background: '#737373', color: 'white' }}>
            <img src="undo.png" alt="" style={{ width: '24px' }} />
            換一組
          </button>
        </form>
        <div className="generater" style={{ padding: '0 24px' }}>
          <div className='generaterBlock' style={{ display: 'flex', maxWidth: '1140px', margin: '0 auto' }}>
            <ul className='imgList' style={{ display: 'flex', flexDirection: 'column', gap: '20px', filter: blur, width: '150px' }}>
              <li>
                <img src={renderData?.[0]?.Images?.Src?.[0] ? renderData?.[0]?.Images?.Src?.[0] : "https://picsum.photos/200"} alt="" />
                <p>{renderData?.[0]?.['AttractionName']}</p>
              </li>
              <li>
                <img src={renderData?.[1]?.Images?.Src?.[0] ? renderData?.[1]?.Images?.Src?.[0] : "https://picsum.photos/200"} alt="" />
                <p>{renderData?.[1]?.['AttractionName']}</p>
              </li>
              <li>
                <img src={renderData?.[2]?.Images?.Src?.[0] ? renderData?.[2]?.Images?.Src?.[0] : "https://picsum.photos/200"} alt="" />
                <p>{renderData?.[2]?.['AttractionName']}</p>
              </li>
              <li>
                <img src={renderData?.[3]?.Images?.Src?.[0] ? renderData?.[3]?.Images?.Src?.[0] : "https://picsum.photos/200"} alt="" />
                <p>{renderData?.[3]?.['AttractionName']}</p>
              </li>
            </ul>
          </div>
        </div>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '500px', overflow: 'auto' }}>
          {renderData.map((item) => {
            return <li style={{ width: '450px', listStyle: 'auto', textAlign: 'left' }}>{JSON.stringify(item)}</li>
          })}
        </ul>
      </div >
    </>
  )
}

export default App

function Navbar({ }) {
  return (<><div className="navbar" style={{
    height: '120px',
    margin: '0 auto'
  }}>
    <div className="container" style={{
      maxWidth: '1140px',
      display: 'flex',
      justifyContent: 'space-between',
      margin: '0 auto'
    }}>
      <div>
        <img src="" alt="logo" className="logo" />
        <span>名稱名稱</span>
      </div>
      <ul style={{
        display: 'flex',
        gap: '32px'
      }}>
        <li>我的搜尋</li>
        <li>規劃行程</li>
        <li>我的收藏</li>
        <li>登入/註冊</li>
      </ul>
    </div>
  </div>
    <div className="banner">
      <h1 className='title' style={{
        textAlign: 'left',
        width: '744px',
        margin: '0 auto'
      }}>規劃行程不必擔心,只要動動手指<br />五秒鐘讓你立即準備出發！</h1>
      <h2 style={{
        fontSize: '40px'
      }}>說走就走,開啟一場隨機出發的旅行</h2>
      <div className="select" style={{
        width: '744px',
        height: '86px',
        background: 'gray',
        margin: '0 auto'
      }}>
        <div className='selectBlock'>行程/距離</div>
        <div className='selectBlock'>請選擇區域</div>
        <button className='selectBlock' style={{
          background: 'lightgray'
        }}>開始規劃</button>
      </div>
    </div></>);
}
