
export function loadFile(file: File): Promise<ArrayBuffer> {
    return new Promise<ArrayBuffer>(
        (resolve, reject) => {
            let fileReader = new FileReader();

            fileReader.onload = ev => {
                let result = ev.target?.result;
                if (result)
                    resolve(result as ArrayBuffer);
                else
                    reject(new ArrayBuffer(0));
            };

            fileReader.readAsArrayBuffer(file);
        }
    );
}
