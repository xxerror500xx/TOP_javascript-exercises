function echo(str) {
	return str;
}

function shout(str) {
	var multiple_words = str.split(' ');
	for (var i = 0; i < multiple_words.length; i++) {
		multiple_words[i] = multiple_words[i].toUpperCase();
	}
	return multiple_words.join(' ', '');
}

function repeat(word, num = 2) {
	var words = [];
	for (var i = 0; i < num; i++) {
		words[i] = word;
	}
	return words.join(' ', '');
}

function pieceOfWord(word, iEnd) {
	var partial = word.substring(0, iEnd);
	return partial;
}

function firstWord(word) {
	return word.split(' ')[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(words) {
	var title = words.split(' ');
	for (var i = 0; i < title.length; i++) {
		title[i] = capitalize(title[i]);
	}
	return title.join(' ');
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	titleCreator
};
