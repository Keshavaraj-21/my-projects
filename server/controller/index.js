app.post("/postquery", (request, response, _next) => {
  var object = {
    username: request.body.username,
    phone: request.body.phone,
    email: request.body.email,
    blockname: request.body.blockname,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
    // contact_no: request.body.contact_no,
    type: "userid",
  };
  signupcontroller
    .SignupForm(object)
    .then((res) => {
      logger.info("Signup form added");
      response.send(res);
    })
    .catch((err) => {
      logger.warn("error ");
      response.send(err, "Faild to upload");
    });
  console.log("Data added");
});

app.get("/getUser", (request, response) => {
  console.log(request);
  console.log("Fetching Begins");
  let value = {
    selector: {
      type: "userid",
    },
  };
  signupcontroller
    .getusers(data)
    .then((res) => {
      logger.info(" Login - user data successfully fetched");
      response.send(res);
    })
    .catch((err) => {
      logger.warn("error");
      response.send(err, " login Faild  to get");
    });
});

app.delete("/delete/:id/:id1", (request, response) => {
  usercontroller
    .deleteuser(request.params.id, request.params.id1)
    .then((res) => {
      logger.info(" Delete Admin users - user data successfully deleted");
      response.send(res);
    })
    .catch((err) => {
      logger.warn("error");
      response.send(err, " login Faild  to get");
    });
});
