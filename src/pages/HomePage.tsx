import { HomeView } from "../views"
import { useTodos } from '../hooks/useTodos';

export const HomePage = () => {
  const {isLoading,statusCode} = useTodos();
  
  if(isLoading) return (<h1 style={{color:"white"}}>Cargando...</h1>);
  if(statusCode !== 200) return  (<h1 style={{color:"white"}}>Error: Network Error</h1>);

  return (
    <>
    <HomeView/>
    </>
  )
}
