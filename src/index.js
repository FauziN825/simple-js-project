const { Employee } = require("./employee/employee");
const { Message } = require('./message');

module.exports = {
  run: (elementId) => {
    let employeeName = document.getElementById(elementId);
    const employee = new Employee('AH', 'AH@email.com', 'password');
    employeeName.innerHTML = `Name ${employee.name} and Email ${employee.email}.`;
    // employee.getEmployeeTodo(1)
    //   .then(result => {
    //     if (result) {
    //       employeeName.innerHTML = `Name ${result.userId} and Email ${result.id}.`;
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // status.innerHTML = 'End';
  },
  displayPosts: () => {
      
    GetUser = (users) => {
        buttonTag = document.createElement("button")
        buttonValue = document.createTextNode("View Post")
        buttonTag.appendChild(buttonValue)
        buttonTag.classList.add("button-view","button-view:hover","button-main");


        ListUser = document.createElement("li");

        buttonTag.addEventListener("click", () => {
        document.getElementById("spacePost").innerHTML = '';
        document.getElementById("spaceComment").innerHTML = '';

        employee.getUserPosts(users['id'])
        .then(result => {
          result.forEach(GetPost);
        });
      });
        spaceUserList = document.getElementById("spaceUser")

        nameTag = document.createElement("p")
        nameNode = document.createTextNode("Name : " + users['name'])
        nameTag.appendChild(nameNode)

        usernameTag = document.createElement("p")
        usernameNode = document.createTextNode("Username : " + users['username'])
        usernameTag.appendChild(usernameNode)

        emailTag = document.createElement("p")
        emailNode = document.createTextNode("Email : " + users['email'])
        emailTag.appendChild(emailNode)

        ListUser.appendChild(nameTag)
        ListUser.appendChild(usernameTag)
        ListUser.appendChild(emailTag)
        ListUser.appendChild(buttonTag)
        ListUser.classList.add("list-group-item");
        spaceUserList.appendChild(ListUser);
    }

    GetPost = (posts) => {
        buttonTagP = document.createElement("button")
        buttonValueP = document.createTextNode("View Comment")
        buttonTagP.appendChild(buttonValueP)
        buttonTagP.classList.add("button-view","button-view:hover","button-main");

        var ListPost = document.createElement("li");
        ListPost.classList.add("list-group-item");
        buttonTagP.addEventListener("click", () => {
            document.getElementById("spaceComment").innerHTML = '';
            employee.getPostComments(posts['id'])
            .then(result => {
            result.forEach(GetComments);
            });
        });
        spacePostList = document.getElementById("spacePost")

        titleTag = document.createElement("h6")
        titleValue = document.createTextNode(posts['title'])
        titleTag.appendChild(titleValue)

        bodyTag = document.createElement("p")
        bodyValue = document.createTextNode(posts['body'])
        bodyTag.appendChild(bodyValue)

        ListPost.appendChild(titleTag)
        ListPost.appendChild(bodyTag)
        ListPost.appendChild(buttonTagP)
        spacePostList.appendChild(ListPost);
    }

    GetComments = (comments) => {
      var commentList = document.createElement("li");
      commentList.classList.add("list-group-item");

      bodyTagCo = document.createElement("p")
      bodyValueCo = document.createTextNode(comments['body'])
      bodyTagCo.appendChild(bodyValueCo)

      commentList.appendChild(bodyTagCo)
   
      
      spaceComentList = document.getElementById("spaceComment")
      
  
      spaceComentList.appendChild(commentList);
    }
    const employee = new Employee();
    employee.getUsers()
      .then(result => {
        result.forEach(GetUser);
      });
    
  }
};
