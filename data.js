 const rooms = [
  {
    room_id: "101",
    room_name: "room1",
    no_of_seats: "500",
    amenities: [
      "Double pillow-top mattresses",
      "Fine linens + bathrobes",
      "Molton Brown bath amenities",
    ],
    price: "2000",
  },
  {
    room_id: "102",
    room_name: "room2",
    no_of_seats: "1000",
    amenities: [
      "Spa bathroom with rain shower (cabins + select rooms)",
      "Flat Screen TVs with in-home DirecTV",
      "DVD or Blu-Ray Player (cabins + select rooms)",
    ],
    price: "4000",
  },
  {
    room_id: "103",
    room_name: "room3",
    no_of_seats: "800",
    amenities: [
      "High-speed wireless internet access",
      "Keurig Coffee Maker + Starbucks Coffee",
      "2 bottles of water daily",
      "Beverage Cooler",
    ],
  },
];


const booking=[{

  booking_id:"b102",
  room_id:"101",
  customer_name:"Ravi",
  booking_date:"2014-01-01",
  start_time:"10:12",
  end_time:"12:12",
  booked_status:"B",

},{
booking_id:"b105",
room_id:"103",
customer_name:"Ravi",
booking_date:"2014-01-01",
start_time:"10:12",
end_time:"12:12",
booked_status:"B",},
{
  booking_id:"b108",
  room_id:"102",
  customer_name:"Ravi",
  booking_date:"2014-01-01",
  start_time:"10:12",
  end_time:"12:12",
  booked_status:"B",},
  {
    booking_id:"b101",
    room_id:"102",
    customer_name:"Ravi",
    booking_date:"2014-01-01",
    start_time:"10:12",
    end_time:"12:12",
    booked_status:"D",},{

      booking_id:"b109",
      room_id:"102",
      customer_name:"Raja",
      booking_date:"2014-02-01",
      start_time:"10:12",
      end_time:"12:12",
      booked_status:"B"
    
    }
]
module.exports={booking,rooms}