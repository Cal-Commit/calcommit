function adjustHeight(){

    var actual_width = window.innerWidth;

    if(actual_width < 601) {
      document.querySelector('#signup').setAttribute('data-aos', null);

    }

}