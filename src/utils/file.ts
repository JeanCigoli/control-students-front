export const convertIntoBase64 = (file: FileList | null) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (!file) {
      return reject();
    }

    reader.readAsDataURL(file[0]);
    return (reader.onload = () => resolve(reader.result));
  });
