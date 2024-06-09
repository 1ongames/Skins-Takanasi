$(function () {

	$(".takanasi .wiki-article code.syntax").each(function () {

		var $syntax = $(this);

		var $syntaxPre = $syntax.parent();



		$syntaxPre.wrap("<div class=\"syntax-wrapper\">");



		var $wrapper = $syntaxPre.parent();

		var $lines = $("<pre class=\"syntax-lines\">");



		$wrapper.prepend($lines);



		var lineCount = $syntax.text().split("\n").length;



		var lineStr = "";

		for (var i=1; i<=lineCount; i++) {

			lineStr += i + ".\n";

		}



		$lines.text(lineStr);

	});

});

