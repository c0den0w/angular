(function process( /*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {


    //extracts the creds from string
    var creds = (request.getHeader("Authorization")).split("Basic ")[1];

    //decodes base64 encrypted string
    var decoded = GlideStringUtil.base64Decode(creds);
    var decodedUsername = decoded.split(":")[0];
    var decodedPassword = decoded.split(":")[1];

    if (GlideUser.authenticateUser(decodedUsername, decodedPassword)) {
        gs.info("Password verified");
        response.setStatus(200);
        response.setBody({
            "message": "User Authenticated!!!",
        });
    }
})(request, response);