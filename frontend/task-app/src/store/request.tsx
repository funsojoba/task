const headers = (token: string) =>{
    return {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + token
        }
    }
}

export default headers
