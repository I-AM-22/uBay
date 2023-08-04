import {
  Avatar,
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Layout() {
  const [data,setData]=useState<any>([])
  console.log(data[0])
  const [loading, setLoading] = useState(false);
  const [userData,setUserData]=useState("")
  const navigate = useNavigate();
  const token=localStorage.getItem("token")



  useEffect(() => {
    async function fetchData() {
      setLoading(false)
      try {
        const response = await axios.get('http://localhost:3000/api/v1/users/me', {
          headers: {
            accept: 'application/json',
          'Authorization':`Bearer ${token}`
          }
        });
        setUserData(response.data.id);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log("userData",userData)





  useEffect(() => {
  const getChats=async()=> {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/chats?page=${1}&limit=${1}`, {
        headers: {
          accept: 'application/json',
          'Authorization':`Bearer ${token}`
        }
      });
      setData(response.data.data)
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
  getChats()
  setLoading(true)

}, []);
        console.log(data)



 
  return (
    <>
    {data.map((item:any)=>{
      console.log(item)
      if(item.customer.id===userData){
           return(
            
    <Button
    sx={{
      justifyContent: "unset",
      width: "100%",
    }}
    onClick={() => navigate("1")}
  >
    <Stack direction="row" m="8px 0" width="100%" alignItems="center" p={1}>
      {loading ? (
        <Avatar src={item.seller.photo}/>
      ) : (
        <Skeleton variant="circular" width={40} height={40} />
      )}
      <Stack>
        {loading ? (
          <>
            <Typography
              variant="h6"
              margin="0 12px"
              width="fit-content"
              color="black"
              textTransform="capitalize"
            >
              {item?.product.title} 
            </Typography>
            <Typography variant="body1" margin="0 12px" color="darkslategray" sx={{
              textTransform:"capitalize",
              width:"fit-content"
            }}>
              {item.seller.name}
            </Typography>
          </>
        ) : (
          <Box mx={1}>
            <Skeleton variant="text" width={70} />
            <Skeleton variant="text" width={100} />
          </Box>
        )}
      </Stack>
    </Stack>
  </Button>
           )
         }
      
    })}
    
    </>
  );
}
