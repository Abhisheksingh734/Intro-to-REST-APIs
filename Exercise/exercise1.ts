/*
    1. Start a new Deno workspace and create a
       server.ts file

    2. Start a new Deno Server with Deno.serve
       on port 9000

    3. Respond to each request with both the request
       method as well as the request URL as a String:
       Eg: GET http://localhost:9000/hello
           POST http://localhost:9000/moo

    4. Start your server using deno run and
       Test this in both Insomnia and the Browser

    *BONUS: Can you log the method and pathname for each
            request like: GET /hello, PUT /meow
*/

const handler=(req:Request)=>{
    const url = req.url;

    const method = req.method;
    const urlObject = new URL(req.url);

    const pathname = urlObject.pathname;
    const stringStream = `${method} ${url} ${pathname}`

    return new Response(stringStream);
}

Deno.serve({port: 9000}, handler);