const gifts = [
  {
    gift: "Administration",
    description: "The gift of administration is the divine strength or ability to organize multiple tasks and groups of people to accomplish these tasks.  Luke 14:28-30, Acts 6:1-7, 1 Cor. 12:28",
    score: 0
  },
  {
    gift: "Apostleship",
    description: "The gift of apostleship is the divine strength or ability to pioneer new churches and ministries through church planting, overseeing, and training.  Acts 15:22-35, 1 Cor. 12:28, 11 Cor. 12:12, Gal. 2:7-10, Eph. 4:11-14",
    score: 0
  },
  {
    gift: "Craftsmanship",
    description: "The gift of craftsmanship is the divine strength or ability to plan, build, and work with your hands in construction environments to accomplish multiple ministry applications.  Exodus 30:22, 31:3-11, 11 Chron. 34:9-13, Acts 18:2-3",
    score: 0
  },
  {
    gift: "Discernment",
    description: "The gift of discernment is the divine strength or ability to spiritually identify falsehood and to distinguish between right and wrong motives and situations.  Matt. 16:21-23, Acts 5:1-11, Acts 16:16-18, 1 Cor. 12:10, 1 John 4:1-6",
    score: 0
  },
  {
    gift: "Evangelism",
    description: "The gift of evangelism is the divine strength or ability to help non-Christians take the necessary steps to becoming a born again Christian.  Acts 8:5-6, Acts 8:26-40, Acts 14:21, Acts 21:8, Eph. 4:11-14",
    score: 0
  },
  {
    gift: "Exhortation",
    description: "The gift of exhortation is the divine strength or ability to encourage others through the written or spoken word and biblical truth.",
    score: 0
  },
  {
    gift: "Faith",
    description: "The gift of faith is the divine strength or ability to believe in God for unseen supernatural results in every arena of life.  Acts 11:22-24, Rom. 4:18-21, 1 Cor. 12:9, Heb. 11",
    score: 0
  },
  {
    gift: "Giving",
    description: "The gift of giving is the divine strength or ability to produce wealth and to give by tithes and offerings for the purpose of advancing the Kingdom of God on earth.  Mark 12:41-44, Rom. 12:8, II Cor. 8:1-7, 9:2-7",
    score: 0
  },
  {
    gift: "Healing",
    description: "The gift of healing is the divine strength or ability to act as an intermediary in faith, prayer, and by the laying on of hands for the healing of physical and mental illnesses.  Acts 3:1-10, Acts 9:32-35, Acts 28:7-10, 1 Cor. 12:9, 28",
    score: 0
  },
  {
    gift: "Helps",
    description: "The gift of helps is the divine strength or ability to work in a supportive role for the accomplishment of tasks in Christian ministry.  Mark 15:40-41, Acts 9:36, Rom. 16:1-2, 1 Cor. 12:28",
    score: 0
  },
  {
    gift: "Hospitality",
    description: "The gift of hospitality is the divine strength or ability to create warm, welcoming environments for others in places such as your home, office, or church.  Acts 16:14-15, Rom. 12:13, Rom. 16:23, Heb. 13:1-2, 1 Peter 4:9",
    score: 0
  },
  {
    gift: "Intercession",
    description: "The gift of intercession is the divine strength or ability to stand in the gap in prayer for someone, something, or someplace believing for profound results.  Heb. 7:25, Col. 1:9-12, Col. 4:12-13, Jas. 5:14-16",
    score: 0
  },
  {
    gift: "Knowledge",
    description: "The gift of knowledge is the divine strength or ability to bring clarity and to understand situations and circumstances often accompanied by a word from God.  Acts 5:1-11, 1 Cor. 12:8, Col. 2:2-3",
    score: 0
  },
  {
    gift: "Leadership",
    description: "The gift of leadership is the divine strength or ability to influence people at their level while directing and focusing them on the big picture, vision, or idea.  Rom 12:8, 1 Tim 3:1-13, 1 Tim 5:17, Heb. 13:17",
    score: 0
  },
  {
    gift: "Mercy",
    description: "The gift of mercy is the divine strength or ability to feel empathy and to care for those who are hurting in any way.  Matt 9:35-36, Mark 9:41, Rom. 12:8, 1 Thess. 5:14",
    score: 0
  },
  {
    gift: "Miracles",
    description: "The gift of miracles is the divine strength or ability to alter the natural outcomes of life in a supernatural way through prayer, faith, and divine direction.  Acts 9:36-42, 19:11-12, 20:7-12, Rom. 15:18-19, 1 Cor. 12:10, 28",
    score: 0
  },
  {
    gift: "Missionary",
    description: "The gift of missions is the divine strength or ability to reach others outside of your culture and nationality; while in most cases living in that culture or nation.  Acts 8:4, Acts 13:2-3, Acts 22:21, Rom. 10:15",
    score: 0
  },
  {
    gift: "Music / Worship",
    description: "The gift of music / worship is the divine strength or ability to sing, dance, or play an instrument primarily for the purpose of helping others worship God.  Deut. 31:22, 1 Sam. 16:16, 1 Chron. 16:41-42, 11 Chron. 5:12-13, 34:12, Psalm 150",
    score: 0
  },
  {
    gift: "Pastor / Shepherd",
    description: "The gift of pastor / shepherd is the divine strength or ability to care for the personal needs of others by nurturing and mending life issues.  John 10:1-18, Eph. 4:11-14, 1 Tim. 3:1-7, 1 Peter 5:1-3",
    score: 0
  },
  {
    gift: "Prophecy",
    description: "The gift of prophecy is the divine strength or ability to boldly speak and bring clarity to scriptural and doctrinal truth, in some cases foretelling God’s plan.",
    score: 0
  },
  {
    gift: "Service",
    description: "The gift of service is the divine strength or ability to do small or great tasks in working for the overall good of the body of Christ.  Acts 6:1-7, Rom. 12:7, Gal. 6:10, II Tim. 1:16-18, Titus 3:14",
    score: 0
  },
  {
    gift: "Teaching",
    description: "The gift of teaching is the divine strength or ability to study and learn from the Scriptures primarily to bring understanding and depth to other Christians.  Acts 18:24-28, Acts 20:20-21, 1 Cor. 12:28, Eph. 4:11-14",
    score: 0
  },
  {
    gift: "Tongues (and Interpretation)",
    description: "The gift of tongues is the divine strength or ability to pray in a heavenly language to encourage your spirit to commune with God.  The gift of tongues is often accompanied by interpretation and should be used appropriately.  Acts 2:1-13, 1 Cor. 12:10, 14:1-14",
    score: 0
  },
  {
    gift: "Wisdom",
    description: "The gift of wisdom is the divine strength or ability to apply truths of Scripture in a practical way, producing the fruitful outcome and character of Jesus Christ.  Acts 6:3,10, 1 Cor. 2:6-13, 1 Cor. 12:8",
    score: 0
  }
];

const numOfGifts = gifts.length;
