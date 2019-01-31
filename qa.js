// The questions should rotate in order of the gifts. For example, if there are 9 questions and 3 gifts, questions 0, 3, & 6 should correspond to gift 0.

const questions = [
  { question: "I like organizing services and events." },
  { question: "I enjoy starting new churches." },
  { question: "I enjoy working with my hands." },
  { question: "I can tell when someone is insincere." },
  { question: "I pray for the lost daily." },
  { question: "Encouraging others is a high priority in my life." },
  { question: "Believing God for our daily needs is important to me." },
  { question: "Influencing others for the kingdom of God through finances in extremely important to me." },
  { question: "I look for opportunities to pray for the sick." },
  { question: "I enjoy doing little things that others do not." },
  { question: "I enjoy having people come to my house." },
  { question: "I enjoy spending hours in prayer for other people." },
  { question: "Education is very important to me." },
  { question: "I tend to motivate others to get involved." },
  { question: "My heart hurts when I see others hurting." },
  { question: "I believe God will use me to enact His miracles." },
  { question: "I enjoy sharing the gospel with other people, groups and nationalities." },
  { question: "I've devoted considerable time to mastering my voice and/or instrument." },
  { question: "Caring for the hurting is paramount in my eyes." },
  { question: "The willful sin of others really aggravates me." },
  { question: "I enjoy serving behind the scenes." },
  { question: "I enjoy creating outlines of the Bible." },
  { question: "God has used me to interpret a heavenly language." },
  { question: "I enjoy the book of Proverbs more than any other book in the Bible." },
  { question: "I am passionate about managing details." },
  { question: "I prefer to pioneer new ministry projects." },
  { question: "I consider myself a craftsman or craftswoman." },
  { question: "I sense when situations are spiritually unhealthy." },
  { question: "I am greatly concerned about seeing the lost saved." },
  { question: "I try to come across loving and caring." },
  { question: "Asking God for a list of big things is exciting to me." },
  { question: "I find ways to give offerings above my tithe." },
  { question: "I believe miraculous healing is for this day and age." },
  { question: "Helping others is one my highest achievements." },
  { question: "Creating a warm and welcoming home is important to me." },
  { question: "I am burdened to pray for situations in the world." },
  { question: "People seek me out to lean more the Kingdom of God." },
  { question: "I prefer to take the lead whenever necessary." },
  { question: "I'm very sensitive to sad stories." },
  { question: "Miracles often happen when I'm nearby." },
  { question: "Living in another country to benefit the gospel is exciting to me." },
  { question: "I desire to serve the church through worship." },
  { question: "I enjoy connecting, caring, and coaching others." },
  { question: "Confronting someone with sin in their life is not hard." },
  { question: "It bothers me when people sit around and do nothing." },
  { question: "I share Biblical truth with others in hopes of their personal growth." },
  { question: "I pray in tongues daily." },
  { question: "When I study scripture God gives me unique insights." },
  { question: "Creating a task list is easy and enjoyable for me." },
  { question: "I am attracted to ministries that start new churches." },
  { question: "Building something with my hands is very rewarding to me." },
  { question: "I can pinpoint issues or problems before others." },
  { question: "I enjoy sharing the gospel with a total stranger." },
  { question: "I look for ways to be an encouragement to other people." },
  { question: "I trust that God has my back in every situation." },
  { question: "Making more money means I can give more." },
  { question: "God has used me to bring healing to those who are sick." },
  { question: "Being a part of the process is fulfilling to me." },
  { question: "I tend to make total strangers feel at home." },
  { question: "People often describe me as a prayer warrior." },
  { question: "I enjoy knowing biblical details and helping others to understand." },
  { question: "I delegate responsibilities to accomplish tasks." },
  { question: "I am motivated to help those who are less fortunate." },
  { question: "I have constant hunger to see God's miraculous power." },
  { question: "I focus a lot on reaching the world for Christ." },
  { question: "I gain my deepest satisfaction through leading others in vocal or instrument worship." },
  { question: "I enjoy walking with some in times of distress." },
  { question: "I enjoy hearing passionate and clear preaching of the truth." },
  { question: "I will to do small things that others pass over." },
  { question: "I prefer to teach the Bible topically rather than verse by verse." },
  { question: "Praying in the Spirit is encouraging and important to me." },
  { question: "When faced with difficulty I tend to make wise decisions and choices." }
]

const numOfQuestions = questions.length;

const answers = ["Almost Never", "Seldom", "Sometimes", "Frequently", "Almost Always"];
