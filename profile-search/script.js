const searchProfile = $("#searchProfile");
const profile = new Profile();
const ui = new UI();
searchProfile.on("keyup", (e) => {
    let textValue = e.target.value;
    if (textValue !== "") {
        let getPofileData;
        profile.getProfile(textValue).then(data => {
            if (data.profile.length === 0) {
                //ui.clearContainer();
                ui.alertMessage();
            } else {
                ui.showProfile(data.profile[0]);
                ui.showTodo(data.todo);
            }
        });
    }
});
