function tu_dien() {
let eng = ["dog","cat","chicken"];
let vi = ["cho","meo","ga"];
let word = document.getElementById("text").value;
console.log(word);
if (eng.indexOf(word)!=-1) {
    let index = eng.indexOf(word);
    let mean = vi[index];
    document.getElementById("ket_qua").innerText = mean;
} else {
    document.getElementById("ket_qua").innerText = "tu nay khong co trong tu dien";
}
}