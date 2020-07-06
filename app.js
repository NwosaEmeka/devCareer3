let checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('change', function() {
	if (this.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
	}
});
