export function convertFile(file: any) {
	return JSON.stringify(file);
}

export function convertBase64(file: any) {
	return new Promise((resolve, reject) => {
		var baseString = {};
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onload = () => {
			// resolve(fileReader.result);
			baseString = {
				filename: file.name,
				// type_id: 0,
				size: file.size,
				base64: fileReader.result,
			};
			resolve(baseString);
			// console.log(baseString);
		};

		fileReader.onerror = (error) => {
			reject(error);
		};
	});
}
