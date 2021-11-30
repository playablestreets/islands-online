export default (e, animCSSClass) => {
  const anim = document.createElement("div")
  anim.className = animCSSClass
  anim.style.top = e.clientY + "px"
  anim.style.left = e.clientX + "px"
  document.body.appendChild(anim)
  anim.addEventListener("animationend", () => {
    anim.parentElement.removeChild(anim)
  })
}
