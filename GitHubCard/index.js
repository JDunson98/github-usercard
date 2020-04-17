/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/ 
axios.get('https://api.github.com/users/JDunson98')
  .then((response) => {
   const newCard = cardComponentCreator(response)
   cardLeader.appendChild(newCard)
   console.log(response)
  })
  .catch((err) => {
    console.log('something went wrong', err)
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
      const newNewCard = cardComponentCreator(response)
      cardLeader.appendChild(newNewCard)
      console.log(response)
    })
    .catch((err) => {
      console.log('something went wrong', err)
    })
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function cardComponentCreator(obj) {
  let card = document.createElement('div');
  card.classList.add('card');

  let cardImg = document.createElement('img');
  cardImg.src = obj.data.avatar_url;

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  let cardTitle = document.createElement('h3');
  cardTitle.classList.add('name');
  cardTitle.textContent = 'Name: ' + obj.data.name;

  let cardUsername = document.createElement('p');
  cardUsername.classList.add('username');
  cardUsername.textContent = 'Username: ' + obj.data.login;

  let cardLocation = document.createElement('p');
  cardLocation.textContent = 'Location: ' + obj.data.location;

  let cardProfile = document.createElement('p');
  cardProfile.textContent = 'Profile: '
  let cardProfileLink = document.createElement('a');
  cardProfileLink.href = obj.data.url;
  cardProfileLink.textContent = obj.data.url;

  let cardFollowers = document.createElement('p');
  cardFollowers.textContent = 'Followers: ' + obj.data.followers;

  let cardFollowing = document.createElement('p');
  cardFollowing.textContent = 'Following: ' + obj.data.following;

  let cardBio = document.createElement('p');
  cardBio.textContent = 'Bio: ' + obj.data.bio;

  cardProfile.appendChild(cardProfileLink);

  cardInfo.appendChild(cardTitle);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLocation);
  cardInfo.appendChild(cardProfile);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);

  card.appendChild(cardImg);
  card.appendChild(cardInfo);

  return card;
}

let cardLeader = document.querySelector('.cards');


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
