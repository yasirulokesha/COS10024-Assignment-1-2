function numSpinner(textWrapper, text, duration, frameRate) {

    const frameCount = duration * frameRate,
        maxFramesPerChar = frameCount - text.length,
        charSequence = [...text].map((c, pos) => {
            const padding = maxFramesPerChar * 0.2 | 0,
                maxSpinFrames = maxFramesPerChar - padding - 1,
                spinFramesLength = 0 | Math.random() * maxSpinFrames + padding - 1,
                spinFrames = [...Array(spinFramesLength)].map(() => 0 | Math.random() * 10)
            return [
                ...Array(text.length - pos).fill(''),
                ...spinFrames,
                c]
        }),
        charSlots = [...Array(text.length)].map((_, charPos) => document.createElement('div'))

    charSlots.forEach(slot => textWrapper.appendChild(slot))


    window.frameInterval = setInterval(() => {
        if (!charSequence.flat().length) clearInterval(window.frameInterval)
        charSequence.forEach((sequence, pos) => {
            if (sequence.length) {
                charSlots[pos].textContent = sequence.shift()
            }
        })
    }, 1000 / frameRate)

}

function init() {

    var count = 0;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                const square = entry.target.querySelector('.reviews');

                if (entry.isIntersecting && count == 0) {
                    const count1Text = '1000+';
                    const count2Text = '500+';
                    const count3Text = '5000+';
                    const blank = '';

                    var Count1 = document.getElementById('count1');
                    var Count2 = document.getElementById('count2');
                    var Count3 = document.getElementById('count3');

                    numSpinner(Count1, count1Text, 3.5, 12);
                    numSpinner(Count2, count2Text, 3.5, 12);
                    numSpinner(Count3, count3Text, 3.5, 12);

                    count = count + 1;
                    return; // if we added the class, exit the function
                }

            })
        }
    );

    observer.observe(document.querySelector('.reviews'));

}

window.onload = init;
