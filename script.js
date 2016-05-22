document.addEventListener('DOMContentLoaded', loadPlanets);



  function loadPlanets(){
    var docBod = document.body;
    for (var j = 1; j < 10; j++) {
      (function(i) {                  //need to create closure for j
        var f = i;
        var req = new XMLHttpRequest();
        var URLhost = 'https://swapi.co/api/people/?page=' + f;
        req.open('GET', URLhost, true);
        req.addEventListener('load',function(){
        if(req.status >= 200 && req.status < 400){
          var response = JSON.parse(req.responseText);
          console.log(response);
          /*
          var planetHead = document.createElement('h5');
          docBod.appendChild(planetHead);
          planetHead.textContent = 'Planets Page - ' + f;
          var planetList = document.createElement('ol');
          planetHead.appendChild(planetList);

          for (var k = 0; k < response.results.length; k++) {
            (function(y) {
              var planetIn = document.createElement('li');
              planetIn.textContent = response.results[y].name;
              ///*
              if (response.results[y].films.length > 0) {
              var movieHead = document.createElement('h6');
              movieHead.textContent = 'Movie Appearances:';
              planetIn.appendChild(movieHead)
              var movieList = document.createElement('ol');
              movieHead.appendChild(movieList);
              for (var e = 0; e < response.results[y].films.length; e++) {
                (function(x) {
                var newURLhost = response.results[y].films[x];
                var newReq = new XMLHttpRequest();
                newReq.open('GET', newURLhost, true);
                newReq.addEventListener('load', function(){
                  if(newReq.status >= 200 && newReq.status < 400){
                    var newResponse = JSON.parse(newReq.responseText);
                    //planetIn.textContent += ' ' + newResponse.title;
                    //var movieList = document.createElement('ol');
                    //planetIn.appendChild(movieList);
                    var movie = document.createElement('li');
                    movie.textContent = newResponse.title;
                    movieList.appendChild(movie);
                  
                  } else {
                    console.log("Error in network request: " + newReq.statusText);
                  }});
                  newReq.send(null);
                  event.preventDefault();
                })(e);

              }
              
            }
              planetList.appendChild(planetIn);

            })(k);
          }
        */
        } else {
          console.log('Error in network request: ' + req.statusText);
        }});
        req.send(null);
        event.preventDefault();
      })(j);
    }
  }

