import { useEffect, useRef, useState } from "react";
import { resReqApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"

const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([])

    const paginaRef = useRef(1);

    useEffect(() => {
        cargarUsuarios()

    }, [])

    const cargarUsuarios = async() => {
        const res = await resReqApi.get<ReqResListado>('/users',{
            params:{
                page: paginaRef.current
            }
        })
        
        setUsuarios(res.data.data)
        
    }

    const paginaSiguiente = () =>{
        if (paginaRef.current < 2){
            paginaRef.current ++;
            cargarUsuarios()
        }else {
            alert('No hay mas registros')
        }
    }
    const paginaAnterior = () =>{
        if (paginaRef.current > 1){
            paginaRef.current --;
            cargarUsuarios()
        }else {
            alert('No hay mas registros')
        }
    }



    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }

}

export default useUsuarios