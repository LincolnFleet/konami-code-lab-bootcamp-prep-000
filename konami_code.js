const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var index=1;
  document.body.addEventListener('keydown', event => {
    const correctInput=codes[index];
    const input=event.key;
      console.log(`input ${input}`)
      console.log(`correctInput ${correctInput}`)
      console.log(`index ${index}`)
    if (input.toString()===correctInput.toString()) {
      index++;
    }
    else if (index===codes.length) {
      alert("Code Successfully Entered");
      return index=0;
    }
    else {
      index=1
    }
  })
}
