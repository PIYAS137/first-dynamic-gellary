// -------------finding part ----------------
const input = document.querySelector("#inputx");
const form = document.querySelector("form");
const button = document.querySelector("#btn");
const wrapper = document.querySelector(".wrapper");
const result = wrapper.querySelector(".data");
const select = document.querySelector("#select");
// -------------------------------------------

// -------------event part here --------------
form.addEventListener("submit",(event)=>{
	event.preventDefault();
	const UnserInputValue = input.value;
	piyas(UnserInputValue);
	input.value="";
})
// ------------bg mode event---------------------
select.addEventListener("change",(event)=>{
	let bgColor = event.target.value;
	if(bgColor=="white"){
		input.style.backgroundColor="pink";
	}
		input.style.backgroundColor="white";
		document.querySelector("body").style.backgroundColor=event.target.value;

})
// ----------------------------------------------
const removeImage=()=>{
	wrapper.innerHTML="";
}
// ------------ api from here -------------------
const hero = async(config)=>{
	const data = await fetch(config);
	if(!data.ok){
		const message = "Here Is Some Error !";
		throw new Error(message);
	}else{
		return data.json();
	}
}
const piyas = (value) => {
	removeImage();
	hero("https://api.unsplash.com/search/photos/?query="+value+"&per_page=22&client_id=h8e6WJkQljlBuqHwtkXi1fRXkYwtT7ZOwefpwoDIltI")
	.then((res)=>{
		var data = res.results;
		data.map((res)=>{

			console.log(res)

			const element = document.createElement("img");
			element.classList.add("love");
			element.src=res.urls.regular;
			wrapper.appendChild(element);
		})
	})
	.catch((error)=>console.log(error));
}
piyas();


