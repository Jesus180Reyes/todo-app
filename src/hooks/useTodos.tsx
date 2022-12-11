import { useEffect, useState } from "react";
import { Pokemon } from "../interface/pokemon";

export const useTodos = () => {
    const [todos, setTodos] = useState<Pokemon[]>();
    const [todosInProgress, setTodosInProgress] = useState<Pokemon[]>([]);
    const [todosInDone, setTodosInDone] = useState<Pokemon[]>()

    const getTodosTask = async(name:string):Promise<Pokemon>=> {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data:Pokemon =  await resp.json();
      setTodos([data]);
      return data 
    }

    const getTodosInProgress = async(name:string):Promise<Pokemon>=> {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data:Pokemon =  await resp.json();
      setTodosInProgress([data, ...todosInProgress]);
      return data 
    }

    const getTodosInDone = async(name:string):Promise<Pokemon>=> {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data:Pokemon =  await resp.json();
      setTodosInDone([data]);
      return data 
    }
    useEffect(() => {
      getTodosTask("charmander");
    
      
    }, []);
    useEffect(() => {
      getTodosInProgress("mew");
      
    }, []);
    useEffect(() => {
      getTodosInDone("10");
    
      
    }, []);
  return {
    // * Propiedades
    todos,
    todosInDone,
    todosInProgress
    //* Metodos
  }
}
