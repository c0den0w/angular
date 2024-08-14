(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	//gets email from query param
	var email= request.queryParams.sysparm_email;

	//extracts the creds from string
	var creds = (request.getHeader("Authorization")).split("Basic ")[1];
	
	//decodes base64 encrypted string
	var decoded = GlideStringUtil.base64Decode(creds);
	var decodedUsername = decoded.split(":")[0];
	var decodedPassword = decoded.split(":")[1];
	var gr = new GlideRecord("sys_user");
	gr.addQuery("email",email);
	gr.query();

	while(gr.next()){
		gs.info(GlideStringUtil.decodeAttributes(gr.user_password));
		if(gr.user_password == decodedPassword){
			gs.info("Password verified");
		}
		else{
			gs.info("incorrect password");
		}
	}
	// gs.info(decoded);
	response.setBody({"response": "Hellow there. Responding from servicenow","creds": decoded});
})(request, response);