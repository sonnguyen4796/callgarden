jQuery(document).ready(function($){
	$(".form-submit").each(function(){
		var form = $(this);
		form.find("[type='submit']").click(function(){
			var name = form.find("input[name='fname']").val();
			var email = form.find("input[name='email']").val();
			var phone = form.find("input[name='phone']").val();
			var content = (form.find("textarea[name='content']").length > 0) ? form.find("textarea[name='content']").val() : "x";
			var formname = form.find("input[name='formname']").val();
			var url = form.find("input[name='url']").val();

			var result = "";
			var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
			if (name == "")
				result += "<p style='color:#245f30'>Vui lòng nhập Họ Tên</p>";
			if (email == ""){
				result += "<p style='color:#245f30'>Vui lòng nhập Email</p>";
			} else if (!reg.test(email)){
				result += "<p style='color:#245f30'>Vui lòng nhập đúng định dạng Email</p>";
			}
			// if (phone == "")
			// 	result += "Vui lòng nhập Số điện thoại<br>";
			
			if (result.length > 0) { bootbox.alert(result); return false; }

			sendData({
				'name': name,
				'email': email,
				'phone': phone,
				'content': content,
				'formname': formname,
				'url': url
			}, function(success){
				if(!success) bootbox.alert("<center style='color:#245f30'><p>Đã có lỗi xảy ra...</p><p>Vui lòng gửi lại hoặc liên hệ với số hotline: <a href='tel:" + dataweb.phone + "' style='color:#ff6c00'><strong><big>" + dataweb.phone + "</big></strong></a> để được tư vấn.</p></center>");
				else bootbox.alert("Gửi thành công.")
			});
		})
	});

	function sendData(data, callback){
		$.post("",
		{

		},
		function(data,status){

		});
		callback(false);
	}
})