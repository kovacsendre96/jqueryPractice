
$(document).ready(function(){
  $("#add").click(function(){
    
     // Create list elements and their's buttons
        let list_item =document.createElement("li");
          let remove_button=document.createElement("button");
          let done_button=document.createElement("button");
          let modify_button=document.createElement("button");


     // append the buttons some string to caption buttons
       

       $(remove_button).append("Törlés");
       $(done_button).append("Kész");
       $(modify_button).append("Módosítás");

       


     
     // add class name the items to to distinguish them 

      $(list_item).addClass("item")
      $(remove_button).addClass("delete"); 
      $(done_button).addClass("done"); 
      $(modify_button).addClass("modify"); 



     // fill  the created items with the input values
     
     let list_text =$("#input").val();
     let time=$("#time").val();
     
     
     // fill the list item with their's  buttons and class names and input values

     $(list_item).append(time,"   :   ",list_text,done_button,modify_button,remove_button); 

     // finally fill the ul with list items

     $("ul").append(list_item);

     // after empty the input field
     $("#input").val('');




    // list item's buttons

    
    
    $(".done").click(function(){
      $(list_item).click(function(){
        $(this).css("color","green")
        $(this).css("text-decoration","line-through")
      }); 
    });
    
    
    
    $(".delete").click(function(){
        $(list_item).click(function(){
          $(this).remove()
        }); 
      });



      });// main function close
      
    }); // document ready close
    

