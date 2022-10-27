module.exports = function (editBtnArray, saveBtnArray, content, isCompleted, url) {
	editBtnArray.forEach((editBtn, index) => {
		let isComp = isCompleted[index];
		const fakeID = parseInt(content[index].children[0].textContent);
		const input = content[index].children[1];
		
		editBtn.addEventListener("click", () => {			
			editBtn.style.display = "none";
			saveBtnArray[index].style.display = "inline-block";
			input.classList.add("edit");
			input.removeAttribute("readonly");			

			saveBtnArray[index].addEventListener("click", async () => {
				updatePut(input, isComp, fakeID);
			})			
		});

		isCompleted[index].addEventListener("change", async () => {
			updatePut(input, isComp, fakeID);
		});

		async function updatePut(input, isComp, fakeID) {
			await fetch(`${url}/${fakeID}`, {
				method: "PUT",
				headers: {
					"content-type" : "application/json"
				},
				body: JSON.stringify({title: input.value.trim(), isComplete: isComp.checked ? true : false })
			})
		}
	});
}