import { useEffect, useState } from "react";
function Upcoming() {
    const [comming, setcomming] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=306fec84f51ffbe8108e0c5e61a41715')
        .then(res => res.json())
        .then(data => {
          
            // console.log(data.results)
            setcomming(data.results)
                
        });

    },[])
    return(
        <>
            <section className="pt-5">
                <h2 className="text-center mt-2 mb-5 white">Upcoming Movies</h2>
                <div className="container w-75 myM">
                    <div className="row">
                        <div className="col-md-6">
                            <input id="allMovies" className="form-control mb-5 " placeholder="get movies by word..." />
                        </div>
                        <div className="col-md-6"><input className="form-control " id="word" type="text"  placeholder="search by rate"/>
                        </div>
                    
                    </div>
                </div>
                
                <section className="container text-center my-1 py-2 "  >
                    <div className="row" >
                
                     {
                         comming.map( (i)=>{
                             return(
                             
                                    <div className="col-md-6 col-lg-4 my-3 myM  shadow" key={i.id}>
                                        <div className="movie shadow rounded position-relative">
                                            <div className="post">
                                                <img src={"https://image.tmdb.org/t/p/w500"+i.poster_path}
                                                className="img-fluid rounded">
                                                </img>
                                                <div className="layer d-flex align-items-center ">
                                                    <div className="info p-0">
                                                
                                                        <h2>{i.title}</h2>
                                                        <br/>
                                                        <p className="desc">
                                                            {i.overview}
                                                        </p>
                                                        <br/>
                                                        <p>Date:
                                                            {i.release_date}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               

                            )
                        })
                        
                     }       
                    
                    </div>
                </section>
    
            </section>

        </>
    )
}

export default Upcoming;