//what happens when the add to the list button is clicked
$(document).ready(function() {
  $(".add").submit(function(e) {
    e.preventDefault();
    const data = $(this).serialize();
    console.log(data);
    $.ajax({
      url: "/allnews",
      type: "POST",
      data: data,
      success: function(data) {
        console.log("data recieved", data);
        window.location.href = "/allnews";
      },
      error: function(xhr, status, error) {}
    });
  });
});

//what happens when the delete from list is clicked
$(document).ready(function() {
  $(".delete").click(function(e) {
    e.preventDefault();
    const id = $(e.target).data("id");
    console.log(id);
    $.ajax({
      url: `/allnews/saved/${id}`,
      type: "DELETE",
      success: function(data) {
        console.log("data recieved", data);
        window.location.href = "/allnews/saved";
      },
      error: function(xhr, status, error) {}
    });
  });
});
//what happens when the checkbox is clicked.part of the code was written with the help of tims gardner
$(document).ready(function() {
  $(".check").click(function(e) {
    e.preventDefault();
    const id = $(e.target).data("id");
    $.ajax({
      url: `/allnews/saved/${id}`,
      type: "PUT",
      data: { checked: e.target.checked },
      success: function(data) {
        console.log("data recieved", data);
        window.location.href = "/allnews/saved";
      },
      error: function(xhr, status, error) {}
    });
  });
});
