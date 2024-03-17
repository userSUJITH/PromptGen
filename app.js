let i = document.getElementById("img1");
let txt = document.getElementById("txt")
let btn = document.getElementById("btn");
let img =  document.getElementById("imgs")
async function query() {
    i.src="loader.gif";
	const response = await fetch(
    "https://api-inference.huggingface.co/models/artificialguybr/StickersRedmond",
		{
			headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify({"inputs":txt.value}),
        }
	);
	const result = await response.blob();
  console.log(result);
	return result;
}
 
btn.addEventListener("click",function(){ 
query().then((response) => {
	let url=URL.createObjectURL(response);
    console.log(url)
    console.log(response)
  i.src=url;
});
})
function hideimg(){
 img.style.visibility="hidden";

}

 