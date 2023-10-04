

const getHeaders = (token: string, method: string="GET")=>{
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": method + ",OPTIONS"
      };
}


export default getHeaders
