// create array
const samples = ["My Main Squeeze Lotion", "Shampoo", "lipstic"];

// grab ul list
let list = document.getElementById("list-items");

for(i=0; i < samples.length; i++) {
    // create li element
    let li = document.createElement('li');
    li.innerText = samples[i];
    // append li to ul list
    list.appendChild(li);
}

