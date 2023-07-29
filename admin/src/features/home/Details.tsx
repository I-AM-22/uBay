import { Box } from "@mui/material";
import HomeCard from "./components/HomeCard";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
export default function Details() {
  const dataCard = [
    {
      icon: <InsertChartOutlinedOutlinedIcon />,
      title: "Total Products",
      count: "16",
    },
    { icon: <PermIdentityIcon />, title: "Total User", count: "27" },
    {
      icon: <ApartmentOutlinedIcon />,
      title: "Total Companies",
      count: "1",
    },
    {
      icon: <ReceiptOutlinedIcon />,
      title: "Total Transaction",
      count: "18",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {dataCard.map((card) => (
        <HomeCard
          icon={card.icon}
          title={card.title}
          count={card.count}
          key={card.title}
        />
      ))}
    </Box>
  );
}
