let request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.responseType = "json";
request.send();

request.onload = function () {
  let users = request.response;
  let SlideMenu = document.getElementById("SlideMenu");
  for (user of users) {
    SlideMenu.innerHTML += ` <div class="user" onclick="ShowPosts(${user.id},this)" id="user">
          <h3>${user.name}</h3>
          <p>
           ${user.email}
          </p>
    `;
  }
};

function ShowPosts(id, active) {
  document.querySelectorAll(".user").forEach((user) => {
    if (user.classList.contains("active")) {
      user.classList.remove("active");
    }
  });
  active.classList.add("active");
  document.getElementById("Menu").innerHTML = "";
  let request1 = new XMLHttpRequest();
  let userId = `?userId=${id}`;
  request1.open("GET", "https://jsonplaceholder.typicode.com/posts" + userId);
  request1.responseType = "json";
  request1.send();

  request1.onload = function () {
    let posts = request1.response;

    let Menu = document.getElementById("Menu");
    for (post of posts) {
      console.log("posts " + posts);

      Menu.innerHTML += ` <div id="UserPost" class="UserPost">
                <h2>${post.title}</h2>
                <p>
                  ${post.body}
                </p>
          `;
    }
  };
}
