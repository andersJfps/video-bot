const readline = require('readline-sync')
const robots = {
	text: require('./robots/text.js')
}
async function start() {
	const content = {}
	
	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

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

	console.log(content)
}

start()
