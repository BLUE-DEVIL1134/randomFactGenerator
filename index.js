async function generateFact() {
    var request = await axios.get('https://uselessfacts.jsph.pl/api/v2/facts/random');
    document.getElementsByTagName('div')[0].innerText = request.data.text;
}