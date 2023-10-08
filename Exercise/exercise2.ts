/*
    1. Start a new Deno workspace and create a
       server.ts file

    2. Start a new Deno Server with Deno.serve
       on port 9000

    3. Respond to each request with JSON containing
       the Method and URL:
       Eg: { url: http://localhost:9000/hello,
             method: "GET" }

    4. Start your server using deno run and
       Test this in both Insomnia and the Browser

    *HINT Remember the Header type needed to do this
          properly!
*/

const handler = async(req:Request)=>{

    const header = new Headers();
    header.append("content-type", "application/json")

    const json = JSON.stringify( { url: "http://localhost:9000/hello",
    method: "GET" })

    return new Response(json, {
        headers:header
    })
}   


Deno.serve({port:9000}, handler);