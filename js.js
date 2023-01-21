const inner = document.querySelector(".inner");
const left = document.querySelector(".left");
left.addEventListener("mousemove", handleMousemove, false);
function handleMousemove(event) {
  let { width, height } = this.getBoundingClientRect();
  let xAxis = event.offsetX / width * 100;
  let yAxis = event.offsetY / height * 100;
  inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
}
