

const submitForm = (payload)=>{
    console.log(payload)
return({
    type: "SUBMIT_FORM",
    payload
})
}

export {submitForm}