//importing required packages and modules
const express = require("express");
const { rooms, booking } = require("./data");

//create a app
const app = express();
//app use bodyparser
app.use(express.json());
//port
const port = 5000;
//Api to get room booked data
app.get("/roomBookedData", async (req, res) => {
  try {
    let op = [];
    //list all rooom based on id booked info
    await rooms.map(({ room_id, room_name }) =>
      op.push({
        room_name: room_name,
        booked: booking.filter(
          (el) => el.booked_status == "B" && el.room_id == room_id
        ),
      })
    );
    if (op) res.send(op);//success to send booked data
  } catch (error) {
    res.send(error);
  }
});
//Api to get booked data based on customer
app.get("/customerBookedData", async(req, res) => {
try {
  const data=[];
  //find booked data based on customer
  await booking.map((bk)=>data.push({"customer name":bk.customer_name,
  "Room Name":rooms.filter((rm)=>rm.room_id==bk.room_id).map((rm1)=>rm1.room_name)[0],
  "Date": bk.booking_date,"start time":bk.start_time,"end time": bk.end_time}))

  if(data)
   res.send(data);//success to send booked data
} catch (error) {
  req.send(error)
  
}
});
app.post("/createRoom", async (req, res) => {
  try {
   //create a new room like this 
    const newRoom={room_id:req.body.room_id,
      room_name:req.body.room_name,
      no_of_seats:req.body.no_of_seats,
      amenities:req.body.amenities,
      price:req.body.amenities
      }
      //insert new data object to rooms
    if (await rooms.push(newRoom)) res.send("Room created Successfully");
      
  } catch (error) {
    res.send(error);
  }

  
});
//API for book room
app.post("/bookRoom", async (req, res) => {
  try {
    //check room is already booked or not
    const data=booking.filter((bk)=>((bk.room_id==req.body.room_id)&&(bk.booking_date==req.body.booking_date)&&(bk.start_time==req.body.start_time)&&(bk.end_time==req.body.end_time)&&(bk.booked_status=='B')))
    const exists=data.length != 0 ?true:false;//true-booked false-not-booked
   if(exists)
    res.send('Room Is Already Booked')//Error to send msg
   else{
    const newBook={
      booking_id:req.body.booking_id,
      room_id:req.body.room_id,
      customer_name:req.body.customer_name,
      booking_date:req.body.booking_date,
      start_time:req.body.start_time,
      end_time:req.body.end_time,
      booked_status:req.body.booked_status,}
      if (await booking.push(newBook))
       res.send("Room Booked Successfully")//success to send msg
    
   
    }

  
  } catch (error) {
    res.send(error);
  }
});
//app to set listing port 
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
