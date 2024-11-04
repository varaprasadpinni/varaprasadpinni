
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  GiBarbecue,
  GiToaster,
  GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";
import { TbPhotoStar } from "react-icons/tb";
import { TbCameraSelfie } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";
import { FaThemeisle } from "react-icons/fa";
import { TbHeartbeat } from "react-icons/tb";
import { LuBaby } from "react-icons/lu";
import { GiPartyPopper } from "react-icons/gi";
import { TiVideoOutline } from "react-icons/ti";
import { SiAffinityphoto } from "react-icons/si";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/pre-wedding.jpg",
    label: "Pre-wedding",
    icon: < TbPhotoStar/>,
    //icon: <img src="/assets/groom.png" alt='logo' />,
    description: "This property is close to the beach!",
  },
  {
    img: "assets/event.jpg",
    label: "Event-photography",
    icon: <TbBeach />,
    description: "This property is has windmills!",
  },
  {
    img: "assets/pexels3.jpg",
    label: "Candid",
    icon: <MdOutlineVilla />,
    description: "This property is modern!",
  },
  {
    img: "assets/theme1.jpg",
    label: "Theme-photoshoot",
    icon: <FaThemeisle />,
    description: "This property is in the countryside!",
  },
  {
    img: "assets/live.png",
    label: "Live-telecast",
    icon: <RiLiveLine />,
    description: "This is property has a beautiful pool!",
  },
  {
    img: "assets/maternity.jpg",
    label: "maternity-photoshooot",
    icon: <TbHeartbeat />,
    description: "This property is on an island!",
  },
  {
    img: "assets/selfiebooth.jpg",
    label: "selfie-booth",
    icon: <TbCameraSelfie />,
    description: "This property is near a lake!",
  },
  {
    img: "assets/kids.jpg",
    label: "New-Born-Baby",
    icon: <LuBaby />,
    description: "This property has skiing activies!",
  },
  {
    img: "assets/pexels5.jpg",
    label: "Bride&Groom",
    icon: <GiCastle />,
    description: "This property is an ancient castle!",
  },
  {
    img: "assets/video (2).jpg",
    label: "Pro-Videography",
    icon: <TiVideoOutline />,
    description: "This property is in a spooky cave!",
  },
  {
    img: "assets/family.jpg",
    label: "Party",
    icon: <GiPartyPopper />,
    description: "This property offers camping activities!",
  },
  {
    img: "assets/model.jpg",
    label: "Modeling",
    icon: <BsSnow />,
    description: "This property is in arctic environment!",
  },
  {
    img: "assets/family.jpg",
    label: "Family-photoshoot",
    icon: <GiCactus />,
    description: "This property is in the desert!",
  },
  {
    img: "assets/potrait.jpg",
    label: "Portrait",
    icon: <SiAffinityphoto />,
    description: "This property is in a barn!",
  },
  {
    img: "assets/family.jpg",
    label: "Luxury",
    icon: <IoDiamond />,
    description: "This property is brand new and luxurious!",
  },
];

export const types = [
  {
    name: "An entire place",
    description: "Guests have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Guests have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Guests sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  {
    name: "Bath tub",
    icon: <PiBathtubFill />,
  },
  {
    name: "Personal care products",
    icon: <FaPumpSoap />,
  },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  {
    name: "Fire extinguisher",
    icon: <FaFireExtinguisher />,
  },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  {
    name: "Barbecue grill",
    icon: <GiBarbecue />,
  },
  {
    name: "Outdoor dining area",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  {
    name: "Camp fire",
    icon: <GiCampfire />,
  },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  {
    name: " Pet allowed",
    icon: <MdPets />
  }
];