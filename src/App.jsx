import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { journeyList, spots } from './新文字文件'

function App() {
  const [num, setNum] = useState(1);
  const [blur, setBlue] = useState('blur(2px)')
  console.log(journeyList[num]['journey'][0]['name'], spots)

  return (
    <>
      <div className="App" style={{ outline: '0px solid black' }} >
        <div className="navbar" style={{ height: '120px', margin: '0 auto' }}>
          <div className="container" style={{ maxWidth: '1140px', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
            <div>
              <img src="" alt="logo" className="logo" />
              <span>名稱名稱</span>
            </div>
            <ul style={{ display: 'flex', gap: '32px' }}>
              <li>我的搜尋</li>
              <li>規劃行程</li>
              <li>我的收藏</li>
              <li>登入/註冊</li>
            </ul>
          </div>
        </div>
        <div className="banner">
          <h1 className='title' style={{ textAlign: 'left', width: '744px', margin: '0 auto' }}>規劃行程不必擔心,只要動動手指<br />五秒鐘讓你立即準備出發！</h1>
          <h2 style={{ fontSize: '40px' }}>說走就走,開啟一場隨機出發的旅行</h2>
          <div className="select" style={{ width: '744px', height: '86px', background: 'gray', margin: '0 auto' }} >
            <div className='selectBlock'>行程/距離</div>
            <div className='selectBlock'>請選擇區域</div>
            <button className='selectBlock' style={{ background: 'lightgray' }}>開始規劃</button>
          </div>
        </div>
        <div className="generater">
          <div className='generaterBlock' style={{ display: 'flex', maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '20px' }}>我想去哪裡...</h2>
              <h3 style={{ fontSize: '24px', marginBottom: '40px' }}>開啟隨機產生器，讓你每天生活有樂趣。</h3>
              <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between' }}>
                <button className='selectBlock' style={{ display: 'flex', gap: '12px', paddingLeft: '56px', background: '#737373', color: 'white' }}
                  onClick={() => {
                    setNum((prev) => {
                      if (prev === 2) {
                        return 0
                      }
                      return prev + 1
                    })
                    setBlue((prve) => {
                      return 'blur(5px)'
                    })
                    setTimeout(() => {
                      setBlue((prve) => {
                        return 'none';
                      })
                    }, 2000)
                  }}
                >
                  <img src="undo.png" alt="" style={{ width: '24px' }} />
                  換一組
                </button>
                <h3 style={{ marginRight: '-36px', marginBottom: '4px' }}><i>{journeyList[num]['type']}</i></h3>
              </div>
            </div>
            <ul className='imgList' style={{ display: 'flex', gap: '20px', filter: blur }}>
              <li>
                <img src={journeyList[num]['journey'][0]['imgUrl']} alt="" />
                <h3>{journeyList[num]['journey'][0]['name']}</h3>
              </li>
              <li>
                <img src={journeyList[num]['journey'][1]['imgUrl']} alt="" />
                <h3>{journeyList[num]['journey'][1]['name']}</h3>
              </li>
              <li>
                <img src={journeyList[num]['journey'][2]['imgUrl']} alt="" />
                <h3>{journeyList[num]['journey'][2]['name']}</h3>
              </li>
              <li>
                <img src={journeyList[num]['journey'][3]['imgUrl']} alt="" />
                <h3>{journeyList[num]['journey'][3]['name']}</h3>
              </li>
            </ul>
          </div>
        </div>
      </ div >
    </>
  )
}

export default App
