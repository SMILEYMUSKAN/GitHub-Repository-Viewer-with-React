

const token = "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";
  
export const getData = async (username) => {
    
   if(username){
       const responce = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers:{
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await responce.json()
   
    return data;
} 
   }


