import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyD0mR4YPXKJ-7epkD33Ev-X-o6NouvYVdo",
    authDomain: "hamzailyas-portfolio-237.firebaseapp.com",
    projectId: "hamzailyas-portfolio-237",
    storageBucket: "hamzailyas-portfolio-237.appspot.com",
    messagingSenderId: "504424623182",
    appId: "1:504424623182:web:c058d20da0aab0f02f271f"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

addMoreProjects.addEventListener('click', () => {
    let projectForm = document.getElementById('project-form')
    projectForm.style.display = 'flex'
    addMoreProjects.style.display = 'none'
    addProjectBtn.style.display = 'block'
})

addProjectBtn.addEventListener('click', () => {
    let title = document.getElementById('title').value
    let link = document.getElementById('link').value

    const projectListRef = ref(db, 'Projects/');
    const newProjectRef = push(projectListRef);
    if (title == "" || link == "") {
        alert('Title OR Link Field is Empty')    
    }
    else {
        set(newProjectRef, {
            projectTitle: title,
            projectLink: link,
        });
    }
})


// Sign Out
const auth = getAuth();
signOutBtn.addEventListener('click', () => {
    signOut(auth).then(() => {
        location.href = '../login/index.html'
    }).catch((error) => {
        (error)
    });
})

// User State 
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid)
    } else if (user == null) {
        alert("Access denied.\nYou are not Logged In.")
            location.href = ("../login/index.html")
    }
});
