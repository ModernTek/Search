/***********************************************************
*               Validation rules for Search form.          *
*                                                          *
* 1. The text in search input should not be empty and be   *
* all alphanumeric symbols.                                *
* 2. Continent should be selected.                         *
*                                                          *
***********************************************************/
(function(){
  var searchForm =
      document.getElementById('search_form');

      var searchText = document.getElementById("search");

      var  checkSearchTextValidity = function(){
         //Check whether continent is selected 
         if(!validator.isEmpty(searchText)) {

           if (searchText.value > 15) {
                   
             searchText.setCustomValiditiy('');
           }else{
              searchText.setCustomValidity("SEarch text must be at least 15 characters long");            
          } 
        }
      };   
  
       //Set validation messages
   var updateErrorMessage = function() {
     alert("Update error message");
  
     document.querySelector('.error').innerHTML=                                 searchText.validationMessage; 
   }  
  
   /* add event listenr to schedule form */
  searchForm.addEventListener('submit', function(event) {
    alert("submit schedule");
    if (searchForm.classList) searchForm.classList.add('submitted');{
      checkSearchTextValidity();
     
    } 
    if (!this.checkValidity()) {
      event.preventDefault();
      checkSearchTextValidity();
      updateErrorMessage();
      searchText.focus();  
     }
  }, false);
}());