import night from './assets/header/night/bg-night.mp4'
import Youtube from './Youtube'

function App() {

  return (
    <div className="App">
      <video src={night} autoPlay loop></video>
      <div>
        <Youtube link={'vpvmhpzGi_Q?start=124'}/>
        <Youtube link={'f6h9oafR7hM'}/>
        <Youtube link={'lNkI8ayV1jk'}/>
        <Youtube link={'unf4bmRnUGc'}/>
        <Youtube link={'yXYmI0Jyuf4'}/>
        <Youtube link={'6VQrr6ahkgM'}/>
      </div>
    </div>
  )
}

export default App
