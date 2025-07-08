import react, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';

export default function Details(){
    const[data,setData] = useState([]);
   const { id } = useParams();

    const fetchData = async()=>{
        try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json();
        console.log('Data : ',data);
        setData(data);
        }catch(err){
            console.log('eror',err);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            <div>

              {/* {datas.filter((el)=> el.id == product.id) */}
                {/* {datas.map((el) =>( */}
                    <div key={data.id} style={{display:'flex'}}>
                         
                         <div>
                             <h1>{data.title}</h1>
                            <img src={data.image} alt="" style={{width:'300px', alignItems:'center',margin:'0 auto'}}/></div>
                         <div style={{margin:'0 auto', display:'flex', flexDirection:'column', justifyContent:'center' ,padding:'40px'}}>
                          <h3>Description: {data.description}</h3>
                          <h4>Rating : {data.rating?.rate}</h4>
                          <h4>Count : {data.rating?.count}</h4>
                          <h4>Category : {data.category}</h4>
                         </div>

                    </div>
                   
                {/* )) */}
                {/* } */}
            </div>
        </>
    )
}

//params :id , useNavigate, useParams, dynamic route