const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")


// const saveNotes = () => {
//     const notes = document.querySelectorAll('.listItem')
//     console.log(notes)
//     const data = []
//     notes.forEach((note) => {
//         data.push(note.value)
//     })
// }

item.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.classList.add('listItem')
    listItem.innerHTML = `
         ${item}
        <i class="delete fas fa-times"></i>
        
    `;
    // <i class="save fa-solid fa-floppy-disk"></i>

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )

    listItem.querySelector(".delete").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )

    // listItem.querySelector('.save').addEventListener('click', function(){
    //     saveNotes();
    // })


    toDoBox.appendChild(listItem)
}