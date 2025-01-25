let highestWordCount = 0;
let previousWords = 0;

document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value.trim();
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const currentWordCount = words.length;

    if (currentWordCount > highestWordCount) {
        highestWordCount = currentWordCount;
    }

    if (currentWordCount + previousWords > highestWordCount) {
      highestWordCount = currentWordCount + previousWords;
    } else if (currentWordCount === 0) {
      previousWords = highestWordCount;
    }

    document.getElementById('wordCount').textContent = `Word Count: ${highestWordCount}`;
});


