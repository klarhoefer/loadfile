import { loadFile } from './loadfile.js';


async function onFileUpload(ev: Event) {
    let input = ev.target as HTMLInputElement;
    let file = input?.files?.[0];

    if (file) {
        let buffer = await loadFile(file);
        console.log(buffer, buffer.byteLength);
    }
}


document.querySelector("input[type=file]")?.addEventListener('change', onFileUpload);
