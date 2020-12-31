class UI{
    constructor() {
        this.profileContainer=$("#profileContainer");
        this.alert=$("#alert")
    }

    showProfile(profile){
        this.profileContainer.find("#left-content").html(`
        <div class="card" style="width: 18rem;">
          <img src="https://via.placeholder.com/350x150" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${profile.name}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: ${profile.email}</li>
            <li class="list-group-item">Phone: ${profile.phone}</li>
            <li class="list-group-item">Web site: ${profile.website}</li>
          </ul>
        </div>
        `);

    }

    showTodo(todo){
        let html="";
        todo.forEach(item=>{
           html +=`
     
             <li class='list-group-item ${item.completed==true? "bg-success":"bg-danger"}'>${item.title}</li>
           `
        });
        this.profileContainer.find("#right-content").html(html);
    }


    alertMessage(){
        this.alert.html("Sonuç Bulunamadı.");
    }

    clearContainer(){
        this.profileContainer.html("");
        this.alertMessage.html("");
    }
}