"use server";


// we are exporting this function
// we are not calling this function here 
// we shall call this function in page.tsxa
export const fetchAnime= async(page:number)=>{
const response=await fetch('https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity');  
const data = await response.json();
console.log(data);
return data;



};