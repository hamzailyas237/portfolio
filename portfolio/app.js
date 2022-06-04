
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD0mR4YPXKJ-7epkD33Ev-X-o6NouvYVdo",
    authDomain: "hamzailyas-portfolio-237.firebaseapp.com",
    projectId: "hamzailyas-portfolio-237",
    storageBucket: "hamzailyas-portfolio-237.appspot.com",
    messagingSenderId: "504424623182",
    appId: "1:504424623182:web:c058d20da0aab0f02f271f"
};

const app = initializeApp(firebaseConfig);
// Get a reference to the database service
const db = getDatabase(app);

const dbRef = ref(db, 'Projects/');

onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        console.log(childKey)
        console.log(childData)
        
        var genHtml =
            `<div class="project-container">
        <div class="project-card">
            <h1> ${childData.projectTitle} </h1>
            <p>
               <a href="${childData.projectLink}"> <i class="fa-brands fa-github"></i> </a>
                <a href="${childData.projectLink}">
                    ${childData.projectLink}
                </a>
            </p>
            </div>
        </div>`
        document.getElementById('row').innerHTML += genHtml
    });
}, {
    onlyOnce: true
});

let menuBtn = document.getElementById('menu-btn')
menuBtn.addEventListener('click', () => {
    document.querySelector('.navbar .menu').classList.toggle("active")
    document.querySelector('.menu-btn i').classList.toggle("active");
})


