let btn  = document.querySelector("button");


btn.addEventListener("click",async()=>{
    let fact = await getfact();
    console.log(fact)
    let p = document.querySelector("#fact")
    p.innerText = fact;
})




let url = "https://catfact.ninja/fact";

async function getfact(){
    try{
        let res = await axios.get(url);
        return res.data.fact
    }
    catch (err){
        console.log("error",err);
        return "No Page Found";
    }
 
    
}