import React,{useState,  useEffect} from 'react';
const keyurl = '563492ad6f91700001000001a1d67240af4c489689873b109c0d80ac';
const apiurl = "https://api.pexels.com/v1/curated?per_page=20";

function App() { 
     const [photos, setPhotos] = useState([])
      useEffect(()=>{
        const fetcData  = async ()=>{
            const apidata = await fetch(apiurl,{
              method:"GET",
              headers:{
               Accept:"aplication/json",
               Authorization: keyurl
              }
            })
             apidata.json()
             .then(data =>{
              setPhotos(data.photos);
             })
        }
        fetcData();
      },[]);


    return (
    <div>
     <div className=' flex items-center justify-center'> 
     <h1 className=' bg-green-900 p-2 text-xl text-white  '>Dulal-AJ</h1>   
        <div className=' ml-3 border border-green-600'>
        <input className=' p-1' type="text" placeholder='asdfasdf' />
         <button className=' p-1 bg-green-800'>Search</button>
          </div>       
      </div>
   <div className=' w-full grid grid-cols-3 '>
       {
        photos.map((photo, id)=>(

          <div className=" p-1 border-2  m-1 flex flex-col justify-center" >
            <img alt='randomImage' src={photo.src.large}/>
            <p className=' p-1 bg-gray-400 text-sm'>PhotoGrapher :  {photo.photographer}</p>
            <button className=' mt-1 bg-slate-800 text-white'><a className=' p-1 ' href={photo.src.original
}   target="_blank">DownLoad</a> </button>
          </div>
        ))
       }
   </div>
   </div>
  );
}

export default App;
