function readFile(input) {
	let file = input.files[0]
	let fileReader = new FileReader()
	fileReader.readAsText(file)
	fileReader.onload = function () {
		try {
			let json = JSON.parse(fileReader.result)
			document.getElementById('out').innerHTML = temp(json)
		} catch (error) {
			alert(fileReader.result)
		}
	}
	fileReader.onerror = function () {
		alert(fileReader.error)
	}
}

function initImageReader() {
	var fileInput = document.getElementById('fileInput')
	var fileDisplayArea = document.getElementById('fileDisplayArea')

	fileInput.addEventListener('change', function (e) {
		var file = fileInput.files[0]
		var imageType = /image.*/

		if (file.type.match(imageType)) {
			var reader = new FileReader()

			reader.onload = function (e) {
				fileDisplayArea.innerHTML = ''

				var img = new Image()
				img.src = reader.result

				fileDisplayArea.appendChild(img)
			}

			reader.readAsDataURL(file)
		} else {
			fileDisplayArea.innerHTML = 'File not supported!'
		}
	})
}
