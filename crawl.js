function normalizeURL(urlString){
    const urlObject =new URL(urlString)
    const hostPath= `${urlObject.hostname}${urlObject.pathname}`
    if(hostPath.length >0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)
    }
    return hostPath
}
//below will make the function available to other js file that wants to use it 
module.exports={
    normalizeURL
}