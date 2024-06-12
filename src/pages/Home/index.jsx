import Exhibition from "../../components/Exhibition";
import FlatList from "../../components/FlatList";
import { Box, Typography, Input, Stack, Button } from "@mui/joy";
import { debounce, throttle } from "../../lib/utils/shedulers";
import { Fragment, useState } from "react";

const data = [
  {
    title: "Exhibitions",
    data: [
      {
        id: "pyramid",
        model: "pyramid",
        imgSrc:
          "https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg",
        imgAlt: "Pyramid",
        title: "Pyramid",
        location: "Egypt",
        views: "6.3k",
        time: "1 hour ago",
        description:
          "A magnificent ancient structure with a rich history, the Pyramid is a testament to the architectural prowess of ancient Egypt. It stands as a symbol of the pharaohs' power and the mysteries of their civilization.",
      },
      {
        id: "angel_statue",
        model: "angel_statue",
        imgSrc:
          "https://t3.ftcdn.net/jpg/05/76/00/82/360_F_576008288_Sw1JWdLINBO8kSoX8mm2GtK9NbO2T6wQ.jpg",
        imgAlt: "Angel Statue",
        title: "Angel Statue",
        location: "Paris",
        views: "8.2k",
        time: "2 hours ago",
        description:
          "The Angel Statue, overlooking the scenic beauty of Paris, is a breathtaking symbol of grace and elegance. It embodies the artistic spirit of the city and attracts visitors from all over the world with its timeless beauty.",
      },
      {
        id: "terracotta_warrior",
        model: "terracotta_warrior",
        imgSrc:
          "https://cdn-clgjg.nitrocdn.com/pXttjEUPCiavMxidZxdFyebXFgbanAtR/assets/images/optimized/rev-0907155/asianartnewspaper.com/wp-content/uploads/2018/03/1-Archer.jpg",
        imgAlt: "The Terracotta Warriors",
        title: "The Terracotta Warriors",
        description:
          "The Terracotta Warriors are a collection of clay sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. They were buried with the emperor to protect him in his afterlife. The statues are considered one of the most significant archaeological discoveries of the 20th century.",
        location: "Museum of Modern Art, New York",
        views: "7.1k",
        time: "3 hours ago",
      },
      {
        id: 4,
        imgSrc:
          "https://images.unsplash.com/photo-1563729784474-1c0eebd0b6f4?auto=format&fit=crop&w=318",
        imgAlt: "The Scream",
        title: "The Scream",
        location: "National Gallery, Oslo",
        views: "5.5k",
        time: "4 hours ago",
      },
      {
        id: 5,
        imgSrc:
          "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=318",
        imgAlt: "Girl with a Pearl Earring",
        title: "Girl with a Pearl Earring",
        location: "Mauritshuis, The Hague",
        views: "9.3k",
        time: "5 hours ago",
      },
      {
        id: 6,
        imgSrc:
          "https://images.unsplash.com/photo-1513569771920-2cdd0ff0f6f5?auto=format&fit=crop&w=318",
        imgAlt: "The Persistence of Memory",
        title: "The Persistence of Memory",
        location: "Museum of Modern Art, New York",
        views: "4.8k",
        time: "6 hours ago",
      },
    ],
  },
  {
    title: "History",
    data: [
      {
        id: 1,
        imgSrc:
          "https://images.unsplash.com/photo-1578916171729-78672d0a9a5a?auto=format&fit=crop&w=318",
        imgAlt: "Rosetta Stone",
        title: "Rosetta Stone",
        location: "British Museum, London",
        views: "12.4k",
        time: "1 day ago",
      },
      {
        id: 2,
        imgSrc:
          "https://images.unsplash.com/photo-1600488993531-2c23ba9351c6?auto=format&fit=crop&w=318",
        imgAlt: "Terracotta Army",
        title: "Terracotta Army",
        location: "Shaanxi, China",
        views: "10.9k",
        time: "2 days ago",
      },
      {
        id: 3,
        imgSrc:
          "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=318",
        imgAlt: "Tutankhamun’s Mask",
        title: "Tutankhamun’s Mask",
        location: "Cairo, Egypt",
        views: "14.2k",
        time: "3 days ago",
      },
      {
        id: 4,
        imgSrc:
          "https://images.unsplash.com/photo-1601758123924-d9cbf543b192?auto=format&fit=crop&w=318",
        imgAlt: "Acropolis of Athens",
        title: "Acropolis of Athens",
        location: "Athens, Greece",
        views: "8.7k",
        time: "4 days ago",
      },
      {
        id: 5,
        imgSrc:
          "https://images.unsplash.com/photo-1580669808542-b7f1b1ae2c22?auto=format&fit=crop&w=318",
        imgAlt: "Colosseum",
        title: "Colosseum",
        location: "Rome, Italy",
        views: "9.5k",
        time: "5 days ago",
      },
      {
        id: 6,
        imgSrc:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=318",
        imgAlt: "Stonehenge",
        title: "Stonehenge",
        location: "Wiltshire, England",
        views: "7.3k",
        time: "6 days ago",
      },
    ],
  },
];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const throttledSearch = debounce((query) => {
    setSearchQuery(query);
  }, 300);

  const filteredData = data.map((section) => ({
    ...section,
    data: section.data.filter((item) => {
      const matchTitle = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchLocation = item.location
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchTitle || matchLocation;
    }),
  }));

  return (
    <Box sx={{ py: 0.5 }}>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => throttledSearch(e.target.value)}
      />

      {(filteredData ?? data).map((section, index) => (
        <Fragment key={index}>
          {section.data.length > 0 ? (
            <Typography level="h1"> {section.title}</Typography>
          ) : (
            <Typography level="h1">
              We found nothing in {section.title}...
            </Typography>
          )}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            <FlatList
              disableWrapper
              horizontal
              data={section.data}
              keyExtractor={(item) => item.id}
              renderSectionHeader={({ section }) => <h3>{section.title}</h3>}
              renderItem={({
                id,
                imgSrc,
                imgAlt,
                title,
                location,
                views,
                time,
                model,
                description,
              }) => (
                <Exhibition
                  href={`/ar/${model}`}
                  id={id}
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  title={title}
                  location={location}
                  views={views}
                  time={time}
                  description={description}
                />
              )}
            />
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export default Home;
