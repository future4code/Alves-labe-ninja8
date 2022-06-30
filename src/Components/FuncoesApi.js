import axios from 'axios'

export const getAllJobs = () => {

    axios.get(
          `https://labeninjas.herokuapp.com/jobs`, 
          {
              headers: {
                  Authorization: "93a18548-d983-40d1-bcfe-f4862b3a6da1"
              }
          })
  .then ((response)=>{
     return(response.data.jobs)
   } )
  .catch ((err)=> {
      console.log(err.response)
  })
}
export const  getJobByID = (id) => {

    axios.get(
          `https://labeninjas.herokuapp.com/jobs/${id}`, 
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
export const createJob = (objeto) => {
    const body = objeto
    axios.post(
          `https://labeninjas.herokuapp.com/jobs/`,body,
          {
              headers: {
                  Authorization: "93a18548-d983-40d1-bcfe-f4862b3a6da1"
              }
          })
  .then ((response)=>{
      alert(response.data.message)
   } )
  .catch ((err)=> {
      console.log(err.response.data.message)
  })
}
