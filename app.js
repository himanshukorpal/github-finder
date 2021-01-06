// instantiate class
const github = new GitHub;

// instatiate UI class
const ui = new UI;

// Search Input

const searchUser = document.getElementById('searchUser');


// Search Input event listerner

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;


    if(userText !== ''){
        //make http call
        github.getUser(userText)
              .then(data => {
                  if(data.profile.message === 'Not Found'){
                      // Show alert
                    ui.showAlert('user not found', 'alert alert-danger');
                  } else {
                      // show profile
                      ui.showProfile(data.profile)
                    ui.showRepos(data.repos)
                  }
              })
    } else {
        // clear profile
      ui.clearProfile();
    }
})

