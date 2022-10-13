const speakersSection = document.querySelector('#speakers');

const speakersObject = [
  {
    image: 'images/morgan01.jpg',
    name: 'Morgan Mbulo',
    about: 'Founder at IMC Studios',
    history:
      'Morgan Mbulo is a creative producer, currently serving as Vice President of NAMA. He loves to develop young minds in Arts.',
  },

  {
    image: 'images/misheck01.jpg',
    name: 'Misheck Livingi',
    about: 'Creative Enterpreneur',
    history: 'Creative Enterpreneuar who is very passionate about youth development. he believes success is for anyone willing to have it.',
  },

];

function createspeakers() {
  const speakersContainer = document.createElement('div');
  speakersContainer.setAttribute('id', 'speakers-container');

  for (let i = 1; i <= speakersObject.length; i += 1) {
    const speakersDiv = document.createElement('div');
    speakersDiv.setAttribute('class', 'speakers');

    const profileContainer = document.createElement('div');
    profileContainer.setAttribute('class', 'profile-container');

    const imageDiv = document.createElement('img');
    imageDiv.setAttribute('id', `img-div${i}`);
    imageDiv.setAttribute('src', speakersObject[i - 1].image);

    const speakerInfo = document.createElement('div');
    speakerInfo.setAttribute('class', 'speaker-info');

    const speakerName = document.createElement('h3');
    speakerName.innerText = speakersObject[i - 1].name;

    const about = document.createElement('blockabout');
    about.innerText = `${speakersObject[i - 1].about}`;

    const greyLine = document.createElement('div');
    greyLine.setAttribute('class', 'grey-line');

    const speakerhistory = document.createElement('p');
    speakerhistory.innerText = `${speakersObject[i - 1].history}`;

    speakerInfo.appendChild(speakerName);
    speakerInfo.appendChild(about);
    speakerInfo.appendChild(greyLine);
    speakerInfo.appendChild(speakerhistory);

    profileContainer.appendChild(imageDiv);

    speakersDiv.appendChild(profileContainer);
    speakersDiv.appendChild(speakerInfo);

    speakersContainer.appendChild(speakersDiv);
  }
  speakersSection.appendChild(speakersContainer);
}

createspeakers();
