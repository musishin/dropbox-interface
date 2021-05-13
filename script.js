dropHandler = (e) => {
    let file;
    let count;
    let dropTextArea = document.getElementById('file-name-text');

    console.log('File(s) received!');
    dropTextArea.textContent += 'Files received!\r\n\r\n';

    // Prevent file(s) from being opened.
    e.preventDefault();

    if(e.dataTransfer.items) {
        for(count = 0; count < e.dataTransfer.items.length; count++) {
            if(e.dataTransfer.items[count].kind === 'file') {
                file = e.dataTransfer.items[count].getAsFile();
                console.log(file.name + ' uploaded.');
                dropTextArea.textContent += file.name + ' uploaded.\r\n';
            }
        }
    } else {
        for(count = 0; count < e.dataTransfer.files.length; count++) {
            console.log(e.dataTransfer.files[count].name + ' uploaded.');
            dropTextArea.textContent += file.name + ' uploaded.\r\n';
        }
    }
}

dragOverHandler = (e) => {
    console.log('File(s) in drop area.');

    // Prevent file(s) from being opened.
    e.preventDefault();
}