import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { categories,facilities,types } from '../data'
import "../styles/CreateListing.scss"
import { RemoveCircleOutline, AddCircleOutline } from '@mui/icons-material'
import variables from "../styles/variables.scss"
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { FcAddImage } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const CreateListing = () => {

    const [category, setCategory] = useState("")
    const [type, setType] = useState("")
   
    /* LOCATION */

    const [formLocation,setFormLocation] = useState({
        streetAddress: "",
        aptSuite: "",
        city: "",
        province: "",
        country: ""
    })

    const handleChangeLocation = (e) => {
        const { name, value } = e.target
        setFormLocation({
            ...formLocation,
            [name]: value
        })
    }
    /* *********************************************************** */

    /* BASIC COUNTS */
    const [guestCount,setGuestCount] = useState(1)
    const [bedCount,setBedCount] = useState(1)
    const [bathroomCount,setBathroomCount] = useState(1)
   // const [roomCount,setRoomCount] = useState(1)
 /* *********************************************************** */

    /* AMENITIES */

    const [amenities, setAmenities] = useState([]);

  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((option) => option !== facility)
      );
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

//   console.log(amenities)

     /* *********************************************************** */

    /* UPLOAD, DRAG&DROP, REMOVE PHOTOS*/

    const [photos,setPhotos] = useState([])

    const handleUploadPhotos = (e) => {
        const newPhotos = e.target.files
        setPhotos ((prevPhotos) => [...prevPhotos, ...newPhotos])
    }

    const handleDragPhoto = (result) => {
        if (!result.destination) return

        const items = Array.from(photos)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        setPhotos(items)
    }

    const handleRemovePhoto = (indexToRemove) => {
        setPhotos((prevPhotos) => prevPhotos.filter((_, index) => index !== indexToRemove))
    }
    /* *********************************************************** */
    /* DESCRIPTION */
    const [formDescription, setFormDescription] = useState(
        {
            title :"",
            description:"",
            highlight:"",
            highlightDesc:"",
            price:0
        }
    )
    const handleChangeDescription =(e) =>{
        const {name,value} =e.target
        setFormDescription({
            ...formDescription,
            [name]:value
        })
    }
    
    const creatorId = useSelector((state) => state.user._id)

    const navigate = useNavigate ()
    const handlePost = async (e) =>{
        e.preventDefault()

        try{
            /* Create a New formData object to handle file uploads */
            const listingForm = new FormData()
            listingForm.append("creator",creatorId)
            listingForm.append("category", category)
            listingForm.append("type", type)
            listingForm.append("streetAddress", formLocation.streetAddress)
            listingForm.append("aptSuite", formLocation.aptSuite)
            listingForm.append("city", formLocation.city)
            listingForm.append("province", formLocation.province)
            listingForm.append("country", formLocation.country)
            listingForm.append("guestCount", guestCount)
            listingForm.append("bedCount",bedCount)
            listingForm.append("bathroomCount", bathroomCount)
            listingForm.append("amenities", amenities)
            listingForm.append("title", formDescription.title)
            listingForm.append("description", formDescription.description)
            listingForm.append("highlight", formDescription.highlight);
            listingForm.append("highlightDesc", formDescription.highlightDesc)
            listingForm.append("price", formDescription.price)

            /* Append each selected photos to the FormData object */

            photos.forEach((photo) => {
                listingForm.append("listingPhotos", photo)
            })
            
            /* Send a POST request to server */
            const response = await fetch("http://localhost:3000/properties/create",{
                method:"POST",
                body:listingForm,
            })

            if (response.ok){
                navigate("/");
            }
        } catch (err) {
            console.log("Publish Listing Failed", err.message);
        }
    };

  return (
    <>
    <Navbar />

    <div className='create-listing'>
        <h1>Join Photography Community</h1>
        <form onSubmit={handlePost}>
            <div className='create-listing_step1'>
                <h2> Step 1: Tell us about your Services</h2>
                <hr />
                <h3>What services can you provide in this Categories?</h3>
                <div className='category-list'>
                    {categories?.map((item, index) =>(
                        <div className={`category ${category === item.label ? "selected" : ""}`} key={index} onClick={() => setCategory(item.label)}>
                            <div className='category_icon'>{item.icon}</div>
                            <p>{item.label}</p>

                        </div>
                    ))}

                </div>
                <h3>What type of equipment will you provide to customer?(Optional)</h3>
                <div className='type-list'>
                    {types?.map((item, index) => (
                        <div className={`type ${type === item.name ? "selected" : ""}`} key={index} onClick={() => setType(item.name)}>
                            <div className='type_text'>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                            <div className='type_icon'>{item.icon}</div>

                        </div>
                    ))}

                </div>

                <h3>Where's your place located</h3>
                <div className='full'>
                    <div className='location'>
                        <p>Street Address</p>
                        <input type='text' placeholder='Street Address' name='streetAddress' value={formLocation.streetAddress} onChange={handleChangeLocation} required />

                    </div>

                </div>
                <div className='half'>
                    <div className='location'>
                        <p>Apartment, Suite,etc.(if applicable)</p>
                        <input type='text' placeholder='Apt, Suite,etc.(if applicable)' name='aptSuite' value={formLocation.aptSuite} onChange={handleChangeLocation} required/>
                    </div>
                    <div className='location'>
                        <p>city</p>
                        <input type='text' placeholder='city' name='city' value={formLocation.city} onChange={handleChangeLocation} required/>
                    </div>

                </div>

                <div className='half'>
                    <div className='location'>
                        <p>Province</p>
                        <input type='text' placeholder='province' name='province' value={formLocation.province} onChange={handleChangeLocation} required/>
                    </div>
                    <div className='location'>
                        <p>Country</p>
                        <input type='text' placeholder='country' name='country' value={formLocation.country} onChange={handleChangeLocation} required/>
                    </div>

                </div>

                <h3>Share some basics that you provide to clients.</h3>
                <div className='basics'>
                    <div className='basic'>
                        <p>
                            DroneShots
                        </p>
                        <div className='basic_count'>
                            <RemoveCircleOutline onClick ={() => {
                                guestCount > 0 && setGuestCount(guestCount - 1)
                            }} sx ={{ fontSize: '25px', cursor:"pointer", "&:hover":{color: variables.pinkred}}}/>
                        <p>{guestCount}</p>
                            <AddCircleOutline onClick = {() =>{
                                setGuestCount(guestCount + 1)
                            }} sx ={{ fontSize: '25px', cursor:"pointer", "&:hover":{color: variables.pinkred}}}/>

                        </div>
                    </div>    

                    <div className='basic'>
                        <p>Albums</p>
                        <div className='basic_count'>
                            <RemoveCircleOutline onClick={() =>{
                                bedCount > 0 && setBedCount(bedCount - 1)
                            }}sx ={{ fontSize: '25px', cursor:"pointer", "&:hover":{color: variables.pinkred}}}/>
                            <p>{bedCount}</p>
                            <AddCircleOutline onClick ={() =>{
                                setBedCount(bedCount + 1)
                            }} sx ={{ fontSize: '25px', cursor:"pointer", "&:hover":{color: variables.pinkred}}}/>

                        </div>
                    
                    </div>
                    <div className='basic'>
                        <p>PhotoFrames</p>
                        <div className='basic_count'>
                            <RemoveCircleOutline onClick= {() =>{
                                bathroomCount > 0 && setBathroomCount(bathroomCount -1)
                            }} sx ={{ fontSize: '25px', cursor:"pointer", "&:hover":{color: variables.pinkred}}}/>
                            <p>{bathroomCount}</p>
                            <AddCircleOutline onClick={() =>{
                                setBathroomCount(bathroomCount + 1)
                            }} sx ={{ fontSize: '25px', cursor:"pointer", "&:hover":{color: variables.pinkred}}}/>

                        </div>

                    </div>

                </div>
            </div>

            <div className='create-listing_step2'>
                <h2>Step 2: Make your place stand out</h2>
                <hr/>

                <h3>Tell guests what your place has to offer</h3>
                <div className='amenities'>
                    {facilities?.map((item, index) => (
                        <div className={`facility ${amenities.includes(item.name) ? "selected" :""}`} key={index} onClick={() =>{handleSelectAmenities(item.name)}}>
                            <div className='facility_icon'>{item.icon}</div>
                            <p>{item.name}</p>
                        </div>
                    ))}

                </div>
                <h3>Add some photos of your gallery</h3>
                <DragDropContext onDragEnd={handleDragPhoto}>
                    <Droppable droppableId='photos' direction='horizontal'>
                        {(provided) => (
                            <div className='photos' {...provided.droppableProps} ref={provided.innerRef}>
                                {photos.length < 1 && (
                                    <>
                                    <input id='image' type='file' style={{display: "none"}} accept='image/*' onChange={handleUploadPhotos} multiple />
                                    <label htmlFor='image' className='alone'>
                                        <div className='icon'><FcAddImage /></div>
                                        <p>Upload from your device</p>

                                    </label>
                                    </>
                                )}

                                {photos.length >= 1 && (
                                    <>
                                    {photos.map((photo,index) =>{
                                        return (
                                            <Draggable key={index} draggableId={index.toString()} index={index}>
                                                {(provided) => (
                                                    <div className='photo' ref={provided.innerRef}{...provided.draggableProps}{...provided.dragHandleProps}>
                                                        <img src={URL.createObjectURL(photo)} alt="place"/>
                                                        <button type='button' onClick={() => handleRemovePhoto(index)}>
                                                           <MdOutlineDeleteOutline />
                                                        </button>
                                                    </div>
                                                )}

                                            </Draggable>
                                        )
                                    })}
                                    <input id='image' type='file' style={{display: "none"}} accept='image/*' onChange={handleUploadPhotos} multiple />
                                    <label htmlFor='image' className='together'>
                                        <div className='icon'><FcAddImage /></div>
                                        <p>Upload from your device</p>

                                    </label>
                                    </>
                                )}


                            </div>
                        )}

                    </Droppable>
                </DragDropContext>

                <h3>What make your services attractive and exciting?</h3>
                <div className='description'>
                    <p>Title</p>
                    <input type='text' placeholder='Title' name='title' value={formDescription.title} onChange={handleChangeDescription} required/>

                    <p>Description</p>
                    <textarea type='text' placeholder='Description' name='description' value={formDescription.description} onChange={handleChangeDescription} required/>

                    <p>Highlight</p>
                    <input type='text' placeholder='Highlight' name='highlight' value={formDescription.highlight} onChange={handleChangeDescription} required/>

                    <p>Highlight details</p>
                    <textarea type='text' placeholder='Highlight details' name='highlightDesc' value={formDescription.highlightDesc} onChange={handleChangeDescription} required/>  

                    <p>Now, set your PRICE</p>     
                    <span>$</span>
                    <input type='number' placeholder='100' name='price' className='price' value={formDescription.price} onChange={handleChangeDescription} required/>            
                </div>

            </div>

            <button className='submit_btn' type='submit'>CREATE YOUR LISTING</button>
        </form>
    </div>
    </>
  )
}

export default CreateListing