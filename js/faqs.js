// document.querySelectorAll('.accordion-header').forEach(header => {
//   header.addEventListener('click', () => {
//       const accordionContent = header.nextElementSibling;
//       const open = accordionContent.style.display === 'block';
//       document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
//       if (!open) {
//           accordionContent.style.display = 'block';
//       }
//   });
// });

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const accordionContent = header.nextElementSibling;
    accordionContent.style.display =
      accordionContent.style.display === "block" ? "none" : "block";
  });
});
