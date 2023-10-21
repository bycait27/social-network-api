// random usernames generated by chatGPT
const usernames = [
    'socialjunkie42',
    'tweetmasterx',
    'instaexplorer19',
    'snapchatterpro',
    'likelover77',
    'tiktoktrendy2023',
    'shareninja365',
    'followerfanatic',
    'statusupdateguru',
    'snapstorysage',
    'hashtaghero23',
    'friendrequestking',
    'influencerwhiz',
    'connectcollector',
    'filterfreak88',
    'dmchampion2023',
    'selfiestarx',
    'trendingtopics21',
    'commentcrusader',
    'socialspheresleuth',
    'twittertornado',
    'iginnovator',
    'livestreamlegend',
    'chatconoisseur',
    'snapchatsavvy',
    'exploreeverything',
    'socialbutterfly101',
    'networknavigator',
    'shareablesensation',
    'viralvoyager22',
    'friendfinderpro',
    'memesmaestro',
    'storystylist365',
    'profileperfection',
    'viralvideovirtuoso',
    'livelifeliker',
    'dmdeity2023',
    'contentcreatorx',
    'trendtrackerpro',
    'sharablescribe',
];

// random thoughts generated by chatGPT
const thoughts = [
    'The smell of freshly baked bread is so comforting.',
    'I should call my friend to see how they\'re doing.',
    'Nature is incredibly calming, especially by the water.',
    'Learning something new every day keeps life interesting.',
    'Kindness is a language that the deaf can hear and the blind can see.',
    'I\'m grateful for my health and the ability to enjoy life.',
    'A cup of tea can solve a lot of problems.',
    'Music has a unique power to uplift the spirit.',
    'I wonder what adventures await me in the future.',
    'Laughter is a universal language.',
    'The night sky is a reminder of the vastness of the universe.',
    'Acts of generosity can make a big difference in someone\'s life.',
    'The simple pleasure of a good book is hard to beat.',
    'Time spent with loved ones is never wasted.',
    'The world is full of fascinating cultures to explore.',
    'Helping others makes me feel fulfilled.',
    'Mistakes are opportunities to learn and grow.',
    'Sunsets are a daily reminder of beauty in the world.',
    'A smile can brighten someone\'s day.',
    'The scent of rain after a long dry spell is refreshing.',
    'We all have the power to create positive change.',
    'Cooking a homemade meal is a labor of love.',
    'Dreams have the potential to inspire and drive us forward.',
    'Animals have an incredible ability to sense emotions.',
    'Mindfulness can bring peace to any moment.',
    'Taking a deep breath can alleviate stress.',
    'The world is full of wonderful places to explore.',
    'Acts of kindness have a ripple effect in the world.',
    'Gratitude turns what we have into enough.',
    'A genuine compliment can make someone\'s day.',
];

// random reactions generated by chatGPT
const reactions = [
    'That\'s awesome!',
    'I\'m so happy for you!',
    'Wow, I didn\'t expect that!',
    'You\'re doing great!',
    'Impressive!',
    'Congratulations!',
    'I\'m speechless!',
    'You deserve it!',
    'I\'m thrilled to hear that!',
    'Keep up the good work!',
    'That\'s incredible!',
    'I\'m proud of you!',
    'You\'re on fire!',
    'What a pleasant surprise!',
    'You\'re on the right track!',
    'You make it look easy!',
    'This is fantastic!',
    'Bravo!',
    'I\'m genuinely impressed!',
    'You nailed it!'
];

const users = [];

// get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// get random username 
const getRandomUsername = () => `${getRandomArrItem(usernames)}`;

// function to generate random thoughts that we can add to the database
// includes reactions
const createRandomThoughts = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
        username: getRandomUsername(),
        reactions: [...createReactions(3)],
      });
    }
    return results;
  };

// create the reactions that will be added to each thought
const createReactions = (int) => {
    if (int === 1) {
        return getRandomArrItem(reactions);
      }
      const results = [];
      for (let i = 0; i < int; i++) {
        results.push({
          reactionBody: getRandomArrItem(reactions),
          username: getRandomUsername(),
        });
      }
      return results;
};

// export the functions for use in seed.js
module.exports = { getRandomUsername, createRandomThoughts };