

getAllJobs = () => {

    axios.get(
          `https://labeninjas.herokuapp.com/jobs`, 
          {
              headers: {
                  Authorization: "93a18548-d983-40d1-bcfe-f4862b3a6da1"
              }
          })
  .then ((response)=>{
      console.log(response)
   } )
  .catch ((err)=> {
      console.log(err.response)
  })
}

const listaServiços = getAllJobs()