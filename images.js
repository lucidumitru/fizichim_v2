const glob = require('glob');
const webp = require('webp-converter');

glob('static/**/*.{jpg,jpeg,png}', {}, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    let index = 0;

    files.forEach(file => {
        webp
            .cwebp(file, `${file}.webp`, '-q 80', '-v')
            .then(() => {
                index++;
                console.log(`progress:`, (index / files.length));
            })
            .catch(err => console.error('webp error', err));
    });
});