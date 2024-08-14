(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    // implement resource here
	// var email = request.getHeader("email");
	var queryParams = request.queryParams
	gs.info("FROM REST EXPLORER: " + queryParams);
	response.setBody({"response": "Hellow there. Responding from servicenow"});
})(request, response);