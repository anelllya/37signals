const text = document.querySelector(".text");
text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 9.7}deg)">${char}</span>`
	)
	.join("");


	const headers = document.querySelectorAll('.accordion-header');
    const expandBtn = document.getElementById('expandAllBtn');
    const collapseBtn = document.getElementById('collapseAllBtn');
    const contents = document.querySelectorAll('.accordion-content');

    // Toggle individual accordion
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('show');
        header.classList.toggle('active');
      });
    });

    // Expand All
    expandBtn.addEventListener('click', () => {
      contents.forEach(content => content.classList.add('show'));
      headers.forEach(header => header.classList.add('active'));
    });

    // Collapse All
    collapseBtn.addEventListener('click', () => {
      contents.forEach(content => content.classList.remove('show'));
      headers.forEach(header => header.classList.remove('active'));
    });
