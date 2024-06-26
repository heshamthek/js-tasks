// const div = document.getElementById("dis");

// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(res => res.json())
//   .then(dt => {
//     dt.map(post => {
     
//       const dd = document.createElement('div');
//       const tt = document.createElement('h3');
//       const bb = document.createElement('p');

//       tt.textContent = post.title;
//       bb.textContent = post.body;
      
//       dd.appendChild(tt);
//       dd.appendChild(bb);
//       div.appendChild(dd);
//     });
//   })
//   .catch(err => {
//     console.err('err', err);
//   });

//task2


// const div = document.getElementById("dis");

// fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//   .then(res => res.json())
//   .then(dt => {
//     dt.map(post => {
//         var dd = document.createElement('div');
//         var bb = document.createElement('p');
//         var ee= document.createElement('h4')
//         var tt = document.createElement('h3');
//       tt.textContent = post.name;
//       ee.textContent = post.email;
//       bb.textContent = post.body;
      
//       dd.appendChild(ee)
//       dd.appendChild(tt);
//       dd.appendChild(bb);
//       div.appendChild(dd);
//     });
//   })
//   .catch(err => {
//     console.err('err', err);
//   });


// task3


// const div = document.getElementById("dis");

// fetch('https://jsonplaceholder.typicode.com/albums?userId=1 ')
//   .then(res => res.json())
//   .then(dt => {
//     dt.map(post => {
     
//       const dd = document.createElement('div');
//       const tt = document.createElement('h3');
//       const bb = document.createElement('p');

//       tt.textContent = post.title;
//       bb.textContent = post.body;
      
//       dd.appendChild(tt);
//       dd.appendChild(bb);
//       div.appendChild(dd);
//     });
//   })
//   .catch(err => {
//     console.err('err', err);
//   });

// task5

const div = document.getElementById("dis");

fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      const dd = document.createElement('div');
      const tt = document.createElement('h3');
      const img = document.createElement('img');

      tt.textContent = post.title;
      img.src = post.url; 
      dd.appendChild(img); 
      dd.appendChild(tt); 
      div.appendChild(dd); 
    });
  })
  .catch(err => {
    console.error('Error fetching photos:', err);
  });

