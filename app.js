
$(document).ready(function(){
  $("#add").click(function(){


    
    
     // Created list elements and their's buttons
        let list_item =document.createElement("li");
          let remove_button=document.createElement("button");
          let done_button=document.createElement("button");
         


     // append the buttons some string to caption buttons
       

       $(remove_button).append("Delete");
       $(done_button).append("Done");
    

       


     
     // added class name the items to to distinguish them 

      $(list_item).addClass("item")
      $(remove_button).addClass("delete"); 
      $(done_button).addClass("done"); 
      



     // filled  the created items with the input values
     
     let list_text =$("#input").val();
     let time=$("#time").val();
     
     
     // filled the list item with their's  buttons and class names and input values

     $(list_item).append('<div class="edit_item" contenteditable="true">'+time+'</div>', "  ",'<div class="edit_item" contenteditable="true">'+list_text+'</div>',done_button,remove_button); 

     // finally fill the ul with list items but first check out what is written in the input


     if(input.value==""){
       alert("Please enter an activity")
     
      }


      // If the input has some value  can go 

      else{
     $("ol").append(list_item);

     // after clicked, clear the input field
     $("#input").val("");
     
      


    // list item's buttons

    
    $(".done").click(function(){
      $(this).closest(list_item).css("color","white","text-decoration","line-through")
     
   });
    
    
   
    
    
   $(".delete").click(function(){
    $(this).closest(list_item).remove();
 });
    }


    $("#up").click(function(){
      console.log($("#ol").lenght);

      

    });

      });// main function close
      
    }); // document ready close
    

  