class Profile{
    constructor(){
        this.clientId="",
        this.clientSecret=""
    }

    async getProfile(username){
        let url=`https://jsonplaceholder.typicode.com/users?username=${username}`;
       const response=await fetch(url);
        const profile=await response.json();

        console.log(profile[0].id);

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`);
        const todo=await todoResponse.json();

        return{
            profile,
            todo
        }

    }
}

