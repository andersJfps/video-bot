const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}
async function start() {
	const content = {
		useFecthContentFromWikipediaAlgorithmia: false,
		 maximumSentences: 7
	}
	
	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()
	content.lang = askAndReturnLanguage()

	await robots.text(content)

	function askAndReturnSearchTerm() {
		return readline.question('Digite o termo de pesquisa do Wikipedia: ')
	}
	function askAndReturnPrefix(){

                const prefixes = ['Quem e','O que e','A historia de']
                const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText
        }

	 function askAndReturnLanguage(){
		const language = ['pt','en', 'es', 'fr']
		const selectedLangIndex = readline.keyInSelect(language,'Choice Language: ')
		const selectedLangText = language[selectedLangIndex]
		return selectedLangText
	  }
	console.log(JSON.stringify(content, null,4))
	
}

start()
