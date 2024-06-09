import Exhibition from "../../components/Exhibition";
import FlatList from "../../components/FlatList";
import { Box, Typography, Input, Stack, Button } from "@mui/joy";
import { debounce, throttle } from "../../lib/utils/shedulers";
import { Fragment, useState } from "react";

const data = [
  {
    title: "Art",
    data: [
      {
        id: "womens_cairn",
        model: "womens_cairn",
        imgSrc:
          "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
        imgAlt: "Yosemite National Park",
        title: "Yosemite National Park",
        location: "California",
        views: "6.3k",
        time: "1 hour ago",
      },
      {
        id: "angel_statue",
        model: "angel_statue",
        imgSrc:
          "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=318",
        imgAlt: "Eiffel Tower",
        title: "Eiffel Tower",
        location: "Paris",
        views: "8.2k",
        time: "2 hours ago",
      },
      {
        id: 3,
        imgSrc:
          "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=318",
        imgAlt: "The Starry Night",
        title: "The Starry Night",
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
      {/* Search input */}
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
