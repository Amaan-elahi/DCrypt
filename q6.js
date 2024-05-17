import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getDatabase, ref, onValue, update, push, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-database.js";

const firebaseConfig = {
    databaseURL: "https://dcrypt-a3adb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


document.addEventListener('DOMContentLoaded', () => {
    const txt = document.getElementById('input');
    const button = document.getElementById('btn');
    if (button) {
        button.addEventListener('click', () => {
            const ans = txt.value.trim();
            console.log(ans);
            const dbRef = ref(getDatabase())
            
            get(child(dbRef, 'Questions/Q6')).then((snapshot) => {
                if (snapshot.exists()){
                    console.log(snapshot.val())
                    const ansC = snapshot.val().trim()
                    if ( ansC === ans) {
                        console.log('correct')
                        window.open('https://forms.gle/8oUvtSr4hHZwisLGA', "_blank_")
                        window.location.href = 'hunt_q7.html'
                    } else{
                        console.log('Wrong')
                    }
                } else {
                    console.log('No data')
                }
            }).catch((error) => {
                console.log('Error')
            })  
        });
    } else {
        console.log('Button element not found');
    }
});
