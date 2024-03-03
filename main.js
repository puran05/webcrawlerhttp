const {crawlPage} = require('./crawl.js')

async function main (){
    if (process.argv.length < 3 ){
        console.log("no website provided")
        process.exit(1)
    }
    if (process.argv.length > 3 ){
        console.log("too many  command line args")
        process.exit(1)
    }
    const baseURL= process.argv[2]
    console.log(`starting crawl of ${baseURL}`)
    const pages= await crawlPage(baseURL,baseURL,{})

    //this allows to iterate over object
    for (const pag of Object.entries(pages)){
        console.log(pag)
    }
}

main()