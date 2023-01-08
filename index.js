const initText = `/**
* Publish request body to queue.
* @param {String} request - JSON request body
* @param {String} queue - queue to publish request to
*/
const publishRequestToExchange = (request, queue) => {
    // The quick brown fox jumps over the lazy dog.
    if (queue && Object.keys(channels).includes(queue)) {
        channels[queue].sendToQueue(
            queue,
            Buffer.from(JSON.stringify(request))
        );
    }
};`;

const samples = document.querySelectorAll('pre');
const slider = document.querySelector('#fsslider');

const prop = (changed) => {
    var text = changed.innerHTML;
    samples.forEach((sample) => {
        if(sample != changed) {
            sample.innerHTML = text;
        }
    });
};

samples.forEach((sample) => {
    var heading = sample.previousElementSibling
    heading.oninput = () => {
        sample.style.fontFamily = '"' + heading.innerText + '", cursive';
    };
    sample.style.fontFamily = '"' + heading.innerText + '", cursive';
    sample.innerHTML = initText;
    sample.oninput = () => {prop(sample)};
});

slider.oninput = (event) => {
    document.querySelector('#fsdisp').innerHTML = event.target.value + ' pt';
    samples.forEach((sample) => {
        sample.style.fontSize = event.target.value + 'pt';
    })
}