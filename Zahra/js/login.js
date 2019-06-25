function Registration() {
	var show = document.getElementById('show');
	var show_i = document.getElementById('show-i');
	var show_u = document.getElementById('show-u');
	var page = document.getElementById('login-form');
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value; 

	if(username == 'zari' && password == 'shoharam') {
		alert("تولدت مبارک عشقه من :)");
		page.style.display = 'none';
		show.style.display = 'inline-block';
		show_i.style.display = 'inline-block';
		show_u.style.display = 'inline-block';
	}
}