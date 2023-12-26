import './App.css'
import useJsonFetch from './hooks/usejsonfetch'

function GetData() {
  const url = 'http://localhost:7070/data';
  const {data, loading, error} = useJsonFetch(url);

  return(
      <>
          {loading && <div>loading...</div>}
          {!loading && !error && <div>Успешный запрос: {data.status}</div>}
      </>
  )
}

function GetError500() {
  const url = 'http://localhost:7070/error';
  const {data, loading, error} = useJsonFetch(url);
  
  return (
    <>
    {error && <div>Ошибка сервера: {error}</div>}
    </>
  )
}

function Loading() {
  const url = 'http://localhost:7070/loading';
  const {data, loading, error} = useJsonFetch(url);

  return (
    <>
    {loading && <div>Индикатор загрузки:  <div className='loading rotate'>.</div></div>}
          {!loading && !error && <div>Индикатор загрузки: <div  className='loading rotate-end'>OK</div></div>}  
    </>
  )
}

function NoJson() {
  const url = 'http://localhost:7070/nojson';
  const {data, loading, error} = useJsonFetch(url);

  return (
    <>
      {error && <div>Не JSON: {error}</div>}
    </>
  )
}

function NotFound() {
  const url = 'http://localhost:7070';
  const {data, loading, error} = useJsonFetch(url);

  return (
    <>
      {error && <div>Неверный адрес: {error}</div>}
    </>
  )
}

function App() {
    
  return (<>
    <GetData/>
    <GetError500/>
    <Loading/>
    <NoJson/>
    <NotFound/>
  </>
  )
}

export default App
