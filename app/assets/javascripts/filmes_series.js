// JS from filmes_deries page

$(document).ready( function () {
  $('.carousel-showsixmoveone .item').each(function(){
    var itemToClone = $(this);
    for (var i=1;i<3;i++) {
      itemToClone = itemToClone.next();

      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      itemToClone.children(':first-child').clone().addClass("cloneditem-"+(i)).appendTo($(this));
    }
  });
});

// (function(){
//     $('.carousel-showsixmoveone .item').each(function(){
//       var itemToClone = $(this);
//       for (var i=1;i<3;i++) {
//         itemToClone = itemToClone.next();
// // wrap around if at end of item collection
// if (!itemToClone.length) {
//   itemToClone = $(this).siblings(':first');
// }
// // grab item, clone, add marker class, add to collection
// itemToClone.children(':first-child').clone()
// .addClass("cloneditem-"+(i))
// .appendTo($(this));
// }
// });
//   }());