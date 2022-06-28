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
getJobByID = (id) => {

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
createJob = () => {
    const body = {
        title: "estado do forms titulo",
        description : "estado descriçao ",
        price : "estado preço",
        paymentMethods : ["Array de methodos de pagamento no estado"],
        dueDate : "Data salva no estado"
    }
    axios.post(
          `https://labeninjas.herokuapp.com/jobs/`, 
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
