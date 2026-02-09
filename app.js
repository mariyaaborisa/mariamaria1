const desk = document.getElementById("desk");
const papers = Array.from(document.querySelectorAll(".paper"));

let z = 10;

papers.forEach(paper => {
  paper.style.zIndex = ++z;

  let dragging = false;
  let moved = false;
  let startX = 0;
  let startY = 0;
  let origLeft = 0;
  let origTop = 0;

  paper.addEventListener("pointerdown", (e) => {
    dragging = true;
    moved = false;
    paper.setPointerCapture(e.pointerId);
    paper.style.cursor = "grabbing";
    paper.style.zIndex = ++z;

    const rect = paper.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    origLeft = rect.left;
    origTop = rect.top;
  });

  paper.addEventListener("pointermove", (e) => {
    if (!dragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;

    const deskRect = desk.getBoundingClientRect();
    const newLeft = origLeft + dx - deskRect.left;
    const newTop = origTop + dy - deskRect.top;

    const maxLeft = deskRect.width - paper.offsetWidth - 10;
    const maxTop = deskRect.height - paper.offsetHeight - 10;

    const clampedLeft = Math.max(10, Math.min(newLeft, maxLeft));
    const clampedTop = Math.max(10, Math.min(newTop, maxTop));

    paper.style.left = `${clampedLeft}px`;
    paper.style.top = `${clampedTop}px`;

    paper.style.setProperty("--x", "unset");
    paper.style.setProperty("--y", "unset");
  });

  paper.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    dragging = false;
    paper.releasePointerCapture(e.pointerId);
    paper.style.cursor = "grab";

    if (!moved) {
      const link = paper.dataset.link;
      if (link) window.location.href = link;
    }
  });

  paper.addEventListener("pointercancel", () => {
    dragging = false;
    paper.style.cursor = "grab";
  });

  paper.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const link = paper.dataset.link;
      if (link) window.location.href = link;
    }
  });
});
