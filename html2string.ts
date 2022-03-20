class html2string {

	toHTML(body: string): string {
		const html = body
			.replace(/amp;/g, '')
			.replace(/&lt;/g, '<')
			.replace(/&mdash;/g, '—')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g,'"')
			.replace(/&apos;/g, '\'')
			.replace(/&nbsp;/g, '')
			.replace(/&iexcl;/g, '¡') 
			.replace(/&cent;/g, '¢') 
			.replace(/&pound;/g, '£') 
			.replace(/&curren;/g, '¤') 
			.replace(/&yen;/g, '¥') 
			.replace(/&brvbar;/g, '¦') 
			.replace(/&sect;/g, '§') 
			.replace(/&uml;/g, '¨') 
			.replace(/&copy;/g, '©') 
			.replace(/&ordf;/g, 'ª') 
			.replace(/&laquo;/g, '«') 
			.replace(/&not;/g, '¬') 
			.replace(/&reg;/g, '®') 
			.replace(/&macr;/g, '¯') 
			.replace(/&deg;/g, '°') 
			.replace(/&plusmn;/g, '±') 
			.replace(/&sup2;/g, '²') 
			.replace(/&sup3;/g, '³') 
			.replace(/&acute;/g, '´') 
			.replace(/&micro;/g, 'µ') 
			.replace(/&para;/g, '¶') 
			.replace(/&middot;/g, '·') 
			.replace(/&cedil;/g, '¸') 
			.replace(/&sup1;/g, '¹') 
			.replace(/&ordm;/g, 'º') 
			.replace(/&raquo;/g, '»') 
			.replace(/&frac14;/g, '¼') 
			.replace(/&frac12;/g, '½') 
			.replace(/&frac34;/g, '¾') 
			.replace(/&iquest;/g, '¿') 
			.replace(/&Agrave;/g, 'À') 
			.replace(/&Aacute;/g, 'Á') 
			.replace(/&Acirc;/g, 'Â') 
			.replace(/&Atilde;/g, 'Ã') 
			.replace(/&Auml;/g, 'Ä') 
			.replace(/&Aring;/g, 'Å') 
			.replace(/&AElig;/g, 'Æ') 
			.replace(/&Ccedil;/g, 'Ç') 
			.replace(/&Egrave;/g, 'È') 
			.replace(/&Eacute;/g, 'É') 
			.replace(/&Ecirc;/g, 'Ê') 
			.replace(/&Euml;/g, 'Ë') 
			.replace(/&Igrave;/g, 'Ì') 
			.replace(/&Iacute;/g, 'Í') 
			.replace(/&Icirc;/g, 'Î') 
			.replace(/&Iuml;/g, 'Ï') 
			.replace(/&ETH;/g, 'Ð')	
			.replace(/&Ntilde;/g, 'Ñ')	
			.replace(/&Ograve;/g, 'Ò')	
			.replace(/&Oacute;/g, 'Ó')	
			.replace(/&Ocirc;/g, 'Ô')	
			.replace(/&Otilde;/g, 'Õ')	
			.replace(/&Ouml;/g, 'Ö')	
			.replace(/&times;/g, '×')	
			.replace(/&Oslash;/g, 'Ø')	
			.replace(/&Ugrave;/g, 'Ù')	
			.replace(/&Uacute;/g, 'Ú')	
			.replace(/&Ucirc;/g, 'Û')	
			.replace(/&Uuml;/g, 'Ü')	
			.replace(/&Yacute;/g, 'Ý')	
			.replace(/&THORN;/g, 'Þ')	
			.replace(/&szlig;/g, 'ß')	
			.replace(/&agrave;/g, 'à')	
			.replace(/&aacute;/g, 'á')	
			.replace(/&acirc;/g, 'â')	
			.replace(/&atilde;/g, 'ã')	
			.replace(/&auml;/g, 'ä')	
			.replace(/&aring;/g, 'å')	
			.replace(/&aelig;/g, 'æ')	
			.replace(/&ccedil;/g, 'ç')	
			.replace(/&egrave;/g, 'è')	
			.replace(/&eacute;/g, 'é')	
			.replace(/&ecirc;/g, 'ê')	
			.replace(/&euml;/g, 'ë')	
			.replace(/&igrave;/g, 'ì')	
			.replace(/&iacute;/g, 'í')	
			.replace(/&icirc;/g, 'î')	
			.replace(/&iuml;/g, 'ï')	
			.replace(/&eth;/g, 'ð')	
			.replace(/&ntilde;/g, 'ñ')	
			.replace(/&ograve;/g, 'ò')	
			.replace(/&oacute;/g, 'ó')	
			.replace(/&ocirc;/g, 'ô')	
			.replace(/&otilde;/g, 'õ')	
			.replace(/&ouml;/g, 'ö')	
			.replace(/&divide;/g, '÷')	
			.replace(/&oslash;/g, 'ø')	
			.replace(/&ugrave;/g, 'ù')	
			.replace(/&uacute;/g, 'ú')	
			.replace(/&ucirc;/g, 'û')	
			.replace(/&uuml;/g, 'ü')	
			.replace(/&yacute;/g, 'ý')	
			.replace(/&thorn;/g, 'þ')	
			.replace(/&yuml;/g, 'ÿ')	
			.replace(/&euro;/g, '€');	

		return html;
	}

	withoutTags(body: string): string {
		const html = body.replace(/<[^>]*>/g, '');
		return html;
	}

	withoutLineBreaks(body: string): string {
		const text = body.replace(/(\r\n|\n|\r)/gm, '');
		return text;
	}

	lowerCase(body: string): string {
		const text = body.toLowerCase();
		return text;
	}

	upperCase(body: string): string {
		const text = body.toUpperCase();
		return text;
	}

	onlyCharacters(body: string): string {
		const text = body.replace(/[^a-zA-Z\u00C0-\u00ff]+/g, ' ').trim();
		return text;
	}

	withoutRepeating(body: string): string {
		const text = body.split(' ');
		const cleanText = [...new Set(text)].join(' ');
		return cleanText;
	}
}

export default new html2string;
