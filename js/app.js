var items = JSON.parse(localStorage.getItem("items"));

function addToCart(event) {
  let item = {
    srcImg: $(event)
      .parent()
      .parent()
      .find("img")
      .attr("src"),
    titleImg: $(event)
      .parent()
      .parent()
      .find("img")
      .attr("alt"),
    priceProduct: $(event)
      .parent()
      .parent()
      .find(".pice")
      .html()
  };

  items.push(item);

  localStorage.setItem("items", JSON.stringify(items));
}
let a = JSON.parse(localStorage.getItem("items"));
for (let i = 0; i < a.length; i++) {
  let b = a[i].srcImg.toString().length;

  let val = a[i].srcImg.toString().substr(2, b);
  $(".list-prod div:eq(0)").after(
    $(
      '<div class="row prod-containt' + i + ' my-3 align-items-center order-">'
    ).append(
      $('<div class="col-10 mx-auto col-md-2">').append(
        $("<img src=" + val + ' class="img-fluid" alt=" " />')
      )
    )
  );
  $("." + "prod-containt" + i).append(
    $('<div class="col-10 mx-auto col-md-4">').append(
      $("<p>" + a[i].titleImg + "</p>")
    )
  );
  $("." + "prod-containt" + i).append(
    $('<div class="col-10 mx-auto col-md-2">').append(
      $("<p>" + a[i].priceProduct + "</p>")
    )
  );
  $("." + "prod-containt" + i).append(
    $('<div class="col-10 mx-auto col-md-2">').append(
      $('<div class="align-items-center button' + i + '">').append(
        '<span class="btn btn-black mx-1">-</span>'
      )
    )
  );
  $("." + "button" + i).append($('<span class="btn btn-black mx-1">1</span>'));
  $("." + "button" + i).append($('<span class="btn btn-black mx-1">+</span>'));
  $("." + "prod-containt" + i).append(
    $(
      '<div class="col-10 mx-auto col-md-2 d-flex justify-content-center delete' +
        i +
        ' ">'
    ).append($("<p>" + a[i].priceProduct + "</p>"))
  );
  $("." + "delete" + i).append(
    $('<a href="#" class="delet-icon ">').append(
      $('<i class="far fa-trash-alt ">')
    )
  );
}
