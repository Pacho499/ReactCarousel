const images = [
  {
    src: "https://t4.ftcdn.net/jpg/05/59/72/11/360_F_559721121_aVkevlw1ji9sAOC3ztE5HWQ43tMrwDcC.jpg",
    title: "Tramonto sul mare",
  },
  {
    src: "https://www.montagna.tv/wp-content/uploads/2018/02/ValleOrco.jpg",
    title: "Montagna innevata",
  },
  {
    src: "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2022/02/empire-state-building-visto-dal-rockefeler-centre-iStock-956426314-1080x721.jpeg?v=1643745279",
    title: "Città di notte",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9f/South_American_jungle_photograph.jpg",
    title: "Foresta tropicale",
  },
  {
    src: "https://www.raftingmarmore.com/wp-content/uploads/Victoria-Cascate.jpg",
    title: "Cascata",
  },
];

export default images;

export interface Image {
  src: string;
  title: string;
}
