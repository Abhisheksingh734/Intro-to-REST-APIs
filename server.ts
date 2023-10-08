const handler =async (req: Request)=>{

    const file = await Deno.open("./hello.html");
    const fileSection = file.readable

    const HTMLheader = new Headers();
    HTMLheader.append("content-type","text/html");

    return new Response(fileSection,{
        headers:HTMLheader
    });

}

Deno.serve(
    {
        port:8000,
        hostname: "127.0.0.1"
    },
    handler)

// 127.0.0.1: 8000
// localhost: 8000