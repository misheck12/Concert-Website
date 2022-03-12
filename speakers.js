const speakersSection = document.querySelector('#speakers');

const speakersObject = [
  {
    image: 'images/download.jpeg',
    name: 'H.E Hakainde Hichilema',
    about: 'Current president of Zambia',
    history:
      'He has been in opposition for 20 years failed 4 times. he owns shares in big global companies.',
  },

  {
    image: 'images/president-Nana.png',
    name: 'H.E Nana Akufo-Addo',
    about: 'Current president of Ghanan',
    history: 'Ghanaian president who has served Ghana since 7 January 2017. In 2020, he was re-elected for his second term, which will end on 6 January 2025.',
  },

  {
    image: 'images/Paul_Kagame_2014.jpg',
    name: 'H.E Paul Kagame ',
    about: 'Current president of Rwanda',
    history:
      'Rwandan president and former military leader. He is the sixth president of Rwanda, having taken office in 2000.',
  },

  {
    image: 'images/images.jpeg',
    name: 'H.E Edgar C. lungu',
    about: 'Former president of Zambia',
    history: 'sixth president of Zambia . he served the country from 2015 to 2021 ..',

  },

  {
    image: 'images/images\ \(1\).jpeg',
    name: 'Tony Elumelu',
    about: 'Current chairman of UBA',
    history:
      'Nigerian economist, and philanthropist. He a Business owner, citing Heirs Holdings, Transcorp and founder of The Tony Elumelu Foundation.',
  },

  {
    image: 'images/nevers-mumba.jpeg',
    name: 'Dr Nevers Mumba',
    about: 'Former vice president of Zambia',
    history:
      'Zambian politician and religious minister. He served as the eighth vice-president of Zambia 2003–04 under Levy Mwanawasa.',
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
    imageDiv.setAttribute('src', speakersObject[i-1].image);

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
